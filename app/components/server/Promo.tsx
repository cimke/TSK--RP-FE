import React from 'react';
import styles from '../../styles/promo.module.scss';

const AppStoreLinks: React.FC = () => {
  return (
    <section className={styles.appStoreLinks}>
      <div className={styles.container}>
        <a href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk' className={styles.storeLink} target='_blank' rel='noopener noreferrer'>
          <img src='http://localhost:1337/assets/chrome.svg' alt='Chrome Web Store icon' className={styles.storeIcon} />
          <div className={styles.storeLinkText}>
            <span className={styles.availableText}>available in the</span>
            <span className={styles.storeName}>chrome web store</span>
          </div>
        </a>
        <a href='https://apps.apple.com/app/ratepunk/id1607823726' className={styles.storeLink} target='_blank' rel='noopener noreferrer'>
          <img src='http://localhost:1337/assets/apple.svg' alt='Apple App Store icon' className={styles.storeIcon} />
          <div className={styles.storeLinkText}>
            <span className={styles.availableText}>available in the</span>
            <span className={styles.storeName}>apple app store</span>
          </div>
        </a>
        <div className={styles.chromeReviews}>
          <div className={styles.stars}>
            ★★★★★
          </div>
          <span className={styles.reviewText}>Chrome Store reviews</span>
        </div>
      </div>
    </section>
  );
};

export default AppStoreLinks;
