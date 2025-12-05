import React from 'react';

export type BadgeVariant =
    | 'neutral'
    | 'brand'
    | 'success'
    | 'warning'
    | 'danger'
    | 'outline'
    | 'aqua'
    | 'pink';

export type BadgeSize = 'sm' | 'md' | 'lg';

export type BadgeProps = {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: BadgeSize;
    leftIcon?: React.ReactNode;
    'aria-label'?: string;
    className?: string;
};
