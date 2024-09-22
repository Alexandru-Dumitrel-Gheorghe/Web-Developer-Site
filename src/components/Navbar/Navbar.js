// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/Logo.png"; // Importăm logo-ul

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <Link to="/" onClick={closeMenu} className={styles.logo}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div
          className={`${styles.centerSection} ${menuOpen ? styles.active : ""}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
            onClick={closeMenu}
          >
            Startseite
          </NavLink>
          <NavLink
            to="/über-mich"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
            onClick={closeMenu}
          >
            Über Mich
          </NavLink>
          <NavLink
            to="/projekte"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
            onClick={closeMenu}
          >
            Projekte
          </NavLink>
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
            }
            onClick={closeMenu}
          >
            Kontakt
          </NavLink>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
