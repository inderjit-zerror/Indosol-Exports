"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseIndosol() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);

  // Helper to push card refs
  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading fade-up ──────────────────────────────────────────
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Cards staggered slide-up ──────────────────────────────────
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Right image slide-in from right ──────────────────────────
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Hover lifts for every card ────────────────────────────────
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -6, scale: 1.015, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.inOut" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ffffff] flex justify-center items-center py-[10vw]"
    >
      <div className="w-[92vw] max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1
            ref={headingRef}
            className="text-[2.3rem] leading-[2.3rem]  TextDarkGray"
            style={{ opacity: 0 }}
          >
            Why Choose Indosol
          </h1>

          <p
            ref={subheadingRef}
            className="TextLiteGray mt-[1.2rem] max-w-[42rem] mx-auto"
            style={{ opacity: 0 }}
          >
            Trusted pharmaceutical export solutions backed by quality,
            compliance, and global sourcing expertise.
          </p>
        </div>

        {/* Main Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-[1.2rem] mt-[5rem]">
          {/* Left Side */}
          <div className="flex flex-col gap-[1.2rem] flex-1">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row gap-[1.2rem]">
              {/* Blue Card */}
              <div
                ref={addCardRef}
                className="flex-1 bg-[#1746c9] rounded-[1.3rem] p-[2rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white/10 flex items-center justify-center">
                    <img
                      src={`/images/Home/award.svg`}
                      alt="img"
                      className="w-1/2 h-1/2 object-cover object-center"
                    />
                  </div>
                  <div className="w-full h-[0.08rem] bg-white/10 mt-[2rem]" />
                </div>
                <div className="mt-[2rem]">
                  <h3 className="text-[1.4rem] leading-[1.4rem] font-medium  text-white">
                    Quality Assurance
                  </h3>
                  <span className="text-[1rem] leading-[1rem] flex text-[#dbe4ff] mt-[1rem]">
                    Products sourced from trusted Indian manufacturers with
                    complete documentation.
                  </span>
                </div>
              </div>

              {/* White Card */}
              <div
                ref={addCardRef}
                className="flex-1 bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[14rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                    <img
                      src={`/images/Home/archive-book.svg`}
                      alt="img"
                      className="w-1/2 h-1/2 object-cover object-center"
                    />
                  </div>
                  <div className="w-full h-[0.08rem] bg-[#e5e7eb] mt-[2rem]" />
                </div>
                <div className="mt-[2rem]">
                  <h3 className="text-[1.4rem] font-medium TextDarkGray">
                    Regulatory Support
                  </h3>
                  <span className="text-[1rem] leading-[1rem] flex text-[#6b7280] mt-[1rem]">
                    Providing COA, MSDS, GMP, and complete import clearance
                    documentation.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row gap-[1.2rem]">
              {/* Left Card */}
              <div
                ref={addCardRef}
                className="md:w-[30%] bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[13rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                  <img
                    src={`/images/Home/wifi-square.svg`}
                    alt="img"
                    className="w-1/2 h-1/2 object-cover object-center"
                  />
                </div>
                <h3 className="font-medium TextDarkGray">
                  Wide Product Range
                </h3>
              </div>

              {/* Middle Card */}
              <div
                ref={addCardRef}
                className="md:w-[40%] bg-[#ff3d16] rounded-[1.3rem] p-[2rem] min-h-[13rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white/10 flex items-center justify-center">
                    <img
                      src={`/images/Home/Group.svg`}
                      alt="img"
                      className="w-1/2 h-1/2 object-cover object-center"
                    />
                  </div>
                  <div className="w-full h-[0.08rem] bg-white/10 mt-[2rem]" />
                </div>
                <div className="mt-[2rem]">
                  <h3 className="font-medium  text-white">
                    Competitive Pricing
                  </h3>
                  <span className="text-[1rem] leading-[1.6rem] flex text-[#ffe4dd] mt-2">
                    Manufacturer partnerships guarantee pharma-level quality at
                    optimal pricing.
                  </span>
                </div>
              </div>

              {/* Right Card */}
              <div
                ref={addCardRef}
                className="md:w-[30%] bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[13rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                  <img
                    src={`/images/Home/global-search.svg`}
                    alt="img"
                    className="w-1/2 h-1/2 object-cover object-center"
                  />
                </div>
                <h3 className="font-medium TextDarkGray">
                  Global Reach
                </h3>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className="w-full lg:w-[32%]"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <img
              src={`/images/Home/Img2Home.webp`}
              alt="Why Choose Indosol"
              className="w-full h-full object-cover rounded-[1.3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}