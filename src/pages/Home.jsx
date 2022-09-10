// import React, { useState } from "react";

import NavBar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Achievements from "../components/Achievements/Achievements";

const Home = () => {
  // const [isToggled, setIsToggled] = useState(false);

  // const toggle = () => {
  //   setIsToggled(!isToggled);
  // };
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <ProjectSection />
      <Achievements />
    </>
  );
};

export default Home;
