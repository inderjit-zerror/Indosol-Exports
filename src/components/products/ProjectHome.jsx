"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectHome() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const eyebrowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 1. BG scale-in */
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 2, ease: "power3.out" }
      );

      /* 2. Overlay fade */
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      /* 3. Eyebrow slide + fade */
      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );

      /* 4. Heading lines clip-reveal */
      gsap.fromTo(
        [line1Ref.current, line2Ref.current],
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.13,
          delay: 0.7,
        }
      );

      /* 5. Paragraph fade + rise */
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 1.05 }
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
      {/* <img
        ref={imageRef}
        src={`/images/projects/ProjectHome.webp`}
        alt="Export Banner"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <video src={`/random_video/1.mp4`} loop muted autoPlay 
         className="w-full h-full object-cover inset-0 top-0 left-0  absolute object-center"
        ></video>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/40"
      />

      {/* Content */}
      <div className="relative z-10 w-[90vw] max-w-[90rem] mx-auto h-full flex items-center">
        <div className="max-w-[52rem]">

          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-[0.6rem] mb-[1.5rem]"
          >
            <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-[#1846b3]" />
            <p className="text-white font-[500] tracking-wide">Projects</p>
          </div>

          {/* Main Heading — per-line clip reveal */}
          <h1 className="text-white">
            <span className="block overflow-hidden">
              <span ref={line1Ref} className="block will-change-transform">
                Global Pharmaceutical 
              </span>
            </span>
            <span className="block overflow-hidden">
              <span ref={line2Ref} className="block will-change-transform">
                Products & API Solutions
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            ref={paraRef}
            className="text-white/90 mt-[2rem] max-w-[38rem]"
          >
            Supplying high-quality APIs, excipients, intermediates, and healthcare products to regulated and semi-regulated markets worldwide.
          </p>

        </div>
      </div>
    </section>
  );
}