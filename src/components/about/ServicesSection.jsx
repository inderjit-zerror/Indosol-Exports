"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBox, FiGrid, FiFileText, FiTruck, FiLayers } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const serviceItemRefs = useRef([]);

  const services = [
    { icon: <FiBox />, title: "API Sourcing" },
    { icon: <FiGrid />, title: "Excipients & Intermediates" },
    { icon: <FiFileText />, title: "Export Documentation" },
    { icon: <FiTruck />, title: "Global Logistics Support" },
    { icon: <FiLayers />, title: "Consolidated Supply Solutions" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image — slides in from left
      gsap.from(imgRef.current, {
        scrollTrigger: { trigger: imgRef.current, start: "top 78%", once: true },
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Subtle scroll parallax on image
      gsap.fromTo(
        imgRef.current.querySelector("img") ?? imgRef.current,
        { scale: 1.07 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Right content timeline — heading → divider → service items
      const tl = gsap.timeline({
        scrollTrigger: { trigger: headingRef.current, start: "top 78%", once: true },
      });

      tl.from(headingRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          dividerRef.current,
          { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          serviceItemRefs.current,
          { x: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
          "-=0.2"
        );

      // Icon boxes — pop scale on entry
      serviceItemRefs.current.forEach((item, i) => {
        const iconBox = item?.querySelector("[data-icon]");
        if (!iconBox) return;
        gsap.from(iconBox, {
          scrollTrigger: { trigger: item, start: "top 85%", once: true },
          scale: 0.5,
          opacity: 0,
          duration: 0.4,
          delay: i * 0.08,
          ease: "back.out(1.7)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0b2b72] py-[7rem]">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] items-center">

          {/* Left Image */}
          <div ref={imgRef} className="w-full overflow-hidden rounded-[1.2rem]">
            <img
              src={`/images/about/R1.webp`}
              alt="Services"
              className="w-full h-[28rem] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full">
            {/* Heading */}
            <h2
              ref={headingRef}
              className="text-white text-[4rem] leading-[4.3rem] font-[700] max-w-[40rem]"
            >
              Complete Pharmaceutical Export Solutions
            </h2>

            {/* Divider */}
            <div
              ref={dividerRef}
              className="w-full h-[0.08rem] bg-white/10 my-[2.5rem]"
            />

            {/* Services List */}
            <div className="flex flex-col gap-[1.4rem]">
              {services.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (serviceItemRefs.current[index] = el)}
                  className="flex items-center gap-[1.2rem]"
                >
                  {/* Icon Box */}
                  <div
                    data-icon
                    className="w-[2.6rem] h-[2.6rem] rounded-[0.7rem] bg-white/10 flex items-center justify-center text-white text-[1.1rem]"
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[1.25rem] font-[500] text-white">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}