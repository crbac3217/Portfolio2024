import React, { useState, useEffect } from 'react';
import './css/App.css';
import './css/index.css';
import MainSection from './components/mainSection';
import Intro from './components/intro';
import Works from './components/works';
import Contact from './components/contact';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const newSection = Math.floor(window.scrollY / sectionHeight);
      console.log("Section changed to:", newSection); // Log the current section
      setCurrentSection(newSection);
    };

    console.log("Binding scroll event"); // Log when the component mounts
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log("Unbinding scroll event"); // Log when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App scroll-container">
      <MainSection currentSection={currentSection} />
      <Intro />
      <Works />
      <Contact />
      {/* ... other components if any ... */}
    </div>
  );
}

export default App;
