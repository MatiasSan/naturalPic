import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ImagesContext = createContext();

const URL = 'https://api.pexels.com/v1/search';
const apiKey = '1KGyF6yZkmGOm5tbnwvs5VkUBBmQxiLTTdk33QRUL9klbWa2bdwc4Xkc';
const query = 'nature';
const numberOfImages = 15;

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getPhotosData = async () => {
    try {
      const response = await axios(`${URL}`, {
        headers: {
          Authorization: apiKey,
        },
        params: {
          query: query,
          per_page: numberOfImages,
        },
      });
      if (response.status !== 200) {
        throw new Error('Problemas obteniendo la data');
      }
      const photosData = response.data.photos;
      setImages(photosData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPhotosData();
  }, []);

  const changeLikedStatus = (id) => {
    const newImages = images.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          liked: !e.liked,
        };
      }
      return e;
    });
    setImages(newImages);
  };

  return (
    <ImagesContext.Provider value={{ images, setImages, changeLikedStatus }}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;
