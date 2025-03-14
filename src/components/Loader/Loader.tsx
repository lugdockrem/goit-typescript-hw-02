import { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#3f51b5" 
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;