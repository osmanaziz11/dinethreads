import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContent}`}>
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

        <h1>
          Premium <span className={styles.heroHighlight}>custom uniforms</span>{" "}
          & branded merchandise — made in Pakistan for the world
        </h1>

        <p className={styles.lead}>
          We design, produce, and ship high-quality custom apparel including
          t-shirts, polos, chef uniforms, caps, bags, and packaging.
          Cost-effective manufacturing in Pakistan with global delivery and
          special focus on the UK market.
        </p>

        <div className={styles.heroCtas}>
          <a href="#quote" className={`${styles.btn} ${styles.btnPrimary}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Request a Quote
          </a>
          <a
            href="#categories"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            Browse Products
          </a>
        </div>

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
      </div>

      <div className={`${styles.heroVisual} `}>
        <div className={styles.productShowcase}>
          <div className={styles.showcaseHeader}>
            <div className={styles.showcaseTitle}>Our Products</div>
            <div className={styles.showcaseBadge}>Premium Quality</div>
          </div>

          <div className={styles.showcaseFooter}>
            <div>100% Cotton • Poly Blends</div>
            <div>Ships Worldwide</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
