import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/header.css";
import lightThemeIcon from "../assets/lightMode.svg";
import darkThemeIcon from "../assets/darkMode.svg";

const Header = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // For navigation

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    toggleTheme();
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Victor Morales Perez</h1>

        {/* Show back arrow on all pages except the landing page */}
        {location.pathname !== "/" && (
          <button
            className="header__back-arrow"
            onClick={() => navigate("/")}
            aria-label="Go back to the landing page"
          >
            ← Back
          </button>
        )}

        {/* Show navigation cards only on the landing page */}
        {location.pathname === "/" && (
          <nav className="header__nav">
            <div
              className="header__nav-container"
              onClick={() => navigate("/about")}
            >
              <p className="header__link">About</p>
              <p className="header__description">Learn more about me</p>
            </div>
            <div
              className="header__nav-container"
              onClick={() => navigate("/work-experience")}
            >
              <p className="header__link">Work Experience</p>
              <p className="header__description">View my work experience</p>
            </div>
            <div
              className="header__nav-container"
              onClick={() => navigate("/projects")}
            >
              <p className="header__link">Projects</p>
              <p className="header__description">See my projects</p>
            </div>
          </nav>
        )}

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
