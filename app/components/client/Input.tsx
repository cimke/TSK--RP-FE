'use client';

import React, { useState } from 'react';
import styles from '../../styles/main.module.scss';
import CopyInput from './CopyInput';

interface InputProps {
  isMobile: boolean
}

interface InputFormProps {
  code: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCopy?: (e: React.MouseEvent<HTMLFormElement>) => void;
}

const MessageInput: React.FC<InputProps> = ({ isMobile }) => {
  const [error, setError] = useState('');
  const [code, setCode] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error('Invalid email address');
      return;
    }

    try {
      // TODO: Change when API routing is working
      // const response = await fetch('/api/email', {
        const response = await fetch('http://localhost:1337/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { email } }),
      });
    
      const responseJSON = await response.json();
      console.log(responseJSON);
    
      if (responseJSON.error) {
        if (responseJSON.error.details.id === 'email.exists') {
          setError(`${responseJSON.error.details.humanReadable}`);
          return;
        }
    
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      if (responseJSON.referral_code) {
        setCode(`https://ratepunk.com/${responseJSON.referral_code}`);
      } else {

        throw new Error('Referral code not found in response.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(`${error}`);
    }
  };

  const handleCopy = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
  }

  return (
    <>
      {code && (
        <div className={styles.state}>
          <img src={'http://localhost:1337/assets/success.svg'} alt="check" />
          Your email is confirmed
        </div>
      )}

      {error && (
        <div className={styles.state}>
          {error}
        </div>
      )}

      {isMobile ? 
        <MobileInput code={code} onSubmit={handleSubmit} onCopy={handleCopy}/> :
        <DesktopInput code={code} onSubmit={handleSubmit} />
      }
    </>
  );
};

const MobileInput: React.FC<InputFormProps> = ({ code, onSubmit, onCopy }) => {
  return (
    <>
      <div className={styles.emailInput}>
        <form onSubmit={code ? onCopy : onSubmit} className={styles.form}>
          <input
            type='email'
            name='email'
            placeholder={code ? code : 'Enter your email address'}
            className={styles.input}
            required
            value={code ? '' : undefined}
            disabled={!!code}
          />
          <button type='submit' className={styles.button}>
            {code ? 'Copy URL' : 'Get Referral Link'}
          </button>
        </form>
      </div>
    </>
  );
};

const DesktopInput: React.FC<InputFormProps> = ({ code, onSubmit }) => {
  return (
    <>
      {code ? (
        <CopyInput textToCopy={code} />
      ) : (
        <div className={styles.emailInput}>
          <form onSubmit={onSubmit} className={styles.form}>
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              className={styles.input}
              required
            />
            <button type='submit' className={styles.button}>
              Get Referral Link
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default MessageInput;
