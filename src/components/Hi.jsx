import React, { useEffect, useState } from 'react';
import '../css/Hi.css';

const Hi = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  console.log("At least its loaded")
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event triggered"); // Check if this gets logged
      const shouldBeAtTop = window.scrollY > window.innerHeight / 2;
      setIsAtTop(shouldBeAtTop);
      console.log("Is at top:", shouldBeAtTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`main-hi ${isAtTop ? 'at-top' : ''}`}>
      <h1>hi</h1>
    </div>
  );
};

export default Hi;
