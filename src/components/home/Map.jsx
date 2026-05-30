"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  useEffect(() => {
    const headings = gsap.utils.toArray(".heading");

    // Initial state
    gsap.set(headings, {
      transformPerspective: 1000,
      transformOrigin: "center center",
      transformStyle: "preserve-3d",
      opacity: 0,
      scale: 0.8,
      rotationZ: -8,
      filter: "blur(10px)",
    });

    // First heading visible initially
    gsap.set(headings[0], {
      opacity: 1,
      scale: 1,
      rotationZ: 0,
      filter: "blur(0px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".MapTopMainCont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // =========================
    // First Heading OUT
    // =========================
    tl.to(headings[0], {
      opacity: 0,
      scale: 2,
      // rotationX: -20,
      rotationZ: 8,
      filter: "blur(12px)",
      duration: 1,
    });

    // Second Heading IN
    tl.to(
      headings[1],
      {
        opacity: 1,
        scale: 1,
        rotationZ: 0,
        filter: "blur(0px)",
        duration: 1,
      },
      "<",
    );

    // =========================
    // Second Heading OUT
    // =========================
    tl.to(headings[1], {
      opacity: 0,
      scale: 2,
      // rotationX: -20,
      rotationZ:8,
      filter: "blur(12px)",
      duration: 1,
    });

    // Third Heading IN
    tl.to(
      headings[2],
      {
        opacity: 1,
        scale: 1,
        rotationZ: 0,
        filter: "blur(0px)",
        duration: 1,
      },
      "<",
    );

    // =========================
    // Third Heading OUT
    // =========================
    tl.to(headings[2], {
      opacity: 0,
      scale: 2,
      // rotationX: -20,
      rotationZ: 8,
      filter: "blur(12px)",
      duration: 1,
    });
    tl.from('.MapIcon',{
      opacity:0,
      top:'20%'
    })

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="MapTopMainCont relative h-[400svh] w-full bg-white">
      <div className="sticky top-0 left-0 h-screen w-full">
        {/* Text */}
        <div className="absolute top-[8%] left-0 z-20 flex w-full items-center justify-center capitalize">
          <div className="relative flex h-[30vh] w-full items-center justify-center">
            <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              Serving clients <br className="sm:hidden" /> across
            </h1>

            <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              Asia, Europe, <br className="sm:hidden" /> Middle East,
            </h1>

            <h1 className="heading TextDarkGray absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              and beyond
            </h1>
          </div>
        </div>

        {/* Map */}
        <div className="absolute bottom-0 left-0 z-[1] flex h-[70vh] w-full items-center justify-center pb-[5vh]">
          <img
            src="/images/Home/map.svg"
            alt="map"
            className="h-full w-full object-cover object-center"
          />

          <div className="w-[150px] MapIcon opacity-100  absolute top-[15%] left-[50%] z-2">
            <img
              src={`/images/Home/PopUp.png`}
              alt="IMG"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
