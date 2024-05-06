export const buttonCode = `
interface ButtonProps { label?: string }

const buttonStyles =
    'rounded-3xl p-2 m-2 w-28 bg-green-500 hover:bg-green-200 hover:text-zinc-700';

const handleClick = () => { alert('Clicked') };

export const Button = ({ label = 'Click me!' }: ButtonProps) => {
    return (
        <button className={buttonStyles} onClick={handleClick}>
            {label}
        </button>
    );
};
`;

export const headerCode = `
import { ReactNode } from 'react';

type TextProps = { children?: string | ReactNode };

const headerStyles = 'text-2xl m-2 font-bold';

export const Header = ({ children = 'Example header' }: TextProps) => {
    return <h1 className={headerStyles}>{children}</h1>;
};
`;

export const textCode = `
interface TextProps { children?: string };

const textStyles = 'text-xl mt-2 mb-5 font-light';
export const Text = ({ children = 'Example text' }: TextProps) => {
    return <h1 className={textStyles}>{children}</h1>;
};
`;
