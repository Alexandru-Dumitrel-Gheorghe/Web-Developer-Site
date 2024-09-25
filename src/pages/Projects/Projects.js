import React from "react";
import styles from "./Projects.module.css";
import HeroSection from "../../components/Projekte-Page/HeroSection";
import Footer from "../../components/Footer/Footer";
import ProjectsSection from "../../components/Projekte-Page/ProjectsSection";

const Projects = () => {
  return (
    <div className={styles.aboutPage}>
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Projects;
