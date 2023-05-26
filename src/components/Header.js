import React from 'react';
import './Header.css';
import profilePicture from '../images/profile-pic.png';
import '../App.css';


const Header = () => {
  return (
    <header className="header-section">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-name">Brendan McIntosh</h1>
          <p className="header-profession">Software Engineer</p>
        </div>
        <div className="header-image">
          <img src={profilePicture} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
