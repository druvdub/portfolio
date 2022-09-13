import React from "react";
import "../../common/_sectionElements.scss";
import { proj1, proj2, proj3, proj4, proj5, proj6 } from "./projData";
import ProCard from "./ProCard";

/**
 * TODO
 * Add caraousel function
 */

const ProjectSection = () => {
  return (
    <>
      <div className="section" id="project">
        <div className="projects">PROJECTS</div>
        <ul className="section-content proj">
          <li>
            <ProCard {...proj3} />
          </li>
          <li>
            <ProCard {...proj4} />
          </li>
          <li>
            <ProCard {...proj2} />
          </li>
          <li>
            <ProCard {...proj1} />
          </li>
          <li>
            <ProCard {...proj5} />
          </li>
          <li>
            <ProCard {...proj6} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectSection;
