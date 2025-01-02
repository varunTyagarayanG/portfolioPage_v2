import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/BlogPost.module.css';

const blogContents = {
  '1': {
    title: 'Understanding the CAP Theorem',
    author: 'Varun Tyagarayan G',
    publish_date: '2023-12-01',
    image: '/images/cap-theorem.jpg',
    content: `
            <h2>Introduction to CAP Theorem</h2>
            <div class="blog-image">
                <img src="/images/cap-theorem.jpg" alt="CAP Theorem Diagram" />
            </div>
            <p>The CAP theorem, also known as Brewer's theorem, is a fundamental principle in distributed systems that states it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:</p>
            <ul>
                <li><strong>Consistency:</strong> Every read receives the most recent write or an error</li>
                <li><strong>Availability:</strong> Every request receives a (non-error) response, without the guarantee that it contains the most recent write</li>
                <li><strong>Partition tolerance:</strong> The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes</li>
            </ul>
            <p>In this blog post, we'll explore the implications of the CAP theorem and how it influences the design of distributed systems...</p>
        `
  },
  '2': {
    title: 'Exploring Distributed Key-Value Stores',
    author: 'Varun Tyagarayan G',
    publish_date: '2023-12-15',
    image: '/images/key-value-store.jpg',
    content: `
            <h2>What are Distributed Key-Value Stores?</h2>
            <div class="blog-image">
                <img src="/images/key-value-store.jpg" alt="Distributed Key-Value Store Architecture" />
            </div>
            <p>Distributed key-value stores are a type of non-relational database that uses a simple key-value method to store data. The data is distributed across multiple servers to achieve scalability and high availability.</p>
            <h3>Popular Distributed Key-Value Stores:</h3>
            <ul>
                <li>Apache Cassandra</li>
                <li>Amazon DynamoDB</li>
                <li>Riak</li>
                <li>Voldemort</li>
            </ul>
            <p>In this post, we'll dive deep into the architecture and use cases of these systems...</p>
        `
  },
  '3': {
    title: 'The Evolution of NoSQL Databases',
    author: 'Varun Tyagarayan G',
    publish_date: '2024-01-05',
    content: `
            <h2>The Rise of NoSQL</h2>
            <p>NoSQL databases emerged as a response to the limitations of traditional relational databases in handling the scale and agility requirements of modern, data-intensive applications.</p>
            <h3>Key Milestones in NoSQL Evolution:</h3>
            <ol>
                <li>2004: Google's BigTable paper</li>
                <li>2007: Amazon's Dynamo paper</li>
                <li>2009: MongoDB and Cassandra released</li>
                <li>2012: Rise of NewSQL databases</li>
            </ol>
            <p>Let's explore how these developments have shaped the current database landscape...</p>
        `
  },
  '4': {
    title: 'Scaling Databases: Techniques and Challenges',
    author: 'Varun Tyagarayan G',
    publish_date: '2024-01-20',
    content: `
            <h2>Database Scaling Strategies</h2>
            <p>As applications grow, so does the need for efficient database scaling. There are two main approaches:</p>
            <h3>1. Vertical Scaling (Scale-Up)</h3>
            <p>This involves adding more resources (CPU, RAM) to a single server. While simple, it has limitations.</p>
            <h3>2. Horizontal Scaling (Scale-Out)</h3>
            <p>This involves adding more servers to distribute the load. It's more complex but offers better scalability.</p>
            <p>In this post, we'll discuss the pros and cons of each approach and when to use them...</p>
        `
  },
  '5': {
    title: 'In-Memory Databases: Use Cases and Limitations',
    author: 'Varun Tyagarayan G',
    publish_date: '2024-02-05',
    content: `
            <h2>What are In-Memory Databases?</h2>
            <p>In-memory databases store data in the main memory (RAM) for faster access, as opposed to traditional databases that store data on disk.</p>
            <h3>Key Benefits:</h3>
            <ul>
                <li>Extremely fast read and write operations</li>
                <li>Reduced latency</li>
                <li>Simplified data structures</li>
            </ul>
            <h3>Limitations:</h3>
            <ul>
                <li>Higher cost per gigabyte of storage</li>
                <li>Volatility of data</li>
                <li>Limited capacity compared to disk-based storage</li>
            </ul>
            <p>Let's explore when and how to effectively use in-memory databases in your architecture...</p>
        `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogContents[id];

  if (!post) {
    return <div className={styles.blogPost}>Blog post not found</div>;
  }

  return (
    <div className={styles.blogPost}>
      <div className="container">
        <Link to="/blog" className={styles.backLink}>← Back to all posts</Link>
        <h1 className={styles.postTitle}>{post.title}</h1>
        {post.image && (
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}
        <p className={styles.postMeta}>
          <span className={styles.postAuthor}>By {post.author}</span>
          <span className={styles.postDate}>
            {new Date(post.publish_date).toLocaleDateString()}
          </span>
        </p>
        <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default BlogPost;
