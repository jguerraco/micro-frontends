import React, { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { useAuth } from './AuthContext';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await login(email, password);
      onSuccess?.();
    } catch {
      // Error is handled by the context reducer
    }
  };

  return (
    <div className={styles.container}>
      <Card title="🔐 Login to Continue">
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className={styles.input}
            />
          </div>
          
          <div>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className={styles.input}
            />
          </div>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={isLoading}
            style={{ width: '100%', marginBottom: '1rem' }}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className={styles.credentials}>
          <strong>Demo Credentials:</strong><br />
          Admin: admin@example.com / admin123<br />
          User: user@example.com / user123
        </div>
      </Card>
    </div>
  );
};