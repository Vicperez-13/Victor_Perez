import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Slideshow from "./components/Slideshow";
import Socials from "./components/Socials";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects"; // Add this import
import "./styles/_variables.css";
import "./styles/_mixins.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/about.css";
import "./styles/socials.css";
import "./styles/work-experience.css";
import "./styles/background.css"; // Import the Tron-like background styles
import "./App.css"; // Import global app styles

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const homeImages = [
    "https://picsum.photos/id/10/600/400",
    "https://picsum.photos/id/20/600/400",
    "https://picsum.photos/id/30/600/400",
  ];

  const aboutImages = [
    "https://picsum.photos/id/40/600/400",
    "https://picsum.photos/id/50/600/400",
    "https://picsum.photos/id/60/600/400",
  ];

  const workExperienceImages = [
    "https://picsum.photos/id/70/600/400",
    "https://picsum.photos/id/80/600/400",
    "https://picsum.photos/id/90/600/400",
  ];

  // Generate randomized lines for the Tron-like background
  const renderLines = () => {
    const lines = [];
    const numLines = 10; // Fewer lines for a cleaner look

    for (let i = 0; i < numLines; i++) {
      const isLShaped = Math.random() > 0.5; // Randomly decide if the line is L-shaped
      const thickness = Math.random() * 2 + 1; // Random thickness between 1px and 3px
      const length1 = Math.random() * 50 + 50; // Random length for the first segment
      const length2 = Math.random() * 50 + 50; // Random length for the second segment
      const offsetX = Math.random() * 100; // Random horizontal offset
      const offsetY = Math.random() * 100; // Random vertical offset

      if (isLShaped) {
        // Create an L-shaped line
        lines.push(
          <div
            key={`l-vertical-${i}`}
            className="line vertical"
            style={{
              left: `${offsetX}%`,
              width: `${thickness}px`,
              height: `${length1}%`,
              top: `${offsetY}%`,
            }}
          >
            <div className="car"></div> {/* Add a moving "car" */}
          </div>
        );
        lines.push(
          <div
            key={`l-horizontal-${i}`}
            className="line horizontal"
            style={{
              top: `${offsetY + length1}%`,
              height: `${thickness}px`,
              width: `${length2}%`,
              left: `${offsetX}%`,
            }}
          >
            <div className="car"></div> {/* Add a moving "car" */}
          </div>
        );
      } else {
        // Create a straight line (vertical or horizontal)
        const isVertical = Math.random() > 0.5; // Randomly decide if the line is vertical or horizontal
        if (isVertical) {
          lines.push(
            <div
              key={`vertical-${i}`}
              className="line vertical"
              style={{
                left: `${offsetX}%`,
                width: `${thickness}px`,
                height: `${length1}%`,
                top: `${offsetY}%`,
              }}
            >
              <div className="car"></div> {/* Add a moving "car" */}
            </div>
          );
        } else {
          lines.push(
            <div
              key={`horizontal-${i}`}
              className="line horizontal"
              style={{
                top: `${offsetY}%`,
                height: `${thickness}px`,
                width: `${length1}%`,
                left: `${offsetX}%`,
              }}
            >
              <div className="car"></div> {/* Add a moving "car" */}
            </div>
          );
        }
      }
    }

    return lines;
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app light-mode"}>
      {/* Tron-like background */}
      <div className="body-background">{renderLines()}</div>

      {/* App content */}
      <div className="app-content">
        <Router>
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Socials />
                  <Slideshow images={homeImages} />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Slideshow images={aboutImages} />
                </>
              }
            />
            <Route
              path="/work-experience"
              element={
                <>
                  <WorkExperience />
                  <Slideshow images={workExperienceImages} />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Projects />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
