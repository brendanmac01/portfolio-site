import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item navbar-item-bio"><a href="#bio">Bio</a></li>
        <li className="navbar-item navbar-item-projects"><a href="#projects">Projects</a></li>
        <li className="navbar-item navbar-item-resume"><a href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
