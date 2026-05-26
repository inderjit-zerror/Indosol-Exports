"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const accordionData = [
  {
    title: "Africa",
    content:
      "Reliable pharmaceutical supply solutions supporting growing healthcare markets across Africa with trusted global export expertise.",
  },
  {
    title: "Asia",
    content:
      "Advanced healthcare distribution services across Asia ensuring quality medicines and medical products reach expanding healthcare sectors.",
  },
  {
    title: "Middle East",
    content:
      "Strategic pharmaceutical partnerships delivering efficient healthcare supply chain solutions throughout Middle Eastern regions.",
  },
  {
    title: "Europe",
    content:
      "Compliant and secure healthcare product distribution supporting hospitals, pharmacies, and medical institutions across Europe.",
  },
  {
    title: "South America",
    content:
      "Reliable export and healthcare logistics services connecting pharmaceutical manufacturers with South American healthcare providers.",
  },
  {
    title: "Southeast Asia",
    content:
      "Trusted healthcare distribution network serving fast-growing Southeast Asian medical and pharmaceutical markets efficiently.",
  },
];

function AccordionItem({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const icon = iconRef.current;
    const text = textRef.current;
    if (!content) return;

    if (isOpen) {
      // Expand
      gsap.set(content, { display: "block" });
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        text,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, delay: 0.12, ease: "power2.out" }
      );
      gsap.to(icon, {
        rotation: 45,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // Collapse
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
        onComplete: () => gsap.set(content, { display: "none" }),
      });
      gsap.to(icon, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  // Set initial state without animation on mount
  useEffect(() => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;
    if (isOpen) {
      gsap.set(content, { height: "auto", opacity: 1, display: "block" });
      gsap.set(icon, { rotation: 45 });
    } else {
      gsap.set(content, { height: 0, opacity: 0, display: "none" });
      gsap.set(icon, { rotation: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between py-[1.5rem] text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-white text-[1.15rem]  tracking-wide group-hover:text-white/80 transition-colors duration-200">
          {item.title}
        </h3>

        {/* Plus icon that rotates to ✕ */}
        <span
          ref={iconRef}
          className="flex-shrink-0 ml-4 w-[1.6rem] h-[1.6rem] flex items-center justify-center text-white text-[1.6rem] font-light leading-none"
          style={{ transformOrigin: "center center" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Content wrapper — GSAP controls height & opacity */}
      <div
        ref={contentRef}
        style={{ overflow: "hidden", display: "none" }}
      >
        <div ref={textRef} className="pb-[1.5rem]">
          <p className="text-white/75 text-[0.98rem] leading-[1.85rem] max-w-[44rem]">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InternationalHealthcareNetwork() {
  const [openIndex, setOpenIndex] = useState(0);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const accordionBoxRef = useRef(null);

  // Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75 }
      )
        .fromTo(
          imageRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          accordionBoxRef.current,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7 },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#F8F8F8] py-[6rem]">
      <div className="w-[90vw] max-w-[80rem] mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-[3.5rem]">
          <h1 className=" TextDarkGray">
            International Healthcare
            <br />
            Distribution Network
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-[2rem] items-stretch">

          {/* Left Image — fixed height on mobile, stretches on desktop */}
          <div
            ref={imageRef}
            className="w-full lg:w-[32%] min-h-[20rem] lg:min-h-0 rounded-[1.25rem] overflow-hidden"
          >
            <img
              src="/images/export/rendom1.webp"
              alt="Healthcare Distribution Globe"
              className="w-full h-full object-cover"
              style={{ minHeight: "100%" }}
            />
          </div>

          {/* Accordion Panel */}
          <div
            ref={accordionBoxRef}
            className="w-full lg:w-[68%] bg-[#03256C] rounded-[1.25rem] px-[2.25rem] py-[0.75rem]"
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={toggleAccordion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}