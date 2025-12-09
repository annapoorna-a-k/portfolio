"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // <-- moved inside

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>Annapoorna</div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                onClick={() => setIsOpen(false)}
              >
                {sec.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}
