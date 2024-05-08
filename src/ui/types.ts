import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type HeaderProps = {
    children?: string | ReactNode;
};

export interface TextProps {
    children?: string;
}
