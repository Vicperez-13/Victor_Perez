import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import lightThemeIcon from "../assets/lightMode.svg";
import darkThemeIcon from "../assets/darkMode.svg";

const Header = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme();
  };
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Victor Morales Perez</h1>
        <nav className="header__nav">
          <Link className="header__link" to="/">
            Home
          </Link>
          <Link className="header__link" to="/about">
            About
          </Link>

          <Link className="header__link" to="/work-experience">
            Work Experience
          </Link>
        </nav>
        <button className="header__theme-toggle" onClick={handleThemeToggle}>
          <img
            src={isDarkMode ? lightThemeIcon : darkThemeIcon}
            alt={isDarkMode ? "Toggle Dark Theme" : "Toggle Light Theme"}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
