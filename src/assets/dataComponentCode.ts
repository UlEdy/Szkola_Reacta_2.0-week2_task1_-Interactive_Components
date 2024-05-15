export const buttonCode = `
import { MouseEventHandler } from 'react';

interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const buttonStyles =
    'p-2 m-2 min-w-28 bg-lime-400 hover:bg-lime-300 hover:text-zinc-700 text-nowrap rounded-3xl';

const handleClick = () => alert('Clicked button!');

export const Button = ({ label = 'Click me!', onClick = handleClick }: ButtonProps) => {
    return (
        <button className={buttonStyles} onClick={onClick}>
            {label}
        </button>
    );
};
`;

export const headerCode = `
import { ReactNode } from 'react';

type HeaderProps = {
    children?: string | ReactNode;
};

const headerStyles = 'text-2xl m-2 font-bold';

export const Header = ({ children = 'Example header' }: HeaderProps) => {
    return <h1 className={headerStyles}>{children}</h1>;
};
`;

export const textCode = `
interface TextProps {
    children?: string;
}

const textStyles = 'text-xl mt-2 mb-5 font-light max-w-fit';
export const Text = ({ children = 'Example text' }: TextProps) => {
    return <h1 className={textStyles}>{children}</h1>;
};
`;
