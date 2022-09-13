import React from "react";
import "../../common/_sectionElements.scss";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <>
      <div className="section ach" id="about">
        <div className="about">ABOUT</div>
        <ul className="section-content abt">
          <li>
            <AboutCards bool={true} />
          </li>
          <li>
            <AboutCards bool={false} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
