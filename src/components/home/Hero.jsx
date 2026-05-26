"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const iconRef = useRef(null);

  /* ─── Entrance + BG parallax ──────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* 1. Staggered line reveal */
      gsap.from([line1Ref.current, line2Ref.current, line3Ref.current], {
        yPercent: 110,
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.13,
        delay: 0.2,
      });

      /* 2. Paragraph fade + rise */
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 22,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.72,
      });

      /* 3. CTA fade + rise */
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 18,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.92,
      });

      /* 4. BG subtle scale-in */
      gsap.from(bgRef.current, {
        scale: 1.08,
        duration: 1.6,
        ease: "power2.out",
        delay: 0,
      });
    }, sectionRef);

    // /* 5. Mouse parallax */
    // const section = sectionRef.current;
    // const onMove = (e) => {
    //   const { clientX: x, clientY: y } = e;
    //   const cx = window.innerWidth / 2;
    //   const cy = window.innerHeight / 2;
    //   const dx = (x - cx) / cx;
    //   const dy = (y - cy) / cy;

    //   gsap.to(bgRef.current, {
    //     x: dx * 20,
    //     y: dy * 10,
    //     duration: 1.4,
    //     ease: "power2.out",
    //   });
    //   gsap.to(overlayRef.current, {
    //     x: dx * 8,
    //     y: dy * 4,
    //     duration: 1.5,
    //     ease: "power2.out",
    //   });
    // };

    // const onLeave = () => {
    //   gsap.to([bgRef.current, overlayRef.current], {
    //     x: 0,
    //     y: 0,
    //     duration: 1.3,
    //     ease: "power2.out",
    //   });
    // };

    // section.addEventListener("mousemove", onMove);
    // section.addEventListener("mouseleave", onLeave);

    return () => {
      ctx.revert();
      // section.removeEventListener("mousemove", onMove);
      // section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* ─── Button hover handlers ────────────────────────────────── */
  const onCtaEnter = () => {
    gsap.to(ctaRef.current, {
      scale: 1.03,
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(iconRef.current, {
      // x: 5,
      rotation: 360,
      duration: 0.45,
      ease: "back.out(1.7)",
    });
  };

  const onCtaLeave = () => {
    gsap.to(ctaRef.current, {
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(iconRef.current, {
      x: 0,
      rotation: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  /* ─── Ripple on click ──────────────────────────────────────── */
  const onCtaClick = (e) => {
    const btn = ctaRef.current;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");

    Object.assign(ripple.style, {
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(5,18,50,0.08)",
      width: `${size}px`,
      height: `${size}px`,
      left: `${e.clientX - rect.left - size / 2}px`,
      top: `${e.clientY - rect.top - size / 2}px`,
      pointerEvents: "none",
    });
    btn.appendChild(ripple);

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 1 },
      {
        scale: 4,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      },
    );
  };

  /* ─── Render ───────────────────────────────────────────────── */
  return (
    <section ref={sectionRef} className="relative w-full h-svh overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="/images/Home/HomeHeroImgBG.webp"
          alt="Molecular structure background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay — separate ref so it parallaxes at a different depth */}
      <div
        ref={overlayRef}
        className="absolute inset-0 will-change-transform"
        style={{
          background:
            "linear-gradient(to right, rgba(5,18,50,0.92) 0%, rgba(5,18,50,0.60) 45%, rgba(5,18,50,0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full justify-center h-full pl-[5vw] pr-[5vw] pt-[7vw] pb-[7vw]">
        {/* Heading — each line clipped so it reveals upward */}
        <h1 className="text-white leading-tight tracking-tight mb-4">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block will-change-transform">
              Global Pharma API,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block will-change-transform">
              Excipient &amp; Packaging
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line3Ref} className="block will-change-transform">
              Specialists
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={paraRef}
          className="text-white/75 font-light max-w-[35vw] mb-8 mt-2 will-change-transform"
        >
          Your trusted Indian partner for compliant, high-quality pharmaceutical
          supplies delivered to markets worldwide.
        </p>

        {/* CTA Button */}
        <Link
          ref={ctaRef}
          href="/products"
          onMouseEnter={onCtaEnter}
          onMouseLeave={onCtaLeave}
          onClick={onCtaClick}
          className="inline-flex items-center gap-3 self-start rounded-full border border-white bg-white text-blue-900 py-[0.5rem] pl-[1rem] pr-[0.4rem] relative overflow-hidden will-change-transform"
        >
          <p>Explore All Products</p>
          <span
            ref={iconRef}
            className="inline-flex items-center justify-center rounded-full bg-blue-900 text-white w-[2rem] h-[2rem] shrink-0 will-change-transform"
          >
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
