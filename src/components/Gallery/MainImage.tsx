import React from 'react';
import { Main } from './styles.ts';

type MainImageProps = {
    src: string;
    alt: string;
    loaded: boolean;
    markLoaded: () => void;
    onOpen: () => void;
    imgRef: React.MutableRefObject<HTMLImageElement | null>;
};

const MainImage: React.FC<MainImageProps> = ({
    src,
    alt,
    loaded,
    markLoaded,
    onOpen,
    imgRef,
}) => (
    <Main onClick={onOpen}>
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            onLoad={markLoaded}
            style={{
                filter: loaded ? 'none' : 'blur(12px)',
                transform: loaded ? 'none' : 'scale(1.02)',
                opacity: loaded ? 1 : 0.85,
                transition:
                    'filter .45s ease, opacity .45s ease, transform .45s ease',
            }}
        />
    </Main>
);

export default MainImage;
