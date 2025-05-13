import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Me</h1>
      <div className="about__content">
        <section className="about__activities">
          <h2 className="about__subtitle">Activities</h2>
          <p className="about__text">[Your activities go here]</p>
        </section>
        <section className="about__location">
          <h2 className="about__subtitle">Where I'm From</h2>
          <p className="about__text">[Your location goes here]</p>
        </section>
        <section className="about__education">
          <h2 className="about__subtitle">Education</h2>
          <p className="about__text">[Your education details go here]</p>
        </section>
      </div>
    </div>
  );
};

export default About;
