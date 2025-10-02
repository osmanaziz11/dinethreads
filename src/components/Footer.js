import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="rounded-full shadpw-lg border-2 ">
              <Image
                src="/logo.png"
                alt="DineThreads Logo"
                width={48}
                height={48}
                className="logo-mark border-0"
                priority
              />
            </div>
            <div className="footer-logo-text">DineThreads</div>
          </div>
          <p>
            Premium custom uniforms and branded merchandise. Manufactured in
            Pakistan with global quality standards, serving businesses worldwide
            with a focus on the UK market.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              {/* Facebook Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 
                5.373-12 12c0 5.99 4.388 10.954 
                10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
                1.792-4.669 4.533-4.669 1.312 0 
                2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
                1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
                23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="Instagram">
              {/* Instagram Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 
                4.85.07 3.252.148 4.771 1.691 
                4.919 4.919.058 1.265.069 1.645.069 
                4.849 0 3.205-.012 3.584-.069 
                4.849-.149 3.225-1.664 4.771-4.919 
                4.919-1.266.058-1.644.07-4.85.07-3.204 
                0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
                0-3.204.013-3.583.07-4.849.149-3.227 
                1.664-4.771 4.919-4.919 
                1.266-.057 1.645-.069 4.849-.069z"
                />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="LinkedIn">
              {/* LinkedIn Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                1.637-1.85 3.37-1.85 3.601 0 4.267 
                2.37 4.267 5.455v6.286zM5.337 
                7.433c-1.144 0-2.063-.926-2.063-2.065 
                0-1.138.92-2.063 2.063-2.063 1.14 0 
                2.064.925 2.064 2.063 0 1.139-.925 
                2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452z"
                />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="WhatsApp">
              {/* WhatsApp Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 
                1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 
                0-.52.074-.792.372-.272.297-1.04 
                1.016-1.04 2.479 0 1.462 1.065 
                2.875 1.213 3.074.149.198 2.096 
                3.2 5.077 4.487.709.306 1.262.489 
                1.694.625.712.227 1.36.195 1.871.118.571-.085 
                1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="#categories">Custom T-Shirts</a>
            </li>
            <li>
              <a href="#categories">Polo Shirts</a>
            </li>
            <li>
              <a href="#categories">Chef Uniforms</a>
            </li>
            <li>
              <a href="#categories">Caps & Headwear</a>
            </li>
            <li>
              <a href="#categories">Custom Bags</a>
            </li>
            <li>
              <a href="#categories">Packaging</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#process">How It Works</a>
            </li>
            <li>
              <a href="#why-us">Why Choose Us</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:info@dinethreads.com">info@dinethreads.com</a>
            </li>
            <li>
              <a href="tel:+923001234567">+92 300 123 4567</a>
            </li>
            <li>Lahore, Punjab, Pakistan</li>
            <li
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <strong style={{ color: "var(--secondary)" }}>
                UK Enquiries Welcome
              </strong>
              <br />
              <span
                style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}
              >
                Fast shipping to all UK postcodes
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 DineThreads. All rights reserved.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="#privacy">Privacy Policy</Link>
          <Link href="#terms">Terms of Service</Link>
          <Link href="#shipping">Shipping Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
