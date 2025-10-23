import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Court');

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Wedding Gallery</h2>

      <div className="gallery-tabs">
        {Object.keys(galleryData).map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {galleryData[activeCategory].map((item, index) => (
          <div className="gallery-item" key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`media-${index}`} loading="lazy" />
            ) : (
                            <video
                src={item.src}
                preload="none"
                muted
                loop
                playsInline
                controls
                poster={item.poster /* optional small thumbnail */} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
