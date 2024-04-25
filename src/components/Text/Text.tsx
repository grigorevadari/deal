import React from 'react';
import './text.css'

interface Props {
    as?: React.ElementType;
    type?: 'header' | 'subtitle' | 'bold' | 'logo';
    variant?: 'primary' | 'danger' | 'default';
    textAlign?: 'left' | 'center' | 'right';
    children?: React.ReactNode;
    onClick?: (suggestion: string) => void;
}

const Text: React.FC<Props> = ({as: Element = 'p', type, variant, textAlign, children, onClick, ...rest}) => {
    const className = [
        'text',
        type ? `text-${type}` : '',
        variant ? `text-${variant}` : '',
        textAlign ? `text-align-${textAlign}` : ''
    ].join(' ').trim();
    return <Element className={className} onClick={onClick} {...rest}>{children}</Element>;
};

export default Text;
