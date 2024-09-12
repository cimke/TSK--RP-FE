"use client";

import React, { useState } from 'react';
import styles from '../styles/main.module.scss';

const Main: React.FC = () => {
  const [displayState, setDisplayState] = useState(Boolean);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayState(false);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error('Invalid email address');
      return;
    }

    try {
      const response = await fetch('http://localhost:1337/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { email } }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        if (data.error && data.error.id === 'Email.exists') {
          setDisplayState(false);
          return;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      setDisplayState(true);
  
    } catch (error) {
      console.error('Error:', error);
      setDisplayState(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>REFER FRIENDS AND GET REWARDS</h1>
          <p className={styles.description}>
            {/* Sutvarkyti escapinima nes error palieka lint */}
            Refer your friends to us and earn hotel booking vouchers. We{"'"}ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.
          </p>
          {displayState && (<div className={styles.status}>
            <img src="http://localhost:1337/assets/success.svg" alt="Success icon" className={styles.coinsIcon} />
            <p className={styles.confirmationText}>Your email is confirmed!</p>
          </div>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Get Referral Link
            </button>
          </form>
          <p className={styles.terms}>Limits on max rewards apply.</p>
        </div>


        <div className={styles.stepsSection}>
          <Step
            icon="http://localhost:1337/assets/invite.svg"
            title="STEP 1"
            subtitle="INVITE FRIENDS"
            description="Refer friends with your unique referral link."
          />
          <Step
            icon="http://localhost:1337/assets/collect-coins.svg"
            title="STEP 2"
            subtitle="COLLECT COINS"
            description="Get 1 coin for each friend that installs our extension using your referral link."
            reversed={true}
          />
          <Step
            icon="http://localhost:1337/assets/voucher.svg"
            title="STEP 3"
            subtitle="GET VOUCHER"
            description="Redeem for a $20 hotel booking voucher once you collect 20 coins."
          />
        </div>
      </div>
    </main>
  );
};


// Iskelt i atskirus komponentus
interface StepProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  reversed?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, subtitle, description, reversed }) => {
    const containerClass = `${styles.step} ${reversed ? styles.reversed : ''}`;

    return (
        <div className={containerClass}>
            <img src={icon} alt={`${title} icon`} className={styles.stepIcon} />
            <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <h4 className={styles.stepSubtitle}>{subtitle}</h4>
                <p className={styles.stepDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Main;
