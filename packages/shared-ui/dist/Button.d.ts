import { default as React } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
export {};
