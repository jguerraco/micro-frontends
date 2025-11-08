import React from 'react';
import { Button } from './Button';
import { useAuth } from './AuthContext';

interface UserProfileProps {
  showRole?: boolean;
  compact?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({ 
  showRole = true, 
  compact = false 
}) => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return null;
  }

  if (compact) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.5rem',
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: user.role === 'admin' ? '#dc2626' : '#3b82f6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.875rem',
          fontWeight: '600',
        }}>
          {user.name.charAt(0)}
        </div>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {user.name}
          </div>
          {showRole && (
            <div style={{
              fontSize: '0.75rem',
              color: '#6b7280',
              textTransform: 'capitalize',
            }}>
              {user.role}
            </div>
          )}
        </div>

        <Button
          onClick={logout}
          variant="secondary"
          style={{
            padding: '0.375rem 0.75rem',
            fontSize: '0.875rem',
          }}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#f8fafc',
      borderRadius: '0.5rem',
      border: '1px solid #e2e8f0',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        backgroundColor: user.role === 'admin' ? '#dc2626' : '#3b82f6',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.25rem',
        fontWeight: '600',
      }}>
        {user.name.charAt(0)}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '0.25rem',
        }}>
          {user.name}
        </div>
        <div style={{
          fontSize: '0.875rem',
          color: '#6b7280',
          marginBottom: '0.25rem',
        }}>
          {user.email}
        </div>
        {showRole && (
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            color: user.role === 'admin' ? '#dc2626' : '#3b82f6',
            backgroundColor: user.role === 'admin' ? '#fef2f2' : '#dbeafe',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem',
            textTransform: 'uppercase',
          }}>
            {user.role}
          </span>
        )}
      </div>

      <Button
        onClick={logout}
        variant="secondary"
      >
        Logout
      </Button>
    </div>
  );
};