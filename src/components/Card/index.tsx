import type { FC } from 'react';
import Card, { type CardProps } from './Card';
import CardBody from './parts/CardBody.tsx';
import CardFooter from './parts/CardFooter.tsx';

type CardWithStatics = FC<CardProps> & {
    Body: typeof CardBody;
    Footer: typeof CardFooter;
};

const CardExport = Card as CardWithStatics;

CardExport.Body = CardBody;
CardExport.Footer = CardFooter;

export default CardExport;
