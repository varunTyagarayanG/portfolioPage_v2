import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.content}>
        <h1 className={styles.mainName}>Hey, I am Tyagi</h1>
        <p className={styles.subtitle} style={{ color: 'var(--primary-red)', fontSize: '20px' }}>Problem-solver, Developer, Engineer</p>


        <p>
          I am a <strong>B.Tech</strong> student at <strong>IIIT Sri City</strong>, specializing in
          <strong> Computer Science</strong>, with a strong passion for <strong>system design</strong>,
          <strong> cloud technologies</strong>, and <strong>problem-solving</strong>. My technical expertise spans
          <strong> C++</strong>, <strong>Java</strong>, <strong>HTML</strong>, <strong>CSS</strong>,
          <strong> Bootstrap</strong>, <strong>JavaScript</strong>, and databases like <strong>SQL</strong>,
          <strong> MongoDB</strong>, <strong>Redis</strong>, and <strong>DynamoDB</strong>. I'm also proficient in
          tools such as <strong>Git</strong>, <strong>GitHub</strong>, <strong>Node.js</strong>,
          <strong> React.js</strong>, <strong>Maven</strong>, and frameworks like <strong>Express.js</strong>,
          <strong> OpenCV</strong>, and <strong>Sklearn</strong>.
        </p>
        <p>
          My academic foundation includes courses in <strong>algorithms</strong>, <strong>object-oriented
            programming</strong>, <strong>database management</strong>, and <strong>computer networks</strong>,
          all of which have sharpened my ability to design scalable, efficient systems. I have worked on a range
          of projects, applying my skills in <strong>full-stack development</strong>, <strong>machine
            learning</strong>, and <strong>deep learning</strong>.
        </p>
        <p>
          With a keen interest in <strong>system architecture</strong> and <strong>cloud technologies</strong>, I
          constantly explore emerging tools and technologies to enhance my expertise and contribute to impactful,
          real-world applications. I enjoy solving complex problems and sharing my insights through my projects
          and discussions.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://leetcode.com/u/Tyaggs/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
            <svg className={styles.icon} viewBox="0 0 24 24" width="16" height="16">
              <title>LeetCode icon</title>
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
            </svg>
            Leetcode
          </a>
          <a href="https://www.linkedin.com/in/varun-tyagarayan-gadigala-08a58130a/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
            <svg className={styles.icon} viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/varunTyagarayanG" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
            <svg className={styles.icon} viewBox="0 0 24 24" width="16" height="16">
              <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="public\removedBG.png" alt="Profile photo" className={styles.profileImage} />
      </div>
    </section>
  );
};

export default Hero;

