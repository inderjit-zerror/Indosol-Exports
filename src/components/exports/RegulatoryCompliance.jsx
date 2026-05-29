"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const supportItems = [
  "COA & MSDS Support",
  "GMP Documentation",
  "Export Compliance Assistance",
  "Packaging & Labeling Support",
  "Fumigation & Certification",
];

export default function RegulatoryCompliance() {
  const sectionRef   = useRef(null);
  const headingRef   = useRef(null);
  const descRef      = useRef(null);
  const listRef      = useRef([]);
  const dividerRef   = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef     = useRef(null);
  const overlayRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      };

      /* ── Heading: words tumble in with 3-D flip ── */
      const words = headingRef.current?.querySelectorAll(".w");
      if (words?.length) {
        gsap.fromTo(
          words,
          { y: 40, opacity: 0, rotateX: -22, transformOrigin: "top center" },
          {
            y: 0, opacity: 1, rotateX: 0,
            duration: 0.65, stagger: 0.07,
            ease: "expo.out", scrollTrigger: st,
          }
        );
      }

      /* ── Description fade + slide ── */
      gsap.fromTo(
        descRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.35, ease: "power3.out", scrollTrigger: st }
      );

      /* ── List items: stagger in from left, dot pops ── */
      listRef.current.forEach((el, i) => {
        if (!el) return;
        const dot  = el.querySelector(".dot");
        const text = el.querySelector(".label");

        gsap.fromTo(
          el,
          { x: -36, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: 0.55, delay: 0.45 + i * 0.1,
            ease: "expo.out", scrollTrigger: st,
          }
        );
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4, delay: 0.6 + i * 0.1,
            ease: "back.out(2.5)", scrollTrigger: st,
          }
        );
        gsap.fromTo(
          text,
          { opacity: 0, x: -8 },
          {
            opacity: 1, x: 0,
            duration: 0.35, delay: 0.65 + i * 0.1,
            ease: "power2.out", scrollTrigger: st,
          }
        );

        /* hover: lift + left-border accent */
        const onEnter = () => {
          gsap.to(el, { y: -3, boxShadow: "0 8px 24px rgba(29,78,216,0.10)", duration: 0.3, ease: "power2.out" });
          gsap.to(dot, { scale: 1.5, backgroundColor: "#1d4ed8", duration: 0.25, ease: "back.out(2)" });
          gsap.to(el.querySelector(".bar"), { scaleY: 1, duration: 0.3, ease: "expo.out" });
        };
        const onLeave = () => {
          gsap.to(el, { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", duration: 0.35, ease: "power2.out" });
          gsap.to(dot, { scale: 1, backgroundColor: "#1d4ed8", duration: 0.3, ease: "power2.out" });
          gsap.to(el.querySelector(".bar"), { scaleY: 0, duration: 0.25, ease: "power2.in" });
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      /* ── Divider draws down ── */
      gsap.fromTo(
        dividerRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 1, delay: 0.3, ease: "expo.out", scrollTrigger: st }
      );

      /* ── Image: curtain wipe reveal ── */
      gsap.fromTo(
        overlayRef.current,
        { scaleX: 1, transformOrigin: "right" },
        { scaleX: 0, duration: 0.9, delay: 0.25, ease: "expo.inOut", scrollTrigger: st }
      );
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 1.1, delay: 0.25, ease: "expo.out", scrollTrigger: st }
      );

      /* ── Image wrapper: subtle float loop ── */
      gsap.to(imageWrapRef.current, {
        y: -10,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* per-word span helper */
  const split = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="w" style={{ display: "inline-block", marginRight: "0.28em" }}>
        {word}
      </span>
    ));

  return (
    <section ref={sectionRef} className="w-full bg-[#f5f5f5] py-[6rem] overflow-hidden">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-[4rem] items-center">

          {/* ── Left Content ── */}
          <div>
            <h1
              ref={headingRef}
              className="TextDarkGray max-w-[35rem]"
              style={{ perspective: "700px" }}
            >
              {split("Regulatory Compliance &")}
              <br />
              {split("Documentation Support")}
            </h1>

            <p ref={descRef} className="TextLiteGray max-w-[32rem] mt-[1.8rem]">
              Ensuring smooth international trade operations through complete
              export documentation and compliance assistance.
            </p>

            <div className="flex flex-col gap-[1rem] mt-[3rem]">
              {supportItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (listRef.current[index] = el)}
                  className="w-full bg-white rounded-[0.8rem] py-[1.2rem] px-[1.4rem] flex items-center gap-[1rem]"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    willChange: "transform",
                  }}
                >
                  {/* left accent bar */}
                  {/* <div
                    className="bar"
                    style={{
                      position: "absolute",
                      left: 0, top: "15%", bottom: "15%",
                      width: "3px",
                      background: "linear-gradient(180deg,#1d4ed8,#60a5fa)",
                      borderRadius: "0 3px 3px 0",
                      transform: "scaleY(0)",
                      transformOrigin: "top",
                    }}
                  /> */}

                  {/* dot */}
                  <div
                    className="dot flex-shrink-0"
                    style={{
                      width: "0.45rem",
                      height: "0.45rem",
                      // borderRadius: "50%",
                      backgroundColor: "#1d4ed8",
                    }}
                  />

                  <p className="label font-medium TextLiteGray">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            ref={dividerRef}
            className="hidden lg:block w-[0.08rem] h-[32rem] bg-[#dddddd]"
            style={{ transform: "scaleY(0)", transformOrigin: "top" }}
          />

          {/* ── Right Image ── */}
          <div className="w-full flex justify-center lg:justify-end">
            <div
              ref={imageWrapRef}
              className="relative w-full max-w-[34rem] h-[34rem] rounded-[1.5rem] overflow-hidden"
              style={{ willChange: "transform" }}
            >
              {/* image itself */}
              <div ref={imageRef} style={{ width: "100%", height: "100%" }}>
                <Image
                  src="/images/export/rc1.webp"
                  alt="Regulatory Compliance"
                  fill
                  className="object-cover"
                />
              </div>

              {/* curtain overlay */}
              <div
                ref={overlayRef}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#f5f5f5",
                  zIndex: 10,
                  transformOrigin: "right",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}