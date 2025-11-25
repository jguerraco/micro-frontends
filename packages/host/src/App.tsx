import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth, LoginForm, UserProfile } from 'shared-ui';
import Navigation from './Navigation';
import DashboardPage from './pages/DashboardPage';
import CounterPage from './pages/CounterPage';
import TodoPage from './pages/TodoPage';
import ContentHubPage from './pages/ContentHubPage';
import styles from './App.module.css';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>
              🚀 Micro-Frontend Dashboard
            </h1>
            <p className={styles.loginSubtitle}>
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
    <div className={styles.layoutContainer}>
      {/* Header with Navigation */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.headerTitle}>
              🚀 Micro-Frontend Dashboard
            </h1>
            <p className={styles.headerSubtitle}>
              Navigate between independent applications
            </p>
          </div>
          
          <div className={styles.headerActions}>
            <Navigation />
            <UserProfile compact={true} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
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