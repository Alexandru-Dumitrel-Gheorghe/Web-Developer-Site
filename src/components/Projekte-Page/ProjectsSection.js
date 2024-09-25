import React, { useState } from "react";
import styles from "./ProjectsSection.module.css";

const projectsData = [
  {
    title: "Website Redesign",
    category: "Website",
    imageUrl:
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dieses Projekt umfasste ein vollständiges Redesign einer Website für ein Technologieunternehmen. Wir konzentrierten uns auf die Verbesserung der Zugänglichkeit und die Optimierung der Benutzererfahrung.",
    technologies: ["React", "CSS Modules", "Node.js", "MongoDB"],
    github: "https://github.com/username/website-redesign",
    link: "#",
  },
  {
    title: "E-Commerce Plattform",
    category: "App",
    imageUrl:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Entwicklung einer vollständigen E-Commerce-Plattform mit modernen Zahlungsintegrationen und Produktverwaltung, optimiert für Geschwindigkeit und Benutzererfahrung.",
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
      "Eine Portfolio-Website für einen Fotografen, mit Schwerpunkt auf minimalistischem Design und interaktiver Galerie zur Präsentation der Arbeiten.",
    technologies: ["HTML", "CSS", "JavaScript", "Lightbox"],
    github: "https://github.com/username/portfolio-website",
    link: "#",
  },
  {
    title: "Mobile App Design",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "UI/UX-Design für eine mobile Anwendung, die Benutzern hilft, ihre täglichen Aktivitäten zu organisieren.",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    github: "",
    link: "#",
  },
];

const categories = ["Alle", "Website", "App", "Design"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredProjects =
    selectedCategory === "Alle"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meine Projekte</h2>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
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
                      className={styles.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  <a
                    href={project.link}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Details
                  </a>
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
