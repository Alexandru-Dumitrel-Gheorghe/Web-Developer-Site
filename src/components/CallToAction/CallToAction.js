import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/kontakt"); // Navigate to the Kontakt page
  };

  return (
    <section className={styles.callToActionSection}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>Lassen Sie uns gemeinsam starten</h2>
          <p>
            Sie haben ein Projekt oder eine Idee? Lassen Sie uns
            zusammenarbeiten, um moderne und dynamische Weblösungen zu schaffen.
          </p>
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            Kontaktieren Sie mich
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
