import { ReactNode } from 'react';

type TextProps = {
    children?: string | ReactNode;
};

const headerStyles = 'text-2xl m-2 font-bold';

export const Header = ({ children = 'Example header' }: TextProps) => {
    return <h1 className={headerStyles}>{children}</h1>;
};
