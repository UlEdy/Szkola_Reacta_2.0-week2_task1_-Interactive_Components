import { ButtonProps } from '../types';

const buttonStyles =
    'rounded-3xl p-2 m-2 w-28  bg-green-500  hover:bg-green-200  hover:text-zinc-700';

export const Button = ({ label = 'Click me!', onClick }: ButtonProps) => {
    return (
        <button
            className={buttonStyles}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
