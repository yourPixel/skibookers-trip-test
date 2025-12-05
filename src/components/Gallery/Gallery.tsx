import React from 'react';

// LOCAL COMPONENTS
import MainImage from './MainImage.tsx';
import ThumbStrip from './ThumbStrip.tsx';

// HOOKS
import useFullscreen from './hooks/useFullscreen.ts';

// STYLES
import { GalleryRoot } from './styles.ts';

// TRIP STORE
import { useTripStore } from 'store/trip.store.ts';

type Props = {
    alts?: string[];
    fullscreenInset?: number;
    fullscreenRadius?: number;
};

const Gallery: React.FC<Props> = ({
    fullscreenInset = 24,
    fullscreenRadius = 20,
}) => {
    const { currentTrip: trip } = useTripStore();

    const images = trip?.images ?? [];

    const {
        openFullscreenFrom,
        mainImgRef,
        thumbImgRefs,
        loadedMap,
        markLoaded,
    } = useFullscreen({
        fullscreenInset,
        fullscreenRadius,
    });

    const getAlt = (index: number) =>
        index === 0 ? 'Main image' : `Image ${index + 1}`;

    const openFromIndex = (index: number) => {
        const imgEl =
            index === 0 ? mainImgRef.current : thumbImgRefs.current[index];
        if (!imgEl) return;
        openFullscreenFrom(imgEl, getAlt(index));
    };

    return (
        <GalleryRoot aria-label="Resort gallery">
            <MainImage
                src={images[0]}
                alt={getAlt(0)}
                loaded={loadedMap[0]}
                markLoaded={() => markLoaded(0)}
                onOpen={() => openFromIndex(0)}
                imgRef={mainImgRef}
            />

            <ThumbStrip
                images={images}
                loadedMap={loadedMap}
                markLoaded={markLoaded}
                openFromIndex={openFromIndex}
                thumbImgRefs={thumbImgRefs}
            />
        </GalleryRoot>
    );
};

export default Gallery;
