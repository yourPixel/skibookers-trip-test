import React, { type JSX } from 'react';
import { Description, Label, Title, Body } from '../styles.ts';

type CardBodyProps = {
    label?: string;
    title?: string;
    description?: string | JSX.Element;
    children?: React.ReactNode;
};

export const CardBody: React.FC<CardBodyProps> = ({
    label,
    title,
    description,
    children,
}) => {
    return (
        <Body>
            {label ? <Label>{label}</Label> : null}
            {title ? <Title>{title}</Title> : null}
            {description ? <Description>{description}</Description> : null}
            {children}
        </Body>
    );
};

export default CardBody;
