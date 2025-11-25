import React from 'react';
import { Card } from 'shared-ui';
import { App1 } from 'app1';
import styles from './CounterPage.module.css';

const CounterPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <Card title="📊 Counter Application">
          <div className={styles.aboutGrid}>
            <div>
              <h4 className={styles.sectionTitle}>About This App</h4>
              <p className={styles.description}>
                A simple counter application demonstrating state management in a micro-frontend 
                architecture. This app is accessible to all authenticated users and maintains 
                its own independent state.
              </p>
              <div className={styles.featuresBox}>
                <h5 className={styles.featuresTitle}>Features</h5>
                <ul className={styles.featuresList}>
                  <li>Increment/Decrement counter</li>
                  <li>Reset functionality</li>
                  <li>Shared UI components</li>
                  <li>Independent state management</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className={styles.accessLevelTitle}>Access Level</h4>
              <div className={styles.accessBox}>
                <div className={styles.accessIcon}>
                  👥
                </div>
                <div className={styles.accessRole}>
                  All Users
                </div>
                <div className={styles.accessDescription}>
                  Available to both regular users and administrators
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* App Content */}
      <div className={styles.appContent}>
        <div className={styles.appHeader}>
          <h2 className={styles.appTitle}>
            📊 Interactive Counter
          </h2>
          <p className={styles.appSubtitle}>
            Use the buttons below to interact with the counter application
          </p>
        </div>
        
        <div className={styles.appBody}>
          <App1 />
        </div>
      </div>
    </>
  );
};

export default CounterPage;