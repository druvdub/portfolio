import NavBar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Achievements from "../components/Achievements/Achievements";

const Home = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

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
