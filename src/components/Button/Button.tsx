import React from 'react';
import { StyledButton } from './styles.ts';
import type { ButtonProps } from './types.ts';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            leftIcon,
            rightIcon,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledButton ref={ref} $variant={variant} $size={size} {...rest}>
                {leftIcon && (
                    <span aria-hidden="true" style={{ display: 'inline-flex' }}>
                        {leftIcon}
                    </span>
                )}
                {children ? <span>{children}</span> : null}
                {rightIcon && (
                    <span aria-hidden="true" style={{ display: 'inline-flex' }}>
                        {rightIcon}
                    </span>
                )}
            </StyledButton>
        );
    }
);

Button.displayName = 'Button';
export default Button;
