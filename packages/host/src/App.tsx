import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth, LoginForm, UserProfile } from 'shared-ui';
import Navigation from './Navigation';
import DashboardPage from './pages/DashboardPage';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';
import ContentHubPage from './pages/ContentHubPage';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

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

  return <>{children}</>;
};

// Layout Component with Navigation
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ 
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header with Navigation */}
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
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
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
              Navigate between independent applications
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Navigation />
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
        {children}
      </main>
    </div>
  );
};

// App Content with Router
const AppContent: React.FC = () => {
  return (
    <Router>
      <ProtectedRoute>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/content/*" element={<ContentHubPage />} />
          </Routes>
        </Layout>
      </ProtectedRoute>
    </Router>
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