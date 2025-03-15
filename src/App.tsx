import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { searchImages } from './services/api';
import { Image } from './types';
import styles from './App.module.css';

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await searchImages(query, page);
        
        setImages(prevImages => 
          page === 1 ? data.images : [...prevImages, ...data.images]
        );
        setTotalPages(data.totalPages);
        
        if (data.images.length === 0) {
          toast.error('No images found for your query');
        } else if (page === 1) {
          toast.success(`Found ${data.total} images`);
        }
      } catch (error) {
        setError('Failed to fetch images. Please try again.');
        toast.error('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery === query) return;
    
    setQuery(searchQuery);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={handleSearch} />
      
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery 
            images={images} 
            onImageClick={handleImageClick}
          />
          {isLoading && (
            <div className={`${styles.loader} ${images.length === 0 ? styles.initialLoader : ''}`}>
              <Loader />
            </div>
          )}
          {!isLoading && images.length > 0 && page < totalPages && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      
      <Toaster position="top-right" />
    </div>
  );
}

export default App;