import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedWrapper } from 'shared-ui';
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage';
import AboutPage from './components/AboutPage';
import InternalNavigation from './components/InternalNavigation';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <ProtectedWrapper>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.card}>
            {/* Header */}
            <div className={styles.header}>
              <h1 className={styles.title}>
                📰 Content Hub
              </h1>
              <p className={styles.subtitle}>
                Advanced micro-frontend with nested routing and API integration
              </p>
            </div>

            {/* Internal Navigation */}
            <InternalNavigation />

            {/* Routes Content */}
            <div className={styles.content}>
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