"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-hoves bg-primary-black  px-5 pt-18.75 pb-7.75 md:pt-[70px] md:px-[60px] md:pb-[30px]">
      <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-12 md:grid-cols-[1fr_1fr_1fr_1fr_48px] md:gap-8">
        <div className="flex flex-col">
          <p className="text-primary-white text-[20px] font-medium mb-2.5 leading-7.5">
            Sitemap
          </p>
          {[
            "Case Studies",
            "Services",
            "About",
            "Career",
            "Blog",
            "News",
            "Vacancies",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-normal text-[#e0e0e098] font-medium leading-8"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          <p className="text-primary-white text-[20px] font-medium mb-2.5 leading-7.5">
            Follow Us On
          </p>
          {["Instagram", "LinkedIn", "YouTube", "Facebook", "Twitter"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-normal text-[#e0e0e098] font-medium leading-8"
              >
                {item}
              </Link>
            ),
          )}
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="text-primary-white text-[20px] font-medium mb-2.5 leading-7.5">
            Office
          </p>
          <p className="text-normal text-[#e0e0e098] leading-8">
            Alibeyov Gardashlari 27,
          </p>
          <p className="text-normal text-[#e0e0e098] leading-8">
            Sabail, Sabah Residence
          </p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <p className="text-primary-white text-[20px] font-medium mb-2.5 leading-7.5">
            For Partnerships
          </p>
          <p className="text-normal text-[#e0e0e098] leading-8">
            partnership@wemark.az
          </p>
          <p className="text-normal text-[#e0e0e098] leading-8">
            +994 51 555 55 55
          </p>
        </div>

        <div className="col-span-2 flex items-center gap-2 text-xs text-[#555] uppercase tracking-wider md:hidden">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>Azerbaijani</span>
          <span>|</span>
          <span>English</span>
        </div>

        <div className="hidden md:flex justify-end items-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-11 h-11 cursor-pointer"
          >
            <svg
              width="75"
              height="57"
              viewBox="0 0 61 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M30.9701 78.4033L30.9701 3.49689M58.7576 31.8595L30.9701 3.49689L1.75757 34.0413"
                stroke="#E0E0E0"
                strokeWidth="4.86405"
              />
            </svg>
          </button>
        </div>
      </div>

      <hr className="border-[#333]" />

      <div className="relative mt-[38px] mb-[41px] w-[320px] h-[51px] mx-auto lg:mt-[65px] lg:mb-[77px] lg:w-[970px] lg:h-[155px]">
        <Image
          src={"/images/footer-logo.svg"}
          alt="WeMark"
          className="w-full h-full object-cover"
          fill
          loading="eager"
        />
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-6 text-sm text-[#555] uppercase tracking-wider">
          <span>Copyright © 2024 Wemark</span>
          <span className="hidden md:inline">Terms &amp; Privacy</span>
        </div>

        <button
          className="text-[#e0e0e098] flex items-center gap-x-1.25 text-sm uppercase cursor-pointer md:hidden"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M5.98003 13.6826L5.98003 0.682617M11.3425 5.60495L5.98003 0.682617L0.342529 5.98359"
              stroke="#E0E0E0"
            />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-2 text-sm text-[#555] uppercase tracking-wider">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>Azerbaijani</span>
          <span>|</span>
          <span>English</span>
        </div>
      </div>
    </footer>
  );
};
