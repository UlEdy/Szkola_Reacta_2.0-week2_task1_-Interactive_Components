import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import {
    buttonCode,
    headerCode,
    textCode,
} from '../../assets/dataComponentCode';

interface ComponentCodeRenderProps {
    selectedComponent: string;
}

interface ComponentCode {
    [key: string]: string;
}

const componentCodes: ComponentCode = {
    Button: buttonCode,
    Text: textCode,
    Header: headerCode,
};

export const ComponentCodeRender = ({
    selectedComponent = 'Button',
}: ComponentCodeRenderProps) => {
    console.log(selectedComponent);

    const code = componentCodes[selectedComponent];

    return (
        <div className='p-5'>
            <CodeMirror
                value={code.trim()}
                height='220px'
                width='800px'
                extensions={[javascript({ jsx: true })]}
                theme='dark'
                // onChange={value => handleChangeComponentCode(value)}
            />
        </div>
    );
};
