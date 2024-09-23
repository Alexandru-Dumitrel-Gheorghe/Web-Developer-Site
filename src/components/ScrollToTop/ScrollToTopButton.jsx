import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Assuming you're using this icon
import styles from "./ScrollToTopButton.module.css"; // Correct import of CSS

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTopButton} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
