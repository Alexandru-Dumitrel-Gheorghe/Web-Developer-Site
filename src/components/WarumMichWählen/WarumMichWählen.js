import React, { useState, useEffect } from "react";
import styles from "./WarumMichWählen.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

const carouselData = [
  {
    title: "Maßgeschneiderte Weblösungen",
    text: "Ich entwickle maßgeschneiderte Webanwendungen, die Ihre spezifischen Geschäftsanforderungen erfüllen und Ihre Online-Präsenz stärken.",
  },
  {
    title: "SEO-Optimierung",
    text: "Durch fortschrittliche SEO-Techniken sorge ich dafür, dass Ihre Webseite in Suchmaschinen wie Google schneller gefunden wird als die Ihrer Mitbewerber.",
  },
  {
    title: "Modernste Technologien",
    text: "Ich nutze moderne Technologien wie HTML5, CSS3, JavaScript, React und Node.js, um Ihnen leistungsstarke und innovative Weblösungen zu bieten.",
  },
  {
    title: "Langjährige Erfahrung",
    text: "Mit über 2 Jahren Erfahrung in der Webentwicklung unterstütze ich Sie dabei, maßgeschneiderte digitale Lösungen zu schaffen, die sich von der Konkurrenz abheben.",
  },
  {
    title: "Flexibilität & Zuverlässigkeit",
    text: "Ich garantiere Ihnen zuverlässige und flexible Zusammenarbeit, um sicherzustellen, dass Ihr Projekt termingerecht und qualitativ hochwertig abgeschlossen wird.",
  },
];

const WarumMichWählen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState("");
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Schimbă slide-ul la fiecare 5 secunde
    return () => clearInterval(interval); // Curăță intervalul la demontare
  }, [currentIndex]);

  const handleNext = () => {
    setTransitionClass(styles.rotateNext);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      setTransitionClass("");
    }, 600); // Durata tranziției trebuie să corespundă cu CSS
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      const direction =
        index > currentIndex ? styles.rotateNext : styles.rotatePrev;
      setTransitionClass(direction);
      setTimeout(() => {
        setCurrentIndex(index);
        setTransitionClass("");
      }, 600);
    }
  };

  return (
    <section className={styles.whyChooseMe} ref={scrollRef}>
      <h2 className={styles.title}>Warum mich wählen?</h2>
      <div className={styles.carouselContainer}>
        <div className={`${styles.carousel} ${transitionClass}`}>
          <div className={styles.carouselItem}>
            <h3>{carouselData[currentIndex].title}</h3>
            <p>{carouselData[currentIndex].text}</p>
          </div>
        </div>
        <div className={styles.dotsContainer}>
          {carouselData.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarumMichWählen;
