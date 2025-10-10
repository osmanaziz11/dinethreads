import React from "react";
import { Icon } from "@iconify/react";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "1",
    title: "Share Your Requirements",
    desc: "Tell us about your needs: product type, quantities, sizes, colors, and branding details. Upload your logo or design concepts.",
    time: "⏱ 24 hours response",
    icon: "mdi:form-textbox",
  },
  {
    number: "2",
    title: "Get Detailed Quote",
    desc: "Receive a comprehensive quote including fabric samples, mockups, pricing breakdown, and shipping costs. Request revisions until perfect.",
    time: "⏱ 48 hours turnaround",
    icon: "mdi:file-document-edit",
  },
  {
    number: "3",
    title: "Production Begins",
    desc: "Once approved, our Pakistan facility starts manufacturing. Quality checks at cutting, printing, stitching, and finishing stages.",
    time: "⏱ 2-3 weeks production",
    icon: "mdi:factory",
  },
  {
    number: "4",
    title: "Global Delivery",
    desc: "Express shipping with tracking to UK and worldwide. Receive your premium custom uniforms ready to wear or distribute.",
    time: "⏱ 7-10 days shipping (UK)",
    icon: "mdi:truck-fast",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className={styles.process}>
      <div className={styles["section-header"]}>
        <div className={styles["section-eyebrow"]}>How It Works</div>
        <h2 className={styles["section-title"]}>
          From Design to Delivery in 4 Simple Steps
        </h2>
        <p className={styles["section-desc"]}>
          Our streamlined process ensures quality control at every stage, from
          your initial concept to receiving your custom uniforms anywhere in the
          world.
        </p>
      </div>

      <div className={styles["process-timeline"]}>
        {steps.map((step, index) => (
          <div key={index} className={styles["process-step"]}>
            <div className={styles["step-number"]}>{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <div className={styles["process-time"]}>{step.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
