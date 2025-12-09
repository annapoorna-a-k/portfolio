import React from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  const projectList = [
    {
      title: "LightsUp",
      description:
        "A wellness platform with mood tracking, goals, and personalized support using Django.",
      emoji: "💡",
      link: "https://github.com/annapoorna-a-k/LightsUp-An-Automated-Mental-Health-Support-Platform-using-Django"
    },
    {
      title: "COVID-19 Detection",
      description:
        "CNN model for early detection using Chest X-ray images.",
      emoji: "🦠",
      link: "https://github.com/annapoorna-a-k/COVID-19-DETECTION-using-CNN"
    },
    {
      title: "Spam Email Filtering",
      description:
        "Spam classification using Gaussian Naive Bayes.",
      emoji: "📧",
      link: "https://github.com/annapoorna-a-k/SPAM-EMAIL-FILTERING-Using-Naive-Bayes"
    },
    {
      title: "Guardzilla",
      description:
        "Raspberry Pi robot for intrusion detection with face recognition.",
      emoji: "🤖",
      link: "https://github.com/annapoorna-a-k/GUARDZILLA-Unauthorized-Access-Averter-using-Raspberry-pi"
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Portfolio</div>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.projectsGrid}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectIcon}>{project.emoji}</div>

            <h3 className={styles.projectTitle}>{project.title}</h3>

            <p className={styles.projectDesc}>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              className={styles.projectLink}
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
