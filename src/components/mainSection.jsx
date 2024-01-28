import React from 'react';
import '../css/main.css';
import Hi from './Hi'; // Make sure this path is correct

const MainSection = () => {
  return (
    <div className="main-container">
      {/* The Hi component is independent of the sections */}
      <Hi />

      {/* First section - "Hi" starts here centered */}
      <div className="first-section">
        {/* Content of the first section */}
      </div>

      {/* Subsequent sections - "Hi" will be at the top */}
      <div className="section">
        <p>Hi, I'm Ben and I'm a Graphic Designer</p>
      </div>
      <div className="section">
        <p>Hi, I'm Ben and I'm a Game Designer</p>
      </div>
      <div className="section">
        <p>Hi, I'm Ben and I'm a Motion Graphics Artist</p>
      </div>
      <div className="section">
        <p>Hi, I'm Ben and I'm a Frontend Developer</p>
      </div>
      <div className="section">
        <p>Hi, I'm Ben and I'm a UI/UX Designer</p>
      </div>
      <div className="section">
        <p>Hi, I'm Ben and I'm a 3D Modeler</p>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default MainSection;
