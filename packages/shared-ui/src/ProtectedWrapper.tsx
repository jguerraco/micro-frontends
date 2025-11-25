import React from 'react';
import { Card } from './Card';
import { useAuth } from './AuthContext';
import { LoginForm } from './LoginForm';
import styles from './ProtectedWrapper.module.css';

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
        <div className={styles.authRequired}>
          <p className={styles.authText}>
            Please log in to access this feature.
          </p>
          <div className={styles.credentials}>
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
          <div className={styles.accessDenied}>
            <p className={styles.errorText}>
              You don't have permission to access this feature.
            </p>
            <p className={styles.roleInfo}>
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