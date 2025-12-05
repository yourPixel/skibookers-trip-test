import React from 'react';
import { CardRoot } from './styles.ts';

export type CardProps = {
    title?: string;
    children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children, ...props }) => {
    return (
        <CardRoot role="group" aria-label={`${title} card`} {...props}>
            {children}
        </CardRoot>
    );
};

export default Card;
