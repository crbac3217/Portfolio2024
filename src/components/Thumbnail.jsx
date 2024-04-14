// Thumbnail.jsx
import React from 'react';
import '../css/WorksSection.css';

const Thumbnail = ({ position, image }) => {
    if (!position.visible) return null;

    return (
        <div className='thumbnail' style={{
            left: `${position.x + 5}px`,
            top: `${position.y + 5}px`,
        }}>
        <img src={image} alt='Thumbnail' className='thumbnailImage'/>
        </div>
    );
};

export default Thumbnail;
