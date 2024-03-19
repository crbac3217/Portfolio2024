// JobText.jsx
import React from 'react';
import '../css/JobText.css'; // Your existing CSS path

const JobText = ({ style = {} }) => {
    return (
        <div className="job-text" style={style}>
        <h1>
        and I'm a graphic designer
        </h1>
        </div>
    );
};

export default JobText;
