import React from "react";
import styles from "./AboutExperience.module.css";

const AboutExperience = () => {
  return (
    <section className={styles.aboutExperience}>
      <h2 className={styles.title}>Meine Erfahrung</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <h3>2020 - Der Beginn der Reise</h3>
          <p>
            Während der Pandemie habe ich meine Reise in die Welt der
            Webentwicklung begonnen. Ich habe angefangen, HTML, CSS und
            JavaScript zu lernen, um einfache, aber funktionale Websites zu
            erstellen.
          </p>
        </div>
        <div className={styles.timelineItem}>
          <h3>2021 - Vertiefung in moderne Technologien</h3>
          <p>
            Mit dem Wachstum meines Wissens begann ich mit fortgeschrittenen
            Technologien wie React.js und Node.js zu arbeiten und moderne
            Webanwendungen zu entwickeln.
          </p>
        </div>
        <div className={styles.timelineItem}>
          <h3>2022 - Erste Projekte und Zusammenarbeit</h3>
          <p>
            Ich begann, an echten Projekten zu arbeiten, Kunden zu betreuen und
            leistungsstarke, responsive Websites zu entwickeln.
          </p>
        </div>
        <div className={styles.timelineItem}>
          <h3>2023 - Kontinuierliches Lernen und Spezialisierung</h3>
          <p>
            Der Fokus lag darauf, meine Fähigkeiten in Full-Stack-Technologien
            zu erweitern, mit besonderem Interesse an MongoDB und der
            Integration von APIs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
