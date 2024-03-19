import React from 'react';
import '../css/Hi.css';

const Hi = ({ size, top, text }) => {
    const style = {
        fontSize: `${size}vw`, // Apply responsive font size
        position: 'absolute',
        top: `${top}`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'font-size 0.5s, top 0.5s',
    };

    return (
        <div className="hi-container" style={style}>
            <h1>{text}</h1>
        </div>
    );
};

export default Hi;
