import React from "react";
import { Icon } from "@iconify/react";
import styles from "./WhyUsSection.module.css";

const benefits = [
  {
    icon: "mdi:factory",
    title: "Cost-Effective Production",
    desc: "Manufacturing in Pakistan means 30-50% lower costs compared to UK production, without compromising quality. Perfect for startups and growing businesses.",
  },
  {
    icon: "mdi:shield-check",
    title: "Quality Guaranteed",
    desc: "Every piece undergoes rigorous quality checks. We use premium fabrics sourced globally and follow international manufacturing standards.",
  },
  {
    icon: "mdi:counter",
    title: "Low Minimum Orders",
    desc: "Start with as few as 25 pieces. We support businesses of all sizes from independent cafes to restaurant chains.",
  },
  {
    icon: "mdi:truck-fast",
    title: "Fast Global Shipping",
    desc: "Express shipping to UK (7-10 days) and worldwide delivery. Track your order from Lahore to London.",
  },
  {
    icon: "mdi:tshirt-crew-outline",
    title: "Full Customization",
    desc: "Your logo, your colors, your style. We offer screen printing, embroidery, heat transfer, and custom patterns.",
  },
  {
    icon: "mdi:headset",
    title: "Dedicated Support",
    desc: "From design consultation to after-sales service, our team guides you through every step. Real people, real support.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className={styles["why-us"]}>
      <div className={styles["section-header"]}>
        <div className={styles["section-eyebrow"]}>Why DineThreads</div>
        <h2 className={styles["section-title"]}>
          Pakistan Manufacturing, Global Quality Standards
        </h2>
        <p className={styles["section-desc"]}>
          We combine cost-effective Pakistani production with international
          quality control to deliver premium custom apparel at competitive
          prices.
        </p>
      </div>

      <div className={styles["benefits-grid"]}>
        {benefits.map((item, index) => (
          <div className={styles["benefit-card"]} key={index}>
            <div className={styles["benefit-icon"]}>
              <Icon icon={item.icon} width={40} color="#1a7067" height={40} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
