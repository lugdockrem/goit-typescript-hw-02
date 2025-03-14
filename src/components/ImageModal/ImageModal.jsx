import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={styles.modalContent}>
        <img
          src={image.largeImageURL}
          alt={image.tags}
          className={styles.modalImage}
        />
        <div className={styles.imageInfo}>
          <p className={styles.author}>By: {image.author}</p>
          <p className={styles.description}>{image.description}</p>
          <div className={styles.stats}>
            <span>❤️ {image.likes} likes</span>
            {image.downloads && <span>⬇️ {image.downloads} downloads</span>}
            {image.location && <span>📍 {image.location}</span>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;