"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const cardRefs = useRef([]);

  const teamMembers = [
    {
      name: "Danial Bryan",
      role: "Indosol - Exports Manager",
      image: "/images/Home/P1.webp",
    },
    {
      name: "Alphonso Pearson",
      role: "Indosol - Exports Manager",
      image: "/images/Home/P2.webp",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Left content: heading, desc, button stagger up ──────────
      gsap.fromTo(
        [headingRef.current, descRef.current, btnRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            scrub:true,
          },
        }
      );

      // ── Team cards stagger up ────────────────────────────────────
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: cardRefs.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Hover lift on cards ──────────────────────────────────────
      cardRefs.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.35, ease: "power2.inOut" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f5f5f5] py-[6rem] overflow-hidden">
      <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[5rem]">

        {/* Left Content */}
        <div className="w-full lg:w-[30vw]">
          <h1
            ref={headingRef}
            className="font-medium TextDarkGray"
            style={{ opacity: 0 }}
          >
            Leadership Behind
            <br />
            Our Success
          </h1>

          <p
            ref={descRef}
            className="text-[#7b8494] mt-[2rem] max-w-[24rem]"
            style={{ opacity: 0 }}
          >
            Discover the professionals propelling novelty, strategic thinking,
            and exceptional execution in each task.
          </p>

          <button
            ref={btnRef}
            className="mt-[5rem] flex items-center gap-[1rem] bg-white border border-[#d9dce3] rounded-full py-[0.7rem] pl-[2rem] pr-[2rem] hover:shadow-md duration-300"
            style={{ opacity: 0 }}
          >
            <span className="text-[1rem] TextDarkGray">
              Learn More
            </span>
          </button>
        </div>

        {/* Right Team Cards */}
        <div className="w-full lg:w-[55vw] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && !cardRefs.current.includes(el))
                  cardRefs.current.push(el);
              }}
              className="w-full cursor-pointer"
              style={{ opacity: 0, willChange: "transform" }}
            >
              {/* Image Card */}
              <div className="bg-white rounded-[1.4rem] overflow-hidden border border-[#ececec]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[30rem] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mt-[1.5rem]">
                <div>
                  <h2 className="text-[1.3rem] font-medium TextDarkGray">
                    {member.name}
                  </h2>
                  <p className="TextLiteGray mt-[0.4rem]">{member.role}</p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-[0.8rem]">
                  <a
                    href="#"
                    className="w-[2rem] h-[2rem] rounded-full border border-[#d7dbe3] flex items-center justify-center text-[0.9rem] text-[#5b6475] hover:bg-[#1450d2] hover:text-white duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="w-[2rem] h-[2rem] rounded-full border border-[#d7dbe3] flex items-center justify-center text-[0.9rem] text-[#5b6475] hover:bg-[#1450d2] hover:text-white duration-300"
                  >
                    <GrFacebookOption />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}