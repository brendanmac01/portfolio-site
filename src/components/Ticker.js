import React from 'react';
import './Ticker.css';

const Ticker = ({ items }) => {
  return (
    <div className="ticker-container">
      <div className="ticker">
        {items.map((item, index) => (
          <div key={index} className="ticker-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
