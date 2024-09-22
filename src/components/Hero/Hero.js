import React from "react";
import styles from "./Hero.module.css";
import profileImage from "../../assets/profile.jpg";
import SocialLinks from "../SocialLinks/SocialLinks"; // Importă componenta SocialLinks

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <SocialLinks /> {/* Adaugă link-urile sociale */}
      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt="Profilul lui Alexandru Gheorghe"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h1>Verwandeln Sie Ihre Ideen in Realität</h1>
        <p>
          Ich bin Alexandru Gheorghe, ein Webentwickler, der sich auf die
          Erstellung moderner und responsiver Webanwendungen spezialisiert hat.
          Lassen Sie uns zusammenarbeiten, um benutzerfreundliche Websites zu
          entwickeln, die Ergebnisse liefern.
        </p>
        <button className={styles.ctaButton}>Meine Arbeit entdecken</button>
      </div>
    </section>
  );
};

export default Hero;
