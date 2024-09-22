// Contact.jsx
import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Importăm imaginea logo
import logoImage from "../../assets/Logo.png"; // Actualizați calea dacă este necesar

const Contact = () => {
  return (
    <footer className={styles.contactSection}>
      <div className={styles.container}>
        {/* Logo-ul */}
        <div className={styles.logoContainer}>
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </div>

        {/* Secțiunea de Contact */}
        <div className={styles.kontaktdaten}>
          <h2 className={styles.heading}>Kontaktdaten</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <a href="tel:+49123456789">+49 123 456 789</a>
            </div>
          </div>
        </div>

        {/* Linkuri rapide */}
        <div className={styles.quickLinks}>
          <h2 className={styles.heading}>Linkuri rapide</h2>
          <ul className={styles.linkList}>
            <li>
              <a href="#startseite">Startseite</a>
            </li>
            <li>
              <a href="#über-mich">Über mich</a>
            </li>
            <li>
              <a href="#dienstleistungen">Dienstleistungen</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.socialMedia}>
          <h2 className={styles.heading}>Social Media</h2>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
