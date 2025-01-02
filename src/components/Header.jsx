import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} container`}>
        <Link to="/" className={styles.logo}>Varun Tyagarayan G</Link>
        
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navFonts} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/blog" onClick={toggleMenu}>Blog</Link>
          <a href="https://github.com/varunTyagarayanG" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>GitHub</a>
          <a href="https://www.linkedin.com/in/varun-tyagarayan-gadigala-08a58130a/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>LinkedIn</a>
          <a href="https://leetcode.com/u/Tyaggs/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Leetcode</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
