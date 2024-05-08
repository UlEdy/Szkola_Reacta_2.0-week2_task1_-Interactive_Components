import { SelectHeaderProps } from './types';
import { Header } from '../../ui';

export const SelectHeader = ({
    selectedComponent,
    handleChangeComponent,
}: SelectHeaderProps) => {
    return (
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
    );
};
