import React from "react";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";
import Services from "../../components/Services/Services";
import Dienstleistungen from "../../components/Dienstleistungen/Dienstleistungen";
import CallToAction from "../../components/CallToAction/CallToAction";
import Faq from "../../components/FAQ/Faq";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import WarumMichWählen from "../../components/WarumMichWählen/WarumMichWählen";
import BlogIntro from "../../components/BlogPage/BlogIntro";
import Certifications from "../../components/Certifications/Certifications";
import Footer from "../../components/Footer/Footer";
import useScrollAnimation from "../../components/hooks/useScrollAnimation"; // Importă hook-ul

const Home = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <div className={styles.homeContainer} ref={scrollRef}>
      <Hero />
      <Dienstleistungen />
      <CallToAction />
      <Services />
      <Faq />
      <WarumMichWählen />
      <VideoInfo />
      <BlogIntro />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Home;
