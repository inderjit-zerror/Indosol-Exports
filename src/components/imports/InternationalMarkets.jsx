"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InternationalMarkets() {
  const sectionRef = useRef(null);

  const headingRef = useRef(null);
  const textRef = useRef(null);

  const cardRef = useRef(null);
  const imageCardRef = useRef(null);

  const buttonsRef = useRef([]);

  const regions = ["Asia", "Africa", "Middle East", "Europe"];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // Heading Animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },

        y: "6rem",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Paragraph Animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },

        y: "4rem",
        opacity: 0,
        delay: 0.2,
        duration: 1.2,
        ease: "power3.out",
      });

      // Left Card Animation
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },

        x: "-10vw",
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power3.out",
      });

      // Right Image Card Animation
      gsap.from(imageCardRef.current, {
        scrollTrigger: {
          trigger: imageCardRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },

        x: "10vw",
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power3.out",
      });

      // Region Buttons Stagger Animation
      gsap.from(buttonsRef.current, {
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 90%",
        },

        y: "3rem",
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F8F8F8] py-[6rem] overflow-hidden"
    >
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-[4rem] mb-[4rem]">
          
          <div
            ref={headingRef}
            className="w-full lg:w-[48%]"
          >
            <h1 className="text-[3rem] sm:text-[4rem] lg:text-[4.8rem] leading-[1.05]  TextDarkGray tracking-[-0.08rem]">
              Serving International
              <br />
              Pharmaceutical Markets
            </h1>
          </div>

          <div
            ref={textRef}
            className="w-full lg:w-[34%] flex items-start lg:justify-end"
          >
            <p className="TextLiteGray text-[1.35rem] sm:text-[1.45rem] leading-[2.4rem] font-normal">
              Supporting pharmaceutical sourcing and trade operations
              across Asia, Africa, the Middle East, Europe, and global
              markets.
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-col xl:flex-row gap-[2.5rem]">
          
          {/* Left Blue Card */}
          <div
            ref={cardRef}
            className="w-full xl:w-[68%] BgBlue rounded-[2rem] p-[3rem] sm:p-[4rem] flex flex-col justify-between min-h-[38rem]"
          >
            <h2 className="text-white text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] leading-[1.55] max-w-[58rem]">
              Indosol Exports facilitates businesses' pharmaceutical
              material sourcing effectively, leveraging their strong
              international presence and substantial trade experience
              with trustworthy procurement and worldwide logistics
              assistance
            </h2>

            {/* Region Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.5rem] mt-[4rem]">
              {regions.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (buttonsRef.current[index] = el)}
                  className="bg-[#15254b82] rounded-[0.5rem] h-fit py-[1rem] flex items-center justify-center gap-[1rem]"
                >
                  <span className="w-[0.7rem] h-[0.7rem] rounded-full bg-white"></span>

                  <p className="text-white text-[1.4rem] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Card */}
          <div
            ref={imageCardRef}
            className="relative w-full xl:w-[32%] overflow-hidden rounded-[2rem] min-h-[38rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1400&auto=format&fit=crop"
              alt="Earth"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Bottom Text */}
            <div className="absolute bottom-[3rem] right-[3rem] text-right">
              
              <h3 className="text-[#ff4b2b] text-[3.4rem] sm:text-[4rem]  leading-none">
                30+
              </h3>

              <p className="text-white text-[1.6rem] mt-[0.4rem]">
                Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}