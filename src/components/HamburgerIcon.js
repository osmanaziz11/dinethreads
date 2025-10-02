import React from "react";

function HamburgerIcon({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle Menu"
      className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] overflow-hidden
                 bg-[#1A7067] shadow-md 
                 transition-all duration-200"
    >
      <div className="relative flex flex-col justify-between  h-[18px] transform transition-all duration-300">
        {/* Top line */}
        <span
          className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
            isOpen ? "translate-x-10" : ""
          }`}
        />
        {/* Middle line */}
        <span
          className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
            isOpen ? "translate-x-10" : ""
          }`}
        />
        {/* Bottom line */}
        <span
          className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-150 ${
            isOpen ? "translate-x-10" : ""
          }`}
        />

        {/* Cross (X) */}
        <span
          className={`absolute bg-white h-[2px] w-2 transform transition-all duration-500 top-2.5 
                     ${
                       isOpen
                         ? "translate-x-0 rotate-45 w-6"
                         : "-translate-x-10 rotate-0"
                     }`}
        />
        <span
          className={`absolute bg-white h-[2px] w-2 transform transition-all duration-500 top-2.5 
                     ${
                       isOpen
                         ? "translate-x-0 -rotate-45 w-6"
                         : "-translate-x-10 rotate-0"
                     }`}
        />
      </div>
    </button>
  );
}

export default HamburgerIcon;
