import React from 'react';

const Brick = ({ position }) => {
    return (
        <div style={{
            position: 'absolute',
            left: `${position.x}vw`,
            top: `${position.y}vh`,
            width: `${position.width}vw`,
            height: `${position.height}vh`,
            backgroundColor: '#FFFFFF',
            padding: '1em',
            borderRadius:'5px',
            boxShadow: '#EBEBEB 0px 7px 2px, #ECB392 0px 8px 5px'
        }} />
    );
};

export default Brick;