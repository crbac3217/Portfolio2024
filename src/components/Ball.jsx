import React from 'react';

const Ball = ({ position, color }) => {
  // Check if the height is longer than the width
  const isPortrait = window.innerHeight > window.innerWidth;

  // Set size multiplier based on aspect ratio
  const sizeMultiplier = isPortrait ? 2 : 1;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}vw`,
        top: `${position.y}vh`,
        width: `${0.5 * sizeMultiplier}vw`,
        height: `${0.5 * sizeMultiplier}vw`,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: `${0.25 * sizeMultiplier}vw solid ${color}`,
      }}
    />
  );
};

export default Ball;
