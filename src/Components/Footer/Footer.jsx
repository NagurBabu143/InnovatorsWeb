import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-logo">
          <img
            decoding="async"
            src="https://innovatorstech.com/wp-content/uploads/2024/06/Innovators-Tech-light.svg"
            alt="Innovators Tech Solutions Logo"
            className="wp-image-11546"
            style={{ width: "226px", height: "auto" }}
          />
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>

        
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><strong>Phone:</strong> 1800 203 4199</p>
          <p><strong>Email:</strong> <a href="mailto:info@innovatorstech.com">info@innovatorstech.com</a></p>
          <p>
            KUB Tower, Plot No. 81, Rd Number 3, Sri Shyam Nagar, Telecom Nagar, <br />
            Gachibowli, Hyderabad, Telangana 500032
          </p>
        </div>

        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/pro-services">Pro Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>&copy; 2025 | All rights reserved by Innovators Tech Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
