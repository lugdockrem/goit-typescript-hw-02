import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <p className={styles.errorText}>
        {message || 'Something went wrong. Please try again later.'}
      </p>
    </div>
  );
};

export default ErrorMessage;