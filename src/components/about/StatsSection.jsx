"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const statsData = [
    {
      number: "20+",
      title: "Our Experience",
      description:
        "Extensive experience exceeding twenty years in global commerce and acquiring high-quality healthcare items.",
    },
    {
      number: "30+",
      title: "Global Export Network",
      description:
        "Providing services to governed and partly governed markets in Asia, Africa, the Middle East, and additional regions.",
    },
    {
      number: "4",
      title: "Quality Certified",
      description:
        "Products derive only from certified makers following compliance and international pharma regulatory standards.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards — staggered fade + slide up
      gsap.from(cardRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 0.75,
        stagger: 0.18,
        ease: "power3.out",
      });

      // Animated number count-up for each stat
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const numEl = card.querySelector("[data-count]");
        if (!numEl) return;

        const raw = numEl.getAttribute("data-count");       // e.g. "20", "30", "4"
        const suffix = numEl.getAttribute("data-suffix") || ""; // e.g. "+"

        const obj = { val: 0 };
        gsap.to(obj, {
          val: parseFloat(raw),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
          onUpdate() {
            numEl.textContent = Math.round(obj.val) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#ffffff] py-[2vw] pb-[8vw]">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-r border-[#dddddd]">
          {statsData.map((item, index) => {
            // Split number into numeric part and suffix ("+", "%", etc.)
            const match = item.number.match(/^(\d+)(\D*)$/);
            const numericPart = match ? match[1] : item.number;
            const suffixPart = match ? match[2] : "";

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="px-[3vw] py-[1rem] text-center border-b md:border-b-0 md:border-r border-[#dddddd] last:border-r-0"
              >
                {/* Animated Number */}
                <h1
                  data-count={numericPart}
                  data-suffix={suffixPart}
                  className="text-[4.5rem] leading-[4.5rem] font-[700] text-[#1846b3]"
                >
                  0{suffixPart}
                </h1>

                {/* Title */}
                <h3 className="text-[1.5rem] font-[700] text-[#374151] mt-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[1.05rem] leading-[2rem] text-[#6b7280] mt-[1.5rem] max-w-[22rem] mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}