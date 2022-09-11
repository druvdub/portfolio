import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="container" id="hero">
        <div className="bg-container"></div>
        <div className="hero-content">
          <h1 className="title">
            Hi, I'm <span>Dhruv</span>
          </h1>
          <p className="subtext">I'm a Creative Developer</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
