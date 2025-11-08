import React from 'react';
import { Card } from 'shared-ui';
import { App1 } from 'app1';

const CounterPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div style={{ marginBottom: '2rem' }}>
        <Card title="📊 Counter Application">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start'
          }}>
            <div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#374151' }}>About This App</h4>
              <p style={{ 
                margin: '0 0 1rem 0', 
                color: '#6b7280', 
                lineHeight: '1.6' 
              }}>
                A simple counter application demonstrating state management in a micro-frontend 
                architecture. This app is accessible to all authenticated users and maintains 
                its own independent state.
              </p>
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0f9ff',
                borderRadius: '0.5rem',
                border: '1px solid #0ea5e9'
              }}>
                <h5 style={{ margin: '0 0 0.5rem 0', color: '#0c4a6e' }}>Features</h5>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#0369a1' }}>
                  <li>Increment/Decrement counter</li>
                  <li>Reset functionality</li>
                  <li>Shared UI components</li>
                  <li>Independent state management</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#374151' }}>Access Level</h4>
              <div style={{
                padding: '1rem',
                backgroundColor: '#dcfce7',
                borderRadius: '0.5rem',
                border: '1px solid #16a34a',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  👥
                </div>
                <div style={{
                  fontWeight: '600',
                  color: '#14532d',
                  marginBottom: '0.25rem'
                }}>
                  All Users
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#15803d'
                }}>
                  Available to both regular users and administrators
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* App Content */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h2 style={{ 
            margin: 0, 
            color: '#1f2937',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            📊 Interactive Counter
          </h2>
          <p style={{ 
            margin: '0.5rem 0 0 0', 
            color: '#6b7280',
            fontSize: '1rem'
          }}>
            Use the buttons below to interact with the counter application
          </p>
        </div>
        
        <div style={{ backgroundColor: '#fbfcfd' }}>
          <App1 />
        </div>
      </div>
    </>
  );
};

export default CounterPage;