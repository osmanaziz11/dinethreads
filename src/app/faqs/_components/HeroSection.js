import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-eyebrow"]}>Help Center</div>
        <h1 className={styles["hero-title"]}>Frequently Asked Questions</h1>
        <p className={styles["hero-subtitle"]}>
          Everything you need to know about ordering custom uniforms from
          Pakistan to anywhere in the world.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
