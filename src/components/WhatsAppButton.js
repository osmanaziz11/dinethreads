"use client";

import React from "react";
import { Icon } from "@iconify/react";

const WhatsAppButton = () => {
  const phoneNumber = "+447346125075"; // Your WhatsApp number in international format (no '+' or leading zeros)
  const message = "Hi! I’d like to know more about your custom uniforms.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl p-3 animate-bounce flex items-center justify-center transition-all duration-300 z-[9999] group"
    >
      {/* Iconify WhatsApp Icon */}
      <Icon icon="mdi:whatsapp" width="28" height="28" />

      {/* Hover tooltip */}
      <span className="absolute right-16 bg-green-600 text-white px-3 py-1 pb-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
