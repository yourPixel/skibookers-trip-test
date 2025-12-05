import React from 'react';

// STYLES
import { BadgeRoot } from './styles.ts';

// TYPES
import type { BadgeProps } from './types.ts';

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
    size = 'md',
    leftIcon,
    ...rest
}) => {
    return (
        <BadgeRoot $variant={variant} $size={size} {...rest}>
            {leftIcon ? (
                <span className="icon" aria-hidden="true">
                    {leftIcon}
                </span>
            ) : null}
            <span>{children}</span>
        </BadgeRoot>
    );
};

export default Badge;
