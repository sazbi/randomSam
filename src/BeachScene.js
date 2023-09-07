import React, { useEffect, useRef } from 'react';
import './Beach.css';

const BeachScene = () => {
  const waveRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const wave = document.createElement('div');
      wave.className = 'wave';
      wave.style.bottom = `${Math.random() * 30}px`;
      wave.style.left = `${Math.random() * 100}vw`;
      waveRef.current.appendChild(wave);

      setTimeout(() => {
        wave.remove();
      }, 2000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scene">
      <div className="sun"></div>
      <div className="ocean" ref={waveRef}></div>
      <div className="sand"></div>
    </div>
  );
};

export default BeachScene;
