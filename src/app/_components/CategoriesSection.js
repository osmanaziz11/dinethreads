import React from "react";
import styles from "./CategoriesSection.module.css";
import ProductCard from "./ProductCard";

const CategoriesSection = () => {
  return (
    <section id="categories" className={styles.categories}>
      <div className={styles["section-header"]}>
        <div className={styles["section-eyebrow"]}>Our Product Range</div>
        <h2 className={styles["section-title"]}>
          Complete Uniform & Merchandise Solutions
        </h2>
        <p className={styles["section-desc"]}>
          From restaurant staff to corporate teams, we design and manufacture
          custom apparel for every industry with flexible sizing and premium
          fabrics.
        </p>
      </div>

      <div className={styles["categories-grid"]}>
        {/* Custom T-Shirts */}
        <ProductCard image="/images/p4.png"/>

        {/* Polo Shirts */}
        <ProductCard image="/images/p1.png"/>

        {/* Chef Uniforms */}
        <ProductCard image="/images/p2.png"/>

        {/* Caps & Headwear */}
        <ProductCard image="/images/p3.png"/>
      </div>
    </section>
  );
};

export default CategoriesSection;
