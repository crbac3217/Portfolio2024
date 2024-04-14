import React from 'react';
import '../css/WorksSection.css';

const Unfold = ({ item }) => {
    return (
        <div className='unfoldedSection'>
        <h1>Hi the item is {item.title}</h1>
        </div>
    );
};

export default Unfold;
