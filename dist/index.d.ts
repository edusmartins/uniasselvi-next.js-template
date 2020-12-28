import React from 'react';

interface TextAreaProps {

    style?: string;

    name?: string;

    id?: string;

    placeHolder?: string;

    value?: string;

    defaultValue?: string;

    form?: string;

    wrap?: string;

    cols?: number;

    rows?: number;

    minLenght?: number;

    maxLenght?: number;

    required?: boolean;

    readOnly?: boolean;

    disabled?: boolean;

    autoFocus?: boolean;

    resize?: boolean;

    className?: string;

}

declare const TextArea: React.FC<TextAreaProps>;

export default TextArea;

