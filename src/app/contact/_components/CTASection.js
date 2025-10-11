import React from "react";
import styles from "./CTASection.module.css";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className={styles["faq-section"]}>
      <div className={styles["faq-container"]}>
        <h3 className={styles["faq-title"]}>Have More Questions?</h3>
        <p className={styles["faq-text"]}>
          Check out our comprehensive FAQ page for answers to common questions
          about ordering, production, shipping, and more.
        </p>
        <Link href="/faqs" className={styles["faq-link"]}>
          Visit FAQ Page →
        </Link>
      </div>
    </section>
  );
}
