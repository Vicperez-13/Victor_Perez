import React from "react";
import "../styles/about.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiVite,
  SiAdobephotoshop,
  SiGit,
  SiFigma,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Me</h1>
      <div className="about__content">
        <section className="about__activities">
          <p className="about__text">
            I’m a lifelong learner with a passion for problem-solving,
            creativity, and exploration. From playing collegiate soccer to
            tackling challenges in software development, I thrive in
            environments that push me to grow. Whether it’s coding, cooking, or
            climbing, I approach everything with curiosity and a drive to
            improve.
          </p>
        </section>
        <section className="about__location">
          <h2 className="about__subtitle">Where I'm From</h2>
          <p className="about__text">
            I come from the small town of Okanogan, where community and
            resilience shape who I am. As a Latino, I value culture, diversity,
            and connection—whether through travel, food, or collaborating on
            meaningful projects. I’m eager to bring my adaptability, teamwork,
            and enthusiasm for learning to a dynamic engineering team.
          </p>
        </section>
        <section className="about__education">
          <h2 className="about__subtitle">
            Washington State University - Pullman Washington - 2024
          </h2>
          <ul className="about__text">
            <li className="about__education-name">BA Spanish Linguistics</li>
            <li className="about__education-name">Minor: Fine arts</li>
            <li className="about__education-name">
              Minor: Teaching english as a foreign language
            </li>
          </ul>
          <h2 className="about__subtitle">
            TripleTen Boot Camp - Online - 2025
          </h2>
          <ul className="about__text">
            <li className="about__education-name">Fullstack Engineer</li>
          </ul>
          <div className="about__icons">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJs title="JavaScript" />
            <FaNodeJs title="Node.js" />
            <SiVite title="Vite.js" />
            <FaReact title="React.js" />
            <FaGithub title="GitHub" />
            <FaLinkedin title="LinkedIn" />
            <SiAdobephotoshop title="Photoshop" />
            <SiGit title="Git" />
            <SiFigma title="Figma" />
            <SiMongodb title="MongoDB" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
