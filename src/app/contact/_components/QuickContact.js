import React from "react";
import styles from "./QuickContact.module.css";

export default function QuickContact() {
  return (
    <section className={styles["quick-contact"]}>
      <div className={styles["quick-contact-container"]}>
        <div className={styles["section-header"]}>
          <div className={styles["section-eyebrow"]}>Need Faster Response?</div>
          <h2 className={styles["section-title"]}>Quick Contact Options</h2>
          <p className={styles["section-subtitle"]}>
            Choose the method that works best for you. We are available through
            multiple channels.
          </p>
        </div>

        <div className={styles["quick-options"]}>
          <div className={styles["quick-option"]}>
            <div className={styles["quick-option-icon"]}>💬</div>
            <h3>WhatsApp Chat</h3>
            <p>
              Get instant responses to quick questions. Perfect for order
              updates and urgent inquiries.
            </p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener"
              className={styles["quick-option-link"]}
            >
              Start Chat →
            </a>
          </div>

          <div className={styles["quick-option"]}>
            <div className={styles["quick-option-icon"]}>📧</div>
            <h3>Email Quote Request</h3>
            <p>
              Send detailed requirements and receive a comprehensive quote
              within 48 hours.
            </p>
            <a
              href="mailto:sales@dinethreads.com"
              className={styles["quick-option-link"]}
            >
              Email Us →
            </a>
          </div>

          <div className={styles["quick-option"]}>
            <div className={styles["quick-option-icon"]}>📞</div>
            <h3>Schedule a Call</h3>
            <p>
              Book a consultation call to discuss your project in detail with
              our team.
            </p>
            <a href="#" className={styles["quick-option-link"]}>
              Book Call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
