import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.companyInfo}>
          <img src="http://localhost:1337/assets/logo.svg" alt="RatePunk Logo" className={styles.logo} />
          <p className={styles.description}>
            Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing youre getting the best deal!
          </p>
          <p className={styles.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.quickLinks}>
            <h3>QUICK LINKS</h3>
            <ul>
              <li><Link href="/price-comparison">Price Comparison</Link></li>
              <li><Link href="/chrome-extension">Chrome Extension</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/ratepunk-blog">Ratepunk Blog</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          {/* TODO: Pakeisti kazkiek dizaina, logo turi buti kvadratiniai */}
          <div className={styles.contact}>
            <h3>CONTACT</h3>
            {/* TODO: Vienam row turi eit */}
            <img src="http://localhost:1337/assets/email-footer.svg" alt="Mail us" /><a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
            <h3>SOCIAL</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Instagram"><img src="http://localhost:1337/assets/instagram.svg" alt="Instagram" /></a>
              <a href="#" aria-label="Facebook"><img src="http://localhost:1337/assets/facebook.svg" alt="Facebook" /></a>
              <a href="#" aria-label="LinkedIn"><img src="http://localhost:1337/assets/linkedin.svg" alt="LinkedIn" /></a>
              <a href="#" aria-label="Twitter"><img src="http://localhost:1337/assets/twitter.svg" alt="Twitter" /></a>
              <a href="#" aria-label="TikTok"><img src="http://localhost:1337/assets/tiktok.svg" alt="TikTok" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
