import React from 'react';
import styled, { css } from 'styled-components';
import { media } from 'utils/media.ts';
import { BREAKPOINTS } from 'utils/globals.ts';

export const ContainerRoot = styled.div`
    margin: 0 auto;
    padding: 0 24px;
    width: clamp(0px, 100%, 1280px);

    ${media.down(BREAKPOINTS.LAPTOP)(css`
        width: clamp(0px, 100%, 1100px);
    `)}

    ${media.down(BREAKPOINTS.TABLET)(css`
        width: clamp(0px, 100%, 100%);
        padding: 0 20px;
    `)}
    
    ${media.down(BREAKPOINTS.MOBILE)(css`
        padding: 0 15px;
    `)}
`;

type ContainerProps = React.ComponentPropsWithoutRef<'div'>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, ...props }, ref) => {
        return (
            <ContainerRoot ref={ref} {...props}>
                {children}
            </ContainerRoot>
        );
    }
);

export default Container;
