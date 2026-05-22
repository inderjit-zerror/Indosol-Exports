"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const rowRefs = useRef([]);

  const addRowRef = (el) => {
    if (el && !rowRefs.current.includes(el)) rowRefs.current.push(el);
  };

  const products = [
    {
      title: "APIs",
      description:
        "High-quality APIs sourced and supplied to meet global pharmaceutical standards with reliable and scalable supply.",
      tags: [
        "Amoxicillin THD BP compacted and powder",
        "Ampicillin THD BP compact and powder",
        "Ibuprofen BP",
        "Mebendazole Off white USP and Poly C BP grade",
        "Ketoconazole USP",
        "Metformin HCL",
        "Paracetamol BP",
        "Albendazole USP",
      ],
      image: "/images/Home/HomeHeroImgBG.webp",
    },
    {
      title: "Excipients",
      description:
        "Reliable excipient solutions designed to enhance formulation efficiency and consistency at scale.",
      tags: [
        "Sorbitol",
        "Maize Starch",
        "MCC 101 / 102",
        "Sodium CMC",
        "Liquid Glucose",
        "Sodium Starch Glycolate",
      ],
      image: "/images/Home/Img2Home.webp",
    },
    {
      title: "Packaging Material",
      description:
        "A wide range of packaging materials supporting safe storage and transportation with enhanced durability.",
      tags: [
        "Aluminium Foils",
        "Plastic screw caps",
        "Aluminium caps",
        "Plastic spoons / droppers",
        "PVC",
      ],
      image: "/images/Home/HomeHeroImgBG.webp",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading + button rise up ─────────────────────────────────
      gsap.fromTo(
        [headingRef.current, btnRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Each product row: all parts rise from bottom ─────────────
      rowRefs.current.forEach((row) => {
        const leftSide = row.querySelector(".product-left");
        const rightSide = row.querySelector(".product-right");
        const tags = row.querySelectorAll(".product-tag");

        // Left text block
        gsap.fromTo(
          leftSide,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );

        // Tags stagger up
        gsap.fromTo(
          tags,
          { opacity: 0, y: 30, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.06,
            delay: 0.2,
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );

        // Right image rises up
        gsap.fromTo(
          rightSide,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              toggleActions: "play none none none",
              scrub:true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#082661] py-[6rem]">
      <div className="w-[90vw] mx-auto">
        {/* Heading */}
        <div className="flex items-start justify-between gap-[2rem] flex-wrap">
          <h3
            ref={headingRef}
            className="text-white text-[2rem] md:text-[2.5rem] font-semibold leading-[1.1]"
            style={{ opacity: 0 }}
          >
            Products We <br /> Provide
          </h3>

          <button
            ref={btnRef}
            className="border border-white/20 rounded-full px-[1.6rem] py-[0.9rem] flex items-center gap-[0.8rem] text-white text-[1.4rem] duration-300 hover:bg-white hover:text-[#06256F]"
            style={{ opacity: 0 }}
          >
            <p>Explore All Products</p>
            <span className="w-[2rem] h-[2rem] rounded-full bg-white text-[#06256F] flex items-center justify-center text-[1.2rem]">
              {/* Arrow-Logo */}
            </span>
          </button>
        </div>

        {/* Product Items */}
        <div className="mt-[4rem] border-t border-white/10">
          {products.map((item, index) => (
            <div
              key={index}
              ref={addRowRef}
              className="flex flex-col lg:flex-row justify-between h-fit gap-[4rem] py-[2vw] border-b border-white/10"
            >
              {/* Left Side */}
              <div
                className="product-left w-full lg:w-[52%] flex flex-col justify-between"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div>
                  <h3 className="text-white text-[2rem] md:text-[2.5rem] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/70 mt-[1.5rem] max-w-[42rem]">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-[1rem] mt-[3rem]">
                  {item.tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className="product-tag bg-white/10 border border-white/5 text-white/80 px-[1rem] py-[0.7rem] rounded-full"
                      style={{ opacity: 0 }}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div
                className="product-right w-full lg:w-[38%] h-[50%]"
                style={{ opacity: 0, willChange: "transform" }}
              >
                <div className="relative w-full rounded-[1.8rem] overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover duration-500 group-hover:scale-105"
                  />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.5rem] h-[4.5rem] rounded-full bg-white text-[#06256F] text-[1.8rem] flex items-center justify-center duration-300 hover:scale-110">
                    {/* Arrow Logo */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}