import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './InternalNavigation.module.css';

const InternalNavigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '', label: '📝 Posts', icon: '📝' },
    { path: 'users', label: '👥 Users', icon: '👥' },
    { path: 'about', label: 'ℹ️ About', icon: 'ℹ️' },
  ];

  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        {navItems.map((item) => {
          // Check if current route matches this nav item
          const currentPath = location.pathname.split('/').pop() || '';
          const isActive = currentPath === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InternalNavigation;