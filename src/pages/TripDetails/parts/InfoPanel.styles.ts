import styled, { css } from 'styled-components';
import { media } from 'utils/media.ts';
import { BREAKPOINTS } from 'utils/globals.ts';

export const Panel = styled.section`
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;

    gap: 18px;
    margin: 16px 0;

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        grid-template-columns: 0.65fr 0.35fr;
        gap: 8px;
        margin: 8px 0;
    `)}

    ${media.down(BREAKPOINTS.TABLET)(css`
        grid-template-columns: 1fr;
    `)}
`;

export const Quick = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.textHero};
`;

export const Description = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 16px;
`;

export const MetaRow = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    color: ${({ theme }) => theme.colors.muted700};
    svg {
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.colors.brand600};
    }
`;

export const MetaLabel = styled.span`
    color: ${({ theme }) => theme.colors.textStrong};
    font-weight: 600;
`;

export const Chips = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;
