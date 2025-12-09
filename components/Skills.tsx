"use client";
import styles from "./Skills.module.css";

export default function Skills() {
  const skills = [
    { icon: "🐍", name: "Python" },
    { icon: "🧠", name: "Deep Learning" },
    { icon: "🔥", name: "TensorFlow" },
    { icon: "⚡", name: "PyTorch" },
    { icon: "⚛️", name: "React" },
    { icon: "🎯", name: "Django" },
    { icon: "🗄️", name: "SQL" },
    { icon: "🤖", name: "Machine Learning" },
  ];

  return (
    <section className={`${styles.skills} reveal`} id="skills">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Expertise</div>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <article key={index} className={`${styles.skillCard} reveal`}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <h3>{skill.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
