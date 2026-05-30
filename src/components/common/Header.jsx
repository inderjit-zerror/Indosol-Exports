// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const headerRef = useRef(null);
//   const buttonRef = useRef(null);
//   const circleRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const overlayRef = useRef(null);
//   const menuLinksRef = useRef([]);
//   const openBtnRef = useRef(null);
//   const closeBtnRef = useRef(null);

//   const [menuOpen, setMenuOpen] = useState(false);

//   const pathName = usePathname();

//   // ─────────────────────────────────────
//   // SCROLL EFFECT
//   // ─────────────────────────────────────
//   useEffect(() => {
//     const header = headerRef.current;

//     const handleScroll = () => {
//       if (window.scrollY > 30) {
//         gsap.to(header, {
//           backgroundColor: "#ffffff",
//           duration: 0.3,
//           ease: "power2.out",
//           boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
//         });
//         gsap.to(".navLink", { color: "#111827", duration: 0.3 });
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
//         gsap.to(".mobileIcon", { color: "#111827", duration: 0.3 });
//       } else {
//         gsap.to(header, {
//           backgroundColor: "transparent",
//           duration: 0.3,
//           ease: "power2.out",
//           boxShadow: "0 0 0 rgba(0,0,0,0)",
//         });
//         gsap.to(".navLink", { color: "#ffffff", duration: 0.3 });
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
//         gsap.to(".mobileIcon", { color: "#ffffff", duration: 0.3 });
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ─────────────────────────────────────
//   // BUTTON HOVER (desktop)
//   // ─────────────────────────────────────
//   useEffect(() => {
//     const button = buttonRef.current;
//     const circle = circleRef.current;
//     if (!button || !circle) return;

//     const handleMouseEnter = () => {
//       gsap.to(button, { scale: 1.03, duration: 0.3, ease: "power2.out" });
//       gsap.to(circle, { rotate: 45, duration: 0.4, ease: "power3.out" });
//     };
//     const handleMouseLeave = () => {
//       gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
//       gsap.to(circle, { rotate: 0, duration: 0.4, ease: "power3.out" });
//     };

//     button.addEventListener("mouseenter", handleMouseEnter);
//     button.addEventListener("mouseleave", handleMouseLeave);
//     return () => {
//       button.removeEventListener("mouseenter", handleMouseEnter);
//       button.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   // ─────────────────────────────────────
//   // MOBILE MENU ANIMATION (enhanced)
//   // ─────────────────────────────────────
//   useEffect(() => {
//     const menu = mobileMenuRef.current;
//     const overlay = overlayRef.current;
//     const links = menuLinksRef.current.filter(Boolean);

//     if (menuOpen) {
//       // Make overlay visible and animate it in
//       gsap.set(overlay, { display: "block" });
//       gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });

//       // Slide menu panel in from the right
//       gsap.to(menu, { x: 0, duration: 0.45, ease: "power3.out" });

//       // Stagger nav links: each slides in from right + fades in
//       gsap.set(links, { x: 40, opacity: 0 });
//       gsap.to(links, {
//         x: 0,
//         opacity: 1,
//         duration: 0.4,
//         ease: "power3.out",
//         stagger: 0.06,
//         delay: 0.2,
//       });

//       // Animate close button spinning in
//       if (closeBtnRef.current) {
//         gsap.fromTo(
//           closeBtnRef.current,
//           { rotate: -90, opacity: 0, scale: 0.6 },
//           { rotate: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)", delay: 0.15 }
//         );
//       }
//     } else {
//       // Fade overlay out
//       gsap.to(overlay, {
//         opacity: 0,
//         duration: 0.3,
//         ease: "power2.in",
//         onComplete: () => gsap.set(overlay, { display: "none" }),
//       });

//       // Links fade out quickly upward
//       gsap.to(links, {
//         x: 20,
//         opacity: 0,
//         duration: 0.2,
//         ease: "power2.in",
//         stagger: 0.03,
//       });

//       // Slide menu panel out
//       gsap.to(menu, { x: "100%", duration: 0.45, ease: "power3.inOut", delay: 0.05 });
//     }
//   }, [menuOpen]);

//   // ─────────────────────────────────────
//   // OPEN BUTTON PULSE ON TAP
//   // ─────────────────────────────────────
//   const handleOpenMenu = () => {
//     if (openBtnRef.current) {
//       gsap.fromTo(
//         openBtnRef.current,
//         { scale: 0.8 },
//         { scale: 1, duration: 0.35, ease: "elastic.out(1.5, 0.5)" }
//       );
//     }
//     setMenuOpen(true);
//   };

//   // ─────────────────────────────────────
//   // CLOSE BUTTON BOUNCE ON TAP
//   // ─────────────────────────────────────
//   const handleCloseMenu = () => {
//     if (closeBtnRef.current) {
//       gsap.to(closeBtnRef.current, {
//         rotate: 90,
//         scale: 0.7,
//         opacity: 0,
//         duration: 0.25,
//         ease: "power2.in",
//       });
//     }
//     setMenuOpen(false);
//   };

//   // ─────────────────────────────────────
//   // LINK TAP FEEDBACK
//   // ─────────────────────────────────────
//   const handleLinkTap = (index) => {
//     const link = menuLinksRef.current[index];
//     if (!link) return;
//     gsap.fromTo(
//       link,
//       { backgroundColor: "rgba(13,64,162,0.08)" },
//       { backgroundColor: "rgba(13,64,162,0)", duration: 0.5, ease: "power2.out" }
//     );
//   };

//   // ─────────────────────────────────────
//   // CONTACT PAGE TEXT COLOR
//   // ─────────────────────────────────────
//   useLayoutEffect(() => {
//     if (pathName === "/contact") {
//       gsap.set(".txt", { color: "#0D40A2" });
//       gsap.set(".mobileIcon", { color: "#0D40A2" });
//     }
//   }, [pathName]);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         ref={headerRef}
//         className="fixed top-0 left-0 z-[999] w-full transition-all duration-300"
//       >
//         <div className="w-[92vw] max-w-[90rem] mx-auto h-[5rem] md:h-[5.5rem] flex items-center justify-between">
//           {/* LOGO */}
//           <Link href="/">
//             <img
//               src="/icons/logo.png"
//               alt="Indosol Exports"
//               className="w-[7rem] md:w-[8rem] object-contain"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex items-center gap-[2.5rem]">
//             {[
//               { name: "Home", path: "/" },
//               { name: "About Us", path: "/about" },
//               { name: "Products", path: "/products" },
//               { name: "Imports", path: "/imports" },
//               { name: "Exports", path: "/exports" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.path}
//                 className="navLink group relative text-[1rem] xl:text-[1.05rem] txt font-medium text-white"
//               >
//                 {item.name}
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-4">
//             {/* DESKTOP BUTTON */}
//             <div className="hidden md:flex">
//               <Link href="/contact">
//                 <button
//                   ref={buttonRef}
//                   className="NavBTBN flex items-center gap-[0.7rem] bg-white text-[#0D40A2] rounded-full pl-[1rem] pr-[0.3rem] py-[0.3rem] overflow-hidden"
//                 >
//                   <p className="text-[0.95rem] font-medium">Contact Us</p>
//                   <span
//                     ref={circleRef}
//                     className="BTNinnerCrl w-[1.8rem] h-[1.8rem] rounded-full bg-[#0D40A2] flex items-center justify-center text-white text-[0.75rem]"
//                   >
//                     <FaArrowRight />
//                   </span>
//                 </button>
//               </Link>
//             </div>

//             {/* MOBILE MENU BUTTON */}
//             <button
//               ref={openBtnRef}
//               onClick={handleOpenMenu}
//               className="lg:hidden mobileIcon text-white text-[1.4rem]"
//               aria-label="Open menu"
//             >
//               <FaBars />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* BACKDROP OVERLAY */}
//       <div
//         ref={overlayRef}
//         onClick={handleCloseMenu}
//         className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm hidden opacity-0"
//         aria-hidden="true"
//       />

//       {/* MOBILE MENU */}
//       <div
//         ref={mobileMenuRef}
//         className="fixed top-0 right-0 z-[1000] w-full sm:w-[80%] md:w-[60%] h-screen bg-white translate-x-full shadow-2xl"
//       >
//         {/* TOP */}
//         <div className="flex items-center justify-between px-6 h-[5rem] border-b border-[#ececec]">
//          <Link href="/">  <img src="/icons/logo.png" alt="logo" className="w-[7rem]" /> </Link>
//           <button
//             ref={closeBtnRef}
//             onClick={handleCloseMenu}
//             className="text-[1.5rem] text-[#111827] w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f3f4f6] transition-colors"
//             aria-label="Close menu"
//           >
//             <FaXmark />
//           </button>
//         </div>

//         {/* LINKS */}
//         <div className="flex flex-col px-6 py-10">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About Us", path: "/about" },
//             { name: "Products", path: "/products" },
//             { name: "Imports", path: "/imports" },
//             { name: "Exports", path: "/exports" },
//             { name: "Contact Us", path: "/contact" },
//           ].map((item, index) => (
//             <Link
//               key={index}
//               href={item.path}
//               ref={(el) => (menuLinksRef.current[index] = el)}
//               onClick={() => {
//                 handleLinkTap(index);
//                 handleCloseMenu();
//               }}
//               className="flex items-center justify-between text-[1.15rem] font-medium text-[#111827] py-4 border-b border-[#f1f1f1] rounded-lg px-2 -mx-2"
//             >
//               <span>{item.name}</span>
//               <FaArrowRight className="text-[#0D40A2] text-[0.85rem] opacity-50" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import {
  FiHome,
  FiInfo,
  FiPackage,
  FiDownload,
  FiUpload,
  FiMail,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home",     path: "/",         icon: FiHome },
  { name: "About Us", path: "/about",    icon: FiInfo },
  { name: "Products", path: "/products", icon: FiPackage },
  { name: "Imports",  path: "/imports",  icon: FiDownload },
  { name: "Exports",  path: "/exports",  icon: FiUpload },
];

export default function Header() {
  const headerRef  = useRef(null);
  const buttonRef  = useRef(null);
  const circleRef  = useRef(null);
  const sheetRef   = useRef(null);
  const overlayRef = useRef(null);
  const linkRefs   = useRef([]);
  const ctaBtnRef  = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  // ── SCROLL EFFECT ──────────────────────────────────────
  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 30) {
        gsap.to(header, { backgroundColor: "#ffffff", duration: 0.3, ease: "power2.out", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" });
        gsap.to(".navLink",    { color: "#111827", duration: 0.3 });
        gsap.to(".NavBTBN",    { backgroundColor: "#0D40A2", color: "#ffffff", duration: 0.3 });
        gsap.to(".BTNinnerCrl",{ backgroundColor: "#ffffff", color: "#0D40A2", duration: 0.3 });
        gsap.to(".mobileIcon", { color: "#111827", duration: 0.3 });
      } else {
        gsap.to(header, { backgroundColor: "transparent", duration: 0.3, ease: "power2.out", boxShadow: "0 0 0 rgba(0,0,0,0)" });
        gsap.to(".navLink",    { color: "#ffffff", duration: 0.3 });
        gsap.to(".NavBTBN",    { backgroundColor: "#ffffff", color: "#0D40A2", duration: 0.3 });
        gsap.to(".BTNinnerCrl",{ backgroundColor: "#0D40A2", color: "#ffffff", duration: 0.3 });
        gsap.to(".mobileIcon", { color: "#ffffff", duration: 0.3 });
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── DESKTOP BUTTON HOVER ───────────────────────────────
  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    if (!button || !circle) return;
    const enter = () => { gsap.to(button, { scale: 1.03, duration: 0.3, ease: "power2.out" }); gsap.to(circle, { rotate: 45, duration: 0.4, ease: "power3.out" }); };
    const leave = () => { gsap.to(button, { scale: 1,    duration: 0.3, ease: "power2.out" }); gsap.to(circle, { rotate: 0,  duration: 0.4, ease: "power3.out" }); };
    button.addEventListener("mouseenter", enter);
    button.addEventListener("mouseleave", leave);
    return () => { button.removeEventListener("mouseenter", enter); button.removeEventListener("mouseleave", leave); };
  }, []);

  // ── TOP SHEET ANIMATION ───────────────────────────────
  useEffect(() => {
    const sheet   = sheetRef.current;
    const overlay = overlayRef.current;
    const links   = linkRefs.current.filter(Boolean);
    const cta     = ctaBtnRef.current;

    if (menuOpen) {
      document.body.style.overflow = "hidden";

      // Overlay fade in
      gsap.set(overlay, { display: "block" });
      gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });

      // Sheet drops down from top
      gsap.fromTo(sheet,
        { y: "-100%", opacity: 0.6 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power4.out" }
      );

      // Nav tiles stagger down
      gsap.fromTo(links,
        { y: -20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out", stagger: 0.06, delay: 0.2 }
      );

      // CTA slides in last
      gsap.fromTo(cta,
        { y: -16, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2)", delay: 0.52 }
      );

    } else {
      document.body.style.overflow = "";

      // Links fade out upward
      gsap.to(links, { y: -12, opacity: 0, scale: 0.96, duration: 0.2, ease: "power2.in", stagger: 0.025 });
      gsap.to(cta,   { y: -10, opacity: 0, duration: 0.18, ease: "power2.in" });

      // Sheet slides back up
      gsap.to(sheet, { y: "-100%", opacity: 0.4, duration: 0.45, ease: "power3.inOut", delay: 0.08 });

      // Overlay fade out
      gsap.to(overlay, {
        opacity: 0, duration: 0.35, ease: "power2.in", delay: 0.1,
        onComplete: () => gsap.set(overlay, { display: "none" }),
      });
    }
  }, [menuOpen]);

  const openMenu  = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  // ── CONTACT PAGE COLOR ────────────────────────────────
  useLayoutEffect(() => {
    if (pathName === "/contact") {
      gsap.set(".txt",        { color: "#0D40A2" });
      gsap.set(".mobileIcon", { color: "#0D40A2" });
    }
  }, [pathName]);

  return (
    <>
      {/* ── HEADER ─────────────────────────────────── */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-[999] w-full transition-all duration-300"
      >
        <div className="w-[92vw] max-w-[90rem] mx-auto h-[5rem] md:h-[5.5rem] flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <img src="/icons/logo.png" alt="Indosol Exports" className="w-[7rem] md:w-[8rem] object-contain" />
          </Link>

          {/* Desktop Nav */}
         {/* Desktop Nav */}
<nav className="hidden lg:flex items-center gap-[2.5rem]">
  {NAV_LINKS.map((item, i) => {
    const isActive = pathName === item.path;
    return (
      <Link
        key={i}
        href={item.path}
        className={`navLink group relative text-[1rem] xl:text-[1.05rem] txt font-medium text-white`}
      >
        {item.name}
        {/* Active underline — always visible on active page */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-current transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  })}
</nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
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

            {/* Mobile hamburger */}
            <button
              onClick={openMenu}
              className="lg:hidden mobileIcon text-white text-[1.4rem]"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* ── OVERLAY ──────────────────────────────────── */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="fixed inset-0 z-[999] bg-black/50 hidden opacity-0"
        aria-hidden="true"
      />

      {/* ── TOP SHEET ────────────────────────────────── */}
      <div
        ref={sheetRef}
        className="lg:hidden fixed top-0 left-0 right-0 z-[1000] bg-white rounded-b-[2rem]  -translate-y-full shadow-2xl"
        style={{ maxHeight: "92dvh", overflowY: "auto" }}
      >
        {/* Sheet header — same height as the main header */}
        <div className="flex items-center justify-between px-6 h-[5rem] border-b border-[#f1f5f9]">
          <Link href="/" onClick={closeMenu}>
            <img src="/icons/logo.png" alt="logo" className="w-[7rem]" />
          </Link>
          <button
            onClick={closeMenu}
            className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#374151] text-[1.1rem] active:scale-95 transition-transform"
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        {/* Section label
        <p className="px-6 pt-5 pb-3 text-[0.7rem] font-semibold tracking-widest text-[#9ca3af] uppercase">
          Navigation
        </p> */}

        {/* Nav link tiles */}
        <div className="flex flex-col px-4 gap-1 max-sm:py-[5vh]">
          {NAV_LINKS.map((item, i) => {
            const Icon     = item.icon;
            const isActive = pathName === item.path;
            return (
              <Link
                key={i}
                href={item.path}
                ref={(el) => (linkRefs.current[i] = el)}
                onClick={closeMenu}
                className={`flex items-center gap-4 px-3 py-3.5 rounded-[0.9rem] transition-colors active:scale-[0.98] ${
                  isActive ? "bg-blue-50" : "hover:bg-[#f9fafb]"
                }`}
              >
                {/* Icon badge */}
                <div
                  className={`w-10 h-10 rounded-[0.7rem] flex items-center justify-center text-[1.05rem] flex-shrink-0 ${
                    isActive ? "bg-[#DBEAFE] text-[#1D4ED8]" : "bg-[#f3f4f6] text-[#6b7280]"
                  }`}
                >
                  <Icon />
                </div>

                {/* Label */}
                <span className={`flex-1 text-[1rem] font-medium ${isActive ? "text-[#111827]" : "text-[#374151]"}`}>
                  {item.name}
                </span>

                {/* Active badge / chevron */}
                {isActive ? (
                  <span className="text-[0.65rem] font-semibold bg-[#0D40A2] text-white px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                ) : (
                  <FaArrowRight className="text-[0.75rem] text-[#d1d5db]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="px-4 pt-5 pb-8" ref={ctaBtnRef}>
          <Link href="/contact" onClick={closeMenu}>
            <button className="w-full bg-[#0D40A2] text-white rounded-[1rem] py-4 flex items-center justify-between px-5 active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <FiMail className="text-white text-[1rem]" />
                </div>
                <span className="text-[1rem] font-semibold">Contact Us</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <FaArrowRight className="text-white text-[0.75rem]" />
              </div>
            </button>
          </Link>
        </div>

        {/* Bottom drag indicator */}
        <div className="flex justify-center pb-3">
          <div className="w-10 h-1 rounded-full bg-[#e5e7eb]" />
        </div>
      </div>
    </>
  );
}