import React from 'react';
import { Card } from 'shared-ui';
import { App1 } from 'app1';
import { App2 } from 'app2';

const DashboardPage: React.FC = () => {
  return (
    <>
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
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#0c4a6e' }}>📊 Counter App</h4>
              <p style={{ margin: 0, color: '#0369a1', fontSize: '0.875rem' }}>
                Simple state management demo - available to all users
              </p>
            </div>
            <div style={{
              padding: '1rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '0.5rem',
              border: '1px solid #22c55e'
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#14532d' }}>📝 Todo App</h4>
              <p style={{ margin: 0, color: '#15803d', fontSize: '0.875rem' }}>
                Admin-only feature with persistent storage
              </p>
            </div>
            <div style={{
              padding: '1rem',
              backgroundColor: '#fef7ff',
              borderRadius: '0.5rem',
              border: '1px solid #a855f7'
            }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#6b21a8' }}>📰 Content Hub</h4>
              <p style={{ margin: 0, color: '#7c3aed', fontSize: '0.875rem' }}>
                Advanced micro-frontend with nested routing and API integration
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
                Shared auth across all apps with role-based access
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
        alignItems: 'start',
        marginBottom: '2rem'
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
              📊 Counter App
            </h3>
            <p style={{ 
              margin: '0.25rem 0 0 0', 
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
              Available to all authenticated users
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
              📝 Todo App
            </h3>
            <p style={{ 
              margin: '0.25rem 0 0 0', 
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
              Admin access required
            </p>
          </div>
          <div style={{ backgroundColor: '#fbfcfd' }}>
            <App2 />
          </div>
        </div>
      </div>

      {/* Features Info */}
      <Card title="🔧 Router & Navigation Features">
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          color: '#4b5563'
        }}>
          <div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Navigation</h5>
            <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6' }}>
              <li>React Router v6 integration</li>
              <li>Protected routes with authentication</li>
              <li>Role-based navigation visibility</li>
            </ul>
          </div>
          <div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Routes</h5>
            <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6' }}>
              <li>/ - Dashboard (overview)</li>
              <li>/counter - Counter app page</li>
              <li>/todo - Todo app page (admin only)</li>
              <li>/content - Content Hub with nested routes</li>
            </ul>
          </div>
          <div>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>Benefits</h5>
            <ul style={{ margin: 0, paddingLeft: '1rem', lineHeight: '1.6' }}>
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