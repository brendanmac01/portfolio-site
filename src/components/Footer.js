import React from 'react';
import './Footer.css';
import '../App.css';
import githubLogo from '../images/github-logo.png'; // Replace with your GitHub logo image
import linkedinLogo from '../images/linkedin-logo.png'; // Replace with your LinkedIn logo image
import gmailLogo from '../images/gmail-logo.png'; // Add the Gmail logo image file

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mcintoshbrendan22@gmail.com';
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/brendanmac01">
          <img src={githubLogo} alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/brendan-mcintosh-949618190/">
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
