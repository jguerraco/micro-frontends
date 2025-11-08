import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth, LoginForm } from 'shared-ui';
import Navigation from './Navigation';
import DashboardPage from './pages/DashboardPage';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';

// Main App Content Component (needs to be inside AuthProvider)
const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // If not authenticated, show full-screen login
  if (!isAuthenticated) {
    return (
      <div style={{ 
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              color: '#1f2937', 
              fontSize: '2.5rem', 
              margin: '0 0 0.5rem 0',
              fontWeight: '600'
            }}>
              🚀 Micro-Frontend Dashboard
            </h1>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1.1rem', 
              margin: 0 
            }}>
              Secure access to multiple applications
            </p>
          </div>
          
          <LoginForm />
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header Navigation with Authentication */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 2rem',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h1 style={{ 
              color: '#1f2937', 
              fontSize: '2rem', 
              margin: 0,
              fontWeight: '600'
            }}>
              🚀 Micro-Frontend Dashboard
            </h1>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '1rem', 
              margin: '0.25rem 0 0 0' 
            }}>
              Multiple applications in one unified interface
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <span style={{ 
              backgroundColor: '#dcfce7', 
              color: '#16a34a', 
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              🔐 Authenticated
            </span>
            
            <UserProfile compact={true} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ 
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Overview Section */}
        <div style={{ marginBottom: '2rem' }}>
          <Card title="🎯 Secure Architecture Overview">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0f9ff',
                borderRadius: '0.5rem',
                border: '1px solid #0ea5e9'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#0c4a6e' }}>📊 App1 - Counter</h4>
                <p style={{ margin: 0, color: '#0369a1', fontSize: '0.875rem' }}>
                  Simple state management demo
                </p>
              </div>
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                border: '1px solid #22c55e'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#14532d' }}>📝 App2 - Todo List</h4>
                <p style={{ margin: 0, color: '#15803d', fontSize: '0.875rem' }}>
                  Local storage & list management
                </p>
              </div>
              <div style={{
                padding: '1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.5rem',
                border: '1px solid #ef4444'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#991b1b' }}>🔐 Authentication</h4>
                <p style={{ margin: 0, color: '#dc2626', fontSize: '0.875rem' }}>
                  Shared auth across all apps
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Applications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* App1 Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              padding: '1rem',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                margin: 0, 
                color: '#374151',
                fontSize: '1.25rem',
                fontWeight: '600'
              }}>
                📊 Counter App (App1)
              </h3>
              <p style={{ 
                margin: '0.25rem 0 0 0', 
                color: '#6b7280',
                fontSize: '0.875rem'
              }}>
                Micro-frontend #1 - Independent state management
              </p>
            </div>
            <div style={{ backgroundColor: '#fbfcfd' }}>
              <App1 />
            </div>
          </div>

          {/* App2 Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              padding: '1rem',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                margin: 0, 
                color: '#374151',
                fontSize: '1.25rem',
                fontWeight: '600'
              }}>
                📝 Todo App (App2)
              </h3>
              <p style={{ 
                margin: '0.25rem 0 0 0', 
                color: '#6b7280',
                fontSize: '0.875rem'
              }}>
                Micro-frontend #2 - Persistent data management
              </p>
            </div>
            <div style={{ backgroundColor: '#fbfcfd' }}>
              <App2 />
            </div>
          </div>
        </div>

        {/* Authentication Info */}
        <div style={{ marginTop: '3rem' }}>
          <Card title="� Authentication Features">
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              color: '#4b5563'
            }}>
              <div>
                <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Shared Auth State</h5>
                <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6' }}>
                  <li>Login state shared across all apps</li>
                  <li>Persistent sessions with localStorage</li>
                  <li>Role-based access control</li>
                </ul>
              </div>
              <div>
                <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Security Features</h5>
                <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6' }}>
                  <li>Protected micro-frontend routes</li>
                  <li>Centralized authentication logic</li>
                  <li>Automatic session restoration</li>
                </ul>
              </div>
              <div>
                <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Demo Credentials</h5>
                <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6' }}>
                  <li>Admin: admin@example.com / admin123</li>
                  <li>User: user@example.com / user123</li>
                  <li>Different roles, same shared state</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

// Main App Component with Auth Provider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;