import React from "react";
import styles from "./Contact.module.css";
import Footer from "../../components/Footer/Footer"; // Corrected path
import ContactForm from "../../components/Kontakt-section/ContactForm"; // Corrected path
import ContactHero from "../../components/Kontakt-section/ContactHero"; // Corrected path
import useScrollAnimation from "../../components/hooks/useScrollAnimation"; // Importă hook-ul

const Contact = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <div className={styles.aboutPage} ref={scrollRef}>
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
