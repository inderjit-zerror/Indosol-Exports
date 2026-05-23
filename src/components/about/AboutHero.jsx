"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutHero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Zoom Animation
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.2,
        },
        {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      );

      // Overlay Fade
      gsap.fromTo(
        overlayRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Content Animation
      const elements = contentRef.current.children;

      gsap.fromTo(
        elements,
        {
          y: "6rem",
          opacity: 0,
        },
        {
          y: "0rem",
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden"
    >
      {/* Background Image */}
      <img
        ref={imageRef}
        src={`/images/about/AboutHero.webp`}
        alt="About Banner"
        className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/40"
      />

      {/* Content */}
      <div className="relative z-10 w-[90vw] max-w-[90rem] mx-auto h-full flex items-center">
        <div
          ref={contentRef}
          className="max-w-[48rem]"
        >
          {/* Small Heading */}
          <div className="flex items-center gap-[0.6rem] mb-[1.5rem] opacity-0">
            <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-[#1846b3]" />

            <p className="text-white font-[500]">
              About us
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-white font-[700] max-w-[52rem] opacity-0">
            International Drug Export Collaborator
          </h1>

          {/* Description */}
          <p className="text-white/90 mt-[2rem] max-w-[38rem] opacity-0">
            Supplying high-quality APIs, excipients, and healthcare products
            to regulated and semi-regulated markets worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}