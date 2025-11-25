import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from 'shared-ui';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  const navItems = [
    { path: '/', label: '🏠 Dashboard', icon: '🏠' },
    { path: '/counter', label: '📊 Counter App', icon: '📊' },
    { 
      path: '/todo', 
      label: '📝 Todo App', 
      icon: '📝', 
      adminOnly: true 
    },
    { path: '/content', label: '📰 Content Hub', icon: '📰' },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => {
        // Hide admin-only items for non-admin users
        if (item.adminOnly && user?.role !== 'admin') {
          return null;
        }

        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {item.adminOnly && (
              <span className={styles.adminBadge}>
                ADMIN
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;