import { FC } from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.error}>
      <p className={styles.errorText}>
        {message || 'Something went wrong. Please try again later.'}
      </p>
    </div>
  );
};

export default ErrorMessage;