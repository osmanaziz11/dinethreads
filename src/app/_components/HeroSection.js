import React from "react";
import styles from "./HeroSection.module.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Reusable Action Button
function ActionButton({ btnText = "Browse Products", classes }) {
  return (
    <div className="relative ms-2">
      <button
        className={`${styles.btn} ${styles.btnPrimary} shadow-lg ${classes}`}
      >
        {btnText}
      </button>
      <div className={`${styles.btnEffect} shadow-lg`} />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Hero Content */}
      <div className={styles.heroContent}>
        {/* Eyebrow */}
        <div className={styles.heroEyebrow}>
          <svg
            className={styles.trustIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Global Production • Pakistan Made • UK Focused
        </div>

        {/* Heading */}
        <h1>
          Premium <span className={styles.brackets}>[</span>{" "}
          <span className={styles.heroHighlight}>custom uniforms</span>{" "}
          <span className={styles.brackets}>]</span> & branded merchandise —
          made in Pakistan for the world
        </h1>

        {/* Lead Paragraph */}
        <p className={styles.lead}>
          We design, produce, and ship high-quality custom apparel including
          t-shirts, polos, chef uniforms, caps, bags, and packaging.
          Cost-effective manufacturing in Pakistan with global delivery and
          special focus on the UK market.
        </p>

        {/* Trust Badges */}
        <div className={styles.trustBadges}>
          <div className={styles.trustBadge}>
            <svg
              className={styles.trustIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            XS to XL Sizes
          </div>

          <div className={styles.trustBadge}>
            <svg
              className={styles.trustIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Multiple Fabrics
          </div>

          <div className={styles.trustBadge}>
            <svg
              className={styles.trustIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7Z" />
            </svg>
            Custom Logos
          </div>
        </div>

        {/* CTA */}
        <div className={styles.heroCtas}>
          <ActionButton classes="text-md" />
        </div>
      </div>

      {/* Hero Visual */}
      <div className={`${styles.heroVisual} ${inter.className}`}>
        <ActionButton btnText="T-shirt designs" classes="text-md" />

        <div className="flex flex-1 w-full justify-center items-center relative">
          <div className="absolute z-50 w-full h-full -top-[64px] left-0">
            <Image
              src="/images/t-shirt-text.png"
              alt="T-shirt"
              width={480}
              height={525}
              className="z-50 object-contain"
            />
          </div>

          <div className="w-full absolute bottom-10">
            <ActionButton
              btnText="TELL US YOUR IDEA WE WILL BRING YOUR IDEA TO VISION"
              classes="text-sm px-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
