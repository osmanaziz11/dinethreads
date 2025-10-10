"use client";

import React, { useState } from "react";
import styles from "./FAQSection.module.css";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "ordering", label: "Ordering Process" },
    { id: "products", label: "Products & Quality" },
    { id: "shipping", label: "Shipping & Delivery" },
    { id: "customization", label: "Customization" },
    { id: "payment", label: "Payment & Pricing" },
  ];

  const faqs = [
    {
      category: "ordering",
      question: "How do I place an order with DineThreads?",
      answer: (
        <>
          Placing an order is simple:
          <ul>
            <li>
              <strong>Step 1:</strong> Contact us via email, phone, or website
              form
            </li>
            <li>
              <strong>Step 2:</strong> Share your requirements (type, sizes,
              colors, logo)
            </li>
            <li>
              <strong>Step 3:</strong> Receive a detailed quote with mockups
            </li>
            <li>
              <strong>Step 4:</strong> Approve the design and place your order
            </li>
            <li>
              <strong>Step 5:</strong> Production begins and ships in 2–3 weeks
            </li>
          </ul>
        </>
      ),
    },
    {
      category: "ordering",
      question: "What is the minimum order quantity?",
      answer:
        "Our minimum order is 25 pieces — ideal for small businesses, cafes, and startups. Larger chains can order 1000+ units with volume discounts.",
    },
    {
      category: "shipping",
      question: "How long does shipping take to the UK?",
      answer: (
        <>
          <strong>Production:</strong> 2–3 weeks after design approval
          <br />
          <strong>Shipping:</strong> 7–10 days via DHL/FedEx
          <br />
          <strong>Total:</strong> 4–5 weeks from order to delivery
        </>
      ),
    },
    {
      category: "customization",
      question: "What customization options do you offer?",
      answer: (
        <ul>
          <li>Logo embroidery and screen printing</li>
          <li>Custom colors and fabrics</li>
          <li>Labels, tags, and packaging</li>
          <li>Pattern and design customization</li>
        </ul>
      ),
    },
    {
      category: "payment",
      question: "What payment methods do you accept?",
      answer: (
        <ul>
          <li>Bank Transfer (SWIFT/IBAN)</li>
          <li>PayPal (for orders under £1000)</li>
          <li>Wise / TransferWise</li>
          <li>Credit or Debit Card</li>
        </ul>
      ),
    },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className={styles["faq-section"]}>
      {/* Category Filters */}
      <div className={styles["faq-categories"]}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles["category-btn"]} ${
              activeCategory === cat.id ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className={styles["faq-list"]}>
        {filteredFaqs.map((faq, index) => (
          <div key={index} className={styles["faq-item"]}>
            <div
              className={styles["faq-question"]}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3>{faq.question}</h3>
              <div className={styles["faq-icon"]}>
                {openIndex === index ? "−" : "+"}
              </div>
            </div>

            {openIndex === index && (
              <div className={styles["faq-answer"]}>
                <div className={styles["faq-answer-content"]}>{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
