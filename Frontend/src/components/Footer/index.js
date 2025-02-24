import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ServeStream</h3>
          <p>Elevate your Brand with ServeStream</p>
          <button className="button-primary">Schedule a Free Appointment</button>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="//">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Sales & Marketing</li>
            <li>IT / Web Development</li>
            <li>Creative Services</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@servestream.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-icons">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IN</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ServeStream. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;