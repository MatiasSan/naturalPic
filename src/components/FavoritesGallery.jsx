import { useContext } from 'react';
import { ImagesContext } from '../context/ImagesContext';
import IconHeart from './IconHeart';

const FavoritesGallery = () => {
  const { images, changeLikedStatus } = useContext(ImagesContext);

  const favoriteImages = images.filter(function (e) {
    return e.liked === true;
  });

  return (
    <main className="content">
      <div className="gallery">
        {favoriteImages.length <= 0 ? <h4>Sin favoritos</h4> : null}
        {favoriteImages.map((e) => {
          return (
            <div key={e.id} className="imageContainer">
              <a target="_blank" href={e.url}>
                <img src={e.src.large2x} alt={e.alt} />
              </a>
              <span className="photographer">
                {e.photographer !== '' ? e.photographer : <span>Unknown</span>}
              </span>
              <span className="imageDescription">
                {e.alt !== '' ? e.alt : <span>Untitled</span>}
              </span>
              <div className="heartIcon">
                <button
                  className="iconButton"
                  onClick={() => changeLikedStatus(e.id)}
                >
                  <IconHeart liked={e.liked} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default FavoritesGallery;
