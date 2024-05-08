import React from 'react';

const Ball = ({ position, color }) => {
  return (
    <div style={{
      position: 'absolute',
      left: `${position.x}vw`,
      top: `${position.y}vh`,
      width: '0.5vw',
      height: '0.5vw',
      borderRadius: '50%',
      backgroundColor: 'transparent',  // Set the background to transparent
      border: `0.25vw solid ${color}`,          // Define the border thickness`          // Correctly use the color prop for the border color
    }} />
  );
};

export default Ball;
