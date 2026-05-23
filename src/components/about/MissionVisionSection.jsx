"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionVisionSection() {
  const sectionRef = useRef(null);

  // Refs for Mission row
  const missionImgRef = useRef(null);
  const missionHeadingRef = useRef(null);
  const missionDividerRef = useRef(null);
  const missionParaRef = useRef(null);

  // Refs for Vision row
  const visionImgRef = useRef(null);
  const visionHeadingRef = useRef(null);
  const visionDividerRef = useRef(null);
  const visionParaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Helper — content block stagger (heading → divider → paragraph)
      function animateContent(heading, divider, para, triggerEl) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 75%",
            once: true,
          },
        });

        tl.from(heading, { y: 35, opacity: 0, duration: 0.7, ease: "power3.out" })
          .from(divider, { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power2.out" }, "-=0.3")
          .from(para, { y: 25, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.3");
      }

      // Mission — image slides in from LEFT
      gsap.from(missionImgRef.current, {
        scrollTrigger: { trigger: missionImgRef.current, start: "top 78%", once: true },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Mission — content slides in from RIGHT
      animateContent(
        missionHeadingRef.current,
        missionDividerRef.current,
        missionParaRef.current,
        missionHeadingRef.current
      );

      // Vision — content slides in from LEFT
      animateContent(
        visionHeadingRef.current,
        visionDividerRef.current,
        visionParaRef.current,
        visionHeadingRef.current
      );

      // Vision — image slides in from RIGHT
      gsap.from(visionImgRef.current, {
        scrollTrigger: { trigger: visionImgRef.current, start: "top 78%", once: true },
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Subtle scale parallax on both images while scrolling
      [missionImgRef, visionImgRef].forEach((ref) => {
        gsap.fromTo(
          ref.current.querySelector("img") ?? ref.current,
          { scale: 1.07 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f4f4f4] py-[7rem]">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        <div className="flex flex-col gap-[5rem]">

          {/* Mission Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] items-center">
            {/* Left Image */}
            <div ref={missionImgRef} className="w-full overflow-hidden rounded-[1.2rem]">
              <img
                src={`/images/about/M1.webp`}
                alt="Mission"
                className="w-full h-[26rem] object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full">
              <h2
                ref={missionHeadingRef}
                className="text-[4rem] leading-[4.2rem] font-[700] text-[#374151]"
              >
                Our Mission
              </h2>
              <div
                ref={missionDividerRef}
                className="w-full h-[0.08rem] bg-[#dddddd] my-[2rem]"
              />
              <p
                ref={missionParaRef}
                className="text-[1.1rem] leading-[2.4rem] text-[#6b7280] max-w-[40rem]"
              >
                To furnish exceptional pharmaceutical products and dependable
                sourcing approaches through trusted international partnerships,
                strict regulation compliance, along with customer-oriented
                export offerings. We pledge to assist healthcare businesses
                globally by ensuring steady quality, transparent operations,
                competitive rates, and reliable supply chain administration.
              </p>
            </div>
          </div>

          {/* Vision Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5vw] items-center">
            {/* Left Content */}
            <div className="w-full order-2 lg:order-1">
              <h2
                ref={visionHeadingRef}
                className="text-[4rem] leading-[4.2rem] font-[700] text-[#374151]"
              >
                Our Vision
              </h2>
              <div
                ref={visionDividerRef}
                className="w-full h-[0.08rem] bg-[#dddddd] my-[2rem]"
              />
              <p
                ref={visionParaRef}
                className="text-[1.1rem] leading-[2.4rem] text-[#6b7280] max-w-[40rem]"
              >
                To achieve global recognition as a pharmaceutical export
                partner renowned for excellence, integrity, and enduring
                business relationships. Our goal is to reinforce worldwide
                healthcare supply networks by linking international markets with
                dependable Indian pharmaceutical manufacturers and promoting
                sustainable growth, reliability, and innovation in
                pharmaceutical exports.
              </p>
            </div>

            {/* Right Image */}
            <div
              ref={visionImgRef}
              className="w-full overflow-hidden rounded-[1.2rem] order-1 lg:order-2"
            >
              <img
                src={`/images/about/M2.webp`}
                alt="Vision"
                className="w-full h-[26rem] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}