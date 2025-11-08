import React, { useState, useEffect } from 'react';
import { Card } from 'shared-ui';
import { Post } from '../types';
import { api } from '../api';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await api.getPosts();
        setPosts(data.slice(0, 10)); // Limit to 10 posts for better UX
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Card title="📝 Blog Posts">
        <div style={{ 
          padding: '3rem', 
          textAlign: 'center',
          color: '#6b7280'
        }}>
          Loading posts...
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="📝 Blog Posts">
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          color: '#dc2626'
        }}>
          <p>❌ Error loading posts: {error}</p>
          <button 
            onClick={() => window.location.reload()}
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
      <Card title="📝 Blog Posts">
        <p style={{ 
          marginBottom: '1.5rem', 
          color: '#6b7280' 
        }}>
          Latest blog posts from JSONPlaceholder API
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{
                margin: '0 0 0.75rem 0',
                color: '#374151',
                fontSize: '1.125rem',
                fontWeight: '600',
                lineHeight: '1.4',
                textTransform: 'capitalize'
              }}>
                {post.title}
              </h3>
              
              <p style={{
                margin: '0 0 1rem 0',
                color: '#6b7280',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}>
                {post.body}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.75rem',
                color: '#9ca3af'
              }}>
                <span>Post #{post.id}</span>
                <span>Author: User {post.userId}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f0f9ff',
          border: '1px solid #0ea5e9',
          borderRadius: '0.5rem'
        }}>
          <p style={{
            margin: 0,
            color: '#0c4a6e',
            fontSize: '0.875rem'
          }}>
            💡 This page demonstrates API integration with JSONPlaceholder. 
            Posts are fetched dynamically and displayed with responsive design.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PostsPage;