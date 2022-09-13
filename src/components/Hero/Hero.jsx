import React from "react";

import "./_hero.scss";

const Hero = () => {
  return (
    <>
      <div className="container he" id="hero">
        <div className="bg-container">
          <div className="circle"></div>
          <div className="circle two"></div>
        </div>
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
