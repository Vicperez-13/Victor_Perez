import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ toggleTheme }) => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">My Personal Website</h1>
                <nav className="header__nav">
                    <Link className="header__link" to="/">Home</Link>
                    <Link className="header__link" to="/about">About</Link>
                    <Link className="header__link" to="/socials">Socials</Link>
                    <Link className="header__link" to="/work-experience">Work Experience</Link>
                </nav>
                <button className="header__theme-toggle" onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
        </header>
    );
};

export default Header;