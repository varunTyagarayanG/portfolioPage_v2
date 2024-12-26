import React, { useState, useEffect } from 'react';
import styles from '../styles/Blog.module.css';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('public\\blogPosts.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogPosts(data);
                setIsLoading(false);
            } catch (e) {
                setError(e.message);
                setIsLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (isLoading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <section className={`${styles.blog} container`}>
            <h1 className={styles.title}>Tyaggs Dhwaja - A Blog</h1>
            <p className={styles.description}>Weekly essays on research papers and tech insights.</p>
            <div className={styles.posts}>
                {blogPosts.map((post) => (
                    <article key={post._id} className={styles.post}>
                        <h2 className={styles.postTitle}>
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h2>
                        <p className={styles.postDate}>{new Date(post.publish_date).toLocaleDateString()}</p>
                        <p className={styles.postExcerpt}>{post.summary}</p>
                        <div className={styles.postMeta}>
                            <span className={styles.postAuthor}>By {post.author}</span>
                            <span className={styles.postViews}>{post.views} views</span>
                            <span className={styles.postLikes}>{post.likes} likes</span>
                        </div>
                        <div className={styles.postTags}>
                            {post.tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                        <a href={`/blog/${post.slug}`} className={styles.readMore}>Read more →</a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;

