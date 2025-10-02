"use client";

import Link from "next/link";
import React from "react";

function MobileMenu({ isOpen, setIsOpen, navItems, pathname }) {
  return (
    <div
      className={`
        absolute top-[90px] left-0 w-full rounded-xl bg-[#1A7067] text-white 
        flex flex-col gap-5 items-center shadow-lg lg:hidden z-50
        transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0 p-8"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            item.cta ? "nav-cta w-full rounded-md text-center" : ""
          } ${
            pathname === item.href ? "active text-yellow-400" : "text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default MobileMenu;
