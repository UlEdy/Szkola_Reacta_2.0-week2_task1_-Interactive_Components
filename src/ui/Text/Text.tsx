interface TextProps {
    children?: string;
}

const textStyles = 'text-xl mt-2 mb-5 font-light max-w-fit';
export const Text = ({ children = 'Example text' }: TextProps) => {
    return <h1 className={textStyles}>{children}</h1>;
};
