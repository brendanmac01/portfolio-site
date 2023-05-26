import React from 'react';
import './Navbar.css';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="#resume">Resume</a></li>
        <li className="navbar-item"><a href="#bio">Bio</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
