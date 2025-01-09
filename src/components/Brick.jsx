import React from 'react';

const Brick = ({ position }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: `${position.x}vw`, // Horizontal position
                top: `${position.y}vh`, // Vertical position
                width: `${position.width}vw`, // Width of the brick
                height: `${position.height}vh`, // Height of the brick
                backgroundColor: '#FFFFFF',
                borderRadius: '5px',
                boxShadow: '#EBEBEB 0px 7px 2px, #ECB392 0px 8px 5px',
            }}
        />
    );
};

export default Brick;
