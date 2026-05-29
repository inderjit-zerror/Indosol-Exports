"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  useEffect(() => {
    gsap.fromTo(
      ".MapIcon",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".MapTopMainCont",
          start: "top 20%",
          toggleActions: "play reverse play reverse",
          // scrub:true
        },
      },
    );
  }, []);
  return (
    <div className="w-full MapTopMainCont h-screen bg-white px-[10%] relative overflow-hidden">
      <div className="w-full h-fit flex justify-center items-center text-center relative z-10">
        
        <h1 className="TextDarkGray">
          Serving clients across <br /> Asia, Europe, Middle East, <br /> and
          beyond
        </h1>
      </div>

      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center pb-[5vh] z-1 ">
        <img
          src={`/images/Home/map.svg`}
          alt="img"
          className="w-full object-cover object-center"
        />
      </div>

      <div className="w-[150px] MapIcon opacity-0 absolute top-[30%] left-[50%] z-2">
        <img
          src={`/images/Home/PopUp.png`}
          alt="IMG"
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Map;
