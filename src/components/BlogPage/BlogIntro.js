import React from "react";
import styles from "./BlogIntro.module.css";

function BlogIntro() {
  return (
    <section className={styles.blogIntro}>
      <div className={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blog preview"
          className={styles.blogImage}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Willkommen in meinem Blog</h2>
        <p className={styles.description}>
          In meinem Blog teile ich regelmäßig Updates, Tipps und Anleitungen zu
          den neuesten Entwicklungen im Bereich Webentwicklung. Lassen Sie sich
          inspirieren und erfahren Sie mehr über aktuelle Projekte und
          Technologien.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => (window.location.href = "/Blog")}
        >
          Zum Blog
        </button>
      </div>
    </section>
  );
}

export default BlogIntro;
