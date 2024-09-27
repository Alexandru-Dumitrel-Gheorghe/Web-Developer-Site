import React from "react";
import styles from "./Contact.module.css";
import Footer from "../../components/Footer/Footer"; // Corrected path
import ContactForm from "../../components/Kontakt-section/ContactForm"; // Corrected path
import ContactHero from "../../components/Kontakt-section/ContactHero"; // Corrected path

const Contact = () => {
  return (
    <div className={styles.aboutPage}>
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
