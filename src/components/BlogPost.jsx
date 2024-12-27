import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/BlogPost.module.css';
import { API_ENDPOINTS } from '../config/api';
import Loading from './Loading';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        console.log('Fetching blog post with ID:', id);
        console.log('Using endpoint:', API_ENDPOINTS.getBlogById(id));
        const response = await axios.get(API_ENDPOINTS.getBlogById(id));
        console.log('Blog post response:', response.data);
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.error('Error fetching blog post:', e);
        if (e.response?.status === 404) {
          setError('Blog post not found');
        } else {
          setError(e.response?.data?.message || e.message);
        }
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  const handleLike = async () => {
    try {
      const response = await axios.put(API_ENDPOINTS.updateBlog(id), {
        ...post,
        likes: post.likes + 1
      });
      setPost(response.data.blog);
    } catch (e) {
      console.error('Error updating likes:', e);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await axios.put(API_ENDPOINTS.updateBlog(id), {
        ...post,
        dislikes: post.dislikes + 1
      });
      setPost(response.data.blog);
    } catch (e) {
      console.error('Error updating dislikes:', e);
    }
  };

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Error</h2>
        <p>{error}</p>
        <button
          className={styles.backButton}
          onClick={() => navigate('/blog')}
        >
          ← Back to Blog List
        </button>
      </div>
    );
  }

  if (!post) return <div className={styles.error}>Blog post not found</div>;

  return (
    <article className={styles.blogPost}>
      <div className={styles.coverImageContainer}>
        {post.image && <img src={post.image} alt={post.title} className={styles.coverImage} />}
      </div>
      <div className={`${styles.content} container`}>
        <Link to="/blog" className={styles.backLink}>← Back to all posts</Link>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.author}>By {post.author}</span>
          <span className={styles.date}>
            Published on {new Date(post.publish_date).toLocaleDateString()}
          </span>
          {post.last_updated && (
            <span className={styles.updated}>
              Last updated on {new Date(post.last_updated).toLocaleDateString()}
            </span>
          )}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className={styles.summary}>{post.summary}</div>
        <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className={styles.postFooter}>
          <div className={styles.category}>
            Category: <span>{post.category}</span>
          </div>
          <div className={styles.interactions}>
            <button onClick={handleLike} className={styles.likeButton}>
              👍 Like ({post.likes})
            </button>
            <button onClick={handleDislike} className={styles.dislikeButton}>
              👎 Dislike ({post.dislikes})
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

