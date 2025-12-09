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
          I’m an M.Tech AI student who loves turning data into something meaningful — especially when it can help people.
When I’m not experimenting with models, you’ll probably find me vibing to music or sketching ideas.
Hit me up if you want to talk AI… or just share a cool playlist! 😄🎶
        </p>
      </div>
    </section>
  );
}
