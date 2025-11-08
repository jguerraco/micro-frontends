import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from 'shared-ui';

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

  const navItemStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    backgroundColor: isActive ? '#3b82f6' : 'transparent',
    color: isActive ? 'white' : '#374151',
    border: '1px solid',
    borderColor: isActive ? '#3b82f6' : '#e5e7eb',
  });

  return (
    <nav style={{
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
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
            style={navItemStyle(isActive)}
            onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.borderColor = '#d1d5db';
              }
            }}
            onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {item.adminOnly && (
              <span style={{
                fontSize: '0.75rem',
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '0.125rem 0.375rem',
                borderRadius: '0.25rem',
                marginLeft: '0.25rem',
              }}>
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