import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { FaBriefcase, FaUsers, FaStar, FaArrowDown } from "react-icons/fa";

function HeroSectionAlternative() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    reviews: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => ({
        projects: prev.projects < 20 ? prev.projects + 1 : 20,
        clients: prev.clients < 100 ? prev.clients + 1 : 100,
        reviews: prev.reviews < 500 ? prev.reviews + 10 : 500,
      }));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Willkommen in meinem Portfolio</h1>
        <p className={styles.subtitle}>
          Entdecken Sie meine aktuellen Projekte und erfolgreichen
          Kooperationen.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <FaBriefcase className={styles.icon} />
            <span className={styles.number}>{stats.projects}+</span>
            <span className={styles.label}>Projekte</span>
          </div>
          <div className={styles.stat}>
            <FaUsers className={styles.icon} />
            <span className={styles.number}>{stats.clients}+</span>
            <span className={styles.label}>Kunden</span>
          </div>
          <div className={styles.stat}>
            <FaStar className={styles.icon} />
            <span className={styles.number}>{stats.reviews}+</span>
            <span className={styles.label}>Bewertungen</span>
          </div>
        </div>
        <div className={styles.scrollIndicator} onClick={scrollToContent}>
          <FaArrowDown className={styles.arrow} />
          <span>Mehr erfahren</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionAlternative;
