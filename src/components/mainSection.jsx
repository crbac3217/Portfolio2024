import React from 'react';
import '../css/main.css';
import Hi from './Hi';
import Iam from './Iam';

const MainSection = ({ currentSection }) => {
  return (
    <div className="main-container">
      <Hi isAtTop={currentSection > 0} />
      <Iam currentSection={currentSection} />
      {/* Additional sections for scrolling */}
      <div className="section">Section 1 Content</div>
      <div className="section">Section 2 Content</div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default MainSection;
