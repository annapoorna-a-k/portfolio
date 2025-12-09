"use client";
import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`${styles.about} reveal`}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>About Me</div>
        <h2 className={styles.sectionTitle}>Crafting Intelligence</h2>
        <div className={styles.decorativeLine}></div>
        <p className={styles.sectionDescription}>
          I’m a passionate M.Tech AI student focused on solving real-world
          challenges using Data Analytics, Deep Learning, and intelligent
          automation. I believe innovation should always create a positive
          impact in people's lives.
        </p>
      </div>
    </section>
  );
}
