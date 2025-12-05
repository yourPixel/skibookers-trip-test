import gsap from 'gsap';
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type UseFullscreenConfig = {
    fullscreenInset: number;
    fullscreenRadius: number;
};

type UseFullscreenResult = {
    mainImgRef: React.MutableRefObject<HTMLImageElement | null>;
    thumbImgRefs: React.MutableRefObject<(HTMLImageElement | null)[]>;
    loadedMap: Record<number, boolean>;
    markLoaded: (i: number) => void;
    openFullscreenFrom: (imgEl: HTMLImageElement, label: string) => void;
};

function useFullscreen({
    fullscreenInset,
    fullscreenRadius,
}: UseFullscreenConfig): UseFullscreenResult {
    const mainImgRef = useRef<HTMLImageElement | null>(null);
    const thumbImgRefs = useRef<(HTMLImageElement | null)[]>([]);
    const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});

    // overlay/clone/focus
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const cloneRef = useRef<HTMLImageElement | null>(null);
    const originElRef = useRef<HTMLImageElement | null>(null);
    const lastFocusedRef = useRef<HTMLElement | null>(null);

    const prefersReducedMotion = useMemo(
        () =>
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );

    const lockScroll = useCallback((lock: boolean) => {
        if (lock) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    }, []);

    const destroyOverlay = useCallback(() => {
        overlayRef.current?.remove();
        overlayRef.current = null;
    }, []);

    const cleanup = useCallback(() => {
        document.removeEventListener('keydown', onKeyDownTrap);
        destroyOverlay();
        cloneRef.current = null;
        originElRef.current = null;
        lockScroll(false);
        lastFocusedRef.current?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const closeFullscreen = useCallback(() => {
        const clone = cloneRef.current;
        const originImg = originElRef.current;
        const overlay = overlayRef.current;
        if (!clone || !originImg || !overlay) {
            cleanup();
            return;
        }

        const dur = prefersReducedMotion ? 0.01 : 0.55;

        const rect = originImg.getBoundingClientRect();
        const bg = overlay.firstElementChild as HTMLDivElement;

        const tl = gsap.timeline({
            onComplete: () => {
                originImg.style.visibility = '';
                cleanup();
            },
        });

        tl.to(
            clone,
            {
                left: Math.round(rect.left),
                top: Math.round(rect.top),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
                borderRadius:
                    getComputedStyle(originImg).borderRadius || '12px',
                duration: dur,
                ease: prefersReducedMotion ? 'none' : 'power2.inOut',
            },
            0
        );
        tl.to(
            bg,
            {
                background: 'rgba(0,0,0,0)',
                backdropFilter: 'blur(0px)',
                duration: prefersReducedMotion ? 0.01 : 0.3,
            },
            0
        );
    }, [cleanup, prefersReducedMotion]);

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeFullscreen();
        };
        window.addEventListener('keydown', onEsc);
        return () => window.removeEventListener('keydown', onEsc);
    }, [closeFullscreen]);

    const createOverlay = useCallback(
        (label: string) => {
            const overlay = document.createElement('div');
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-label', label || 'Image preview');
            overlay.style.position = 'fixed';
            overlay.style.inset = '0';
            overlay.style.background = 'rgba(0,0,0,0)';
            overlay.style.backdropFilter = 'blur(0px)';
            overlay.style.zIndex = '9999';
            overlay.style.cursor = 'zoom-out';
            overlay.style.display = 'contents';
            overlayRef.current = overlay;
            document.body.appendChild(overlay);

            const bg = document.createElement('div');
            bg.style.position = 'fixed';
            bg.style.inset = '0';
            bg.style.zIndex = '9998';
            bg.style.background = 'rgba(0,0,0,0)';
            bg.style.backdropFilter = 'blur(0px)';
            bg.addEventListener('click', closeFullscreen);
            overlay.appendChild(bg);
        },
        [closeFullscreen]
    );

    const makeCloneFrom = useCallback(
        (imgEl: HTMLImageElement) => {
            const rect = imgEl.getBoundingClientRect();

            const clone = imgEl.cloneNode(true) as HTMLImageElement;
            clone.setAttribute('aria-hidden', 'true');
            clone.style.position = 'fixed';
            clone.style.left = `${Math.round(rect.left)}px`;
            clone.style.top = `${Math.round(rect.top)}px`;
            clone.style.width = `${Math.round(rect.width)}px`;
            clone.style.height = `${Math.round(rect.height)}px`;
            clone.style.objectFit = 'cover';
            clone.style.borderRadius =
                getComputedStyle(imgEl).borderRadius || '12px';
            clone.style.boxShadow = '0 18px 40px rgba(17,60,100,0.25)';
            clone.style.willChange =
                'transform, width, height, left, top, border-radius';
            clone.style.pointerEvents = 'none';

            const frame = document.createElement('div');
            frame.style.position = 'fixed';
            frame.style.left = '0';
            frame.style.top = '0';
            frame.style.width = '100vw';
            frame.style.height = '100vh';
            frame.style.pointerEvents = 'none';
            frame.style.zIndex = '10000';

            overlayRef.current!.appendChild(frame);
            frame.appendChild(clone);

            imgEl.style.visibility = 'hidden';

            cloneRef.current = clone;
            originElRef.current = imgEl;
        },
        [closeFullscreen]
    );

    const onKeyDownTrap = (e: KeyboardEvent) => {
        if (!overlayRef.current) return;
        if (e.key !== 'Tab') return;
        const focusables = Array.from(
            overlayRef.current.querySelectorAll<HTMLElement>(
                'button, [href], [tabindex]:not([tabindex="-1"])'
            )
        ).filter(el => !el.hasAttribute('disabled') && el.tabIndex !== -1);
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    };

    const openFullscreenFrom = useCallback(
        (imgEl: HTMLImageElement, label: string) => {
            if (!imgEl) return;

            lastFocusedRef.current =
                document.activeElement as HTMLElement | null;
            lockScroll(true);
            createOverlay(label);
            document.addEventListener('keydown', onKeyDownTrap);

            const inset = fullscreenInset;
            const radius = fullscreenRadius;

            makeCloneFrom(imgEl);

            const bg = overlayRef.current!.firstElementChild as HTMLDivElement;
            const clone = cloneRef.current!;
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            const target = {
                left: inset,
                top: inset,
                width: vw - inset * 2,
                height: vh - inset * 2,
                radius: `${radius}px`,
            };

            const dur = prefersReducedMotion ? 0.01 : 0.55;

            const tl = gsap.timeline();
            tl.to(
                bg,
                {
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(8px)',
                    duration: prefersReducedMotion ? 0.01 : 0.25,
                },
                0
            );
            tl.to(
                clone,
                {
                    left: target.left,
                    top: target.top,
                    width: target.width,
                    height: target.height,
                    borderRadius: target.radius,
                    duration: dur,
                    ease: prefersReducedMotion ? 'none' : 'power3.out',
                },
                0
            );
        },
        [
            createOverlay,
            fullscreenInset,
            fullscreenRadius,
            lockScroll,
            makeCloneFrom,
            prefersReducedMotion,
        ]
    );

    const markLoaded = useCallback(
        (i: number) => setLoadedMap(prev => ({ ...prev, [i]: true })),
        []
    );

    return {
        openFullscreenFrom,
        mainImgRef,
        thumbImgRefs,
        loadedMap,
        markLoaded,
    };
}

export default useFullscreen;
