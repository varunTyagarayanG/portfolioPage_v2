import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} container`}>
        <Link to="/" className={styles.logo}>Varun Tyagarayan G</Link>
        <nav className={styles.navFonts}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <a href="https://github.com/varunTyagarayanG" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/varun-tyagarayan-gadigala-08a58130a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/Tyaggs/" target="_blank" rel="noopener noreferrer">Leetcode</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

