import React from "react";
import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles["cta-section"]}>
      <h2 className={styles["cta-title"]}>Still Have Questions?</h2>
      <p className={styles["cta-subtitle"]}>
        Our team is here to help. Get in touch and we will answer any questions
        about your custom uniform needs.
      </p>
      <div className={styles["cta-buttons"]}>
        <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
          Contact Us →
        </a>
        <a href="#" className={`${styles.btn} ${styles["btn-outline"]}`}>
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default CTASection;
