import React from 'react';
import Step from './Step';
import styles from '../../styles/main.module.scss';


const Main: React.FC<{ InputComponent: React.ReactNode}> = ({ InputComponent }) => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.referSection}>
          <div className={styles.container}>
            <div className={styles.title}>REFER FRIENDS AND GET REWARDS</div>
            <div className={styles.description}>
              Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.
            </div>
            {InputComponent}
            <div className={styles.legal}>
              Limits on max rewards apply.
            </div>
          </div>
        </div>
        <div className={styles.stepsSection}>
          <Step
            icon='http://localhost:1337/assets/invite.svg'
            title='STEP 1'
            subtitle='INVITE FRIENDS'
            description='Refer friends with your unique referral link.'
          />
          <Step
            icon='http://localhost:1337/assets/collect-coins.svg'
            title='STEP 2'
            subtitle='COLLECT COINS'
            description='Get 1 coin for each friend that installs our extension using your referral link.'
            reversed={true}
          />
          <Step
            icon='http://localhost:1337/assets/voucher.svg'
            title='STEP 3'
            subtitle='GET VOUCHER'
            description='Redeem for a $20 hotel booking voucher once you collect 20 coins.'
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
