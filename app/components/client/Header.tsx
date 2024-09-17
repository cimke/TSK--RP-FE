'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

interface HeaderProps {
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src='http://localhost:1337/assets/logo.svg' alt='RatePunk' className={styles.logoImage} />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className={styles.desktopNav}>
            <Link href='/chrome-extension' className={`${styles.navLink} glow`}>
              Chrome Extension
            </Link>
            <Link href='/price-comparison' className={styles.navLink}>
              Price Comparison
            </Link>
            <Link href='/blog' className={styles.navLink}>
              Blog
            </Link>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button className={styles.menuButton} onClick={toggleMenu} aria-label='Toggle menu'>
            <img src='http://localhost:1337/assets/menu.svg' alt='Menu' />
          </button>
        )}
      </div>

      {/* mobile */}
      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href='/chrome-extension' className={styles.mobileNavLink}>
            Chrome Extension
          </Link>
          <Link href='/price-comparison' className={styles.mobileNavLink}>
            Price Comparison
          </Link>
          <Link href='/blog' className={styles.mobileNavLink}>
            Blog
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
