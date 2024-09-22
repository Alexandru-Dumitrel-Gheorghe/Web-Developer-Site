import React, { useState, useEffect } from "react";
import styles from "./AboutMain.module.css";
import profileImage from "../../assets/alex2.jpg";
import CountUp from "react-countup";

const AboutMain = () => {
  const [restart, setRestart] = useState(false);

  // Resetează numărătoarea la fiecare 10 secunde
  useEffect(() => {
    const interval = setInterval(() => {
      setRestart((prev) => !prev); // Schimbă starea pentru a forța resetarea
    }, 5000); // Interval de 10 secunde pentru resetare
    return () => clearInterval(interval); // Curăță intervalul când componenta este demontată
  }, []);

  return (
    <section className={styles.aboutMain}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1>
            Hallo, ich bin <span>Alexandru Gheorghe</span>
          </h1>
          <p className={styles.description}>
            Ich bin ein leidenschaftlicher Webentwickler mit über 2 Jahren
            Erfahrung in der Erstellung von benutzerfreundlichen und modernen
            Webanwendungen. Meine Expertise umfasst sowohl Frontend- als auch
            Backend-Technologien, mit denen ich maßgeschneiderte digitale
            Lösungen für meine Kunden entwickle. Ich arbeite gerne mit den
            neuesten Webtechnologien, um innovative und leistungsstarke Projekte
            zu realisieren.
          </p>
          <button className={styles.contactButton}>
            Kontaktieren Sie mich
          </button>
        </div>
        <div className={styles.imageSection}>
          <img
            src={profileImage}
            alt="Alexandru Gheorghe"
            className={styles.profileImage}
          />
        </div>
      </div>

      {/* Stats Section with CountUp */}
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <h2>
            <CountUp
              key={restart} // Cheia va fi schimbată când restart se schimbă, resetând numărătoarea
              start={0}
              end={50}
              duration={3}
            />
            +
          </h2>
          <p>Glückliche Kunden</p>
        </div>
        <div className={styles.statItem}>
          <h2>
            <CountUp key={restart + 1} start={0} end={30} duration={3} />+
          </h2>
          <p>Abgeschlossene Projekte</p>
        </div>
        <div className={styles.statItem}>
          <h2>
            <CountUp key={restart + 2} start={0} end={2} duration={3} />+
          </h2>
          <p>Jahre Erfahrung</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
