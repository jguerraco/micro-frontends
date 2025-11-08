import React from 'react';
import { Card } from 'shared-ui';

const AboutPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card title="ℹ️ About Content Hub">
        <div style={{ lineHeight: '1.6', color: '#374151' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#6b7280' }}>
            Welcome to the Content Hub - a demonstration of advanced micro-frontend architecture 
            with nested routing and API integration.
          </p>

          <h3 style={{ 
            color: '#374151', 
            marginTop: '2rem', 
            marginBottom: '1rem',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            🎯 Purpose
          </h3>
          <p style={{ marginBottom: '1.5rem' }}>
            This micro-frontend demonstrates how to build a content-focused application that 
            integrates with external APIs while maintaining clean architecture patterns. It showcases 
            nested routing within a micro-frontend and seamless integration with a host application.
          </p>

          <h3 style={{ 
            color: '#374151', 
            marginTop: '2rem', 
            marginBottom: '1rem',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            🔧 Technical Features
          </h3>
          <ul style={{ 
            paddingLeft: '1.5rem', 
            marginBottom: '1.5rem',
            listStyleType: 'disc'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>React Router v6:</strong> Nested routing within the micro-frontend
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>API Integration:</strong> JSONPlaceholder REST API consumption
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>TypeScript:</strong> Fully typed components and API responses
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Error Handling:</strong> Graceful error states and loading indicators
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Responsive Design:</strong> Mobile-first responsive layouts
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Shared Components:</strong> Leverages shared-ui component library
            </li>
          </ul>

          <h3 style={{ 
            color: '#374151', 
            marginTop: '2rem', 
            marginBottom: '1rem',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            📊 API Endpoints Used
          </h3>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb',
            marginBottom: '1.5rem'
          }}>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '1.5rem',
              fontSize: '0.875rem',
              fontFamily: 'monospace'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>GET</strong> /posts - Fetch blog posts
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>GET</strong> /users - Fetch user profiles
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>GET</strong> /posts/:id/comments - Fetch post comments
              </li>
            </ul>
          </div>

          <h3 style={{ 
            color: '#374151', 
            marginTop: '2rem', 
            marginBottom: '1rem',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            🏗️ Architecture Benefits
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              backgroundColor: '#f0f9ff',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #0ea5e9'
            }}>
              <h4 style={{ 
                margin: '0 0 0.5rem 0', 
                color: '#0c4a6e',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                🎯 Independence
              </h4>
              <p style={{ 
                margin: 0, 
                color: '#0369a1', 
                fontSize: '0.875rem' 
              }}>
                Can be developed and deployed independently from other micro-frontends
              </p>
            </div>
            <div style={{
              backgroundColor: '#f0fdf4',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #22c55e'
            }}>
              <h4 style={{ 
                margin: '0 0 0.5rem 0', 
                color: '#14532d',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                🔄 Reusability
              </h4>
              <p style={{ 
                margin: 0, 
                color: '#15803d', 
                fontSize: '0.875rem' 
              }}>
                Shared components and patterns can be reused across applications
              </p>
            </div>
            <div style={{
              backgroundColor: '#fef2f2',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #ef4444'
            }}>
              <h4 style={{ 
                margin: '0 0 0.5rem 0', 
                color: '#991b1b',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                ⚡ Performance
              </h4>
              <p style={{ 
                margin: 0, 
                color: '#dc2626', 
                fontSize: '0.875rem' 
              }}>
                Lazy loading and code splitting optimize bundle sizes
              </p>
            </div>
          </div>

          <h3 style={{ 
            color: '#374151', 
            marginTop: '2rem', 
            marginBottom: '1rem',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            🚀 Getting Started
          </h3>
          <div style={{
            backgroundColor: '#fffbeb',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #f59e0b',
            marginBottom: '1.5rem'
          }}>
            <p style={{ 
              margin: '0 0 1rem 0', 
              color: '#92400e',
              fontSize: '0.875rem'
            }}>
              <strong>🎨 Navigation:</strong> Use the header navigation to explore different sections:
            </p>
            <ul style={{ 
              margin: 0, 
              paddingLeft: '1.5rem',
              color: '#92400e',
              fontSize: '0.875rem'
            }}>
              <li>📝 <strong>Posts:</strong> Browse blog content from JSONPlaceholder</li>
              <li>👥 <strong>Users:</strong> View user profiles and contact information</li>
              <li>ℹ️ <strong>About:</strong> Learn about the architecture (this page)</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: '#f3f4f6',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            marginTop: '2rem',
            textAlign: 'center'
          }}>
            <p style={{
              margin: 0,
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
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