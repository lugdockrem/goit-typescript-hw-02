import styles from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
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