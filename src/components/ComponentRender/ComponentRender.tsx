import React, { useState } from 'react';
import { Button, Text, Header } from '../../ui';
import { ComponentCodeRender } from './ComponentCodeRender';
import * as componentCodeData from '../../assets/dataComponentCode';

const componentCodes: { [key: string]: string } = {
    Button: componentCodeData.buttonCode,
    Text: componentCodeData.textCode,
    Header: componentCodeData.headerCode,
};

export const ComponentRender = () => {
    const [selectedComponent, setSelectedComponent] =
        useState<string>('Button');

    const handleChangeComponent = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
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
            <div className='flex justify-center items-center bg-amber-100 p-2'>
                <Header>
                    <label htmlFor='component'>Choose a component:</label>
                </Header>
                <div className='ml-5'>
                    <select
                        name='component'
                        id='component'
                        value={selectedComponent}
                        onChange={handleChangeComponent}
                        className='h-10 w-32 bg-amber-50 rounded-xl text-lg'
                    >
                        <option value='Button'>Button</option>
                        <option value='Text'>Text</option>
                        <option value='Header'>Header</option>
                    </select>
                </div>
            </div>

            {/* Code and Component preview */}
            <div className='flex flex-row items-center'>
                {/* Code */}
                <div className='flex flex-col items-center bg-amber-100 m-3 p-2 ml-0 h-96'>
                    <Header>Code</Header>

                    <ComponentCodeRender
                        selectedComponent={selectedComponent}
                    />
                    <Button
                        onClick={handleCopyCode}
                        label='Copy code'
                    />
                </div>

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

export default ComponentRender;
