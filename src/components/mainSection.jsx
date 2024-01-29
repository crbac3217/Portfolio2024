import React, { useState, useEffect } from 'react';
import '../css/main.css';
import Hi from './Hi';
import Iam from './Iam';

const MainSection = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');

    const handleScroll = () => {
      if (!scrollContainer) return;

      const sectionHeight = window.innerHeight;
      const newSection = Math.floor(scrollContainer.scrollTop / sectionHeight);
      setCurrentSection(newSection);
      console.log("Section changed to:", newSection);
    };

    // Attach the event listener to the window, but use the scrollTop from .scroll-container
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-container">
      <Hi isAtTop={currentSection > 0} />
      <Iam currentSection={currentSection} />
      
      {/* Additional sections for scrolling */}
      <div className="section">Section 1 Content</div>
      <div className="section">Section 2 Content</div>
      <div className="section">Section 3 Content</div>
      <div className="section">Section 4 Content</div>
      <div className="section">Section 5 Content</div>
      <div className="section">Section 6 Content</div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default MainSection;
