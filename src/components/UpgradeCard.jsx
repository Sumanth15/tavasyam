// UpgradeCard.jsx
import React from 'react';
import './UpgradeCard.css';


import Group13 from '../assets/Group 13.svg';
import Pic from '../assets/pic.png';

const UpgradeCard = () => {
  return (
    <div className="upgrade-card">
      <div className="upgrade-content">
        <h3>50% off on Premium Membership</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        <button className="upgrade-btn">Upgrade</button>
      </div>
      <div className="upgrade-art">
        <img src={Group13} alt="bg-shape" className="upgrade-bg-svg" />
        <img src={Pic} alt="character" className="upgrade-front-img" />
      </div>
    </div>
  );
};

export default UpgradeCard;
