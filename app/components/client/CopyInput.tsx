'use client';

import React, { useState } from 'react';
import styles from '../../styles/copyInput.module.scss';

interface CopyInputProps {
  textToCopy: string;
}

const CopyInput: React.FC<CopyInputProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (text: string): void => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };

  return (
    <div className={styles.copyInput}>
      <input
        type="text"
        value={textToCopy}
        readOnly
        aria-label="Text to copy"
      />
      <button
        onClick={() => handleCopy(textToCopy)}
        className={styles.copyButton}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyInput;


// 'use client';

// import React from 'react';
// import { useState } from 'react';
// import styles from '../../styles/copyInput.module.scss';

// export default function CopyInput({ textToCopy }: { textToCopy: string }) {
//     const [copied, setCopied] = useState<boolean>(false);

//     const handleCopy = (text: string): void => {
//       navigator.clipboard.writeText(text);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     };
  
    

//     return (
      
//       <div className={styles.copyInput}>
//         <input type='text' value={textToCopy} readOnly />
//         <button onClick={() => handleCopy(textToCopy)} className={styles.copyButton}>
//           {copied ? 'Copied!' : 'Copy'}
//         </button>
//       </div>
//     );
//   }
