import NavBar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";

const Home = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <ProjectSection />

      <Footer />
    </>
  );
};

export default Home;
