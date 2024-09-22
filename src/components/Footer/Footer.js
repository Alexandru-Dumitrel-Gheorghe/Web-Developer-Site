import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        {/* Left Section - Contact Info */}
        <div className={styles.contactInfo}>
          <h2 className={styles.heading}>Kontakt</h2>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <a href="mailto:your.email@example.com" className={styles.link}>
              your.email@example.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <a href="tel:+49123456789" className={styles.link}>
              +49 123 456 789
            </a>
          </p>
        </div>

        {/* Central Section - Quick Links */}
        <div className={styles.quickLinks}>
          <h2 className={styles.heading}>Schnelle Links</h2>
          <ul className={styles.linkList}>
            {["Startseite", "Über mich", "Dienstleistungen", "Portfolio"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className={styles.link}
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className={styles.socialMedia}>
          <h2 className={styles.heading}>Soziale Medien</h2>
          <div className={styles.socialLinks}>
            {[
              { icon: faGithub, link: "https://github.com/username" },
              { icon: faLinkedin, link: "https://linkedin.com/in/username" },
              { icon: faInstagram, link: "https://instagram.com/username" },
            ].map(({ icon, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={link}
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Alexandru Gheorghe. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
