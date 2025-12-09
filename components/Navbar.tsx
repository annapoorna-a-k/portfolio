"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>Annapoorna</div>

        {/* Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {sections.map((sec) => (
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

        {/* Hamburger button */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </nav>
  );
}
