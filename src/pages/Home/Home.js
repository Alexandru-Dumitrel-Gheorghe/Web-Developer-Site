import React from "react";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";
import Services from "../../components/Services/Services";
import Dienstleistungen from "../../components/Dienstleistungen/Dienstleistungen";
import CallToAction from "../../components/CallToAction/CallToAction";
import Faq from "../../components/FAQ/Faq";
import Certifications from "../../components/Certifications/Certifications";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <Dienstleistungen />
      <Services />
      <CallToAction />
      <Faq />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Home;
