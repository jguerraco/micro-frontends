import React from 'react';
import { Button } from './Button';
import { useAuth } from './AuthContext';
import styles from './UserProfile.module.css';

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
      <div className={styles.compactContainer}>
        <div className={`${styles.avatar} ${user.role === 'admin' ? styles.admin : styles.user}`}>
          {user.name.charAt(0)}
        </div>
        
        <div className={styles.info}>
          <div className={styles.name}>
            {user.name}
          </div>
          {showRole && (
            <div className={styles.role}>
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
    <div className={styles.fullContainer}>
      <div className={`${styles.avatarLarge} ${user.role === 'admin' ? styles.admin : styles.user}`}>
        {user.name.charAt(0)}
      </div>

      <div className={styles.infoFull}>
        <div className={styles.nameFull}>
          {user.name}
        </div>
        <div className={styles.email}>
          {user.email}
        </div>
        {showRole && (
          <span className={`${styles.roleBadge} ${user.role === 'admin' ? styles.admin : styles.user}`}>
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