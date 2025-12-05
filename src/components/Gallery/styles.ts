import styled, { css } from 'styled-components';
import { media } from 'utils/media.ts';
import { BREAKPOINTS } from 'utils/globals.ts';

export const GalleryRoot = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    height: 420px;
    cursor: zoom-in;

    ${media.down(BREAKPOINTS.TABLET)(css`
        height: auto;
        aspect-ratio: 16 / 9;
    `)}
`;

export const Main = styled.div`
    width: 70%;
    height: 100%;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radii.sm};
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.35s ease;
        display: block;
    }

    &:hover img {
        transform: scale(1.02);
    }

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        width: 65%;
    `)}
    ${media.down(BREAKPOINTS.TABLET)(css`
        width: 60%;
    `)}
`;

export const Side = styled.div`
    width: 30%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 8px;

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        width: 35%;
    `)}
    ${media.down(BREAKPOINTS.TABLET)(css`
        width: 40%;
    `)}
`;

export const Thumb = styled.div`
    border-radius: ${({ theme }) => theme.radii.sm};
    overflow: hidden;
    cursor: zoom-in;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        display: block;
    }

    &:hover img {
        transform: scale(1.08);
    }
`;

export const HiddenFocusBtn = styled.button`
    position: fixed;
    left: -9999px;
    top: -9999px;
`;
