import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedWrapper } from 'shared-ui';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage';
import AboutPage from './components/AboutPage';
import InternalNavigation from './components/InternalNavigation';

const App: React.FC = () => {
  return (
    <ProtectedWrapper>
      <div style={{ 
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        padding: '1rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            minHeight: '80vh'
          }}>
            {/* Header */}
            <div style={{
              backgroundColor: '#1f2937',
              color: 'white',
              padding: '1.5rem 2rem',
              textAlign: 'center'
            }}>
              <h1 style={{ 
                margin: '0 0 0.5rem 0', 
                fontSize: '2rem', 
                fontWeight: '700'
              }}>
                📰 Content Hub
              </h1>
              <p style={{ 
                margin: 0, 
                fontSize: '1rem',
                opacity: 0.9
              }}>
                Advanced micro-frontend with nested routing and API integration
              </p>
            </div>

            {/* Internal Navigation */}
            <InternalNavigation />

            {/* Routes Content */}
            <div style={{ padding: '0 2rem 2rem' }}>
              <Routes>
                <Route index element={<PostsPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="" replace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </ProtectedWrapper>
  );
};

export default App;