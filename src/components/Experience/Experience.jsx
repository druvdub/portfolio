import React from "react";
import "../../common/_sectionElements.scss";
import ExpCard from "./ExpCard";
import { postDesc1, postDesc2 } from "./Data";

const Experience = () => {
  return (
    <>
      <div className="section exp" id="experience">
        <div className="work">EXPERIENCE</div>
        <ul className="section-content">
          <li>
            <ExpCard {...postDesc1} />
          </li>
          <li>
            <ExpCard {...postDesc2} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
