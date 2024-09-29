import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css"; // Importă module.css

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phoneNumber = "004916093091768";
    const message = "Hallo, ich habe eine Frage!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles.button} ${isHovered ? styles.hover : ""} ${
        styles.visible
      }`}
    >
      <FaWhatsapp className={styles.icon} />
    </button>
  );
};

export default WhatsAppButton;
