import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Contact</div>
        <h2 className={styles.sectionTitle}>Let’s Connect</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <p className={styles.contactText}>
        Feel free to reach out if you're interested in collaborating or just want to say hi!
      </p>

      <div className={styles.socialLinks}>
        <a
          href="mailto:akannapoorna94@gmail.com"
          className={styles.socialButton}
        >
          ✉ Email
        </a>

        <a
          href="https://www.linkedin.com/in/annapoorna-a-k/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialButton}
        >
          🔗 LinkedIn
        </a>

        <a
          href="/files/Resume.pdf"
          download="Annapoorna_AK_Resume.pdf"
          className={styles.socialButton}
        >
          📄 Resume
        </a>
      </div>
    </section>
  );
}
