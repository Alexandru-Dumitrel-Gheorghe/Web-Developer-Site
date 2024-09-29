// src/components/Faq/Faq.jsx

import React, { useState } from "react";
import styles from "./Faq.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

const faqData = [
  {
    question: "Welche Dienstleistungen bieten Sie an?",
    answer:
      "Ich biete Webentwicklung mit Fokus auf moderne Technologien wie React und Node.js an.",
  },
  {
    question: "Was sind Ihre Preise?",
    answer:
      "Die Preise variieren je nach Projektumfang. Meine Dienstleistungen beginnen ab **500 Euro**. Bitte kontaktieren Sie mich für ein individuelles Angebot.",
  },
  {
    question: "Wie lange dauert die Entwicklung eines Projekts?",
    answer:
      "Die Entwicklungszeit hängt von der Komplexität und dem Umfang des Projekts ab. Kleine Projekte können innerhalb von zwei Wochen abgeschlossen werden, während größere Projekte mehrere Monate dauern können.",
  },
  {
    question: "Welche Technologien verwenden Sie?",
    answer:
      "Ich arbeite mit modernen Webtechnologien wie HTML5, CSS3, JavaScript, React, Node.js und MongoDB.",
  },
  {
    question: "Bieten Sie auch Wartung und Support an?",
    answer:
      "Ja, ich biete laufende Wartungs- und Supportdienste an, um sicherzustellen, dass Ihre Website stets aktuell und funktionsfähig bleibt.",
  },
  {
    question: "Können Sie bestehende Websites überarbeiten?",
    answer:
      "Ja, ich kann bestehende Websites aktualisieren, optimieren oder neu gestalten, um sie an moderne Standards anzupassen.",
  },
  {
    question: "Bieten Sie SEO-Dienstleistungen an?",
    answer:
      "Ja, ich kann Ihre Website für Suchmaschinen optimieren, um die Sichtbarkeit und das Ranking zu verbessern.",
  },
  {
    question: "Können Sie beim Hosting und der Domainregistrierung helfen?",
    answer:
      "Ja, ich kann Sie bei der Auswahl und Einrichtung von Hosting-Diensten und der Domainregistrierung unterstützen.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`${styles.faqSection} fade-in`}
      ref={scrollRef} // Adaugă referința pentru animație
    >
      <h2 className={styles.heading}>Häufig gestellte Fragen</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            key={index}
          >
            <button
              className={styles.questionButton}
              onClick={() => toggleAnswer(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <div className={styles.questionContent}>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className={styles.questionIcon}
                />
                <span>{item.question}</span>
              </div>
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className={styles.chevronIcon}
              />
            </button>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.answerOpen : ""
              }`}
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
