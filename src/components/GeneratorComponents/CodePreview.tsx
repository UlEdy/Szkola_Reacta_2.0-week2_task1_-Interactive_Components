import { CodePreviewProps } from './types';
import { Button, Header } from '../../ui';
import { CodeRender } from './CodeRender';

export const CodePreview = ({
    selectedComponent,
    handleCopyCode,
}: CodePreviewProps) => {
    return (
        <div className='flex flex-col items-center bg-amber-100 m-3 p-2 ml-0 h-96'>
            <Header>Code</Header>

            <CodeRender selectedComponent={selectedComponent} />
            <Button
                onClick={handleCopyCode}
                label='Copy code'
            />
        </div>
    );
};
