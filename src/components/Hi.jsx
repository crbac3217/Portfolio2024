// Hi.jsx
import React, { useEffect, useRef } from 'react';
import '../css/Hi.css';

const Hi = ({ isAtTop }) => {
  const hiRef = useRef(null);

  useEffect(() => {
    if (hiRef.current) {
      hiRef.current.style.position = 'fixed';
      hiRef.current.style.top = isAtTop ? '0' : '50%';
      hiRef.current.style.transform = isAtTop ? 'translateX(-50%)' : 'translate(-50%, -50%)';
      hiRef.current.style.left = '50%';
    }
  }, [isAtTop]);

  return (
    <div className="main-hi" ref={hiRef}>
      <h1>Hi</h1>
    </div>
  );
};

export default Hi;
