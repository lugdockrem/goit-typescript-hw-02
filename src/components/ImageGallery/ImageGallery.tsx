import { FC } from 'react';
import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images?.length) {
    return null;
  }

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard 
            image={image} 
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;