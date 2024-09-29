// Certifications.jsx
import React from "react";
import styles from "./Certifications.module.css";
import itSchoolLogo from "../../assets/itSchoolLogo.png";
import pearsonVueLogo from "../../assets/pearsonVueLogo.png";
import certiPrimeLogo from "../../assets/certiPrimeLogo.png";
import infoTechLogo from "../../assets/infoTechLogo.png";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

const certificationsData = [
  {
    name: "IT School",
    logo: itSchoolLogo,
    description: "Zertifikat in moderner Webentwicklung.",
  },
  {
    name: "Certi Prime",
    logo: certiPrimeLogo,
    description: "Spezialist für fortgeschrittene IT-Technologien.",
  },
  {
    name: "Pearson VUE",
    logo: pearsonVueLogo,
    description: "International anerkanntes Zertifikat.",
  },
  {
    name: "Information Technology Specialist",
    logo: infoTechLogo,
    description: "Expertise in innovativen IT-Lösungen.",
  },
];

const Certifications = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <section className={styles.certificationsSection} ref={scrollRef}>
      <h2 className={styles.heading}>Meine Zertifizierungen</h2>
      <p className={styles.description}>
        Ich habe verschiedene Zertifizierungen erworben, die meine Fähigkeiten
        in IT und Webentwicklung bestätigen.
      </p>
      <div className={styles.certificationsContainer}>
        {certificationsData.map((cert, index) => (
          <div className={styles.certificationCard} key={index}>
            <img
              src={cert.logo}
              alt={`${cert.name} Logo`}
              className={styles.logo}
            />
            <div className={styles.certificationCardContent}>
              <h3 className={styles.certName}>{cert.name}</h3>
              <p className={styles.certDescription}>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
