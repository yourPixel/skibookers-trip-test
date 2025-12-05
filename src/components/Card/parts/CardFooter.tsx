import React from 'react';
import { Footer } from '../styles.ts';

type CardFooterProps = React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => {
    return <Footer {...props}>{children}</Footer>;
};

export default CardFooter;
