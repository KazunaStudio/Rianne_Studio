import React, { useState, useEffect, useRef } from 'react';
import '../Functions/Functions.css';

function importAll(r) {
  return r.keys().map(r);
}

const Gallery = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    };

    if (popupOpen) {
      document.body.classList.add('popup-open');
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove('popup-open');
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.classList.remove('popup-open');
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupOpen]);

  const images = importAll(require.context('../Images/Achievements', false, /\.(png|jpe?g|svg)$/));
  const totalImages = images.length;

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div>
          <div className='float_up'>Achievements</div>
          <hr className='float_up' style={{borderTop:"solid 3px #5E5E5E", width:"75%",margin:"0 auto"}}/>
          <div style={{maxWidth:"70%",margin:"0 auto", marginTop:"2%"}}>
            <div className='centered_gallery'>
              <div className="float_up gallery">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="image-container"
                    onClick={() => { setPopupOpen(true); setCurrentImageIndex(index); }}
                  >
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={`popup ${popupOpen ? 'show' : ''}`}>
              <div className="popup-content" ref={popupRef}>
                {popupOpen && (
                  <div>
                    <div className="popup-buttons">
                      <button onClick={goToPrevImage} className="prev-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
                        </svg>
                      </button>
                      <button onClick={togglePopup} className="close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                      </button>
                      <button onClick={goToNextImage} className="next-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
                        </svg>
                      </button>
                    </div>
                    <img src={images[currentImageIndex]} />
                  </div>
                )}
              </div>
            </div>
      </div>
    </div>
  );
}

export default Gallery;