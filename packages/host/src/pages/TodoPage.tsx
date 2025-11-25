import React from 'react';
import { Card } from 'shared-ui';
import { App2 } from 'app2';
import styles from './TodoPage.module.css';

const TodoPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <Card title="📝 Todo List Application">
          <div className={styles.aboutGrid}>
            <div>
              <h4 className={styles.sectionTitle}>About This App</h4>
              <p className={styles.description}>
                A comprehensive todo list application with persistent storage capabilities. 
                This admin-only micro-frontend demonstrates role-based access control and 
                data persistence across browser sessions.
              </p>
              <div className={styles.featuresBox}>
                <h5 className={styles.featuresTitle}>Features</h5>
                <ul className={styles.featuresList}>
                  <li>Add and delete todos</li>
                  <li>Mark todos as complete</li>
                  <li>Persistent localStorage</li>
                  <li>Bulk clear completed items</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className={styles.accessLevelTitle}>Access Level</h4>
              <div className={styles.accessBox}>
                <div className={styles.accessIcon}>
                  🔐
                </div>
                <div className={styles.accessRole}>
                  Admin Only
                </div>
                <div className={styles.accessDescription}>
                  Restricted access - requires administrator privileges
                </div>
              </div>
              
              <div className={styles.demoCredentials}>
                <strong>Demo Admin:</strong><br />
                admin@example.com / admin123
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* App Content */}
      <div className={styles.appContent}>
        <div className={styles.appHeader}>
          <h2 className={styles.appTitle}>
            📝 Task Management
          </h2>
          <p className={styles.appSubtitle}>
            Manage your tasks with persistent storage and advanced features
          </p>
        </div>
        
        <div className={styles.appBody}>
          <App2 />
        </div>
      </div>
    </>
  );
};

export default TodoPage;