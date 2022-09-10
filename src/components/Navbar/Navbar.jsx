import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFileExport } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link as LinkScroll } from "react-scroll";

import Logo from "../../images/logo.svg";
import "./Navbar.scss";

const NavBar = () => {
  // const [scrollNav, setScrollNav] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    console.log(isToggled);
    setIsToggled(!isToggled);
  };

  return (
    <>
      <header className="navbar nav-style sticky-top">
        <nav className="nav-container edge-space flex-wrap">
          <a
            className="navbar-brand padding-null margin-nav margin-bp"
            href="/"
            aria-label="dhruv sharma"
          >
            <img
              width={40}
              height={40}
              src={Logo}
              alt="Logo"
              className="logo-block"
            />
          </a>
          <div className="flex">
            <button
              type="button"
              className="navbar-toggler-1 flex display mobileicon"
              onClick={toggle}
              aria-label="Toggle Navigation"
            >
              <HiMenuAlt3 />
            </button>
          </div>
          <div
            className={
              isToggled
                ? "toggle-canvas toggle-canvas-end flex-grow show"
                : "toggle-canvas toggle-canvas-end flex-grow"
            }
            role={isToggled ? "dialog" : ""}
            tabIndex={-1}
          >
            <div className="toggle-canvas-header padding-edges">
              <div></div>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={toggle}
                aria-label="Close"
              >
                <IoClose />
              </button>
            </div>
            <div className="toggle-canvas-body padding-points pt-l">
              <hr />
              <ul className="navbar-nav flex-row flex-wrap navbar-style-nav">
                <li className="nav-item col-6 col-auto bg-fill">
                  <LinkScroll
                    to="hero"
                    smooth={true}
                    duration={300}
                    spy={true}
                    offset={0}
                    exact="true"
                    className="nav-link padding-xy px "
                    alt="About"
                  >
                    About
                  </LinkScroll>
                </li>
                <li className="nav-item col-6 col-auto bg-fill">
                  <LinkScroll
                    to="experience"
                    smooth={true}
                    duration={300}
                    spy={true}
                    offset={0}
                    exact="true"
                    className="nav-link padding-xy px"
                    alt="Experience"
                  >
                    Experience
                  </LinkScroll>
                </li>
                <li className="nav-item col-6 col-auto bg-fill">
                  <LinkScroll
                    to="projects"
                    smooth={true}
                    duration={300}
                    spy={true}
                    offset={0}
                    exact="true"
                    className="nav-link padding-xy px"
                    alt="Projects"
                  >
                    Projects
                  </LinkScroll>
                </li>
                <li className="nav-item col-6 col-auto bg-fill">
                  <LinkScroll
                    to="achievements"
                    smooth={true}
                    duration={300}
                    spy={true}
                    offset={0}
                    exact="true"
                    className="nav-link padding-xy px "
                    alt="Skills"
                  >
                    Achievements
                  </LinkScroll>
                </li>
              </ul>
              <hr />
              <ul className="navbar-nav flex-row flex-wrap margin-auto">
                <li className="nav-item col-6 col-auto">
                  <a
                    className="nav-link padding-xy px"
                    href="https://github.com/druvdub"
                    target={"_blank"}
                    alt="GitHub"
                    rel="noreferrer"
                  >
                    <FaGithub className="nav-svg" />{" "}
                    <small className="d-none ms-2">GitHub</small>
                  </a>
                </li>
                <li className="nav-item col-6 col-auto">
                  <a
                    className="nav-link padding-xy px"
                    href="https://www.linkedin.com/in/dsio"
                    target={"_blank"}
                    alt="Linkedin"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="nav-svg" />{" "}
                    <small className=" d-none ms-2">Linkedin</small>
                  </a>
                </li>
                <li className="nav-item col-6 col-auto">
                  <a
                    className="nav-link padding-xy px"
                    href="/"
                    target={"_blank"}
                    alt="Linkedin"
                    rel="noreferrer"
                  >
                    <FaFileExport className="nav-svg" />{" "}
                    <small className=" d-none ms-2">Resume</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
