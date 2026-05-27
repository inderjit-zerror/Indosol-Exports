"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SupplyChainSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      
      // Image Animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 1,
        },

        x: "-10vw",
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power3.out",
      });

      // Content Animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 1,
        },

        x: "10vw",
        opacity: 0,
        y: "4rem",
        duration: 1.5,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ffffff] py-[8rem] overflow-hidden"
    >
      <div className="w-[90vw] mx-auto flex flex-col xl:flex-row items-center justify-between gap-[5rem]">
        
        {/* Left Image */}
        <div
          ref={imageRef}
          className="w-full xl:w-[48%]"
        >
          <img
            src="/images/about/M1.webp"
            alt="Supply Chain"
            className="w-full h-[32rem] sm:h-[38rem] object-cover rounded-[2rem]"
          />
        </div>

        {/* Right Content */}
        <div
          ref={contentRef}
          className="w-full xl:w-[45%]"
        >
          <h1 className="TextDarkGray text-[3rem] sm:text-[3.8rem] leading-[1.15] font-semibold max-w-[40rem]">
            Efficient Supply Chain
            <br />
            Management
          </h1>

          <p className="mt-[3rem] text-[1.35rem] leading-[2.7rem] TextLiteGray max-w-[42rem]">
            Our experienced operations team manages every stage of the import
            process, including global supplier coordination, procurement
            planning, shipment scheduling, export-import documentation, quality
            verification, packaging, customs support, and logistics management.
            With a strong focus on accuracy, compliance, and timely delivery, we
            ensure smooth international trade operations and reliable supply
            chain performance for our global partners.
          </p>
        </div>
      </div>
    </section>
  );
}