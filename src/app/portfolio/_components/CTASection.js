import React from "react";
import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <section className={styles["cta-section"]}>
      <h2 className={styles["cta-title"]}>
        Ready to Transform Your Team&apos;s Look?
      </h2>
      <p className={styles["cta-subtitle"]}>
        Lets create custom uniforms that perfectly represent your brand and make
        your team proud to wear them.
      </p>
      <div className={styles["cta-buttons"]}>
        <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
          Get Started →
        </a>
        <a href="#" className={`${styles.btn} ${styles["btn-outline"]}`}>
          View Catalog
        </a>
      </div>
    </section>
  );
};

export default CTASection;
