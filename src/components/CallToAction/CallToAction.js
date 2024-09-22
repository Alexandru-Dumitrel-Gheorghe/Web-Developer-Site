// CallToAction.jsx
import React from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.callToActionSection}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Lassen Sie uns gemeinsam starten</h2>
          <p>
            Sie haben ein Projekt oder eine Idee? Lassen Sie uns
            zusammenarbeiten, um moderne und dynamische Weblösungen zu schaffen.
          </p>
          <a href="#kontakt" className={styles.ctaButton}>
            Kontaktieren Sie mich
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
