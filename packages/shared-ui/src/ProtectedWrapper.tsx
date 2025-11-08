import React from 'react';
import { Card } from './Card';
import { useAuth } from './AuthContext';
import { LoginForm } from './LoginForm';

interface ProtectedWrapperProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
  fallback?: React.ReactNode;
  showLoginForm?: boolean;
}

export const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({
  children,
  requiredRole,
  fallback,
  showLoginForm = false,
}) => {
  const { isAuthenticated, user } = useAuth();

  // Not authenticated
  if (!isAuthenticated) {
    if (showLoginForm) {
      return <LoginForm />;
    }
    
    return fallback || (
      <Card title="🔒 Authentication Required">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            Please log in to access this feature.
          </p>
          <div style={{
            padding: '1rem',
            backgroundColor: '#f8fafc',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            color: '#64748b',
          }}>
            <strong>Demo Credentials:</strong><br />
            Admin: admin@example.com / admin123<br />
            User: user@example.com / user123
          </div>
        </div>
      </Card>
    );
  }

  // Check role permissions
  if (requiredRole && user) {
    const hasPermission = requiredRole === 'user' || 
      (requiredRole === 'admin' && user.role === 'admin');
    
    if (!hasPermission) {
      return fallback || (
        <Card title="🚫 Access Denied">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: '#dc2626', marginBottom: '1rem' }}>
              You don't have permission to access this feature.
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Required role: <strong>{requiredRole}</strong><br />
              Your role: <strong>{user.role}</strong>
            </p>
          </div>
        </Card>
      );
    }
  }

  // Authenticated and authorized
  return <>{children}</>;
};