import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function ProductCard({ image }) {
  return (
    <div
      className="w-80 h-[420px] rounded-2xl shadow-xl overflow-hidden cursor-pointer group relative 
                 transform transition-all duration-500 ease-out 
                 hover:-translate-y-2"
    >
      {/* Product Image */}
      <div className="w-full h-[63%] absolute top-1 left-0 z-50 flex justify-center items-center">
        <Image
          src={image || "/images/t-shirt.png"}
          alt="t-shirt"
          fill
          className="object-contain"
        />
      </div>

      {/* Yellow full background */}
      <div className="absolute inset-0 bg-[#D9A441]">
        <p
          className={`${inter.className} text-white text-[17px] font-extrabold absolute top-[272px] text-center left-0 px-[36px] text-shadow-lg`}
        >
          Screen printing, embroidery, and DTG printing on 100% cotton and
          poly-blend fabrics
        </p>
      </div>

      {/* Green clipped foreground */}
      <div
        className="absolute inset-0 bg-[#2F6F69]
        [clip-path:polygon(0%_0%,100%_0%,100%_50%,0%_50%)]
        group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_35%,0%_65%)]
        transition-all duration-500 ease-in-out"
      >
        <div
          className={`${inter.className} flex w-full justify-end absolute top-1 px-3`}
        >
          <h1 className="text-base font-bold text-white text-shadow-lg">
            100% Cotton
          </h1>
        </div>
        <div className="w-full h-full relative">
          <h1
            className={`${inter.className} transform -rotate-90 origin-left absolute left-[30px] bottom-[187px] text-[44px] font-extrabold text-shadow-lg/20 text-[#E9AD36]`}
          >
            T-Shirts
          </h1>
        </div>
      </div>

      {/* Tags */}
      <div className="w-full absolute bottom-2 flex justify-center items-center pb-1 gap-1">
        {["xs", "sm", "lg"].map((size) => (
          <div
            key={size}
            className="rounded-full z-50 shadow-lg w-7 h-7 text-[11px] text-white flex justify-center items-center border-2 border-white bg-[#157259]"
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
