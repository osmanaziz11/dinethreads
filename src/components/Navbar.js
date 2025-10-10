"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/portfolio", label: "Portfolio & Gallery" },
    { href: "/products", label: "Products" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Get a Quote", cta: true },
  ];

  return (
    <nav
      className="navbar flex items-center justify-between px-4 py-3 relative"
      id="navbar"
    >
      {/* Brand */}
      <Link href="/" className="brand flex items-center gap-3">
        <div className="rounded-full shadow-lg border-2 overflow-hidden w-[51px] h-[51px]">
          <Image
            src="/logo.png"
            alt="DineThreads Logo"
            width={48}
            height={48}
            className="logo-mark border-0"
            priority
          />
        </div>
        <div className="brand-text hidden sm:block">
          <div className="brand-name font-bold text-white">DineThreads</div>
          <div className="brand-tagline text-xs text-gray-200">
            Premium Custom Apparel
          </div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="nav-links hidden lg:flex gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${item.cta ? "nav-cta px-4 py-2 rounded-md" : ""} ${
              pathname === item.href ? "active text-yellow-400" : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <HamburgerIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Menu (separate component) */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        pathname={pathname}
      />
    </nav>
  );
}

export default Navbar;
