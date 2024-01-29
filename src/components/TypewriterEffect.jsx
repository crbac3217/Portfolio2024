import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, writeSpeed = 100, deleteSpeed = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        onComplete(); // Call onComplete when deletion is done
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (displayedText.length === text.length) {
        // Wait a bit after completing typing
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, writeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, displayedText, isDeleting, deleteSpeed, writeSpeed, onComplete]);

  return <span>{displayedText}</span>;
};

export default TypewriterEffect;
