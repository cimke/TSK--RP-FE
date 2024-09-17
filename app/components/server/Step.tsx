import styles from '../../styles/main.module.scss';

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

export default Step;
