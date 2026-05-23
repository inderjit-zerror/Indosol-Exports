"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top Content Animation
      gsap.from(".contact-top", {
        y: "6rem",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-top",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Form Animation
      gsap.from(".contact-form", {
        x: "-8vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Right Content Animation
      gsap.from(".contact-right", {
        x: "8vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-right",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Inputs Animation
      gsap.from(".input-field", {
        y: "3rem",
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Image Zoom Animation
      gsap.from(".contact-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-image",
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // Button Hover Animation
      const button = document.querySelector(".submit-btn");
      const arrow = document.querySelector(".submit-arrow");

      if (button && arrow) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            paddingRight: "1.4rem",
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: "0.4rem",
            rotate: -45,
            duration: 0.3,
            ease: "power3.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            paddingRight: "0.5rem",
            duration: 0.3,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            rotate: 0,
            duration: 0.3,
            ease: "power3.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f4f4f4] py-[6rem] pt-[10vw] overflow-hidden"
    >
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        {/* Top Content */}
        <div className="contact-top w-full border-b border-[#dddddd] pb-[4rem]">
          <div className="flex items-center gap-[0.6rem] mb-[1.2rem]">
            <div className="w-[0.4rem] h-[0.4rem] rounded-full bg-[#1846b3]" />

            <p className="text-[0.95rem] font-[500] text-[#374151]">
              Contact us
            </p>
          </div>

          <h1 className="font-[700] text-[#374151] max-w-[42rem]">
            Trusted Export Support Starts Here
          </h1>

          <p className="leading-[2rem] TextLiteGray max-w-[48rem] mt-[1.8rem]">
            Connect with our team for reliable pharmaceutical sourcing,
            regulatory support, and seamless global export solutions tailored
            to your business needs.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Form */}
          <div className="contact-form pt-[4rem] pr-[3vw]">
            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.6rem]">
                {/* First Name */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem]">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>

                {/* Last Name */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem]">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>

                {/* Number */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem]">
                    Number
                  </label>

                  <input
                    type="text"
                    placeholder="(xxx) xxx xxxx"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>

                {/* Email */}
                <div className="input-field w-full">
                  <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="support@example.com"
                    className="w-full h-[3.8rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] px-[1rem] text-[1rem] outline-none transition-all duration-300 focus:border-[#1846b3]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="input-field mt-[1.8rem]">
                <label className="block text-[1rem] font-[500] TextBlue mb-[0.8rem]">
                  Message
                </label>

                <textarea
                  placeholder="Type Message..."
                  className="w-full h-[12rem] bg-white border border-[#e5e7eb] rounded-[0.6rem] p-[1rem] text-[1rem] outline-none resize-none transition-all duration-300 focus:border-[#1846b3]"
                />
              </div>

              {/* Bottom Text */}
              <p className="input-field text-[0.95rem] leading-[1.8rem] TextLiteGray mt-[1.8rem] max-w-[36rem]">
                By submitting this form, you agree to our Privacy Policy and to
                share your interaction data to improve the quality and relevance
                of this service.

                 <button className=" input-field mt-[2rem] flex items-center gap-[0.8rem] border BgBlue border-[#d1d5db] rounded-full pl-[1.4rem] pr-[0.5rem] py-[0.5rem]  transition-all duration-300">
                <span className="text-[1rem] font-[600] text-white ">
                  Submit Message
                </span>

                <div className="w-[2rem] h-[2rem] rounded-full  flex items-center justify-center bg-white text-[0.8rem] overflow-hidden">
                  <FaArrowRight className="submit-arrow" />
                </div>
              </button>
              </p>

              {/* Button */}
             
            </form>
          </div>

          {/* Right Content */}
          <div className="contact-right pt-[4rem] border-l border-[#dddddd] pl-[3vw]">
            {/* Image */}
            <div className="w-full overflow-hidden rounded-[1rem]">
              <img
                src="/images/contact/ContactImg.webp"
                alt="contact"
                className="contact-image w-full h-[26rem] object-cover"
              />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] mt-[2.5rem]">
              {/* Address */}
              <div className="input-field">
                <h4 className="text-[1.2rem] font-[700] TextBlue mb-[1rem]">
                  Address
                </h4>

                <p className="text-[1rem] leading-[2rem] TextLiteGray">
                  804, 8th floor, arcadia building 195 ncpa marg, nariman
                  point, mumbai - 400 021 , india
                </p>

                <h4 className="text-[1.2rem] font-[700] TextBlue mt-[2rem] mb-[1rem]">
                  Email
                </h4>

                <div className="flex flex-col gap-[0.6rem]">
                  <p className="text-[1rem] TextLiteGray">
                    info@baselarea.swiss
                  </p>

                  <p className="text-[1rem] TextLiteGray">
                    bimal@iscpl.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="input-field">
                <h4 className="text-[1.2rem] font-[700] TextBlue mb-[1rem]">
                  Phone
                </h4>

                <div className="flex flex-col gap-[0.8rem]">
                  <p className="text-[1rem] TextLiteGray">
                    +91-22-2287 8889/ 90/ 91
                  </p>

                  <p className="text-[1rem] TextLiteGray">
                    + 91 98193 88509
                  </p>

                  <p className="text-[1rem] TextLiteGray">
                    + 91 98211 64770
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}