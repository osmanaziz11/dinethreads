import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>Get In Touch</div>
          <h1 className={styles.heroTitle}>
            Lets Create Something Amazing Together
          </h1>
          <p className={styles.heroSubtitle}>
            Whether you need a quote, have questions, or want to discuss your
            custom uniform needs, we are here to help. Manufacturing excellence
            from Pakistan to your doorstep.
          </p>
        </div>
      </section>

      <section className={styles["response-banner"]}>
        <div className={styles["response-content"]}>
          <div className={styles["response-item"]}>
            <div className={styles["response-time"]}>24h</div>
            <div className={styles["response-label"]}>
              Initial Response Time
            </div>
          </div>
          <div className={styles["response-item"]}>
            <div className={styles["response-time"]}>48h</div>
            <div className={styles["response-label"]}>
              Detailed Quote Delivery
            </div>
          </div>
          <div className={styles["response-item"]}>
            <div className={styles["response-time"]}>7/7</div>
            <div className={styles["response-label"]}>Days Available</div>
          </div>
        </div>
      </section>
    </>
  );
}
