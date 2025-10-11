import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-info"]}>
          <div className={styles["info-card"]}>
            <div className={styles["info-icon"]}>📍</div>
            <h3>Manufacturing Facility</h3>
            <p>
              DineThreads Manufacturing
              <br />
              Industrial Area, Lahore
              <br />
              Punjab, Pakistan
            </p>
            <div className={styles["info-highlight"]}>
              <strong>UK Clients Welcome!</strong> We specialize in serving UK
              businesses with fast shipping and all-inclusive pricing (customs &
              duties included).
            </div>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["info-icon"]}>📧</div>
            <h3>Email Us</h3>
            <p>
              General Inquiries:
              <br />
              <a href="mailto:info@dinethreads.com">info@dinethreads.com</a>
            </p>
            <p>
              Sales & Quotes:
              <br />
              <a href="mailto:sales@dinethreads.com">sales@dinethreads.com</a>
            </p>
            <p>
              Support & Reorders:
              <br />
              <a href="mailto:support@dinethreads.com">
                support@dinethreads.com
              </a>
            </p>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["info-icon"]}>📱</div>
            <h3>Call or WhatsApp</h3>
            <p>
              Pakistan Office:
              <br />
              <a href="tel:+923001234567">+92 300 123 4567</a>
            </p>
            <p>
              WhatsApp (Preferred):
              <br />
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener"
              >
                +92 300 123 4567
              </a>
            </p>
            <p className={styles["note-text"]}>
              💡 WhatsApp is fastest for quick questions and order updates
            </p>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["info-icon"]}>🌐</div>
            <h3>Follow Us</h3>
            <p>
              Stay updated with our latest projects, client testimonials, and
              special offers.
            </p>
            <div className={styles["social-links"]}>
              <a
                href="#"
                className={styles["social-link"]}
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className={styles["social-link"]}
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className={styles["social-link"]}
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className={styles["social-link"]}
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          <div className={styles["info-card"]}>
            <div className={styles["info-icon"]}>🕐</div>
            <h3>Business Hours</h3>
            <p>
              <strong>Pakistan Time (PKT):</strong>
              <br />
              Monday - Saturday: 9:00 AM - 7:00 PM
              <br />
              Sunday: 10:00 AM - 4:00 PM
            </p>
            <p>
              <strong>UK Time Equivalent:</strong>
              <br />
              Monday - Saturday: 4:00 AM - 2:00 PM
              <br />
              Sunday: 5:00 AM - 11:00 AM
            </p>
            <p className={styles["note-text"]}>
              📧 Email inquiries answered within 24 hours, even outside business
              hours!
            </p>
          </div>
        </div>

        <div className={styles["contact-form-wrapper"]}>
          <div className={styles["form-header"]}>
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and we will get back to you within 24
              hours with a detailed response.
            </p>
          </div>

          <form className={styles["contact-form"]} id="contactForm">
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="firstName">
                  First Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="lastName">
                  Last Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="email">
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 20 1234 5678"
                />
              </div>
            </div>

            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="Your Restaurant or Company"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="country">
                  Country <span className={styles.required}>*</span>
                </label>
                <select id="country" name="country" defaultValue="" required>
                  <option value="">Select Country</option>
                  <option value="UK" selected>
                    United Kingdom
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="AE">UAE</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="inquiryType">
                  Inquiry Type <span className={styles.required}>*</span>
                </label>
                <select id="inquiryType" name="inquiryType" required>
                  <option value="">Select Type</option>
                  <option value="quote">Request a Quote</option>
                  <option value="sample">Order Samples</option>
                  <option value="reorder">Reorder Previous Design</option>
                  <option value="question">General Question</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="quantity">Estimated Quantity</label>
                <select id="quantity" name="quantity">
                  <option value="">Select Quantity</option>
                  <option value="25-50">25-50 pieces</option>
                  <option value="51-100">51-100 pieces</option>
                  <option value="101-250">101-250 pieces</option>
                  <option value="251-500">251-500 pieces</option>
                  <option value="500+">500+ pieces</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="productInterest">
                Products You are Interested In
              </label>
              <select id="productInterest" name="productInterest">
                <option value="">Select Product Type</option>
                <option value="tshirts">Custom T-Shirts</option>
                <option value="polos">Polo Shirts</option>
                <option value="chef">Chef Uniforms</option>
                <option value="aprons">Aprons</option>
                <option value="caps">Caps & Headwear</option>
                <option value="hoodies">Hoodies & Sweatshirts</option>
                <option value="bags">Custom Bags</option>
                <option value="packaging">Custom Packaging</option>
                <option value="multiple">Multiple Products</option>
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="message">
                Your Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className={styles["form-group"]}>
              <label>Attachments (Optional)</label>
              <div className={styles["attachment-box"]}>
                📎 Have a logo, design, or reference images? Email them to{" "}
                <a
                  href="mailto:sales@dinethreads.com"
                  className={styles["highlight-link"]}
                >
                  sales@dinethreads.com
                </a>{" "}
                with your inquiry reference.
              </div>
            </div>

            <div className={styles["checkbox-group"]}>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                defaultChecked
              />
              <label htmlFor="newsletter">
                Yes, I would like to receive updates about special offers, new
                products, and industry tips.
              </label>
            </div>

            <button type="submit" className={styles["submit-btn"]}>
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
