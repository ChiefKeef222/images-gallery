import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Search from './components/Search.js';
import ImageCard from './components/ImageCard.js';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome.js';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const getSavedImages = async () => {
    try {
      const res = await axios.get(`${API_URL}/images`);
      setImages(res.data || []);
    } catch (error) {
      console.error(
        'Error fetching images:',
        error.response?.data || error.message,
      );
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      await getSavedImages();
    };
    fetchImages();
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${API_URL}/new-image?query=${word}`);
      setImages((prevImages) => [{ ...res.data, title: word }, ...prevImages]);
      setWord('');
    } catch (error) {
      console.error(
        'Error searching image:',
        error.response?.data || error.message,
      );
    }
  };

  const handleSaveImage = async (id) => {
    const imageToBeSaved = images.find((image) => image.id === id);
    imageToBeSaved.saved = true;

    try {
      const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
      if (res.data?.inserted_id) {
        setImages(
          images.map((image) =>
            image.id === id ? { ...image, saved: true } : image,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteImage = (id) => {
    setImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-4">
                <ImageCard
                  image={image}
                  deleteImage={handleDeleteImage}
                  saveImage={handleSaveImage}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
}

export default App;
