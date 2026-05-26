"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);

  const pathName = usePathname();

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
          color: "#ffffff",
          duration: 0.3,
        });

        gsap.to(".BTNinnerCrl", {
          backgroundColor: "#ffffff",
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
          color: "#0D40A2",
          duration: 0.3,
        });

        gsap.to(".BTNinnerCrl", {
          backgroundColor: "#0D40A2",
          color: "#ffffff",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Button Hover Animation
    const button = buttonRef.current;
    const circle = circleRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(circle, {
        // x: "0.3rem",
        rotate: 45,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(circle, {
        x: 0,
        rotate: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useLayoutEffect(() => {
    if (pathName == "/contact") {
      gsap.set(".txt", {
        color: "#0D40A2",
      });
    } else {
      gsap.set(".txt", {
        color: "#ffffff",
      });
    }
  });

  return (
    <header ref={headerRef} className="w-full fixed top-0 left-0 z-[99]">
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
          <Link
            href="/"
            className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
          >
            <p>Home</p>

            {/* Underline */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
          >
            <p>About us</p>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>

          <Link
            href="#"
            className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
          >
            <p>Products</p>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>

          <Link
            href="/imports"
            className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
          >
            <p>Imports</p>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>

          <Link
            href="/exports"
            className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
          >
            <p>Exports</p>

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Button */}
        <div className="flex items-center">
          <Link href="/contact">
            <button
              ref={buttonRef}
              className="flex items-center gap-[0.8rem] NavBTBN bg-white text-[#0D40A2] rounded-full pl-[1rem] pr-[0.3rem] py-[0.3rem] overflow-hidden"
            >
              <p>Contact Us</p>

              <span
                ref={circleRef}
                className="w-[1.7rem] h-[1.7rem] text-[0.8rem] rounded-full BTNinnerCrl bg-[#0D40A2] flex items-center justify-center text-white"
              >
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
