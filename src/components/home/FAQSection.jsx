"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentRefs = useRef([]);
  const innerRefs = useRef([]);

  // Scroll animation refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const faqRowRefs = useRef([]);

  const faqData = [
    {
      question: "What products does Indosol Exports specialize in?",
      answer:
        "We specialize in exporting pharmaceutical-grade APIs, excipients, and packaging materials that meet international quality and regulatory standards.",
    },
    {
      question: "Do you comply with global pharmaceutical regulations?",
      answer:
        "Yes, all our products comply with international pharmaceutical regulations and undergo strict quality assurance processes.",
    },
    {
      question: "Which countries do you export to?",
      answer:
        "We export to multiple countries across Asia, Europe, Africa, and the Middle East with trusted global logistics support.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "Every product passes through detailed quality checks, documentation verification, and certified manufacturing procedures.",
    },
    {
      question: "Can you handle bulk and custom orders?",
      answer:
        "Absolutely. We provide scalable export solutions for both bulk shipments and customized client requirements.",
    },
  ];

  // ── Accordion GSAP logic ─────────────────────────────────────────
  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      const inner = innerRefs.current[index];
      if (index === activeIndex) {
        gsap.to(content, {
          height: inner.offsetHeight,
          duration: 0.5,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(content, {
          height: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  // ── Scroll-triggered entrance animations ────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading rises up
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Button rises up with slight delay
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // FAQ rows stagger up one by one
      gsap.fromTo(
        faqRowRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRowRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
            scrub:true
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#ffffff] py-[6rem] overflow-hidden"
    >
      <div className="w-[90vw] mx-auto">

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[3rem] mb-[4rem]">

          <div ref={headingRef} style={{ opacity: 0 }}>
            <h1 className="text-[3.5rem] leading-[4rem] font-medium TextDarkGray">
              Frequently Asked
              <br />
              Questions
            </h1>
          </div>

          <button
            ref={btnRef}
            className="flex items-center gap-[1rem] border border-[#d9dce3] rounded-full bg-white py-[0.4rem] pl-[1rem] pr-[0.5rem] duration-300"
            style={{ opacity: 0 }}
          >
            <span className="text-[1rem] TextDarkGray">
              Get In Touch
            </span>
            <div className="w-[2rem] h-[2rem] rounded-full bg-[#1450d2] flex items-center justify-center text-white text-[0.9rem]">
              <FaArrowRight/>
            </div>
          </button>
        </div>

        {/* FAQ Container */}
        <div className="border-t border-[#d9dce3]">
          {faqData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && !faqRowRefs.current.includes(el))
                  faqRowRefs.current.push(el);
              }}
              className={`relative border-b border-[#d9dce3] overflow-hidden ${
                activeIndex === index ? "bg-[#f7f7f7]" : "bg-transparent"
              }`}
              style={{ opacity: 0, willChange: "transform" }}
            >
              {/* Animated Top Blue Border */}
              <div className="absolute top-0 left-0 w-full h-[0.18rem]">
                <div
                  className={`h-full BgBlue transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between gap-[2rem] py-[2rem] px-[2rem] text-left"
              >
                <h3
                  className={` font-medium duration-300 ${
                    activeIndex === index ? "TextBlue" : "TextDarkGray"
                  }`}
                >
                  {item.question}
                </h3>

                <span
                  className={`text-[2rem] leading-none duration-300 ${
                    activeIndex === index
                      ? "text-[#ff4d4d] rotate-180"
                      : "text-[#1450d2]"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Animated Content */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="h-0 overflow-hidden"
              >
                <div
                  ref={(el) => (innerRefs.current[index] = el)}
                  className="px-[2rem] pb-[2rem]"
                >
                  <p className=" TextLiteGray max-w-[55rem]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}