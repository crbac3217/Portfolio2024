// Iam.jsx
import React from 'react';
import '../css/Iam.css';

const Iam = ({ currentSection }) => {
  const roles = [
    'Graphic Designer',
    'Game Designer',
    // ... other roles ...
  ];

  return (
    <div className="typewriter-container">
      <p>"I am a {roles[currentSection] || roles[0]}"</p>
    </div>
  );
};

export default Iam;