import React from "react";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa"; // Importă iconițele din react-icons
import styles from "./Services.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Services = () => {
  const scrollRef = useScrollAnimation();

  const handleLearnMore = (technology) => {
    let url = "";
    switch (technology) {
      case "React":
        url = "https://react.dev";
        break;
      case "Node.js":
        url = "https://nodejs.org";
        break;
      case "JavaScript":
        url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section className={`${styles.servicesContainer} fade-in`} ref={scrollRef}>
      <h2 className={styles.heading}>Welche Technologien verwende ich?</h2>
      <div className={styles.cardsContainer}>
        {/* Card 1 - React */}
        <article className={styles.card}>
          <div className={`${styles.iconContainer} ${styles.reactIcon}`}>
            <FaReact className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>React</h3>
          <p className={styles.cardDescription}>
            Entwicklung moderner, schneller und dynamischer Webanwendungen mit
            React.
          </p>
          <div className={styles.profileActions}>
            <button
              className={styles.primaryButton}
              onClick={() => handleLearnMore("React")}
            >
              Erfahren Sie mehr
            </button>
          </div>
        </article>

        {/* Card 2 - Node.js */}
        <article className={styles.card}>
          <div className={`${styles.iconContainer} ${styles.nodeIcon}`}>
            <FaNodeJs className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>Node.js</h3>
          <p className={styles.cardDescription}>
            Backend-Entwicklung mit Node.js für skalierbare und performante
            Anwendungen.
          </p>
          <div className={styles.profileActions}>
            <button
              className={styles.primaryButton}
              onClick={() => handleLearnMore("Node.js")}
            >
              Erfahren Sie mehr
            </button>
          </div>
        </article>

        {/* Card 3 - JavaScript */}
        <article className={styles.card}>
          <div className={`${styles.iconContainer} ${styles.jsIcon}`}>
            <FaJs className={styles.icon} />
          </div>
          <h3 className={styles.cardTitle}>JavaScript</h3>
          <p className={styles.cardDescription}>
            Erstellung interaktiver Websites mit modernen
            JavaScript-Technologien.
          </p>
          <div className={styles.profileActions}>
            <button
              className={styles.primaryButton}
              onClick={() => handleLearnMore("JavaScript")}
            >
              Erfahren Sie mehr
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
