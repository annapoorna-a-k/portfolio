import React from "react";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.bgAnimation}>
      <div className={styles.orb + " " + styles.orb1}></div>
      <div className={styles.orb + " " + styles.orb2}></div>
      <div className={styles.orb + " " + styles.orb3}></div>
    </div>
  );
}
