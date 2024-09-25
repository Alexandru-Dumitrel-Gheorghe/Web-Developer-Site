import React from "react";
import styles from "./Contact.module.css";
import Footer from "../../components/Footer/Footer"; // Corrected path
import ContactForm from "../../components/Kontakt-section/ContactForm";

const Contact = () => {
  return (
    <div className={styles.aboutPage}>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
