import React from "react";
import styles from "./Dienstleistungen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faSearch,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const Dienstleistungen = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Meine Dienstleistungen</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <h3>Web-Entwicklung</h3>
          <p>
            Ich biete professionelle Webentwicklung für kleine bis mittlere
            Projekte an. Spezialisiert auf moderne und responsive Websites.
          </p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          <h3>Responsive Design</h3>
          <p>
            Alle von mir erstellten Websites sind vollständig responsive und
            optimiert für Mobilgeräte, Tablets und Desktops.
          </p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <h3>SEO-Optimierung</h3>
          <p>
            Ich stelle sicher, dass Ihre Website nicht nur gut aussieht, sondern
            auch in Suchmaschinen gut gefunden wird.
          </p>
        </div>
        <div className={styles.service}>
          <FontAwesomeIcon icon={faTools} className={styles.icon} />
          <h3>Wartung und Support</h3>
          <p>
            Ich biete fortlaufende Wartung und technischen Support, um
            sicherzustellen, dass Ihre Website immer auf dem neuesten Stand
            bleibt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dienstleistungen;
