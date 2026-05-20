"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        gsap.to(header, {
          backgroundColor: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(".navLink", {
          color: "#111827",
          duration: 0.3,
        });
        gsap.to(".NavBTBN", {
          backgroundColor: "#0D40A2",
          duration: 0.3,
        });
        gsap.to(".NavBTBN", {
          color: "#ffffff",
          duration: 0.3,
        });
        gsap.to(".BTNinnerCrl", {
          backgroundColor: "#ffffff",
          duration: 0.3,
        });
        gsap.to(".BTNinnerCrl", {
          color: "#0D40A2",
          duration: 0.3,
        });
      } else {
        gsap.to(header, {
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(".navLink", {
          color: "#ffffff",
          duration: 0.3,
        });
         gsap.to(".NavBTBN", {
          backgroundColor: "#ffffff",
          duration: 0.3,
        });
        gsap.to(".NavBTBN", {
          color: "#0D40A2",
          duration: 0.3,
        });
        gsap.to(".BTNinnerCrl", {
          backgroundColor: "#0D40A2",
          duration: 0.3,
        });
        gsap.to(".BTNinnerCrl", {
          color: "#ffffff",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full fixed top-0 left-0 z-[99]"
    >
      <div className="w-[92vw] max-w-[90rem] mx-auto h-[5.5rem] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/icons/logo.png"
            alt="Indosol Exports"
            className="w-[8rem] object-contain"
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-[3rem]">
          <a
            href="/"
            className="navLink text-[1.1rem] leading-[1.1rem] font-medium text-white"
          >
            Home
          </a>

          <a
            href="/"
            className="navLink text-[1.1rem] leading-[1.1rem] font-medium text-white"
          >
            About us
          </a>

          <a
            href="/"
            className="navLink text-[1.1rem] leading-[1.1rem] font-medium text-white"
          >
            Products
          </a>

          <a
            href="/"
            className="navLink text-[1.1rem] leading-[1.1rem] font-medium text-white"
          >
            Imports
          </a>

          <a
            href="/"
            className="navLink text-[1.1rem] leading-[1.1rem] font-medium text-white"
          >
            Exports
          </a>
        </nav>

        {/* Button */}
        <div className="flex items-center">
          <button className="flex items-center gap-[0.8rem] NavBTBN bg-white TextBlue font-semibold rounded-full pl-[1rem] pr-[0.5rem] py-[0.5rem]">
            Contact Us

            <span className="w-[2rem] h-[2rem] rounded-full BgBlue BTNinnerCrl flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-[1rem] h-[1rem] "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}