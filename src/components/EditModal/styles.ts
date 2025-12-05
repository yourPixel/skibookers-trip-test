import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(12, 27, 44, 0.35);
    backdrop-filter: blur(8px);
    display: grid;
    place-items: center;
    z-index: 50;
    animation: fade-in 0.18s ease-out both;

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Sheet = styled.div`
    width: 680px;
    max-width: calc(100vw - 48px);
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.lg};
    background: ${({ theme }) => theme.colors.card};
    box-shadow: ${({ theme }) => theme.shadows.s2};
    overflow: clip;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textStrong};
`;

export const Body = styled.div`
    padding: 14px 16px;
    display: grid;
    gap: 12px;
`;

export const Field = styled.label`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;
    position: relative;

    &.stack {
        grid-template-columns: 1fr;
    }
`;

export const FieldLabel = styled.span`
    grid-column: 1 / -1;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.muted};
    margin-bottom: 4px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px 12px;
    border-radius: ${({ theme }) => theme.radii.sm};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: #fff;
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition:
        box-shadow 0.18s ease,
        border-color 0.18s ease;

    &:focus-visible {
        border-color: ${({ theme }) => theme.colors.brand500};
        box-shadow: 0 0 0 6px rgba(47, 123, 255, 0.25);
    }
`;

export const AiTip = styled.div`
    align-items: center;
    padding: 10px 12px;
    border: 2px dashed rgba(61, 214, 255, 0.6);
    border-radius: ${({ theme }) => theme.radii.sm};
    background: linear-gradient(
        180deg,
        rgba(61, 214, 255, 0.14),
        rgba(61, 214, 255, 0.06)
    );

    color: ${({ theme }) => theme.colors.text};
    &:before {
        content: '✨';
        display: inline-block;
    }
`;

export const Footer = styled.div`
    padding: 14px 16px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;
