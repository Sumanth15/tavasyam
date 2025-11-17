// UpgradeCard.jsx
import React from 'react';
import './UpgradeCard.css';

const UpgradeCard = () => {
  return (
    <div className="upgrade-card">
      <div className="upgrade-content">
        <h3>50% off on Premium Membership</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
        <button className="upgrade-btn">Upgrade</button>
      </div>
      {/* <div className="upgrade-image">
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop" alt="upgrade" />
      </div> */}
      <div className="sparkles">✨</div>
    </div>
  );
};

export default UpgradeCard;
