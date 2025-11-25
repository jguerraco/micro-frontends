import React, { useState, useEffect } from 'react';
import { Card } from 'shared-ui';
import { User } from '../types';
import { api } from '../api';
import styles from './UsersPage.module.css';

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
        <div className={styles.loading}>
          Loading users...
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="👥 Users Directory">
        <div className={styles.error}>
          <p>❌ Error loading users: {error}</p>
          <button 
            onClick={() => globalThis.location.reload()}
            className={styles.retryButton}
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
        <p className={styles.description}>
          User profiles from JSONPlaceholder API
        </p>

        <div className={styles.usersGrid}>
          {users.map((user) => (
            <div
              key={user.id}
              className={styles.userCard}
            >
              <div className={styles.userHeader}>
                <div className={styles.avatar}>
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className={styles.userName}>
                    {user.name}
                  </h3>
                  <p className={styles.userUsername}>
                    @{user.username}
                  </p>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span className={styles.contactText}>
                    {user.email}
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span className={styles.contactText}>
                    {user.phone}
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🌐</span>
                  <span className={styles.contactText}>
                    {user.website}
                  </span>
                </div>
              </div>

              <div className={styles.addressBox}>
                <h4 className={styles.addressTitle}>
                  📍 Address
                </h4>
                <p className={styles.addressText}>
                  {user.address.street}, {user.address.suite}<br />
                  {user.address.city} {user.address.zipcode}
                </p>
              </div>

              <div className={styles.companyBox}>
                <h4 className={styles.companyTitle}>
                  🏢 Company
                </h4>
                <p className={styles.companyName}>
                  {user.company.name}
                </p>
                <p className={styles.companyCatchPhrase}>
                  "{user.company.catchPhrase}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            👥 This page showcases user data from JSONPlaceholder with rich profile cards 
            displaying contact information, addresses, and company details.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UsersPage;