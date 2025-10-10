import React from "react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    initials: "MR",
    name: "Marcus Reynolds",
    role: "Owner, The Spice Route Chain",
    text: `"We ordered 200 custom chef jackets for our restaurant group. The quality exceeded expectations and the price was 40% lower than UK suppliers. The embroidery work is impeccable and delivery was right on time."`,
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Manager, Riverside Hotel London",
    text: `"DineThreads transformed our staff presentation. The polo shirts are high quality, the logo embroidery is crisp, and our team looks professional. Great communication throughout the entire process."`,
  },
  {
    initials: "JK",
    name: "James Kumar",
    role: "Founder, Brew & Bite Coffee",
    text: `"As a startup, budget was tight but we didn't want to compromise on quality. DineThreads delivered exactly what we needed - professional branded t-shirts at prices that worked for us. Highly recommend!"`,
  },
  {
    initials: "AL",
    name: "Aisha Lewis",
    role: "Operations Director, Fresh Bites Ltd",
    text: `"We've been working with DineThreads for 2 years now. Consistent quality, reliable delivery times, and they always accommodate our custom requests. The savings allow us to invest more in our business."`,
  },
  {
    initials: "TP",
    name: "Tom Patterson",
    role: "CEO, Artisan Treats Co.",
    text: `"The custom packaging elevated our brand instantly. The boxes arrived perfectly printed and the quality of the materials is outstanding. Our customers notice the difference and it shows in our reviews."`,
  },
  {
    initials: "NK",
    name: "Nina Kowalski",
    role: "Owner, Garden Bistro Manchester",
    text: `"Excellent service from start to finish. They helped us design our staff uniforms, provided samples, and the final products are exactly what we envisioned. The team looks united and professional now."`,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles["section-header"]}>
        <div className={styles["section-eyebrow"]}>Client Success Stories</div>
        <h2 className={styles["section-title"]}>
          Trusted by Businesses Across the UK & Beyond
        </h2>
        <p className={styles["section-desc"]}>
          From independent cafes to restaurant chains, our clients love the
          quality, affordability, and service we provide from Pakistan to their
          doorstep.
        </p>
      </div>

      <div className={styles["testimonials-grid"]}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles["testimonial-card"]}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles["testimonial-text"]}>{t.text}</p>
            <div className={styles["testimonial-author"]}>
              <div className={styles["author-avatar"]}>{t.initials}</div>
              <div className={styles["author-info"]}>
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
