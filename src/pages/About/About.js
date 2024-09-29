// src/pages/About.jsx
import React from "react";
import AboutMain from "../../components/InfoComponents/AboutMain"; // Corrected path
import AboutSkills from "../../components/InfoComponents/AboutSkills"; // Corrected path
import AboutExperience from "../../components/InfoComponents/AboutExperience"; // Corrected path
import Footer from "../../components/Footer/Footer"; // Corrected path
import styles from "./About.module.css";
import CallToAction from "../../components/CallToAction/CallToAction"; // Corrected path
import useScrollAnimation from "../../components/hooks/useScrollAnimation"; // Importă hook-ul

const About = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <div className={styles.aboutPage} ref={scrollRef}>
      <AboutMain />
      <AboutExperience />
      <CallToAction />
      <AboutSkills />
      <Footer />
    </div>
  );
};

export default About;
