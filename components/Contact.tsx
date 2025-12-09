"use client";
import React from "react";
import styles from "./Contact.module.css";

// 👇 Import icons you want
import { FiMail, FiLinkedin, FiFileText } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Contact</div>
        <h2 className={styles.sectionTitle}>Let’s Connect</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <p className={styles.contactText}>
        Feel free to reach out if you're interested in collaborating or want to say hi!
      </p>

      <div className={styles.socialLinks}>
        <a href="mailto:akannapoorna94@gmail.com" className={styles.socialButton}>
          <FiMail /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/annapoorna-a-k/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialButton}
        >
          <FiLinkedin /> LinkedIn
        </a>

        <a
          href="/files/Resume.pdf"
          download="Annapoorna_AK_Resume.pdf"
          className={styles.socialButton}
        >
          <FiFileText /> Resume
        </a>
      </div>
    </section>
  );
}
