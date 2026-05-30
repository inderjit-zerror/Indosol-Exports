"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseIndosol() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);

  const cardsRef = useRef([]);

  // Add refs
  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ─────────────────────────────────────
      // HEADING ANIMATION
      // ─────────────────────────────────────
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        subheadingRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
          },
        },
      );

      // ─────────────────────────────────────
      // CARDS ANIMATION
      // ─────────────────────────────────────
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
          },
        },
      );

      // ─────────────────────────────────────
      // IMAGE ANIMATION
      // ─────────────────────────────────────
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
          },
        },
      );

      // ─────────────────────────────────────
      // CARD HOVER EFFECT
      // ─────────────────────────────────────
      const hoverColors = [
        "#1746c9",
        "#ff3d16",
        "#1746c9",
        "#ff3d16",
        "#1746c9",
      ];

      cardsRef.current.forEach((card, index) => {
        const heading = card.querySelector("h3");
        const paragraph = card.querySelector("span");

        // HOVER
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            backgroundColor: hoverColors[index],
            y: -8,
            scale: 1.02,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(heading, {
            color: "#ffffff",
            duration: 0.3,
          });

          if (paragraph) {
            gsap.to(paragraph, {
              color: "#ffffff",
              duration: 0.3,
            });
          }
        });

        // LEAVE
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            backgroundColor: "#f8f8f8",
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(heading, {
            color: "#111827",
            duration: 0.3,
          });

          if (paragraph) {
            gsap.to(paragraph, {
              color: "#6b7280",
              duration: 0.3,
            });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-[10vw] max-sm:py-[10vh] flex justify-center items-center overflow-hidden"
    >
      <div className="w-[92vw] max-w-[90rem] mx-auto">
        {/* HEADING */}
        <div className="text-center">
          <h1
            ref={headingRef}
            className="text-[2.3rem] leading-[2.3rem] text-[#111827]"
            style={{ opacity: 0 }}
          >
            Why Choose Indosol
          </h1>

          <p
            ref={subheadingRef}
            className="text-[#6b7280] mt-[1.2rem] max-w-[42rem] mx-auto"
            style={{ opacity: 0 }}
          >
            Trusted pharmaceutical export solutions backed by quality,
            compliance, and global sourcing expertise.
          </p>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-[1.2rem] mt-[5rem]">
          {/* LEFT */}
          <div className="flex flex-col gap-[1.2rem] flex-1">
            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row gap-[1.2rem]">
              {/* CARD 1 */}
              <div
                ref={addCardRef}
                className="flex-1 bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                    <img
                      src="/images/Home/global-search.svg"
                      alt="img"
                      className="w-1/2 h-1/2 object-cover object-center"
                    />
                  </div>
                </div>

                <div className="mt-[2rem]">
                  <h3 className="text-[1.4rem] font-medium text-[#111827]">
                    Quality Assurance
                  </h3>

                  <span className="text-[1rem] text-[#6b7280] mt-[1rem] flex">
                    Products sourced from trusted Indian manufacturers
                    with complete documentation.
                  </span>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                ref={addCardRef}
                className="flex-1 bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[14rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                    <img
                      src="/images/Home/archive-book.svg"
                      alt="img"
                      className="w-1/2 h-1/2 object-cover object-center"
                    />
                  </div>
                </div>

                <div className="mt-[2rem]">
                  <h3 className="text-[1.4rem] font-medium text-[#111827]">
                    Regulatory Support
                  </h3>

                  <span className="text-[1rem] text-[#6b7280] mt-[1rem] flex">
                    Providing COA, MSDS, GMP, and complete import
                    clearance documentation.
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="flex flex-col md:flex-row gap-[1.2rem]">
              {/* CARD 3 */}
              <div
                ref={addCardRef}
                className="md:w-[30%] bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[13rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                  <img
                    src="/images/Home/wifi-square.svg"
                    alt="img"
                    className="w-1/2 h-1/2 object-cover object-center"
                  />
                </div>

                <h3 className="font-medium text-[#111827]">
                  Wide Product Range
                </h3>
              </div>

              {/* CARD 4 */}
              <div
                ref={addCardRef}
                className="md:w-[40%] bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[13rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                    <img
                      src="/images/Home/archive-book.svg"
                      alt="img"
                      className="w-1/2 h-1/2 object-cover object-center"
                    />
                  </div>
                </div>

                <div className="mt-[2rem]">
                  <h3 className="font-medium text-[#111827]">
                    Competitive Pricing
                  </h3>

                  <span className="text-[1rem] leading-[1.6rem] text-[#6b7280] mt-2 flex">
                    Manufacturer partnerships guarantee pharma-level
                    quality at optimal pricing.
                  </span>
                </div>
              </div>

              {/* CARD 5 */}
              <div
                ref={addCardRef}
                className="md:w-[30%] bg-[#f8f8f8] border border-[#ececec] rounded-[1.3rem] p-[2rem] min-h-[13rem] flex flex-col justify-between cursor-pointer"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-white flex items-center justify-center">
                  <img
                    src="/images/Home/global-search.svg"
                    alt="img"
                    className="w-1/2 h-1/2 object-cover object-center"
                  />
                </div>

                <h3 className="font-medium text-[#111827]">
                  Global Reach
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="w-full lg:w-[32%]"
            style={{ opacity: 0 }}
          >
            <img
              src="/images/Home/Img2Home.webp"
              alt="Why Choose Indosol"
              className="w-full h-full object-cover rounded-[1.3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}