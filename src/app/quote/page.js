import { Icon } from "@iconify/react";
import styles from "../_styles/Quote.module.css";

export default function Quote() {
  return (
    <div className={`${styles.quoteContainer} mt-32 px-12`}>
      <div className={styles.pageHeader}>
        <div className={styles.pageEyebrow}>Get Your Quote</div>
        <h1 className={styles.pageTitle}>Request a Custom Quote</h1>
        <p className={styles.pageSubtitle}>
          Fill out the form below and we will get back to you within 24 hours
          with a detailed quote including pricing, samples, and delivery
          timeline.
        </p>
      </div>

      <div className={`${styles.contentGrid}`}>
        {/* Form Section */}
        <div>
          <div id="successMessage" className={styles.successMessage}>
            ✓ Thank you! Your quote request has been submitted. We will contact
            you within 24 hours.
          </div>

          <div className={styles.formCard}>
            <form id="quoteForm">
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    Phone Number <span className={styles.required}>*</span>
                  </label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">
                  Company/Business Name{" "}
                  <span className={styles.required}>*</span>
                </label>
                <input type="text" id="company" name="company" required />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="country">
                    Country <span className={styles.required}>*</span>
                  </label>
                  <select id="country" name="country" required>
                    <option value="">Select your country</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="pk">Pakistan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="industry">Industry Type</label>
                  <select id="industry" name="industry">
                    <option value="">Select industry</option>
                    <option value="restaurant">Restaurant/Cafe</option>
                    <option value="hotel">Hotel/Hospitality</option>
                    <option value="retail">Retail</option>
                    <option value="corporate">Corporate</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>
                  Products Interested In{" "}
                  <span className={styles.required}>*</span>
                </label>
                <div className={styles.checkboxGroup}>
                  {[
                    ["tshirts", "T-Shirts"],
                    ["polos", "Polo Shirts"],
                    ["chef", "Chef Uniforms"],
                    ["caps", "Caps"],
                    ["bags", "Bags"],
                    ["packaging", "Packaging"],
                  ].map(([id, label]) => (
                    <div className={styles.checkboxItem} key={id}>
                      <input
                        type="checkbox"
                        id={id}
                        name="products"
                        value={id}
                      />
                      <label htmlFor={id}>{label}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="quantity">
                    Estimated Quantity{" "}
                    <span className={styles.required}>*</span>
                  </label>
                  <select id="quantity" name="quantity" required>
                    <option value="">Select quantity</option>
                    <option value="25-50">25-50 pieces</option>
                    <option value="51-100">51-100 pieces</option>
                    <option value="101-250">101-250 pieces</option>
                    <option value="251-500">251-500 pieces</option>
                    <option value="500+">500+ pieces</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="timeline">When do you need it?</label>
                  <select id="timeline" name="timeline">
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (2-3 weeks)</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2months">1-2 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="details">
                  Project Details <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Tell us about your requirements: colors, sizes, logo details, special requests, etc."
                  required
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="budget">Budget Range (Optional)</label>
                <select id="budget" name="budget">
                  <option value="">Select budget range</option>
                  <option value="under1000">Under £1,000</option>
                  <option value="1000-2500">£1,000 - £2,500</option>
                  <option value="2500-5000">£2,500 - £5,000</option>
                  <option value="5000+">£5,000+</option>
                </select>
              </div>

              <button type="submit" className={styles.btnSubmit}>
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className={styles.infoSidebar}>
          <div className={styles.infoCard}>
            <h3>What Happens Next?</h3>

            {[
              {
                title: "24 Hour Response",
                desc: "Our team reviews your request and prepares a detailed quote",
                icon: "tabler:clock-hour-5",
              },
              {
                title: "Consultation Call",
                desc: "We discuss your needs, show samples, and refine details",
                icon: "mdi:contact",
              },
              {
                title: "Production & Delivery",
                desc: "Approve design, we manufacture, and ship to your location",
                icon: "bx:calendar",
              },
            ].map(({ title, desc, icon }, i) => (
              <div className={styles.infoItem} key={i}>
                <div className={styles.infoIcon}>
                  <Icon
                    icon={icon}
                    width="24"
                    height="24"
                    style={{ color: "#00a896" }}
                  />
                </div>
                <div className={styles.infoContent}>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.trustBadgeSidebar}>
            <h3>Why Choose DineThreads?</h3>
            <p>Join hundreds of satisfied businesses worldwide</p>
            <div className={styles.trustStats}>
              {[
                ["500+", "Happy Clients"],
                ["24h", "Response Time"],
                ["40%", "Cost Savings"],
                ["98%", "Satisfaction"],
              ].map(([num, label], i) => (
                <div className={styles.statItem} key={i}>
                  <span className={styles.statNumber}>{num}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
