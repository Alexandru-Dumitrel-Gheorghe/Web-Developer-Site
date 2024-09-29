import React from "react";
import styles from "./Projects.module.css";
import HeroSection from "../../components/Projekte-Page/HeroSection";
import Footer from "../../components/Footer/Footer";
import ProjectsSection from "../../components/Projekte-Page/ProjectsSection";
import useScrollAnimation from "../../components/hooks/useScrollAnimation"; // Importă hook-ul

const Projects = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <div className={styles.aboutPage} ref={scrollRef}>
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Projects;
