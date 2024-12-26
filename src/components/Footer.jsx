import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterTitle}>
            <span className={styles.highlight}>Tyaggs Dhwaja - A Blog</span> As I'm currently reading various research papers, I plan to add a blog feature to my site!
          </h2>
          <p className={styles.newsletterDesc}>
            Weekly essays on research papers.
          </p>
          <div className={styles.newsletterButtons}>
            <a href="#" className={styles.buttonLinkedin}>Typically, you'd find an email ID here to contact me, but if you're truly interested in collaborating, you'll figure out a way to reach me.</a>
          </div>
        </div>
        <div className={styles.copyright}>
          Credits: <strong>Arpit Bhayani</strong> (The design of this site is inspired by his site. Unfortunately, I couldn't fully decode his repository to clone it, so I had to recreate it from scratch.)
          <br />
          Credits: <strong>Aahnik Daw</strong> (My friend from college, his archive on research papers made my BTP route a little easier.)
        </div>
        <div className={styles.timestamp}>
          Last updated: <span>{new Date().toLocaleString()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

