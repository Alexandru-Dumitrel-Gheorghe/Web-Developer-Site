import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  const handleLearnMore = (technology) => {
    alert(`More information about ${technology}`);
  };

  return (
    <section className={styles.servicesContainer}>
      <h2 className={styles.heading}>Welche Technologien verwende ich?</h2>
      <div className={styles.cardsContainer}>
        {/* Card 1 - React */}
        <article className={styles.card}>
          <div className={styles.profileImage}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React logo"
            />
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
          <div className={styles.profileImage}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js logo"
            />
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
          <div className={styles.profileImage}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript logo"
            />
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
