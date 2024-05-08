import { TextProps } from '../types';

const textStyles = 'text-xl mt-2 mb-5 font-light';
export const Text = ({ children = 'Example text' }: TextProps) => {
    return <h1 className={textStyles}>{children}</h1>;
};
