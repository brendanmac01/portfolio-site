import React from 'react';
import './Footer.css';
import '../App.css';
import githubLogo from '../images/github-logo.png'; // Replace with your GitHub logo image URL
import linkedinLogo from '../images/linkedin-logo.png'; // Replace with your LinkedIn logo image URL
import gmailLogo from '../images/gmail-logo.png'; // Replace with your Gmail logo image URL

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mcintoshbrendan22@gmail.com';
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/your-github-url">
          <img src={githubLogo} alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-url">
          <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
        </a>
        <button className="footer-email" onClick={handleEmailClick}>
          <img src={gmailLogo} alt="Gmail" className="footer-icon" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
