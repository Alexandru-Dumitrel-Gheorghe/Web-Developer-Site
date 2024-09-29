import React from "react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaSearch,
} from "react-icons/fa";
import styles from "./AboutSkills.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const skillsData = [
  {
    skill: "HTML5 / CSS3",
    description: "Erstellung von strukturierten und modernen Webseiten.",
    icon: <FaHtml5 style={{ color: "#E34F26" }} />, // HTML5 culoare
  },
  {
    skill: "JavaScript / React.js",
    description: "Entwicklung dynamischer Webanwendungen.",
    icon: <FaJs style={{ color: "#F7DF1E" }} />, // JavaScript culoare
  },
  {
    skill: "Node.js / MongoDB",
    description: "Backend-Entwicklung mit NoSQL-Datenbanken.",
    icon: <FaNodeJs style={{ color: "#339933" }} />, // Node.js culoare
  },
  {
    skill: "Responsive Webdesign",
    description:
      "Erstellung von Websites, die auf allen Geräten großartig aussehen.",
    icon: <FaReact style={{ color: "#61DAFB" }} />, // React culoare
  },
  {
    skill: "Bootstrap / Git",
    description: "Schnelles Design und Versionskontrolle.",
    icon: <FaBootstrap style={{ color: "#7952B3" }} />, // Bootstrap culoare
  },
  {
    skill: "SEO",
    description: "Optimierung für Suchmaschinen.",
    icon: <FaSearch style={{ color: "#4CAF50" }} />, // SEO culoare
  },
];

const AboutSkills = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section className={styles.aboutSkills} ref={scrollRef}>
      <h2 className={styles.title}>Meine Fähigkeiten</h2>
      <div className={styles.skillContainer}>
        {skillsData.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.iconWrapper}>{skill.icon}</div>
            <h3>{skill.skill}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSkills;
