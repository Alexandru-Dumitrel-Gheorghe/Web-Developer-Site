import React from "react";
import styles from "./HeroSection.module.css";
import { FaArrowDown, FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

function HeroSection() {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  const scrollToContent = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} ref={scrollRef}>
      <div className={styles.overlay}></div> {/* Overlay */}
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Willkommen zu meinen Projekten</h1>
          <div className={styles.underline}></div> {/* Decorative line */}
          <p className={styles.subtitle}>
            Entdecken Sie meine vielfältigen Webentwicklungsprojekte – von
            dynamischen Webanwendungen bis zu benutzerfreundlichen Designs.
          </p>
          <div className={styles.iconContainer}>
            <FaCode className={styles.icon} />
            <FaLaptopCode className={styles.icon} />
            <FaDatabase className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator} onClick={scrollToContent}>
        <FaArrowDown className={styles.arrow} />
      </div>
    </section>
  );
}

export default HeroSection;
