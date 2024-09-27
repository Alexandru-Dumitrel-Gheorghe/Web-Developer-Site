import React from "react";
import styles from "./ContactForm.module.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function ContactForm() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.container}>
        {/* Form Container */}
        <div className={styles.formContainer}>
          <h2 className={styles.heading}>Kontaktieren Sie mich</h2>
          <p className={styles.description}>
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Lassen Sie
            uns in Kontakt treten!
          </p>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <FaUser className={styles.icon} />
              <label htmlFor="name" className={styles.hiddenLabel}>
                Ihr Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ihr Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <FaEnvelope className={styles.icon} />
              <label htmlFor="email" className={styles.hiddenLabel}>
                Ihre E-Mail-Adresse
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ihre E-Mail-Adresse"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <FaPhone className={styles.icon} />
              <label htmlFor="phone" className={styles.hiddenLabel}>
                Ihre Telefonnummer
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ihre Telefonnummer"
              />
            </div>
            <div className={styles.formGroup}>
              <FaPaperPlane className={styles.icon} />
              <label htmlFor="message" className={styles.hiddenLabel}>
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ihre Nachricht"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Senden
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h3 className={styles.heading}>Informationen</h3>
          <div className={styles.infoGroup}>
            <p>
              <strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Telefon:</strong> +49 123 456 7890
            </p>
          </div>
          <p className={styles.infoDescription}>
            Wenn Sie Fragen haben oder mehr Informationen benötigen, zögern Sie
            bitte nicht, uns zu kontaktieren.
          </p>
          <h3 className={styles.heading}>Folgen Sie mir</h3>
          <div className={styles.socialIcons}>
            <button className={styles.socialLink} aria-label="Facebook">
              <FaFacebook />
            </button>
            <button className={styles.socialLink} aria-label="Twitter">
              <FaTwitter />
            </button>
            <button className={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </button>
            <button className={styles.socialLink} aria-label="LinkedIn">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
