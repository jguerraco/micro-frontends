import { default as React, ReactNode } from 'react';

export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
}
export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
export type AuthAction = {
    type: 'LOGIN_START';
} | {
    type: 'LOGIN_SUCCESS';
    user: User;
} | {
    type: 'LOGIN_FAILURE';
    error: string;
} | {
    type: 'LOGOUT';
} | {
    type: 'RESTORE_SESSION';
    user: User;
} | {
    type: 'CLEAR_ERROR';
};
export interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}
interface AuthProviderProps {
    children: ReactNode;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextType;
export {};
