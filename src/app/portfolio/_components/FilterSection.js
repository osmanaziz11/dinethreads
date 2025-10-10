"use client";

import React, { useState } from "react";
import styles from "./FilterSection.module.css";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Restaurants", value: "restaurant" },
  { label: "Hotels", value: "hotel" },
  { label: "Cafes", value: "cafe" },
  { label: "Corporate", value: "corporate" },
  { label: "Retail", value: "retail" },
];

const FilterSection = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
    if (onFilterChange) onFilterChange(filterValue);
  };

  return (
    <section className={styles["filter-section"]}>
      <div className={styles["filter-container"]}>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`${styles["filter-btn"]} ${
              activeFilter === filter.value ? styles.active : ""
            }`}
            onClick={() => handleFilterClick(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
