import React from 'react';
import { Card } from 'shared-ui';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card title="ℹ️ About Content Hub">
        <div className={styles.content}>
          <p className={styles.intro}>
            Welcome to the Content Hub - a demonstration of advanced micro-frontend architecture 
            with nested routing and API integration.
          </p>

          <h3 className={styles.sectionTitle}>
            🎯 Purpose
          </h3>
          <p className={styles.text}>
            This micro-frontend demonstrates how to build a content-focused application that 
            integrates with external APIs while maintaining clean architecture patterns. It showcases 
            nested routing within a micro-frontend and seamless integration with a host application.
          </p>

          <h3 className={styles.sectionTitle}>
            🔧 Technical Features
          </h3>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <strong>React Router v6:</strong> Nested routing within the micro-frontend
            </li>
            <li className={styles.featureItem}>
              <strong>API Integration:</strong> JSONPlaceholder REST API consumption
            </li>
            <li className={styles.featureItem}>
              <strong>TypeScript:</strong> Fully typed components and API responses
            </li>
            <li className={styles.featureItem}>
              <strong>Error Handling:</strong> Graceful error states and loading indicators
            </li>
            <li className={styles.featureItem}>
              <strong>Responsive Design:</strong> Mobile-first responsive layouts
            </li>
            <li className={styles.featureItem}>
              <strong>Shared Components:</strong> Leverages shared-ui component library
            </li>
          </ul>

          <h3 className={styles.sectionTitle}>
            📊 API Endpoints Used
          </h3>
          <div className={styles.codeBox}>
            <ul className={styles.codeList}>
              <li className={styles.codeItem}>
                <strong>GET</strong> /posts - Fetch blog posts
              </li>
              <li className={styles.codeItem}>
                <strong>GET</strong> /users - Fetch user profiles
              </li>
              <li className={styles.codeItem}>
                <strong>GET</strong> /posts/:id/comments - Fetch post comments
              </li>
            </ul>
          </div>

          <h3 className={styles.sectionTitle}>
            🏗️ Architecture Benefits
          </h3>
          <div className={styles.architectureGrid}>
            <div className={`${styles.architectureCard} ${styles.blue}`}>
              <h4 className={styles.cardTitle}>
                🎯 Independence
              </h4>
              <p className={styles.cardText}>
                Can be developed and deployed independently from other micro-frontends
              </p>
            </div>
            <div className={`${styles.architectureCard} ${styles.green}`}>
              <h4 className={styles.cardTitle}>
                🔄 Reusability
              </h4>
              <p className={styles.cardText}>
                Shared components and patterns can be reused across applications
              </p>
            </div>
            <div className={`${styles.architectureCard} ${styles.red}`}>
              <h4 className={styles.cardTitle}>
                ⚡ Performance
              </h4>
              <p className={styles.cardText}>
                Lazy loading and code splitting optimize bundle sizes
              </p>
            </div>
          </div>

          <h3 className={styles.sectionTitle}>
            🚀 Getting Started
          </h3>
          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              <strong>🎨 Navigation:</strong> Use the header navigation to explore different sections:
            </p>
            <ul className={styles.infoList}>
              <li>📝 <strong>Posts:</strong> Browse blog content from JSONPlaceholder</li>
              <li>👥 <strong>Users:</strong> View user profiles and contact information</li>
              <li>ℹ️ <strong>About:</strong> Learn about the architecture (this page)</li>
            </ul>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              💡 This micro-frontend demonstrates real-world patterns for building scalable, 
              maintainable applications with modern React architecture.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;