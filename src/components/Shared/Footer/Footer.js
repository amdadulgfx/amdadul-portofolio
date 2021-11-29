import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div style={{ textAlign: 'center' }}>

                <a
                    href="https://github.com/amdadulgfx"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/amdadulgfx/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a
                    href="https://web.facebook.com/amdadulgfx/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;