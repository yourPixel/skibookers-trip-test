// TypeScript
import { css, type DefaultTheme } from 'styled-components';

type BreakpointKey = keyof DefaultTheme['breakpoints'];

type CssArgs = any;

const toPx = (size: number) => `${size}px`;

export const media = {
    up: (min: BreakpointKey | number) => (styles: CssArgs) => css`
        @media (min-width: ${({ theme }) =>
                toPx(theme.breakpoints[min as BreakpointKey] ?? min)}) {
            ${styles}
        }
    `,
    down: (max: BreakpointKey | number) => (styles: CssArgs) => css`
        @media (max-width: ${({ theme }) =>
                toPx(theme.breakpoints[max as BreakpointKey] ?? max)}) {
            ${styles}
        }
    `,
    between:
        (min: BreakpointKey | number, max: BreakpointKey | number) =>
        (styles: CssArgs) => css`
            @media (min-width: ${({ theme }) =>
                    toPx(
                        theme.breakpoints[min as BreakpointKey] ?? min
                    )}) and (max-width: ${({ theme }) =>
                    toPx(theme.breakpoints[max as BreakpointKey] ?? max)}) {
                ${styles}
            }
        `,
};
