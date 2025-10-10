"use client";
import React, { useState } from "react";
import styles from "./GallerySection.module.css";
import { Icon } from "@iconify/react";

const galleryItems = [
  {
    category: "restaurant",
    emoji: "🍽️",
    title: "The Spice Route Chain",
    description:
      "Complete chef uniform package with custom embroidered jackets, pants, and aprons for a 5-location restaurant group.",
    pieces: "200 pieces",
    location: "UK",
  },
  {
    category: "hotel",
    emoji: "🏨",
    title: "Riverside Hotel London",
    description:
      "Premium polo shirts with embroidered logos for front desk and concierge staff. Professional navy and white color scheme.",
    pieces: "150 pieces",
    location: "UK",
  },
  {
    category: "cafe",
    emoji: "☕",
    title: "Brew & Bite Coffee",
    description:
      "Custom t-shirts and aprons with screen-printed logos. Eco-friendly cotton fabric in brand colors with vintage design.",
    pieces: "80 pieces",
    location: "UK",
  },
  {
    category: "restaurant",
    emoji: "🍜",
    title: "Fresh Bites Ltd",
    description:
      "Multi-location fast-casual chain uniforms. T-shirts, caps, and custom packaging boxes with vibrant brand identity.",
    pieces: "350 pieces",
    location: "UK",
  },
  {
    category: "retail",
    emoji: "🛍️",
    title: "Artisan Treats Co.",
    description:
      "Premium packaging solution with custom printed boxes, tissue paper, and branded tote bags for luxury food products.",
    pieces: "500 units",
    location: "UK",
  },
  {
    category: "restaurant",
    emoji: "🍕",
    title: "Garden Bistro Manchester",
    description:
      "Complete staff uniform redesign including chef jackets, waiter shirts, and custom aprons with embroidered details.",
    pieces: "120 pieces",
    location: "UK",
  },
  {
    category: "corporate",
    emoji: "💼",
    title: "TechStart Summit 2024",
    description:
      "Conference merchandise package with branded t-shirts, tote bags, and lanyards for 500+ attendees.",
    pieces: "600 pieces",
    location: "UK",
  },
  {
    category: "cafe",
    emoji: "🥐",
    title: "Morning Glory Bakery",
    description:
      "Pastel-colored staff uniforms with custom embroidery, matching aprons.",
  },
];

const GallerySection = ({ activeFilter = "all" }) => {
  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className={styles["gallery-section"]}>
      <div className={styles["gallery-grid"]}>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={styles["gallery-item"]}
            data-category={item.category}
          >
            <div className={styles["gallery-image"]}>
              <div className={styles["image-placeholder"]}>{item.emoji}</div>
            </div>

            <div className={styles["gallery-info"]}>
              <span className={styles["gallery-category"]}>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
              <h3 className={styles["gallery-title"]}>{item.title}</h3>
              <p className={styles["gallery-description"]}>
                {item.description}
              </p>

              {(item.pieces || item.location) && (
                <div className={styles["gallery-meta"]}>
                  {item.pieces && (
                    <div className={styles["meta-item"]}>
                      <Icon icon="mdi:shield" className={styles["meta-icon"]} />
                      {item.pieces}
                    </div>
                  )}
                  {item.location && (
                    <div className={styles["meta-item"]}>
                      <Icon icon="mdi:earth" className={styles["meta-icon"]} />
                      {item.location}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
