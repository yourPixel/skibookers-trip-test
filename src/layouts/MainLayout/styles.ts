import styled, { css } from 'styled-components';
import { media } from 'utils/media.ts';
import { BREAKPOINTS } from 'utils/globals.ts';

export const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const AppHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 20;

    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(1.05) blur(8px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.s1};
    padding: 14px 24px;
    min-height: 50px;
    display: flex;
    align-items: center;

    .brand {
        font-weight: 800;
        letter-spacing: -0.02em;
        color: ${({ theme }) => theme.colors.textStrong};
    }

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        padding: 8px 0;
    `)}
`;

export const AppFooter = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.muted};
    margin-top: auto;
    padding: 16px 0;
    font-size: 14px;
`;
