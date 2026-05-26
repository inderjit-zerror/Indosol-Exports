"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, Boxes, Truck, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Globe,
    title: "Global Export Expertise",
    description:
      "More than 20 years of experience in international pharmaceutical trade and merchant exporting activities.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Manufacturer",
    description:
      "Strong partnerships with leading Indian manufacturers ensure consistent product quality and competitive pricing.",
  },
  {
    icon: Boxes,
    title: "One-Stop Sourcing Solutions",
    description:
      "All-encompassing procurement assistance for APIs, excipients, intermediates, and related healthcare items.",
  },
  {
    icon: Truck,
    title: "Global Logistics Support",
    description:
      "Efficient shipment coordination, palletization, fumigation, and export logistics management for seamless international deliveries.",
  },
];

/* ── Magnetic button hook ── */
function useMagnetic(ref, strength = 0.35) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength]);
}

function MagneticBtn({ children, className, style, onClick }) {
  const ref = useRef(null);
  useMagnetic(ref, 0.4);
  return (
    <button ref={ref} className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

/* ── Individual card ── */
function Card({ card, index }) {
  const cardRef = useRef(null);
  const iconWrapRef = useRef(null);
  const iconRef = useRef(null);
  const shimmerRef = useRef(null);
  const Icon = card.icon;

  /* hover: card lift + icon spin + shimmer sweep */
  const onEnter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      boxShadow: "0 24px 48px rgba(29,78,216,0.12), 0 4px 12px rgba(0,0,0,0.06)",
      borderColor: "rgba(29,78,216,0.25)",
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(iconWrapRef.current, {
      backgroundColor: "#eff6ff",
      scale: 1.12,
      duration: 0.35,
      ease: "back.out(1.7)",
    });
    gsap.to(iconRef.current, {
      rotate: 15,
      scale: 1.15,
      duration: 0.35,
      ease: "back.out(1.7)",
    });
    gsap.fromTo(
      shimmerRef.current,
      { x: "-110%", opacity: 1 },
      { x: "110%", opacity: 1, duration: 0.55, ease: "power2.inOut" }
    );
  };

  const onLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      borderColor: "#e5e7eb",
      duration: 0.45,
      ease: "power3.out",
    });
    gsap.to(iconWrapRef.current, {
      backgroundColor: "#fafafa",
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(iconRef.current, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="bg-white border border-[#e5e7eb] rounded-[1.5rem] p-[2rem] cursor-default"
      style={{
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        willChange: "transform",
      }}
    >
      {/* Shimmer streak */}
      <div
        ref={shimmerRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.55) 50%,transparent 70%)",
          transform: "translateX(-110%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Icon */}
      <div
        ref={iconWrapRef}
        className="w-[3.5rem] h-[3.5rem] rounded-[1rem] bg-[#fafafa] flex items-center justify-center mb-[3rem]"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div ref={iconRef}>
          <Icon className="w-[1.2rem] h-[1.2rem] text-orange-500" />
        </div>
      </div>

      {/* Content */}
      <h2
        className=" TextDarkGray mb-[1rem]"
        style={{ position: "relative", zIndex: 2 }}
      >
        {card.title}
      </h2>
      <p
        className="TextLiteGray"
        style={{ position: "relative", zIndex: 2 }}
      >
        {card.description}
      </p>

      {/* Bottom accent line */}
      {/* <div
        className="card-accent-line"
        style={{
          position: "absolute",
          bottom: 0,
          left: "2rem",
          right: "2rem",
          height: "2px",
          background: "linear-gradient(90deg,#1d4ed8,#f97316)",
          borderRadius: "99px",
          transform: "scaleX(0)",
          transformOrigin: "left",
          zIndex: 2,
        }}
      /> */}
    </div>
  );
}

export default function TrustedManufacturerNetwork() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsRef = useRef([]);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useMagnetic(leftArrowRef, 0.45);
  useMagnetic(rightArrowRef, 0.45);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { trigger: sectionRef.current, start: "top 78%", once: true };

      /* Heading — word stagger with 3-D flip */
      const words = headingRef.current?.querySelectorAll(".w");
      if (words?.length) {
        gsap.fromTo(
          words,
          { y: 45, opacity: 0, rotateX: -25, transformOrigin: "top center" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "expo.out",
            scrollTrigger: st,
          }
        );
      }

      /* Description fade-up */
      gsap.fromTo(
        descRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.35, ease: "power3.out", scrollTrigger: st }
      );

      /* Buttons pop in */
      gsap.fromTo(
        btnsRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: st,
        }
      );

      /* Divider draw */
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.9,
          delay: 0.55,
          ease: "expo.out",
          scrollTrigger: st,
        }
      );

      /* Cards — staggered rise + accent line reveal */
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.6 + i * 0.1,
            ease: "expo.out",
            scrollTrigger: st,
            onComplete: () => {
              /* slide in the bottom accent line once card arrives */
              const line = card.querySelector(".card-accent-line");
              if (line) {
                gsap.to(line, {
                  scaleX: 1,
                  duration: 0.5,
                  ease: "expo.out",
                  delay: 0.05,
                });
              }
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Arrow hover animations */
  const arrowHover = (ref, enter) => {
    gsap.to(ref.current, {
      scale: enter ? 1.12 : 1,
      duration: 0.3,
      ease: enter ? "back.out(2)" : "power2.out",
    });
  };

  const splitHeading = (text) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="w"
        style={{ display: "inline-block", marginRight: "0.28em" }}
      >
        {word}
      </span>
    ));

  return (
    <section ref={sectionRef} className="w-full bg-[#ffffff] py-[6rem]">
      <div className="w-[90vw] max-w-[90rem] mx-auto">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-[4rem]">

          {/* Left — animated heading */}
          <div className="">
            <h1
              ref={headingRef}
              className=" TextDarkGray"
              style={{ perspective: "700px" }}
            >
              {splitHeading("Trusted Manufacturer")}
              <br />
              {splitHeading("Network")}
            </h1>
          </div>

          {/* Right — description + buttons */}
          <div className="flex flex-col items-start lg:items-end gap-[2rem]">
            <p
              ref={descRef}
              className="max-w-[28rem] text-[1.1rem] leading-[2rem] text-[#6b7280]"
            >
              Strong partnerships with leading Indian manufacturers ensure
              consistent product quality and competitive pricing.
            </p>

            <div ref={btnsRef} className="flex items-center gap-[1rem]">
              <button
                ref={leftArrowRef}
                onMouseEnter={() => arrowHover(leftArrowRef, true)}
                onMouseLeave={() => arrowHover(leftArrowRef, false)}
                className="w-[3.2rem] h-[3.2rem] rounded-full border border-[#d1d5db] flex items-center justify-center text-[#1d4ed8] hover:bg-[#f0f5ff] duration-300"
                style={{ willChange: "transform" }}
              >
                <ArrowLeft className="w-[1.2rem] h-[1.2rem]" />
              </button>

              <button
                ref={rightArrowRef}
                onMouseEnter={() => arrowHover(rightArrowRef, true)}
                onMouseLeave={() => arrowHover(rightArrowRef, false)}
                className="w-[3.2rem] h-[3.2rem] rounded-full bg-[#1d4ed8] flex items-center justify-center text-white hover:bg-[#1e40af] duration-300"
                style={{ willChange: "transform" }}
              >
                <ArrowRight className="w-[1.2rem] h-[1.2rem]" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="w-full h-[0.08rem] bg-[#e5e7eb] my-[4rem]"
          style={{ transform: "scaleX(0)", transformOrigin: "left" }}
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ opacity: 0 }}
            >
              <Card card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}