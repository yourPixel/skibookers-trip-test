import styled from 'styled-components';

export const CardRoot = styled.div`
    position: relative;
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.card};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.s1};
    overflow: hidden;
    transition: all 0.25s ease-in-out;

    &:hover {
        transform: translateY(-2px);
        border-color: ${({ theme }) => theme.colors.borderStrong};
        box-shadow: ${({ theme }) => theme.shadows.s2};
    }
`;

export const Body = styled.div`
    padding: 16px 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const Label = styled.p`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.muted};
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

export const Title = styled.h3`
    font-size: 16px;
    margin: 0;
    color: ${({ theme }) => theme.colors.textStrong};
`;

export const Description = styled.p`
    font-size: 14px;
    margin: 8px 0;
    color: ${({ theme }) => theme.colors.textStrong};
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 14px;
    gap: 8px;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.65),
        rgba(255, 255, 255, 0.35)
    );
`;
