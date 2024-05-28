import React from 'react';
import '../css/Hi.css';

const Hi = ({ size, top, text }) => {
    const style = {
        fontSize: `${size}rem`,
        position: 'absolute',
        top: `${top}`,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'font-size 0.5s, top 0.5s',
    };

    return (
        <div className="hi-container" style={style}>
            {text}
        </div>
    );
};

export default Hi;
