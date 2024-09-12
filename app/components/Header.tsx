"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="http://localhost:1337/assets/logo.svg" alt="RatePunk" className={styles.logoImage} />
        </div>
        {/* Fix this */}
        {!isMobile && (
          <nav className={styles.desktopNav}>
            <Link href="/chrome-extension" className={`${styles.navLink} glow`}>
              Chrome Extension
            </Link>
            <Link href="/price-comparison" className={styles.navLink}>
              Price Comparison
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </nav>
        )}
        {isMobile && (
          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
            <img src="http://localhost:1337/assets/menu.svg" alt="Menu" />
          </button>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/chrome-extension" className={styles.mobileNavLink}>
            Chrome Extension
          </Link>
          <Link href="/price-comparison" className={styles.mobileNavLink}>
            Price Comparison
          </Link>
          <Link href="/blog" className={styles.mobileNavLink}>
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
