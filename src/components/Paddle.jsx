// src/Paddle.js
import React from 'react';

const Paddle = ({ position }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '10vh',
      left: `${position}vw`,
      width: '5vw',
      height: '1vh',
      backgroundColor: '#EA8866',
      padding: '1em',
      borderRadius:'5px',
      boxShadow: '#D57D5F 0px 7px 2px, #ECB392 0px 8px 5px'
    }} />
  );
};

export default Paddle;
