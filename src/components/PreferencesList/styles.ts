import styled, { css, keyframes } from 'styled-components';
import { media } from 'utils/media.ts';
import { BREAKPOINTS } from 'utils/globals.ts';

const cardIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const cardDelays = Array.from({ length: 10 }, (_, i) => i + 1)
    .map(
        i => `
    > *:nth-child(${i}) {
      animation-delay: ${0.02 + (i - 1) * 0.03}s;
    }
  `
    )
    .join('');

export const CardsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    min-width: 0;
    align-content: start;

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        gap: 8px;
    `)}
    ${media.down(BREAKPOINTS.TABLET)(css`
        grid-template-columns: 1fr;
        gap: 8px;
    `)}

    > * {
        opacity: 0;
        transform: translateY(8px);
        animation: ${cardIn} 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    }
    ${cardDelays}
`;

export const Price = styled.div`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brand600};
`;
