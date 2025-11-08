import { default as React } from 'react';

interface ProtectedWrapperProps {
    children: React.ReactNode;
    requiredRole?: 'admin' | 'user';
    fallback?: React.ReactNode;
    showLoginForm?: boolean;
}
export declare const ProtectedWrapper: React.FC<ProtectedWrapperProps>;
export {};
