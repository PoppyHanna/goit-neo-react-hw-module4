import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/search/SearchBar';
import Loader from './components/loader/Loader';
import ImageCard from './components/card/ImageCard';
import ImageModal from './components/modal/ImageModal';
import LoadMoreBtn from './components/load/LoadMoreBtn';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const API_KEY = 'lBe-mUB60Xxla_EdiZjir6wfr6grDw0FERa4_66iNwI'; 

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!query) return; 

    const fetchImages = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`
        );
        const { results, total_pages } = response.data;

         setImages(prev => [...prev, ...results]);

         setShowBtn(page < total_pages);
        // setImages((prevImages) => [...prevImages, ...results]);
        // setShowBtn(total_pages && total_pages !== page); 
      } catch {
        setError('Error fetching images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleLoadMore = () => {
    // setPage((prevPage) => prevPage + 1);
    setPage(prev => prev + 1);
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]); 
    setError('');
    // setLoading(true); 
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1 className='title'>Welcome to images Search App!!!</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ul className='list'>
        {images.map((image) => (
          <li key={image.id} onClick={() => handleImageClick(image)} className='pic'>
            <ImageCard imageUrl={image.urls.small} altText={image.alt_description} />
          </li>
        ))}
      </ul>
      {loading && <Loader />} 
      {showBtn && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={selectedImage !== null} image={selectedImage} onClose={handleCloseModal} />
      {error && <p className="error-message">{error}</p>} 
    </>
  );
}



