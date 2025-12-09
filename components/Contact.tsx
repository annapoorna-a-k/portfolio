"use client";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTag}>Contact</div>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        <div className={styles.decorativeLine}></div>
      </div>

      <p className={styles.contactText}>
        Connect with me on any of these platforms!
      </p>

      <div className={styles.socialLinks}>
        
        <a
          href="https://www.linkedin.com/in/annapoorna-a-k/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/annapoorna-a-k"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://leetcode.com/u/apk2002kmr/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="LeetCode"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://discord.com/users/annn_51"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
          title="Discord: annn_51"
        >
          <FaDiscord />
        </a>

        <a
          href="mailto:akannapoorna94@gmail.com"
          className={styles.iconButton}
          title="Email: akannapoorna94@gmail.com"
        >
          <MdEmail />
        </a>

      </div>
    </section>
  );
}
