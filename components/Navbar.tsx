"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];

  if (!mounted) return null; // prevents hydration mismatch

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
    >
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>Annapoorna</div>

        {/* Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {sections.map((sec) => (
            <li key={sec}>
              <a href={`#${sec}`} onClick={() => setIsOpen(false)}>
                {sec.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className={styles.rightControls}>
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
