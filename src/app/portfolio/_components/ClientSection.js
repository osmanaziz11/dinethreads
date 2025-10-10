import React from "react";
import styles from "./ClientSection.module.css";

const ClientSection = () => {
  return (
    <section className={styles["clients-section"]}>
      <div className={styles["section-header"]}>
        <div className={styles["section-eyebrow"]}>Trusted By</div>
        <h2 className={styles["section-title"]}>Our Valued Clients</h2>
        <p className={styles["section-subtitle"]}>
          We are proud to partner with leading brands across hospitality and
          retail
        </p>
      </div>

      <div className={styles["clients-grid"]}>
        {[
          "HOTEL LUXE",
          "BISTRO CO.",
          "CAFÉ NOIR",
          "SPICE HUB",
          "FRESH EATS",
          "ROYAL INN",
        ].map((name) => (
          <div key={name} className={styles["client-logo"]}>
            <div className={styles["client-logo-text"]}>{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
