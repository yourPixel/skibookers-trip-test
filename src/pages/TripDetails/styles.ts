import styled, { css, keyframes } from 'styled-components';
import { media } from 'utils/media.ts';
import { BREAKPOINTS } from 'utils/globals.ts';

// COMPONENTS
import Button from 'components/Button';

export const ContentRow = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    gap: 18px;
    margin-top: 16px;

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        grid-template-columns: 0.65fr 0.35fr;
        gap: 8px;
        margin-top: 8px;
    `)}
    ${media.down(BREAKPOINTS.TABLET)(css`
        grid-template-columns: 1fr;
    `)}
`;

export const StickyAsideCard = styled.aside`
    position: sticky;
    top: 16px;

    display: flex;
    flex-direction: column;
    gap: 18px;

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        gap: 8px;
    `)}
`;

export const HeaderCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    margin-bottom: 10px;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.card};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.s1};

    ${media.down(BREAKPOINTS.TABLET)(css`
        align-items: flex-start;
    `)}
`;

export const HeaderTitle = styled.div`
    display: grid;
    gap: 2px;
    .title {
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.01em;
        color: ${({ theme }) => theme.colors.textStrong};
    }
    .sub {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.muted};
    }
`;

export const Muted = styled.div`
    color: ${({ theme }) => theme.colors.muted};
`;

export const Total = styled.div`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.brand600};
    font-weight: 800;
`;

export const PurpleButton = styled(Button)`
    background: linear-gradient(180deg, #7b5cff, #6a3cff) !important;
    border-color: rgba(107, 70, 255, 0.3) !important;
    color: #fff !important;
    box-shadow: 0 10px 20px rgba(107, 70, 255, 0.22) !important;
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  60% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
`;

type SkeletonBoxProps = {
    h?: number | string;
    w?: number | string;
    r?: string;
};

export const SkeletoneRoot = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
`;

export const SkeletonBox = styled.div<SkeletonBoxProps>`
    width: ${({ w }) => (typeof w === 'number' ? `${w}px` : w || '100%')};
    height: ${({ h }) => (typeof h === 'number' ? `${h}px` : h || '100%')};
    border-radius: ${({ r, theme }) => r || theme.radii.md};
    background: linear-gradient(
        180deg,
        #ffffff 0%,
        #f6fbff 50%,
        rgba(240, 248, 255, 0.8) 100%
    );
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.s1};
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.7) 40%,
            rgba(255, 255, 255, 0) 80%
        );
        animation: ${shimmer} 1.2s ease-in-out infinite;
    }
`;

export const SkeletonRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 16px;
`;
