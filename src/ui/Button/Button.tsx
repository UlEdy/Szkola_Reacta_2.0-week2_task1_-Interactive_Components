interface ButtonProps {
    label?: string;
}

const buttonStyles =
    'rounded-3xl p-2 m-2 w-28  bg-green-500  hover:bg-green-200  hover:text-zinc-700';

const handleClick = () => {
    alert('Clicked');
};

export const Button = ({ label = 'Click me!' }: ButtonProps) => {
    return (
        <button
            className={buttonStyles}
            onClick={handleClick}
        >
            {label}
        </button>
    );
};
