"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Shared ScrollTrigger config
      const triggerDefaults = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      // Heading — slides up + fades in
      gsap.from(headingRef.current, {
        scrollTrigger: triggerDefaults,
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Paragraph 1 — staggered after heading
      gsap.from(para1Ref.current, {
        scrollTrigger: triggerDefaults,
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Paragraph 2 — staggered further
      gsap.from(para2Ref.current, {
        scrollTrigger: triggerDefaults,
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
      });

      // Image wrapper — slides in from right + fades in
      gsap.from(imageWrapperRef.current, {
        scrollTrigger: triggerDefaults,
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });

      // Image — subtle scale-down on scroll (parallax feel)
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
          ease: "none",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#ffffff] py-[7rem] overflow-hidden">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] items-center">
          {/* Left Content */}
          <div className="max-w-[42rem]">
            <h1 ref={headingRef} className=" TextDarkGray">
              About Indosol <br /> Exports
            </h1>
            <div className="mt-[3rem] flex flex-col gap-[2rem]">
              <p ref={para1Ref} className="TextLiteGray">
                Indosol Exports is a Mumbai-based pharmaceutical export company
                specializing in APIs, excipients, intermediates, and allied
                healthcare products. With more than two decades of international
                trade expertise, the company supplies pharmaceutical-grade
                materials to customers across Asia, Africa, the Middle East,
                Europe, and other international markets.
              </p>
              <p ref={para2Ref} className="TextLiteGray">
                By working alongside prominent Indian manufacturers and
                preserving strong worldwide associations, the company delivers
                reliable supply solutions with consistent quality, competitive
                costs, and compliance with regulations.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageWrapperRef} className="w-full">
            <div className="w-full overflow-hidden rounded-[1.2rem]">
              <img
                ref={imageRef}
                src={`/images/about/AboutAboutImg.webp`}
                alt="About Indosol Exports"
                className="w-full h-[32rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}