import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const InternalNavigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '', label: '📝 Posts', icon: '📝' },
    { path: 'users', label: '👥 Users', icon: '👥' },
    { path: 'about', label: 'ℹ️ About', icon: 'ℹ️' },
  ];

  const navItemStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    backgroundColor: isActive ? '#3b82f6' : 'transparent',
    color: isActive ? 'white' : '#374151',
    border: '1px solid',
    borderColor: isActive ? '#3b82f6' : '#d1d5db',
  });

  return (
    <div style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 0',
      marginBottom: '1.5rem'
    }}>
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {navItems.map((item) => {
          // Check if current route matches this nav item
          const currentPath = location.pathname.split('/').pop() || '';
          const isActive = currentPath === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              style={navItemStyle(isActive)}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.borderColor = '#9ca3af';
                }
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }
              }}
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