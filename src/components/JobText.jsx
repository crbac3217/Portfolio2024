// JobText.jsx
import React from 'react';
import '../css/JobText.css';

const JobText = ({ text, style = {} }) => {
    return (
        <div className="job-text" style={style}>
            and I'm a {text}
        </div>
    );
};

export default JobText;
