import React from "react";
import styles from "./AboutSkills.module.css";

const AboutSkills = () => {
  return (
    <section className={styles.aboutSkills}>
      <h2 className={styles.title}>Meine Fähigkeiten</h2>
      <div className={styles.skillContainer}>
        <div className={styles.skillCard}>
          <h3>HTML5 / CSS3</h3>
          <p>
            Erstellung von strukturierten und modernen Webseiten mit HTML5 und
            CSS3.
          </p>
        </div>
        <div className={styles.skillCard}>
          <h3>JavaScript / React.js</h3>
          <p>
            Entwicklung dynamischer Webanwendungen mit JavaScript und React.js.
          </p>
        </div>
        <div className={styles.skillCard}>
          <h3>Node.js / MongoDB</h3>
          <p>
            Backend-Entwicklung mit Node.js und NoSQL-Datenbanken wie MongoDB.
          </p>
        </div>
        <div className={styles.skillCard}>
          <h3>Responsive Webdesign</h3>
          <p>
            Erstellung von Websites, die auf allen Geräten großartig aussehen.
          </p>
        </div>
        <div className={styles.skillCard}>
          <h3>Bootstrap / Git</h3>
          <p>
            Verwendung von Bootstrap für schnelles Design und Git für
            Versionskontrolle.
          </p>
        </div>
        <div className={styles.skillCard}>
          <h3>SEO</h3>
          <p>
            Optimierung Ihrer Website für Suchmaschinen, um bessere Sichtbarkeit
            und höhere Rankings zu erzielen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
