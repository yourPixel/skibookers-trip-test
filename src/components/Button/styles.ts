import styled, { css } from 'styled-components';
import type { Size, Variant } from './types.ts';

export const sizes = {
    sm: css`
        padding: 6px 10px;
        border-radius: 10px;
        font-size: 13px;
    `,
    md: css`
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 14px;
    `,
    lg: css`
        padding: 14px 18px;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 700;
    `,
};

export const base = css`
    appearance: none;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: linear-gradient(180deg, #ffffff, rgba(255, 255, 255, 0.88));
    color: ${({ theme }) => theme.colors.textStrong};
    cursor: pointer;
    transition:
        opacity 0.18s ease,
        transform 0.18s ease,
        border-color 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    line-height: 1;

    &:hover {
        transform: translateY(-1px);
    }
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 6px rgba(47, 123, 255, 0.25);
        border-color: ${({ theme }) => theme.colors.brand500};
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
    &:active {
        opacity: 0.95;
        transform: translateY(1px);
    }
`;

export const variants = {
    primary: css`
        background: linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.brand600},
            #1e5ce0
        );
        border-color: rgba(30, 92, 224, 0.25);
        color: #fff;
        box-shadow: 0 10px 20px rgba(30, 92, 224, 0.2);
    `,
    ghost: css`
        background: rgba(255, 255, 255, 0.7);
    `,
    outline: css`
        background: transparent;
        border-color: ${({ theme }) => theme.colors.brand500};
        color: ${({ theme }) => theme.colors.brand600};
    `,
    subtle: css`
        background: linear-gradient(180deg, #fff, #f6fbff);
        color: ${({ theme }) => theme.colors.textStrong};
    `,
    danger: css`
        background: linear-gradient(
            180deg,
            ${({ theme }) => theme.colors.danger},
            #e33d43
        );
        border-color: rgba(227, 61, 67, 0.25);
        color: #fff;
        box-shadow: 0 10px 20px rgba(227, 61, 67, 0.2);
    `,
};

export const StyledButton = styled.button<{ $variant: Variant; $size: Size }>`
    ${base}
    ${({ $size }) => sizes[$size]}
    ${({ $variant }) => variants[$variant]}
`;
