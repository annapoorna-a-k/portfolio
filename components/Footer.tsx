import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site Footer">
      © {new Date().getFullYear()} <strong>Annapoorna A K</strong> — All Rights Reserved
    </footer>
  );
}
