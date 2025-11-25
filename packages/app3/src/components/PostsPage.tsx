import React, { useState, useEffect } from 'react';
import { Card } from 'shared-ui';
import { Post } from '../types';
import { api } from '../api';
import styles from './PostsPage.module.css';

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
        <div className={styles.loading}>
          Loading posts...
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="📝 Blog Posts">
        <div className={styles.error}>
          <p>❌ Error loading posts: {error}</p>
          <button 
            onClick={() => window.location.reload()}
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
      <Card title="📝 Blog Posts">
        <p className={styles.description}>
          Latest blog posts from JSONPlaceholder API
        </p>

        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <div
              key={post.id}
              className={styles.postCard}
            >
              <h3 className={styles.postTitle}>
                {post.title}
              </h3>
              
              <p className={styles.postBody}>
                {post.body}
              </p>

              <div className={styles.postFooter}>
                <span>Post #{post.id}</span>
                <span>Author: User {post.userId}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            💡 This page demonstrates API integration with JSONPlaceholder. 
            Posts are fetched dynamically and displayed with responsive design.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PostsPage;