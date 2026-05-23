"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#001B57] text-white pt-[5rem] pb-[2rem] px-[5vw]">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] border-b border-white/10 pb-[3rem]">
        {/* Left Content */}
        <div className="flex flex-col gap-[2rem]">
          {/* Logo */}
          <div className="flex flex-col gap-[1rem]">
            <img
              src="/icons/logo.png"
              alt="Indosol Exports"
              className="w-[6rem] object-contain"
            />

            <h2 className="text-[2.2rem] leading-[2.8rem] font-semibold">
              Trusted Quality
              <br />
              Global Supply
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-[1rem]">
            <a
              href="#"
              className="w-[2rem] h-[2rem] rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#001B57] duration-300"
            >
              <FaInstagram className="text-[1rem]" />
            </a>

            <a
              href="#"
              className="w-[2rem] h-[2rem] rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#001B57] duration-300"
            >
              <FaFacebookF className="text-[1rem]" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="md:border-l md:border-white/10 md:pl-[3vw]">
          <h3 className="text-[1.5rem] font-semibold mb-[2rem]">
            Company
          </h3>

          <ul className="flex flex-col gap-[1.2rem] text-white/70 ">
            <li>
              <a href="#" className="hover:text-white duration-300">
               <p> Home </p>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white duration-300">
               <p> About us </p>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white duration-300">
              <p>  Products </p>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white duration-300">
               <p>  Imports </p>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white duration-300">
               <p>  Exports </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Utility */}
        <div className="md:border-l md:border-white/10 md:pl-[3vw]">
          <h3 className="text-[1.5rem] font-semibold mb-[2rem]">
            Utility
          </h3>

          <ul className="flex flex-col gap-[1.2rem] text-white/70 ">
            <li>
              <a href="#" className="hover:text-white duration-300">
               <p>  Contact </p>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white duration-300">
                <p>  Privacy & Policy </p>
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white duration-300">
               <p>  Terms & Condition </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:border-l md:border-white/10 md:pl-[3vw]">
          <h3 className="text-[1.5rem] font-semibold mb-[2rem]">
            Contact
          </h3>

          <div className="flex flex-col gap-[2rem] text-white/70 text-[1.15rem] leading-[2rem]">
            {/* Phone */}
            <div className="flex gap-[1rem]">
              <FaPhoneAlt className="mt-[0.4rem] text-[1rem] text-white" />

              <div className="flex flex-col">
                <a href="tel:+912222878889">
                  <p> 
                  +91-22-2287 8889/ 90/ 91
                  </p>
                </a>

                <a href="tel:+919819388509">
                  <p> 
                  +91 98193 88509
                  </p>
                </a>

                <a href="tel:+919821164770">
                  <p> 
                  +91 98211 64770
                  </p>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-[1rem]">
              <FaMapMarkerAlt className="mt-[0.4rem]  text-white" />

              <p>
                804, 8th floor, arcadia building,
                <br />
                195 ncpa marg, nariman point,
                <br />
                mumbai - 400 021, india
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-[2rem] text-center text-white/60 text-[1.1rem]">
        © All Right Reserved. 2026. Indosol Exports
      </div>
    </footer>
  );
}