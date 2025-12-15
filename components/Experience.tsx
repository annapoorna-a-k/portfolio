"use client";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Experience</div>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>
            AI Research Associate ·{" "}
            <a
              href="https://www.amrita.edu/center/create/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AmritaCreate ↗
            </a>
          </h3>
          <p>
            Worked on AI-driven fetal healthcare solutions, focusing on CTG
            forecasting and medical image analysis for real-world clinical use.
          </p>
        </div>

        <div className={styles.card}>
          <h3>
            Software Development Intern ·{" "}
            <a
              href="https://www.sumeru.us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sumeru Software Solutions ↗
            </a>
          </h3>
          <p>
            Built data-driven ML models and visualizations to improve auditing
            accuracy and software reliability.
          </p>
        </div>

        <div className={styles.card}>
          <h3>
            Member ·{" "}
            <a
              href="https://acm-amritapuri.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACM Amritapuri (AI SIG) ↗
            </a>
          </h3>
          <p>
            Engaged in hands-on ML tasks, Kaggle coursework, and collaborative
            tech initiatives as part of the ACM student chapter.
          </p>
        </div>
      </div>
    </section>
  );
}
