export default function ImportCapabilities() {
  const cards = [
    {
      title: "APIs & Bulk Drugs",
      desc: "Sourcing high-quality pharmaceutical ingredients through trusted partnerships with certified and globally recognized manufacturers committed to quality and reliability.",
      icon: "⌘",
    },
    {
      title: "Excipients & Chemicals",
      desc: "Providing excipients, intermediates, and tailor-made chemicals for medicine production requirements.",
      icon: "⚗",
    },
    {
      title: "Records & Adherence",
      desc: "Supplying COA, MSDS, GMP documents, and comprehensive import documentation aid.",
      icon: "▣",
    },
    {
      title: "Global Logistics",
      desc: "Streamlined freight arrangement, package structuring, pallet organization, and worldwide logistics administration.",
      icon: "◉",
    },
    {
      title: "Vendor Management",
      desc: "Connecting global buyers with trusted manufacturing partners through efficient vendor and factory coordination.",
      icon: "◌",
    },
    {
      title: "Supplier Coordination",
      desc: "Ensuring reliable procurement, timely global deliveries, and competitive sourcing solutions through trusted supplier networks and efficient supply chain management.",
      icon: "⌁",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-[6rem]">
      <div className="w-[90vw] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-[3.5rem] leading-[4rem]  text-[#2f3a4d] max-w-[50rem]">
            Comprehensive Import
            <br />
            capabilities
          </h1>

          <div className="w-full h-[0.08rem] bg-[#d9d9d9] mt-[4rem]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2rem] mt-[4rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-[1.5rem] border border-[#e5e5e5] bg-white text-[#2f3a4d] p-[2.2rem] min-h-[20rem] flex flex-col justify-between transition-all duration-500 cursor-pointer hover:bg-[#0f43b9] hover:text-white"
            >
              {/* Icon */}
              <div className="w-[4.5rem] h-[4.5rem] rounded-[1rem] flex items-center justify-center text-[1.8rem] transition-all duration-500 bg-[#f3f3f3] text-[#ff4d2d] group-hover:bg-[#2552c7] group-hover:text-white">
                {card.icon}
              </div>

              {/* Content */}
              <div className="mt-[3rem]">
                <h3 className="text-[2rem] leading-[2.5rem] transition-all duration-500 text-[#2f3a4d] group-hover:text-white">
                  {card.title}
                </h3>

                <p className="mt-[1.5rem] text-[1.2rem] leading-[2.2rem] transition-all duration-500 text-[#6b7280] group-hover:text-[#dbe4ff]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
