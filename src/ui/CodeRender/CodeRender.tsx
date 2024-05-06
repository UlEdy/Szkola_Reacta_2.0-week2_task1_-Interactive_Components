interface CodeRenderProps {
    code: string;
}

export const CodeRender = ({ code }: CodeRenderProps) => {
    return (
        <pre className='p-5 m-5 rounded-2xl bg-amber-50'>
            <code>{code}</code>
        </pre>
    );
};
