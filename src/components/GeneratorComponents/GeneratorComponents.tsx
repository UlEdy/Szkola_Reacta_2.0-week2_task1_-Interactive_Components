import { ChangeEvent, useState } from 'react';
import { Button, Text, Header } from '../../ui';
import * as componentCodeData from '../../assets/dataComponentCode';
import { SelectHeader } from './SelectHeader';
import { CodePreview } from './CodePreview';

const componentCodes: { [key: string]: string } = {
    Button: componentCodeData.buttonCode,
    Text: componentCodeData.textCode,
    Header: componentCodeData.headerCode,
};

export const GeneratorComponents = () => {
    const [selectedComponent, setSelectedComponent] =
        useState<string>('Button');

    const handleChangeComponent = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedComponent(event.target.value);
    };

    const handleCopyCode = () => {
        const codeToCopy = componentCodes[selectedComponent] as string;
        navigator.clipboard.writeText(codeToCopy);
        alert('Code copied to clipboard!');
    };

    return (
        <div className='bg-amber-50 min-h-full rounded-2xl m-3 p-2'>
            {/* Select component */}
            <SelectHeader
                selectedComponent={selectedComponent}
                handleChangeComponent={handleChangeComponent}
            />

            {/* Code and Component preview */}
            <div className='flex flex-row items-center'>
                <CodePreview
                    selectedComponent={selectedComponent}
                    handleCopyCode={handleCopyCode}
                />

                {/* Component preview */}
                <div className='flex flex-col justify-center items-center w-52 h-96 bg-amber-100 p-2 text-wrap'>
                    <Header>Component preview</Header>
                    <div className='flex justify-center items-center h-full'>
                        {selectedComponent === 'Button' && <Button />}
                        {selectedComponent === 'Text' && <Text />}
                        {selectedComponent === 'Header' && <Header />}
                    </div>
                </div>
            </div>
        </div>
    );
};
