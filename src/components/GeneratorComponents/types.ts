import { ChangeEventHandler } from 'react';

export interface SelectedComponentProp {
    selectedComponent: string;
}

export interface CodePreviewProps extends SelectedComponentProp {
    handleCopyCode: () => void;
}

export interface SelectHeaderProps extends SelectedComponentProp {
    handleChangeComponent: ChangeEventHandler<HTMLSelectElement>;
}

export interface ComponentCode {
    [key: string]: string;
}
