import React from "react";
import styles from "./BlogHero.module.css"; // Create this CSS module file for styles

const BlogHero = () => {
  return (
    <section className={styles.blogHero}>
      <div className={styles.overlay}></div> {/* Overlay */}
      <div className={styles.content}>
        <h1 className={styles.title}>Willkommen in meinem Blog</h1>
        <div className={styles.underline}></div> {/* Decorative line */}
        <p className={styles.description}>
          Entdecken Sie die neuesten Updates, Tipps und Anleitungen zur
          Webentwicklung. Lassen Sie sich inspirieren!
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
