import { ReactNode } from 'react';

type HeaderProps = {
    children?: string | ReactNode;
};

const headerStyles = 'text-2xl m-2 font-bold';

export const Header = ({ children = 'Example header' }: HeaderProps) => {
    return <h1 className={headerStyles}>{children}</h1>;
};
