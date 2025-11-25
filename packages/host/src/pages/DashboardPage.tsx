import React from 'react';
import { Card } from 'shared-ui';
import { App1 } from 'app1';
import { App2 } from 'app2';
import styles from './DashboardPage.module.css';

const DashboardPage: React.FC = () => {
  return (
    <>
      {/* Overview Section */}
      <div className={styles.overviewSection}>
        <Card title="🎯 Secure Architecture Overview">
          <div className={styles.overviewGrid}>
            <div className={`${styles.overviewCard} ${styles.counterCard}`}>
              <h4>📊 Counter App</h4>
              <p>
                Simple state management demo - available to all users
              </p>
            </div>
            <div className={`${styles.overviewCard} ${styles.todoCard}`}>
              <h4>📝 Todo App</h4>
              <p>
                Admin-only feature with persistent storage
              </p>
            </div>
            <div className={`${styles.overviewCard} ${styles.contentCard}`}>
              <h4>📰 Content Hub</h4>
              <p>
                Advanced micro-frontend with nested routing and API integration
              </p>
            </div>
            <div className={`${styles.overviewCard} ${styles.authCard}`}>
              <h4>🔐 Authentication</h4>
              <p>
                Shared auth across all apps with role-based access
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Applications Grid */}
      <div className={styles.appsGrid}>
        {/* App1 Section */}
        <div className={styles.appSection}>
          <div className={styles.appHeader}>
            <h3 className={styles.appTitle}>
              📊 Counter App
            </h3>
            <p className={styles.appSubtitle}>
              Available to all authenticated users
            </p>
          </div>
          <div className={styles.appBody}>
            <App1 />
          </div>
        </div>

        {/* App2 Section */}
        <div className={styles.appSection}>
          <div className={styles.appHeader}>
            <h3 className={styles.appTitle}>
              📝 Todo App
            </h3>
            <p className={styles.appSubtitle}>
              Admin access required
            </p>
          </div>
          <div className={styles.appBody}>
            <App2 />
          </div>
        </div>
      </div>

      {/* Features Info */}
      <Card title="🔧 Router & Navigation Features">
        <div className={styles.featuresGrid}>
          <div className={styles.featureSection}>
            <h5>Navigation</h5>
            <ul>
              <li>React Router v6 integration</li>
              <li>Protected routes with authentication</li>
              <li>Role-based navigation visibility</li>
            </ul>
          </div>
          <div className={styles.featureSection}>
            <h5>Routes</h5>
            <ul>
              <li>/ - Dashboard (overview)</li>
              <li>/counter - Counter app page</li>
              <li>/todo - Todo app page (admin only)</li>
              <li>/content - Content Hub with nested routes</li>
            </ul>
          </div>
          <div className={styles.featureSection}>
            <h5>Benefits</h5>
            <ul>
              <li>Dedicated URLs for each app</li>
              <li>Browser back/forward support</li>
              <li>Bookmarkable micro-frontend pages</li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DashboardPage;