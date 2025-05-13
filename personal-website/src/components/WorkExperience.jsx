import React from "react";
import "../styles/work-experience.css";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2 className="work-experience__title">Work Experience</h2>
      <div className="work-experience__item">
        <h3 className="work-experience__position">Barista</h3>
        <p className="work-experience__company">Blue Star Coffee Roaster</p>
        <p className="work-experience__duration">08/1/2024 - current</p>
        <ul className="work-experience__description">
          <li>
            Managed packing and shipping logistics for coffee orders, ensuring
            timely nationwide deliveries.
          </li>
          <li>
            Handled financial transactions with accuracy and maintained
            accountability.
          </li>
          <li>
            Fostered team collaboration through clear and thorough communication
            to optimize workflows.
          </li>

          <li>
            Assisted in production processes, ensuring quality standards were
            met
          </li>
          <li>
            Maintained equipment for coffee production and barista operations to
            ensure smooth daily performance.
          </li>
        </ul>
      </div>
      <div className="work-experience__item">
        <h3 className="work-experience__position">Sales Associate</h3>
        <p className="work-experience__company"> WSU Athletic Ticket Office</p>
        <p className="work-experience__duration">08/16/2023 - 07/27/2024</p>

        <ul className="work-experience__description">
          <li>
            Utilized specialized ticketing software to manage sales and
            efficiently allocate seating in stadiums, ensuring an optimal
            customer experience.
          </li>
          <li>
            Provided technical support to assist customers with troubleshooting
            and navigating the ticketing app, resolving issues with patience and
            professionalism.
          </li>
          <li>
            Contributed to seamless game day operations by coordinating ticket
            distribution, monitoring systems, and supporting on-site logistics.
          </li>

          <li>
            Effectively trained new hires on how to use Workforce and other
            Software.
          </li>
        </ul>
      </div>
      <div className="work-experience__item">
        <h3 className="work-experience__position">Skills</h3>
        <ul className="work-experience__description work-experience__item-skills">
          <li>ERP system knowledge</li>
          <li>Inventory management/ stock control.</li>
          <li>Equipment maintenance/ troubleshooting.</li>
          <li>PC Assembly/Hardware Configuration</li>
          <li>Communication/Team Collaboration</li>
          <li>Adaptability/Fast-paced environments/Moldable</li>
        </ul>
      </div>

      {/* Add more work experience items as needed */}
    </div>
  );
};

export default WorkExperience;
