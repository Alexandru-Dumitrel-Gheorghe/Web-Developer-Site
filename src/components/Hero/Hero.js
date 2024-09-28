import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import styles from "./Hero.module.css";
import profileImage from "../../assets/profile.jpg";
import SocialLinks from "../SocialLinks/SocialLinks"; // Import SocialLinks component

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/projekte"); // Navigate to the Projekte page
  };

  return (
    <section className={styles.heroContainer}>
      <SocialLinks /> {/* Add social links */}
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
