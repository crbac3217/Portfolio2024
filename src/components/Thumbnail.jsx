// Thumbnail.jsx
import React from 'react';

const Thumbnail = ({ position, color }) => {
    if (!position.visible) return null;

    return (
        <div style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            width: '100px',
            height: '100px',
            backgroundColor: color,
            transform: 'translate(-50%, -50%)',
            display: 'block'
        }} />
    );
};

export default Thumbnail;
