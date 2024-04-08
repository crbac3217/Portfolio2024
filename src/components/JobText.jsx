// JobText.jsx
import React from 'react';
import '../css/JobText.css';

const JobText = ({ text, style = {} }) => {
    return (
        <div className="job-text" style={style}>
            <h1>and I'm a {text}</h1>
        </div>
    );
};

export default JobText;
