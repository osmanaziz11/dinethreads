import React from "react";
import styles from "./HeroSection.module.css";

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50K+", label: "Uniforms Delivered" },
  { number: "30+", label: "Countries Served" },
];

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-eyebrow"]}>Our Work</div>
        <h1 className={styles["hero-title"]}>
          Portfolio &amp; Success Stories
        </h1>
        <p className={styles["hero-subtitle"]}>
          From independent cafes to international restaurant chains, we have
          delivered premium custom uniforms to businesses across the globe.
        </p>

        <div className={styles["stats-row"]}>
          {stats.map((item, i) => (
            <div className={styles["stat-item"]} key={i}>
              <span className={styles["stat-number"]}>{item.number}</span>
              <span className={styles["stat-label"]}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
