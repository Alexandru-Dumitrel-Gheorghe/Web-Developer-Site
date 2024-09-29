import React from "react";
import styles from "./Blog.module.css"; // Import the styles module
import Footer from "../../components/Footer/Footer"; // Corrected path
import BlogHero from "../../components/BlogPage/BlogHero"; // Corrected path
import BlogPost from "../../components/BlogPage/BlogPost";
import BlogPost2 from "../../components/BlogPage/BlogPost2";
import BlogPost3 from "../../components/BlogPage/BlogPost3";
import useScrollAnimation from "../../components/hooks/useScrollAnimation"; // Importă hook-ul

const Blog = () => {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <div className={styles.blogPage} ref={scrollRef}>
      <BlogHero />
      <BlogPost />
      <BlogPost2 />
      <BlogPost3 />
      <Footer />
    </div>
  );
};

export default Blog;
