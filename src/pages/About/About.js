// src/pages/About.jsx
import React from "react";
import AboutMain from "../../components/InfoComponents/AboutMain"; // Corrected path
import AboutSkills from "../../components/InfoComponents/AboutSkills"; // Corrected path
import AboutExperience from "../../components/InfoComponents/AboutExperience"; // Corrected path
import Footer from "../../components/Footer/Footer"; // Corrected path
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <AboutMain />
      <AboutExperience />
      <AboutSkills />

      <Footer />
    </div>
  );
};

export default About;
