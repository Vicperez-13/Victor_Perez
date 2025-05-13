import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Socials from './components/Socials';
import WorkExperience from './components/WorkExperience';
import './styles/_variables.css';
import './styles/_mixins.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/about.css';
import './styles/socials.css';
import './styles/work-experience.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Socials />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;