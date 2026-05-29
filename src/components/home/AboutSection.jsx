"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─────────────────────────────────────────────
      // TEXT SCROLL COLOR ANIMATION
      // ─────────────────────────────────────────────
      const words =
        headingRef.current.querySelectorAll(".heading-word");

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 30,
          color: "#b0b0b0",
        },
        {
          opacity: 1,
          y: 0,

          color: (i, target) =>
            target.classList.contains("blue-word")
              ? "#0D40A2"
              : "#6B7280",

          stagger: 0.06,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );

      // ─────────────────────────────────────────────
      // CARDS ANIMATION
      // ─────────────────────────────────────────────
      const cards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
      ];

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 55,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,

          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-[15vh] bg-[#f5f5f5] flex justify-center items-center overflow-hidden"
    >
      <div className="w-[90vw] mx-auto">
        {/* ───────────────────────────── */}
        {/* TOP CONTENT */}
        {/* ───────────────────────────── */}
        <div className="w-full flex justify-center">
          <div
            ref={headingRef}
            className="w-full max-w-[52rem] text-center"
          >
            <h2 className="flex flex-wrap justify-center gap-x-2 font-light">
              {[
                "Indosol",
                "Exports",
                "is",
                "an",
                "India-based",
                "pharmaceutical",
                "export",
                "company",
                "specializing",
                "in",
                "Active",

                "Pharmaceutical",
                "Ingredients",
                "(APIs),",

                "excipients,",
                "and",
                "packaging",
                "materials.",

                "We",
                "partner",
                "with",
                "manufacturers,",
                "distributors,",
                "and",
                "healthcare",
                "companies",
                "across",
                "the",
                "globe,",

                "ensuring",
                "every",
                "shipment",
                "meets",
                "international",
                "quality",
                "and",
                "regulatory",
                "standards.",
              ].map((word, index) => (
                <span
                  key={index}
                  className={`heading-word text-[#b0b0b0]
                    ${
                      word === "Pharmaceutical" ||
                      word === "Ingredients" ||
                      word === "(APIs),"
                        ? "italic blue-word"
                        : ""
                    }`}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* ───────────────────────────── */}
        {/* CARDS */}
        {/* ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mt-[5rem]">
          {/* CARD 1 */}
          <div
            ref={card1Ref}
            className="group bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#0D40A2]"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <div className="w-[3rem] h-[3rem] flex p-1 items-center justify-center bg-white rounded-md">
              <img
                src="/images/Home/HandStar.png"
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="text-[1.8rem] font-semibold text-[#0D40A2] mt-[2rem] transition-colors duration-300 group-hover:text-white">
              20+ Years Experience
            </h3>

            <p className="text-[1.1rem] leading-[2rem] text-[#6B7280] mt-[1rem] transition-colors duration-300 group-hover:text-white">
              Extensive experience exceeding twenty years in global commerce
              and acquiring high-quality healthcare items.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            ref={card2Ref}
            className="group bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#0D40A2]"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <div className="w-[3rem] h-[3rem] flex items-center p-1 justify-center bg-white rounded-md">
              <img
                src="/images/Home/Verify.png"
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="text-[1.8rem] font-semibold text-[#0D40A2] mt-[2rem] transition-colors duration-300 group-hover:text-white">
              Global Export Network
            </h3>

            <p className="text-[1.1rem] leading-[2rem] text-[#6B7280] mt-[1rem] transition-colors duration-300 group-hover:text-white">
              Providing services to governed and partly governed markets
              in Asia, Africa, the Middle East, and additional regions.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            ref={card3Ref}
            className="group bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] shadow-sm cursor-pointer transition-all duration-300 hover:bg-[#0D40A2]"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <div className="w-[3rem] h-[3rem] flex items-center p-1 justify-center bg-white rounded-md">
              <img
                src="/images/Home/Verify.png"
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="text-[1.8rem] font-semibold text-[#0D40A2] mt-[2rem] transition-colors duration-300 group-hover:text-white">
              Quality Certified
            </h3>

            <p className="text-[1.1rem] leading-[2rem] text-[#6B7280] mt-[1rem] transition-colors duration-300 group-hover:text-white">
              Products are sourced exclusively from approved manufacturers
              that meet compliance and global pharma regulatory standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}