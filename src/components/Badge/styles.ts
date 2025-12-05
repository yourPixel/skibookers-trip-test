import styled, { css } from 'styled-components';
import type { BadgeSize, BadgeVariant } from './types.ts';

const sizes = {
    sm: css`
        height: 22px;
        padding: 0 8px;
        font-size: 12px;
        gap: 6px;
    `,
    md: css`
        height: 26px;
        padding: 0 10px;
        font-size: 13px;
    `,
    lg: css`
        height: 36px;
        padding: 10px;

        font-size: 14px;
    `,
};

const variants = {
    neutral: css`
        color: ${({ theme }) => theme.colors.textStrong};
        background: rgba(255, 255, 255, 0.85);
        border: 1px solid ${({ theme }) => theme.colors.border};
    `,
    brand: css`
        color: #0b1b2b;
        background: ${({ theme }) => theme.colors.brand100};
        border: 1px solid ${({ theme }) => theme.colors.brand300};
    `,
    success: css`
        color: #0b1b2b;
        background: rgba(46, 204, 113, 0.18);
        border: 1px solid rgba(46, 204, 113, 0.35);
    `,
    warning: css`
        color: #4a3b00;
        background: rgba(255, 200, 87, 0.22);
        border: 1px solid rgba(255, 200, 87, 0.45);
    `,
    danger: css`
        color: #3b0b0b;
        background: rgba(255, 90, 95, 0.2);
        border: 1px solid rgba(255, 90, 95, 0.4);
    `,
    outline: css`
        color: ${({ theme }) => theme.colors.textStrong};
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    `,
    aqua: css`
        color: #083246;
        background: rgba(61, 214, 255, 0.2);
        border: 1px solid rgba(61, 214, 255, 0.4);
    `,
    pink: css`
        color: #4e0f2c;
        background: rgba(255, 111, 181, 0.2);
        border: 1px solid rgba(255, 111, 181, 0.4);
    `,
};

export const BadgeRoot = styled.span<{
    $variant?: BadgeVariant;
    $size?: BadgeSize;
}>`
    border-radius: 12px;
    gap: 8px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    text-align: center;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.01em;
    user-select: none;
    ${({ $size = 'md' }) => sizes[$size]}
    ${({ $variant = 'neutral' }) => variants[$variant]}
    backdrop-filter: saturate(1.05) blur(4px);

    .icon {
        display: inline-flex;
        align-items: center;
        line-height: 0;
    }
`;
