import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;