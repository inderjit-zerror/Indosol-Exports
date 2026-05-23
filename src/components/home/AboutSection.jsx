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
      // ── Heading fade-up ─────────────────────────────────────────
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Cards staggered entrance ────────────────────────────────
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

      gsap.fromTo(
        cards,
        { opacity: 0, y: 55, scale: 0.96 },
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
        }
      );

      // ── Hover lift for each card ────────────────────────────────
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -7, scale: 1.02, duration: 0.3, ease: "power2.out" });
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
      className="w-full py-[15vh] bg-[#f5f5f5] flex justify-center items-center"
    >
      <div className="w-[90vw] mx-auto">

        {/* Top Content */}
        <div className="w-full flex justify-center">
          <div
            ref={headingRef}
            className="w-full max-w-[52rem] text-center"
            style={{ opacity: 0 }}
          >
            <h2 className=" text-[#6B7280] font-normal">
              Indosol Exports is an India-based pharmaceutical export company
              specializing in Active{" "}
              <span className="italic TextBlue">
                Pharmaceutical Ingredients (APIs), excipients, and packaging
                materials.
              </span>{" "}
              We partner with manufacturers, distributors, and healthcare
              companies across the globe, ensuring every shipment meets
              international quality and regulatory standards.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] mt-[5rem]">

          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] shadow-sm cursor-pointer"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <img
                src={`/images/Home/HandStar.png`}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-[1.8rem] font-semibold text-[#1f2937] mt-[2rem]">
              20+ Years Experience
            </h3>
            <p className="text-[1.1rem] leading-[2rem] text-[#6b7280] mt-[1rem]">
              Extensive experience exceeding twenty years in global commerce
              and acquiring high-quality healthcare items.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="BgBlue rounded-[1.2rem] p-[2.2rem] shadow-sm cursor-pointer"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <img
                src={`/images/Home/Earth.png`}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-[1.8rem] font-semibold text-white mt-[2rem]">
              Global Export Network
            </h3>
            <p className="text-[1.1rem] leading-[2rem] text-[#dbe4ff] mt-[1rem]">
              Providing services to governed and partly governed markets in
              Asia, Africa, the Middle East, and additional regions.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className="bg-white rounded-[1.2rem] p-[2.2rem] border border-[#ececec] shadow-sm cursor-pointer"
            style={{ opacity: 0, willChange: "transform" }}
          >
            <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full">
              <img
                src={`/images/Home/Verify.png`}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-[1.8rem] font-semibold text-[#1f2937] mt-[2rem]">
              Quality Certified
            </h3>
            <p className="text-[1.1rem] leading-[2rem] text-[#6b7280] mt-[1rem]">
              Products are sourced exclusively from approved manufacturers that
              meet compliance and global pharma regulatory standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}