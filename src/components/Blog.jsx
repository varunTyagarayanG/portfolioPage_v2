import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Blog.module.css';

const Blog = () => {
    const blogPosts = [
        {
            _id: '1',
            title: 'Understanding the CAP Theorem',
            author: 'Varun Tyagarayan G',
            publish_date: '2023-12-01',
            summary: 'An in-depth look at the CAP theorem and its implications for distributed systems.'
        },
        {
            _id: '2',
            title: 'Exploring Distributed Key-Value Stores',
            author: 'Varun Tyagarayan G',
            publish_date: '2023-12-15',
            summary: 'A comprehensive analysis of various distributed key-value store architectures.'
        },
        {
            _id: '3',
            title: 'The Evolution of NoSQL Databases',
            author: 'Varun Tyagarayan G',
            publish_date: '2024-01-05',
            summary: 'Tracing the history and development of NoSQL databases and their impact on modern data storage.'
        },
        {
            _id: '4',
            title: 'Scaling Databases: Techniques and Challenges',
            author: 'Varun Tyagarayan G',
            publish_date: '2024-01-20',
            summary: 'Exploring various strategies for scaling databases and the challenges they present.'
        },
        {
            _id: '5',
            title: 'In-Memory Databases: Use Cases and Limitations',
            author: 'Varun Tyagarayan G',
            publish_date: '2024-02-05',
            summary: 'Analyzing the benefits and drawbacks of in-memory databases in modern applications.'
        }
    ];

    return (
        <div className={styles.blog}>
            <div className="container">
                <h1 className={styles.title}>Tyaggs Dhwaja - A Blog</h1>
                <p className={styles.description}>Weekly essays on research papers and tech insights.</p>
                <div className={styles.posts}>
                    {blogPosts.map((post) => (
                        <article key={post._id} className={styles.post}>
                            <h2 className={styles.postTitle}>
                                <Link to={`/blog/${post._id}`} className={styles.postLink}>{post.title}</Link>
                            </h2>
                            <p className={styles.postMeta}>
                                <span className={styles.postAuthor}>By {post.author}</span>
                                <span className={styles.postDate}>
                                    {new Date(post.publish_date).toLocaleDateString()}
                                </span>
                            </p>
                            <p className={styles.postSummary}>{post.summary}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

