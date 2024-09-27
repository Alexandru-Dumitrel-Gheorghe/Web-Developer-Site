import React from "react";
import styles from "./ContactHero.module.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Kontaktieren Sie mich</h1>
        <p className={styles.subtitle}>
          Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Ich freue
          mich, von Ihnen zu hören!
        </p>
        <div className={styles.contactIcons}>
          <FaEnvelope className={styles.icon} />
          <FaPhoneAlt className={styles.icon} />
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
