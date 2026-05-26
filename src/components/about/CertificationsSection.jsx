export default function CertificationsSection() {
  const certifications = [
    {
      id: "01",
      title: "ISO 9001:2015 Standards",
      description:
        "ISO 9001:2015 certification affirms our devotion to consistent quality management, operational superiority, and sustained progress within our pharmaceutical sourcing and export operations.",
      image:
        "/images/about/Sec.jpg",
    },
    {
      id: "02",
      title: "GMP Documentation Support",
      description:
        "Thorough GMP documentation backing facilitating compliance with regulations, product openness, and frictionless global import consents.",
      image:
        "/images/about/Sec.jpg",
    },
    {
      id: "03",
      title: "COA & MSDS Availability",
      description:
        "Providing COA and MSDS documentation to ensure product quality, safety compliance, and seamless global trade operations.",
      image:
        "/images/about/Sec.jpg",
    },
    {
      id: "04",
      title: "International Export Compliance",
      description:
        "Ensuring smooth global shipments through reliable export documentation and international regulatory compliance support.",
      image:
        "/images/about/Sec.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-[6rem]">
      <div className="w-[90vw] max-w-[90rem] mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center mb-[5rem]">
          <h1 className="text-[3rem] leading-[1.2]  text-[#374151] text-center">
            Reliable Quality Backed by Certifications
          </h1>
        </div>

        {/* Certification List */}
        <div className="w-full flex flex-col">
          {certifications.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[8vw_5vw_20vw_1fr] gap-[2vw] items-start py-[3rem] border-b border-[#dddddd] ${
                index === certifications.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Image */}
              <div className="w-[5vw] h-[7vw] min-w-[4rem] min-h-[5rem] rounded-[0.5rem] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Number */}
              <div>
                <p className="  TextDarkGray">
                  {item.id}
                </p>
              </div>

              {/* Title */}
              <div>
                <h2 className=" TextDarkGray">
                  {item.title}
                </h2>
              </div>

              {/* Description */}
              <div>
                <p className="  TextLiteGray w-full">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}