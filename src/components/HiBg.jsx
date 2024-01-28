import React, { useEffect } from 'react';
// import hibgImage from '../images/hibg.png';

const HiBg = () => {
  useEffect(() => {
    const hiBgElement = document.querySelector('.hi-bg');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const bgOpacity = Math.max(0.5 - (scrollY / maxScroll) * 0.5, 0);

      hiBgElement.style.opacity = bgOpacity;
    });
  }, []);

  return (
    <div className='hi-bg'>
      {/* <img src={hibgImage} alt="Hi Background" /> */}
      <h1>hibg</h1>
    </div>
  );
}

export default HiBg;