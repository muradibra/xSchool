"use client";

import { MarqueeProps } from "@/app/types";

export const Marquee = ({ text_slider }: MarqueeProps) => {
  const items = Object.values(text_slider);
  const repeated = [...items, ...items];

  return (
    <section className="pt-15 lg:pt-65 overflow-hidden select-none font-hoves">
      <div className="border-t border-black  py-10">
        <div className="flex w-max animate-marquee-left ">
          {repeated.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="uppercase font-medium text-6xl tracking-wide whitespace-nowrap px-15">
                {item}
              </span>
              <span className="text-[#FF3C2A] text-6xl">*</span>
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-b border-black py-10">
        <div className="flex w-max animate-marquee-right">
          {repeated.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="uppercase font-medium text-6xl tracking-wide whitespace-nowrap px-15">
                {item}
              </span>
              <span className="text-[#FF3C2A] text-6xl">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
