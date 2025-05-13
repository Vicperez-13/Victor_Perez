import React from "react";
import "../styles/work-experience.css";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2 className="work-experience__title">Work Experience</h2>
      <div className="work-experience__item">
        <h3 className="work-experience__position">Job Title 1</h3>
        <p className="work-experience__company">Company Name 1</p>
        <p className="work-experience__duration">
          Duration: Month Year - Month Year
        </p>
        <p className="work-experience__description">
          Brief description of responsibilities and achievements.
        </p>
      </div>
      <div className="work-experience__item">
        <h3 className="work-experience__position">Job Title 2</h3>
        <p className="work-experience__company">Company Name 2</p>
        <p className="work-experience__duration">
          Duration: Month Year - Month Year
        </p>
        <p className="work-experience__description">
          Brief description of responsibilities and achievements.
        </p>
      </div>
      {/* Add more work experience items as needed */}
    </div>
  );
};

export default WorkExperience;
