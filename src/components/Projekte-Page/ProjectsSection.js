import React from "react";
import styles from "./ProjectsSection.module.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Importă hook-ul

const projectsData = [
  {
    title: "Website Redesign",
    category: "Website",
    imageUrl:
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dieses Projekt umfasste ein vollständiges Redesign einer Website für ein Technologieunternehmen.",
    technologies: ["React", "CSS Modules", "Node.js", "Mongo"],
    github: "https://github.com/username/website-redesign",
    link: "#",
  },
  {
    title: "E-Commerce Plattform",
    category: "App",
    imageUrl:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Entwicklung einer vollständigen E-Commerce-Plattform mit modernen Zahlungsintegrationen.",
    technologies: ["React", "Redux", "Stripe API", "Node.js"],
    github: "https://github.com/username/e-commerce-platform",
    link: "#",
  },
  {
    title: "Portfolio Webseite",
    category: "Website",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Eine Portfolio-Website für einen Fotografen mit interaktiver Galerie.",
    technologies: ["HTML", "CSS", "JavaScript", "Lightbox"],
    github: "https://github.com/username/portfolio-website",
    link: "#",
  },
];

function Projects() {
  const scrollRef = useScrollAnimation(); // Utilizează hook-ul

  return (
    <section className={styles.projectsSection} ref={scrollRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meine Projekte</h2>
        <div className={styles.masonryGrid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <ul className={styles.technologies}>
                    {project.technologies.map((tech, i) => (
                      <li key={i} className={styles.techItem}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    {project.github && (
                      <a
                        href={project.github}
                        className={styles.iconLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    )}
                    <a
                      href={project.link}
                      className={styles.iconLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
