import { FC } from 'react';
import { Image } from '../../types';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div 
      className={styles.imageCard} 
      onClick={() => onClick(image)}
    >
      <img 
        src={image.webformatURL} 
        alt={image.tags} 
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;