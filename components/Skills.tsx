"use client";
import styles from "./Skills.module.css";
import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiPostgresql, SiDjango, SiBootstrap, SiOpencv, SiPytorch, SiTensorflow } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      items: [
        { icon: <FaPython />, name: "Python" }
      ]
    },
    {
      title: "Databases",
      items: [
        { icon: <SiPostgresql />, name: "PostgreSQL" }
      ]
    },
    {
      title: "Machine Learning & AI Areas",
      items: [
        { icon: <SiPytorch />, name: "Deep Learning & DL Frameworks" },
        { icon: <SiTensorflow />, name: "TensorFlow" },
        { icon: <SiOpencv />, name: "Computer Vision" }
      ]
    },
    {
      title: "Web Development",
      items: [
        { icon: <SiDjango />, name: "Django" },
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <SiBootstrap />, name: "Bootstrap" }
      ]
    }
  ];

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Expertise</div>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      {skillCategories.map((category, idx) => (
        <div key={idx} className={styles.skillGroup}>
          <h3 className={styles.groupTitle}>{category.title}</h3>
          <div className={styles.skillsGrid}>
            {category.items.map((skill, i) => (
              <div key={i} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
