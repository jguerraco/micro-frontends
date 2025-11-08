import React from 'react';
import { Card } from 'shared-ui';
import { App2 } from 'app2';

const TodoPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div style={{ marginBottom: '2rem' }}>
        <Card title="📝 Todo List Application">
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
                A comprehensive todo list application with persistent storage capabilities. 
                This admin-only micro-frontend demonstrates role-based access control and 
                data persistence across browser sessions.
              </p>
              <div style={{
                padding: '1rem',
                backgroundColor: '#f0fdf4',
                borderRadius: '0.5rem',
                border: '1px solid #22c55e'
              }}>
                <h5 style={{ margin: '0 0 0.5rem 0', color: '#14532d' }}>Features</h5>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#15803d' }}>
                  <li>Add and delete todos</li>
                  <li>Mark todos as complete</li>
                  <li>Persistent localStorage</li>
                  <li>Bulk clear completed items</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#374151' }}>Access Level</h4>
              <div style={{
                padding: '1rem',
                backgroundColor: '#fef2f2',
                borderRadius: '0.5rem',
                border: '1px solid #ef4444',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  🔐
                </div>
                <div style={{
                  fontWeight: '600',
                  color: '#991b1b',
                  marginBottom: '0.25rem'
                }}>
                  Admin Only
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#dc2626'
                }}>
                  Restricted access - requires administrator privileges
                </div>
              </div>
              
              <div style={{
                marginTop: '1rem',
                padding: '0.75rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                color: '#64748b'
              }}>
                <strong>Demo Admin:</strong><br />
                admin@example.com / admin123
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
            📝 Task Management
          </h2>
          <p style={{ 
            margin: '0.5rem 0 0 0', 
            color: '#6b7280',
            fontSize: '1rem'
          }}>
            Manage your tasks with persistent storage and advanced features
          </p>
        </div>
        
        <div style={{ backgroundColor: '#fbfcfd' }}>
          <App2 />
        </div>
      </div>
    </>
  );
};

export default TodoPage;