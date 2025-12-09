"use client";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} reveal`} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.greeting}>Welcome</div>
          <h1>
            Hi, I'm <br />
            <span className={styles.gradientText}>Annapoorna</span> 👋
          </h1>

          <p className={styles.subtitle}>
            M.Tech AI student passionate about Data Analytics, Deep Learning &
            creating intelligent systems that make an impact.
          </p>

          <div className={styles.ctaButtons}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              View Projects
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
              Contact
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.profileContainer}>
            <div className={styles.profileGlow}></div>
            <div className={styles.profileRing}></div>

            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={450}
              height={450}
              className={styles.profileImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
