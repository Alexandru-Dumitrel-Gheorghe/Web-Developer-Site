import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import {
  FaProjectDiagram,
  FaCheckCircle,
  FaSmile,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  const [countUp, setCountUp] = useState({
    current: 0,
    completed: 0,
    clients: 0,
  });

  useEffect(() => {
    const countTimer = setInterval(() => {
      setCountUp((prev) => ({
        current: prev.current < 10 ? prev.current + 1 : 10,
        completed: prev.completed < 50 ? prev.completed + 1 : 50,
        clients: prev.clients < 30 ? prev.clients + 1 : 30,
      }));
    }, 50);

    return () => clearInterval(countTimer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 className={`${styles.title} ${styles.fadeIn}`}>Meine Projekte</h1>
          <p className={`${styles.subtitle} ${styles.fadeIn}`}>
            Hier sind einige meiner besten Arbeiten, die Sie sich ansehen
            können.
          </p>
          <div className={`${styles.details} ${styles.fadeIn}`}>
            <div className={styles.detail}>
              <FaProjectDiagram className={styles.icon} />
              <span className={styles.number}>{countUp.current}+</span>
              <span className={styles.label}>Aktuelle Projekte</span>
            </div>
            <div className={styles.detail}>
              <FaCheckCircle className={styles.icon} />
              <span className={styles.number}>{countUp.completed}+</span>
              <span className={styles.label}>Abgeschlossene Projekte</span>
            </div>
            <div className={styles.detail}>
              <FaSmile className={styles.icon} />
              <span className={styles.number}>{countUp.clients}+</span>
              <span className={styles.label}>Zufriedene Kunden</span>
            </div>
          </div>

          {/* Dinamic Scroll Indication */}
          <div className={styles.scrollDownIndicator}>
            <p>Mehr sehen</p>
            <FaArrowDown className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
