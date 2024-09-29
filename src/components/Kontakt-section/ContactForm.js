import React from "react";
import styles from "./ContactForm.module.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

function ContactForm() {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <section className={styles.contactSection} ref={scrollRef}>
      <div className={styles.container}>
        {/* Contact Form */}
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Kontaktieren Sie mich</h2>
          <p className={styles.subtitle}>
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Lassen Sie
            uns in Kontakt treten!
          </p>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ihr Name"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ihre E-Mail-Adresse"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <FaPhone className={styles.icon} />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ihre Telefonnummer"
                className={styles.input}
              />
            </div>
            <div className={styles.textareaGroup}>
              <FaPaperPlane className={styles.icon} />
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Ihre Nachricht"
                required
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Senden
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={styles.infoWrapper}>
          <h3 className={styles.infoTitle}>Informationen</h3>
          <div className={styles.infoDetails}>
            <div className={styles.infoItem}>
              <FaUser className={styles.infoIcon} />
              <span>Musterstraße 123, 12345 Musterstadt</span>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <span>info@example.com</span>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <span>+49 123 456 7890</span>
            </div>
          </div>
          <p className={styles.infoDescription}>
            Wenn Sie Fragen haben oder mehr Informationen benötigen, zögern Sie
            bitte nicht, uns zu kontaktieren.
          </p>
          <h3 className={styles.infoTitle}>Folgen Sie mir</h3>
          <div className={styles.socialMedia}>
            <a
              href="https://www.facebook.com/yourprofile"
              className={styles.socialLink}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className={styles.socialLink}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className={styles.socialLink}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className={styles.socialLink}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
