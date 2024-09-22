import React from "react";
import styles from "./SocialLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.line}></div>
      <div className={styles.icons}>
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a
          href="https://instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        </a>
        <a
          href="https://facebook.com/username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        </a>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default SocialLinks;
