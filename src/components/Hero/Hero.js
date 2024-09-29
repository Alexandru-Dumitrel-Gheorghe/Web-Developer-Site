// src/components/Hero/Hero.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";
import profileImage from "../../assets/profile.jpg";
import SocialLinks from "../SocialLinks/SocialLinks";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

const Hero = () => {
  const navigate = useNavigate();
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  const handleButtonClick = () => {
    navigate("/projekte");
  };

  return (
    <section className={`${styles.heroContainer} fade-in`} ref={scrollRef}>
      <SocialLinks />
      <div className={styles.imageContainer}>
        <img
          src={profileImage}
          alt="Alexandru Gheorghe Profile"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>
          Verwandeln Sie Ihre Ideen in Realität
        </h1>
        <p className={styles.heroDescription}>
          Ich bin Alexandru Gheorghe, ein Webentwickler, der sich auf die
          Erstellung moderner und responsiver Webanwendungen spezialisiert hat.
          Lassen Sie uns zusammenarbeiten, um benutzerfreundliche Websites zu
          entwickeln.
        </p>
        <button className={styles.ctaButton} onClick={handleButtonClick}>
          Meine Arbeit entdecken
        </button>
      </div>
    </section>
  );
};

export default Hero;
