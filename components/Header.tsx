"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="font-hoves px-5 py-5 lg:px-15 lg:py-10.5 absolute top-0 left-0 z-50 w-full flex items-center justify-between">
        <Link href={"/"} className="relative w-25.5 h-14.5">
          <Image
            src={"/images/logo.png"}
            alt="WeMark"
            className="w-full h-full object-cover"
            fill
            loading="eager"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-12.5 lg:text-xl xl:text-2xl font-medium [&>li]:cursor-pointer [&>li>a]:text-primary-white">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Career", href: "/career" },
              { label: "Blog", href: "/blog" },
              { label: "xSchool", href: "/xschool" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/services"}>Services</Link>
            </li>
            <li>
              <Link href={"/case-studies"}>Case Studies</Link>
            </li>
            <li>
              <Link href={"/career"}>Career</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/xschool"}>xSchool</Link>
            </li>
          </ul>
        </nav> */}

        <Button
          variant={"ghost"}
          className="text-primary-white px-0 lg:text-xl xl:text-2xl hidden lg:block underline cursor-pointer hover:bg-transparent hover:text-primary-white"
        >
          <Link href={"/lets-talk"}>Let's Talk</Link>
        </Button>

        {/* Mobile menu toggle text */}
        <button
          className="lg:hidden text-primary-white text-[16px] font-medium cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col justify-between px-5 py-24 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-y-6">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Career", href: "/career" },
              { label: "Blog", href: "/blog" },
              { label: "xSchool", href: "/xschool" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-primary-white text-4xl font-medium uppercase"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={"/lets-talk"}
          onClick={() => setMenuOpen(false)}
          className="text-primary-white text-xl underline"
        >
          Let's Talk
        </Link>
      </div>
    </>
  );
};
