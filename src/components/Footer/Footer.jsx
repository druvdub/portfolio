import React from "react";
import "./_footer.scss";
import { FaGithub, FaLinkedin, FaFileExport } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="page-footer">
        made by ds{" "}
        <span>
          {" "}
          <a
            className="nav-link padding-xy px github footer-link"
            href="https://github.com/druvdub"
            target={"_blank"}
            alt="GitHub"
            rel="noreferrer"
            aria-label="Github"
          >
            <FaGithub className="nav-svg" />
          </a>
          <a
            className="nav-link padding-xy px linkedin footer-link"
            href="https://www.linkedin.com/in/dsio"
            target={"_blank"}
            alt="Linkedin"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <FaLinkedin className="nav-svg" />
          </a>
          <a
            className="nav-link padding-xy px cv footer-link"
            href="https://drive.google.com/file/d/1NKkKDFKBRwsIUXweEPndbBeJNHwH_OER/view?usp=sharing"
            target={"_blank"}
            alt="Resume"
            rel="noreferrer"
            aria-label="resume"
          >
            <FaFileExport className="nav-svg" />
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
