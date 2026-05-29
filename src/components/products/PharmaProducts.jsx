"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function PharmaProducts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const contentRefs = useRef([]);

  const categories = [
    {
      title: "Active Pharmaceutical Ingredients (APIs)",
      products: [
        ["ParaCure", "Analgesic & Antipyretic", "Paracetamol 500 mg", "Tablet"],
        ["MediFlex", "Pain Relief", "Ibuprofen 400 mg", "Capsule"],
        ["HealMax", "Antibiotic", "Azithromycin 250 mg", "Tablet"],
        ["CefroMed", "Anti-Infective", "Cefixime 200 mg", "Tablet"],
        ["Respira", "Respiratory Care", "Montelukast 10 mg", "Tablet"],
      ],
    },

    {
      title: "Antibiotics & Anti-Infectives",
      products: [
        ["BioCure", "Antibiotic", "Amoxicillin 500 mg", "Capsule"],
        ["Infex", "Anti-Bacterial", "Ciprofloxacin 250 mg", "Tablet"],
        ["ZyMed", "Infection Control", "Metronidazole 400 mg", "Tablet"],
        ["DoxiHeal", "Broad Spectrum", "Doxycycline 100 mg", "Capsule"],
      ],
    },

    {
      title: "Anti-Allergic & Respiratory Products",
      products: [
        ["AllerFree", "Anti-Allergic", "Cetirizine 10 mg", "Tablet"],
        ["BreatheX", "Respiratory", "Salbutamol Syrup", "Syrup"],
        ["MontAir", "Asthma Care", "Montelukast 5 mg", "Tablet"],
        ["Respinol", "Cough Relief", "Ambroxol Syrup", "Liquid"],
      ],
    },

    {
      title: "Veterinary & Specialty APIs",
      products: [
        ["VetCare", "Veterinary", "Albendazole 600 mg", "Bolus"],
        ["AniCure", "Animal Health", "Ivermectin Injection", "Injection"],
        ["FarmMed", "Livestock Care", "Oxytetracycline", "Capsule"],
        ["PetHeal", "Pet Care", "Vitamin Supplement", "Tablet"],
      ],
    },

    {
      title: "Excipients & Chemicals",
      products: [
        ["ChemPure", "Chemical", "Microcrystalline Cellulose", "Powder"],
        ["ExciPro", "Excipient", "Magnesium Stearate", "Powder"],
        ["BindWell", "Binder", "Povidone K30", "Powder"],
        ["FlowChem", "Industrial", "Talc USP", "Powder"],
      ],
    },
  ];

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (!content) return;

      if (activeIndex === index) {
        gsap.to(content, {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "power3.inOut",
        });
      } else {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    });
  }, [activeIndex]);

  return (
    <section className="w-full bg-[#ffffff] py-[7rem] ">
      <div className="w-[90vw] mx-auto">

        {/* Heading */}
        <div className="text-center mb-[5rem]">
          <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] leading-[1.15]  TextDarkGray">
            Explore Our Pharmaceutical
            <br />
            Product Range
          </h1>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-[2rem]">
          {categories.map((category, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#F8F8F8] border border-[#dfdfdf] rounded-[1rem] overflow-hidden"
              >

                {/* Accordion Header */}
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className="w-full flex items-center justify-between px-[3rem] py-[3rem] text-left"
                >
                  <h2 className="text-[2rem] sm:text-[2.5rem] TextDarkGray leading-[1.3]">
                    {category.title}
                  </h2>

                  <div className="w-[2.5rem] h-[2.5rem] rounded-full border border-[#d6d6d6] flex items-center justify-center text-[1.2rem] text-[#2347a3] bg-white">
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden h-0 opacity-0"
                >
                  <div className="px-[3rem] pb-[3rem] max-sm:px-[0px]">

                    {/* Table Wrapper */}
                    <div className="border border-[#d9d9d9] rounded-[1.5rem] overflow-hidden bg-white">

                      {/* Table Head */}
                      <div className="grid grid-cols-4 bg-[#08256d] px-[2rem] py-[2rem]">
                        <h3 className="text-white text-[1.4rem] ">
                          Brand Name
                        </h3>

                        <h3 className="text-white text-[1.4rem] ">
                          Product Group
                        </h3>

                        <h3 className="text-white text-[1.4rem] ">
                          Drug & Strength
                        </h3>

                        <h3 className="text-white text-[1.4rem] ">
                          Dosage Form
                        </h3>
                      </div>

                      {/* Table Body */}
                      <div className="p-[1rem] flex flex-col gap-[1rem] bg-[#f7f7f7]">
                        {category.products.map((row, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-4 bg-white rounded-[0.8rem] px-[1.5rem] py-[1.8rem]"
                          >
                            <p className="text-[1.35rem] text-[#6b7280]">
                              {row[0]}
                            </p>

                            <p className="text-[1.35rem] text-[#6b7280]">
                              {row[1]}
                            </p>

                            <p className="text-[1.35rem] text-[#6b7280]">
                              {row[2]}
                            </p>

                            <p className="text-[1.35rem] text-[#6b7280]">
                              {row[3]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}