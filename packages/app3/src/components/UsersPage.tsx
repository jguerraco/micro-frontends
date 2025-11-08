import React, { useState, useEffect } from 'react';
import { Card } from 'shared-ui';
import { User } from '../types';
import { api } from '../api';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await api.getUsers();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Card title="👥 Users Directory">
        <div style={{ 
          padding: '3rem', 
          textAlign: 'center',
          color: '#6b7280'
        }}>
          Loading users...
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="👥 Users Directory">
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          color: '#dc2626'
        }}>
          <p>❌ Error loading users: {error}</p>
          <button 
            onClick={() => globalThis.location.reload()}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Retry
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <Card title="👥 Users Directory">
        <p style={{ 
          marginBottom: '1.5rem', 
          color: '#6b7280' 
        }}>
          User profiles from JSONPlaceholder API
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {users.map((user) => (
            <div
              key={user.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{
                    margin: 0,
                    color: '#374151',
                    fontSize: '1.125rem',
                    fontWeight: '600'
                  }}>
                    {user.name}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: '#6b7280',
                    fontSize: '0.875rem'
                  }}>
                    @{user.username}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>📧</span>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    {user.email}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>📞</span>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    {user.phone}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>🌐</span>
                  <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                    {user.website}
                  </span>
                </div>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem'
              }}>
                <h4 style={{
                  margin: '0 0 0.5rem 0',
                  color: '#374151',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  📍 Address
                </h4>
                <p style={{
                  margin: 0,
                  color: '#6b7280',
                  fontSize: '0.75rem',
                  lineHeight: '1.4'
                }}>
                  {user.address.street}, {user.address.suite}<br />
                  {user.address.city} {user.address.zipcode}
                </p>
              </div>

              <div style={{
                backgroundColor: '#f0f9ff',
                padding: '1rem',
                borderRadius: '0.5rem'
              }}>
                <h4 style={{
                  margin: '0 0 0.5rem 0',
                  color: '#0c4a6e',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  🏢 Company
                </h4>
                <p style={{
                  margin: '0 0 0.25rem 0',
                  color: '#0369a1',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {user.company.name}
                </p>
                <p style={{
                  margin: 0,
                  color: '#0284c7',
                  fontSize: '0.75rem',
                  fontStyle: 'italic'
                }}>
                  "{user.company.catchPhrase}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f0fdf4',
          border: '1px solid #22c55e',
          borderRadius: '0.5rem'
        }}>
          <p style={{
            margin: 0,
            color: '#14532d',
            fontSize: '0.875rem'
          }}>
            👥 This page showcases user data from JSONPlaceholder with rich profile cards 
            displaying contact information, addresses, and company details.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UsersPage;