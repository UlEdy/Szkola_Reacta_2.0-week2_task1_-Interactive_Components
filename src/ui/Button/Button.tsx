import { MouseEventHandler } from 'react';

interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const buttonStyles =
    'p-2 m-2 min-w-28 bg-lime-400 hover:bg-lime-300 hover:text-zinc-700 text-nowrap rounded-3xl';

const handleClick = () => {
    alert('Clicked button!');
};

export const Button = ({
    label = 'Click me!',
    onClick = handleClick,
}: ButtonProps) => {
    return (
        <button
            className={buttonStyles}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
