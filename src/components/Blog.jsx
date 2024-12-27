import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/Blog.module.css';
import { API_ENDPOINTS } from '../config/api';
import Loading from './Loading';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get(API_ENDPOINTS.getAllBlogs);
                console.log('Fetched blog posts:', response.data);
                setBlogPosts(response.data);
                setIsLoading(false);
            } catch (e) {
                console.error('Error fetching blogs:', e);
                setError(e.response?.data?.message || e.message);
                setIsLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (isLoading) return <Loading />;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <section className={`${styles.blog} container`}>
            <h1 className={styles.title}>Tyaggs Dhwaja - A Blog</h1>
            <p className={styles.description}>Weekly essays on research papers and tech insights.</p>
            <div className={styles.posts}>
                {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                        <article key={post._id} className={styles.post}>
                            <h2 className={styles.postTitle}>
                                <Link to={`/blog/${post._id}`}>{post.title}</Link>
                            </h2>
                            <p className={styles.postMeta}>
                                <span className={styles.postAuthor}>By {post.author}</span>
                                <span className={styles.postDate}>
                                    {new Date(post.publish_date).toLocaleDateString()}
                                </span>
                            </p>
                            <p className={styles.postSummary}>{post.summary}</p>
                        </article>
                    ))
                ) : (
                    <p className={styles.noPosts}>No blog posts found.</p>
                )}
            </div>
        </section>
    );
};

export default Blog;

