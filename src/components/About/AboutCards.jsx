import React from "react";
import {
  SiAngular,
  SiReact,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiSequelize,
  SiTypescript,
  SiGit,
  SiGithub,
  SiAssemblyscript,
  SiBlender,
  SiAdobeillustrator,
  SiGimp,
  SiInkscape,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiPostgresql,
  SiMicrosoftazure,
  SiJava,
  SiOctave,
} from "react-icons/si";
import "./_aboutCards.scss";

const AboutCards = ({ bool }) => {
  const skills = [
    <SiAngular />,
    " ",
    <SiReact />,
    " ",
    <SiBootstrap />,
    " ",
    <SiExpress />,
    " ",
    <SiAngular />,
    " ",
    <SiNodedotjs />,
    " ",
    <SiPython />,
    " ",
    <SiMysql />,
    " ",
    <SiSequelize />,
    " ",
    <SiTypescript />,
    " ",
    <SiJavascript />,
    " ",
    <SiBootstrap />,
    " ",
    <SiCss3 />,
    " ",
    <SiHtml5 />,
    " ",
    <SiGit />,
    " ",
    <SiGithub />,
    " ",
    <SiAssemblyscript />,
    " ",
    <SiBlender />,
    " ",
    <SiAdobeillustrator />,
    " ",
    <SiGimp />,
    " ",
    <SiInkscape />,
    " ",
    <SiAdobephotoshop />,
    " ",
    <SiAdobepremierepro />,
    " ",
    <SiPostgresql />,
    " ",
    <SiMicrosoftazure />,
    " ",
    <SiJava />,
    " ",
    <SiOctave />,
  ];

  const cardDesc = (
    <>
      <hr className="card-hr-abt" />
      <p>
        Currently, an undergraduate studying Computer Science with Artificial
        Intelligence at{" "}
        <a
          className="about-info"
          href="https://www.manchester.ac.uk/"
          alt="uom"
          target={"_blank"}
          rel="noreferrer"
        >
          The University of Manchester
        </a>
        , UK.{" "}
      </p>
      <p>
        I am the Head Graphic Designer{" "}
        <a
          className="about-info"
          href="https://unicsmcr.com/"
          alt="unics"
          target={"_blank"}
          rel="noreferrer"
        >
          @unics
        </a>{" "}
        &{" "}
        <a
          className="about-info"
          href="https://crackchester.cc/"
          alt="crackchester"
          target={"_blank"}
          rel="noreferrer"
        >
          @crackchester
        </a>
        , designing visual content for social media platforms.
      </p>
      <br />
      <p>
        I like to work with <span className="py">JavaScript</span> and{" "}
        <span className="py">Python</span> but, I love exploring different
        technologies and development, given the dynamic growth of computer
        science industry, whether it be Data Science or Artificial Intelligence.
        <br />
        If I'm not programming, I'm probably cooking something &#127859; or
        making random stuff &#9881;.
      </p>
      <hr className="card-hr-abt" />
      <div className="company tech-stack float-left b">
        <p>Achievements:</p>
      </div>
      <ul className="card-list">
        <li>
          {" "}
          Best Solo Hack Award: Steel City Codes Hackathon 2020 - for Project
          Refill: A citywide water refill system implementation and incentivized
          app to reduce the disposal of plastic
        </li>
        <li>
          {" "}
          Qualified to the grand finals of Indian Institute of Technology,
          Bombay's international level event 'Techfest 2020' held in Mumbai
        </li>
        <li>
          {" "}
          1st Position: `Berner's Fest 20`, Zonal Inter-School Event - for
          Developing a CLI Voice Assistant in Python
        </li>
      </ul>
      <div className="company tech-stack float-left b">
        <p>
          Skills:
          <br />
          <span>{skills}</span>
        </p>
      </div>
    </>
  );
  const cardImg = require("../../images/about.svg").default;
  return (
    <>
      <div className="card about-card">
        <div className="header">
          {bool ? <h2 className="card-title">a little about me...</h2> : ""}
        </div>
        <div className="body fle-g">
          {bool ? cardDesc : <img src={cardImg} alt="about" />}
        </div>
        {bool ? <hr className="card-hr-abt" /> : ""}
        <div className="footer">
          {bool ? (
            <>
              <div className="company tech-stack float-left b">
                <p>
                  Contact:{" "}
                  <a
                    className="contact-mail"
                    href="mailto: dhruvsharma.091t@gmail.com"
                    target={"_blank"}
                    alt="email"
                    rel="noreferrer"
                  >
                    dhruvsharma.091t@gmail.com
                  </a>
                </p>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default AboutCards;
