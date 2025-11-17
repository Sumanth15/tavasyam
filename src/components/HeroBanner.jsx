// HeroBanner.jsx
import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Track Your Daily Activities</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod
        </p>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop" alt="fitness" />
      </div>
    </div>
  );
};

export default HeroBanner;
