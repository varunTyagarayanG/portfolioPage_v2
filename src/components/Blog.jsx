import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Blog.module.css';

const Blog = () => {
    const blogPosts = [
        {
            _id: '1',
            title: 'ID generation system similar to Instagram\'s snowflake ID generation',
            publish_date: '2024-12-26'
        },
        {
            _id: '2',
            title: 'Implementing database sharding for a phonebook app using MySQL',
            publish_date: '2024-12-21'
        },
        {
            _id: '3',
            title: 'Flight seat reservation system that supports concurrent seat bookings',
            publish_date: '2024-12-16'
        },
        {
            _id: '4',
            title: 'Cubicles- A job portal Site(M.E.R.N)',
            publish_date: '2024-12-02'
        },
        {
            _id: '5',
            title: 'Interstate Traffic Volume Prediction(Random-Forest-Regressor)',
            publish_date: '2024-11-20'
        },
        {
            _id: '6',
            title: 'Automatic Number Plate Detection(Deep Learning Algo)',
            publish_date: '2024-11-18'
        },
        {
            _id: '7',
            title: 'Feature detection descriptor and Matching(ComputerVision)',
            publish_date: '2024-10-06'
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')}, ${date.getFullYear()}`;
    };

    return (
        <div className={styles.blog}>
            <div className={styles.container}>
                <h1 className={styles.title}>Blog</h1>
                <div className={styles.posts}>
                    {blogPosts.map((post) => (
                        <div key={post._id} className={styles.postItem}>
                            <div className={styles.dateContainer}>
                                {formatDate(post.publish_date)} :
                            </div>
                            <Link to={`/blog/${post._id}`} className={styles.postLink}>
                                {post.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
