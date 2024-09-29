import React from "react";
import styles from "./BlogIntro.module.css";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

function BlogIntro() {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <section className={styles.blogIntro} ref={scrollRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Willkommen in meinem Blog</h2>
          <p className={styles.description}>
            Entdecken Sie die neuesten Trends, Tutorials und Einblicke in die
            Welt der Webentwicklung.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => (window.location.href = "/Blog")}
          >
            Zum Blog
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog preview"
            className={styles.blogImage}
          />
        </div>
      </div>
    </section>
  );
}

export default BlogIntro;
