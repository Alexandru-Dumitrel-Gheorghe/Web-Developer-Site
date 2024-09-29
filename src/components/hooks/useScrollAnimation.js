// src/hooks/useScrollAnimation.js

import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current; // Stochează referința curentă

    if (!currentElement) return; // Dacă nu există element, nu face nimic

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Se declanșează când 10% din componentă este vizibilă
    );

    observer.observe(currentElement); // Observă elementul curent

    return () => {
      observer.unobserve(currentElement); // Curăță referința la elementul observat
    };
  }, []);

  return elementRef;
};

export default useScrollAnimation;
