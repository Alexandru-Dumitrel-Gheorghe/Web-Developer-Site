import React from "react";
import styles from "./AboutSkills.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

const skillsData = [
  {
    skill: "HTML5 / CSS3",
    description: "Erstellung von strukturierten und modernen Webseiten.",
    level: 90,
  },
  {
    skill: "JavaScript / React.js",
    description: "Entwicklung dynamischer Webanwendungen.",
    level: 85,
  },
  {
    skill: "Node.js / MongoDB",
    description: "Backend-Entwicklung mit NoSQL-Datenbanken.",
    level: 80,
  },
  {
    skill: "Responsive Webdesign",
    description:
      "Erstellung von Websites, die auf allen Geräten großartig aussehen.",
    level: 95,
  },
  {
    skill: "Bootstrap / Git",
    description: "Schnelles Design und Versionskontrolle.",
    level: 70,
  },
  { skill: "SEO", description: "Optimierung für Suchmaschinen.", level: 75 },
];

const AboutSkills = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <section className={styles.aboutSkills} ref={scrollRef}>
      <h2 className={styles.title}>Meine Fähigkeiten</h2>
      <div className={styles.skillContainer}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div
              className={styles.circularProgress}
              style={{ "--level": skill.level }}
            >
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <h3>{skill.skill}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
