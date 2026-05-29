// "use client";

// import { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { FaArrowRight } from "react-icons/fa6";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const headerRef = useRef(null);
//   const buttonRef = useRef(null);
//   const circleRef = useRef(null);

//   const pathName = usePathname();

//   useEffect(() => {
//     const header = headerRef.current;

//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         gsap.to(header, {
//           backgroundColor: "#ffffff",
//           duration: 0.3,
//           ease: "power2.out",
//         });

//         gsap.to(".navLink", {
//           color: "#111827",
//           duration: 0.3,
//         });

//         gsap.to(".NavBTBN", {
//           backgroundColor: "#0D40A2",
//           color: "#ffffff",
//           duration: 0.3,
//         });

//         gsap.to(".BTNinnerCrl", {
//           backgroundColor: "#ffffff",
//           color: "#0D40A2",
//           duration: 0.3,
//         });
//       } else {
//         gsap.to(header, {
//           backgroundColor: "transparent",
//           duration: 0.3,
//           ease: "power2.out",
//         });

//         gsap.to(".navLink", {
//           color: "#ffffff",
//           duration: 0.3,
//         });

//         gsap.to(".NavBTBN", {
//           backgroundColor: "#ffffff",
//           color: "#0D40A2",
//           duration: 0.3,
//         });

//         gsap.to(".BTNinnerCrl", {
//           backgroundColor: "#0D40A2",
//           color: "#ffffff",
//           duration: 0.3,
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Button Hover Animation
//     const button = buttonRef.current;
//     const circle = circleRef.current;

//     const handleMouseEnter = () => {
//       gsap.to(button, {
//         scale: 1.03,
//         duration: 0.3,
//         ease: "power2.out",
//       });

//       gsap.to(circle, {
//         // x: "0.3rem",
//         rotate: 45,
//         scale: 1,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(button, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out",
//       });

//       gsap.to(circle, {
//         x: 0,
//         rotate: 0,
//         scale: 1,
//         duration: 0.4,
//         ease: "power3.out",
//       });
//     };

//     button.addEventListener("mouseenter", handleMouseEnter);
//     button.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);

//       button.removeEventListener("mouseenter", handleMouseEnter);
//       button.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   useLayoutEffect(() => {
//     if (pathName == "/contact") {
//       gsap.set(".txt", {
//         color: "#0D40A2",
//       });
//     } else {
//       gsap.set(".txt", {
//         color: "#ffffff",
//       });
//     }
//   });

//   return (
//     <header ref={headerRef} className="w-full fixed top-0 left-0 z-[99] overflow-hidden">
//       <div className="w-[92vw] max-w-[90rem] mx-auto h-[5.5rem] flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <div className="flex items-center">
//             <img
//               src="/icons/logo.png"
//               alt="Indosol Exports"
//               className="w-[8rem] object-contain"
//             />
//           </div>
//         </Link>

//         {/* Nav Links */}
//         <nav className="hidden md:flex items-center gap-[3rem] w-full">
//           <Link
//             href="/"
//             className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
//           >
//             <p>Home</p>

//             {/* Underline */}
//             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/about"
//             className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
//           >
//             <p>About us</p>

//             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/products"
//             className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
//           >
//             <p>Products</p>

//             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/imports"
//             className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
//           >
//             <p>Imports</p>

//             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
//           </Link>

//           <Link
//             href="/exports"
//             className="navLink group relative text-[1.1rem] leading-[1.1rem] txt font-medium text-white"
//           >
//             <p>Exports</p>

//             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
//           </Link>
//         </nav>

//         {/* Button */}
//         <div className="flex items-center">
//           <Link href="/contact">
//             <button
//               ref={buttonRef}
//               className="flex items-center gap-[0.8rem] NavBTBN bg-white text-[#0D40A2] rounded-full pl-[1rem] pr-[0.3rem] py-[0.3rem] overflow-hidden"
//             >
//               <p>Contact Us</p>

//               <span
//                 ref={circleRef}
//                 className="w-[1.7rem] h-[1.7rem] text-[0.8rem] rounded-full BTNinnerCrl bg-[#0D40A2] flex items-center justify-center text-white"
//               >
//                 <FaArrowRight />
//               </span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuLinksRef = useRef([]);
  const openBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const pathName = usePathname();

  // ─────────────────────────────────────
  // SCROLL EFFECT
  // ─────────────────────────────────────
  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        gsap.to(header, {
          backgroundColor: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        });
        gsap.to(".navLink", { color: "#111827", duration: 0.3 });
        gsap.to(".NavBTBN", {
          backgroundColor: "#0D40A2",
          color: "#ffffff",
          duration: 0.3,
        });
        gsap.to(".BTNinnerCrl", {
          backgroundColor: "#ffffff",
          color: "#0D40A2",
          duration: 0.3,
        });
        gsap.to(".mobileIcon", { color: "#111827", duration: 0.3 });
      } else {
        gsap.to(header, {
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        });
        gsap.to(".navLink", { color: "#ffffff", duration: 0.3 });
        gsap.to(".NavBTBN", {
          backgroundColor: "#ffffff",
          color: "#0D40A2",
          duration: 0.3,
        });
        gsap.to(".BTNinnerCrl", {
          backgroundColor: "#0D40A2",
          color: "#ffffff",
          duration: 0.3,
        });
        gsap.to(".mobileIcon", { color: "#ffffff", duration: 0.3 });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─────────────────────────────────────
  // BUTTON HOVER (desktop)
  // ─────────────────────────────────────
  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    if (!button || !circle) return;

    const handleMouseEnter = () => {
      gsap.to(button, { scale: 1.03, duration: 0.3, ease: "power2.out" });
      gsap.to(circle, { rotate: 45, duration: 0.4, ease: "power3.out" });
    };
    const handleMouseLeave = () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(circle, { rotate: 0, duration: 0.4, ease: "power3.out" });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ─────────────────────────────────────
  // MOBILE MENU ANIMATION (enhanced)
  // ─────────────────────────────────────
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const overlay = overlayRef.current;
    const links = menuLinksRef.current.filter(Boolean);

    if (menuOpen) {
      // Make overlay visible and animate it in
      gsap.set(overlay, { display: "block" });
      gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });

      // Slide menu panel in from the right
      gsap.to(menu, { x: 0, duration: 0.45, ease: "power3.out" });

      // Stagger nav links: each slides in from right + fades in
      gsap.set(links, { x: 40, opacity: 0 });
      gsap.to(links, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.2,
      });

      // Animate close button spinning in
      if (closeBtnRef.current) {
        gsap.fromTo(
          closeBtnRef.current,
          { rotate: -90, opacity: 0, scale: 0.6 },
          { rotate: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)", delay: 0.15 }
        );
      }
    } else {
      // Fade overlay out
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => gsap.set(overlay, { display: "none" }),
      });

      // Links fade out quickly upward
      gsap.to(links, {
        x: 20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        stagger: 0.03,
      });

      // Slide menu panel out
      gsap.to(menu, { x: "100%", duration: 0.45, ease: "power3.inOut", delay: 0.05 });
    }
  }, [menuOpen]);

  // ─────────────────────────────────────
  // OPEN BUTTON PULSE ON TAP
  // ─────────────────────────────────────
  const handleOpenMenu = () => {
    if (openBtnRef.current) {
      gsap.fromTo(
        openBtnRef.current,
        { scale: 0.8 },
        { scale: 1, duration: 0.35, ease: "elastic.out(1.5, 0.5)" }
      );
    }
    setMenuOpen(true);
  };

  // ─────────────────────────────────────
  // CLOSE BUTTON BOUNCE ON TAP
  // ─────────────────────────────────────
  const handleCloseMenu = () => {
    if (closeBtnRef.current) {
      gsap.to(closeBtnRef.current, {
        rotate: 90,
        scale: 0.7,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
    setMenuOpen(false);
  };

  // ─────────────────────────────────────
  // LINK TAP FEEDBACK
  // ─────────────────────────────────────
  const handleLinkTap = (index) => {
    const link = menuLinksRef.current[index];
    if (!link) return;
    gsap.fromTo(
      link,
      { backgroundColor: "rgba(13,64,162,0.08)" },
      { backgroundColor: "rgba(13,64,162,0)", duration: 0.5, ease: "power2.out" }
    );
  };

  // ─────────────────────────────────────
  // CONTACT PAGE TEXT COLOR
  // ─────────────────────────────────────
  useLayoutEffect(() => {
    if (pathName === "/contact") {
      gsap.set(".txt", { color: "#0D40A2" });
      gsap.set(".mobileIcon", { color: "#0D40A2" });
    }
  }, [pathName]);

  return (
    <>
      {/* HEADER */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-[999] w-full transition-all duration-300"
      >
        <div className="w-[92vw] max-w-[90rem] mx-auto h-[5rem] md:h-[5.5rem] flex items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <img
              src="/icons/logo.png"
              alt="Indosol Exports"
              className="w-[7rem] md:w-[8rem] object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-[2.5rem]">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Imports", path: "/imports" },
              { name: "Exports", path: "/exports" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="navLink group relative text-[1rem] xl:text-[1.05rem] txt font-medium text-white"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* DESKTOP BUTTON */}
            <div className="hidden md:flex">
              <Link href="/contact">
                <button
                  ref={buttonRef}
                  className="NavBTBN flex items-center gap-[0.7rem] bg-white text-[#0D40A2] rounded-full pl-[1rem] pr-[0.3rem] py-[0.3rem] overflow-hidden"
                >
                  <p className="text-[0.95rem] font-medium">Contact Us</p>
                  <span
                    ref={circleRef}
                    className="BTNinnerCrl w-[1.8rem] h-[1.8rem] rounded-full bg-[#0D40A2] flex items-center justify-center text-white text-[0.75rem]"
                  >
                    <FaArrowRight />
                  </span>
                </button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              ref={openBtnRef}
              onClick={handleOpenMenu}
              className="lg:hidden mobileIcon text-white text-[1.4rem]"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP OVERLAY */}
      <div
        ref={overlayRef}
        onClick={handleCloseMenu}
        className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm hidden opacity-0"
        aria-hidden="true"
      />

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 z-[1000] w-full sm:w-[80%] md:w-[60%] h-screen bg-white translate-x-full shadow-2xl"
      >
        {/* TOP */}
        <div className="flex items-center justify-between px-6 h-[5rem] border-b border-[#ececec]">
         <Link href="/">  <img src="/icons/logo.png" alt="logo" className="w-[7rem]" /> </Link>
          <button
            ref={closeBtnRef}
            onClick={handleCloseMenu}
            className="text-[1.5rem] text-[#111827] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f3f4f6] transition-colors"
            aria-label="Close menu"
          >
            <FaXmark />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col px-6 py-10">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Imports", path: "/imports" },
            { name: "Exports", path: "/exports" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.path}
              ref={(el) => (menuLinksRef.current[index] = el)}
              onClick={() => {
                handleLinkTap(index);
                handleCloseMenu();
              }}
              className="flex items-center justify-between text-[1.15rem] font-medium text-[#111827] py-4 border-b border-[#f1f1f1] rounded-lg px-2 -mx-2"
            >
              <span>{item.name}</span>
              <FaArrowRight className="text-[#0D40A2] text-[0.85rem] opacity-50" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}