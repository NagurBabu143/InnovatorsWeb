
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import './Navbar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`mobile-header ${isSticky ? 'sticky-header' : ''}`}>
            <div className="mobile-header-row">
                
                <div className="logo-container">
                    <a className="logo-link" href="https://innovatorstech.com/">
                        <img width="150" height="45" src="https://innovatorstech.com/wp-content/uploads/2024/06/Innovators-Tech-Black.svg" alt="Innovators Tech Solutions" />
                    </a>
                </div>

               
                <div className="header-icons-container">
                    <div className="header-icon menu-trigger" onClick={toggleMenu}>
                        <span className="menu-trigger-icon">
                            <span className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            
            {isMenuOpen && (
                <div className="mobile-header-menu-container active">
                    <div className="mobile-header-row">
                       
                        <div className="header-icons-container">
                            <button className="header-icon menu-close" onClick={toggleMenu}>
                                ✖
                            </button>
                        </div>
                    </div>

                    
                    <nav>
                        <ul id="menu-main-menu" className="main-menu fullwidth-trigger-menu">
                            <li><a href="https://innovatorstech.com/">Home</a></li>
                            <li><a href="https://innovatorstech.com/meet-innovators/">About Us</a></li>
                            <li><a href="https://innovatorstech.com/pro-services/">Pro Services</a></li>
                            <li><a href="https://innovatorstech.com/careers/">Careers</a></li>
                            <li><a href="https://innovatorstech.com/blogs/">Blogs</a></li>
                            <li><a href="https://innovatorstech.com/contacts/">Contact</a></li>
                        </ul>
                    </nav>

                    
                    <div className="header-mobile-contacts">
                        <div className="contact-items-title">Contacts</div>
                        <div className="contact-item contact-item-phone">
                            <a href="tel:+18002034199">1800 203 4199</a>
                        </div>
                        <div className="contact-item contact-item-email">
                            <a href="mailto:info@innovatorstech.com">info@innovatorstech.com</a>
                        </div>
                        <div className="footer-logo">
                                 
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
                    </div>

                    <div className="header-mobile-button">
                        <a className="neuros-button" href="https://innovatorstech.com/contacts/">Get in touch<span className="button-inner"></span></a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
