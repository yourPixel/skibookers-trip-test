import React from 'react';

// STYLES
import { Side, Thumb } from './styles.ts';

type ThumbStripProps = {
    images: string[];
    loadedMap: Record<number, boolean>;
    markLoaded: (i: number) => void;
    openFromIndex: (i: number) => void;
    thumbImgRefs: React.MutableRefObject<(HTMLImageElement | null)[]>;
};

const ThumbStrip: React.FC<ThumbStripProps> = ({
    images,
    loadedMap,
    markLoaded,
    openFromIndex,
    thumbImgRefs,
}) => (
    <Side>
        {images.slice(1).map((src, i) => {
            const idx = i + 1;
            const alt = `Image ${idx + 1}`;
            const loaded = !!loadedMap[idx];

            return (
                <Thumb
                    key={idx}
                    role="button"
                    aria-label={alt}
                    tabIndex={0}
                    onClick={() => openFromIndex(idx)}
                    onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openFromIndex(idx);
                        }
                    }}
                >
                    <img
                        ref={el => {
                            thumbImgRefs.current[idx] = el;
                        }}
                        src={src}
                        alt={alt}
                        onLoad={() => markLoaded(idx)}
                        style={{
                            filter: loaded ? 'none' : 'blur(10px)',
                            transform: loaded ? 'none' : 'scale(1.02)',
                            opacity: loaded ? 1 : 0.9,
                            transition:
                                'filter .4s ease, opacity .4s ease, transform .4s ease',
                        }}
                    />
                </Thumb>
            );
        })}
    </Side>
);

export default ThumbStrip;
