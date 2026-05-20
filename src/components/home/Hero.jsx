import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-svh overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Home/HomeHeroImgBG.webp"
          alt="Molecular structure background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark blue overlay gradient — complex rgba gradient, must stay inline */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,18,50,0.92) 0%, rgba(5,18,50,0.60) 45%, rgba(5,18,50,0.15) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full justify-center h-full pl-[5vw] pr-[5vw] pt-[7vw] pb-[7vw] ">
        {/* Heading */}
        <h1 className=" text-white leading-tight tracking-tight  mb-4">
          Global Pharma API,
          <br />
          Excipient &amp; Packaging
          <br />
          Specialists
        </h1>

        {/* Subtext */}
        <p className="text-white/75 font-light  max-w-[35vw] mb-8 mt-2">
          Your trusted Indian partner for compliant, high-quality pharmaceutical
          supplies delivered to markets worldwide.
        </p>

        {/* CTA Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-3 self-start rounded-full border border-white  font-semibold transition-all duration-300 bg-white text-blue-900  py-[0.8rem] pl-[1.5rem] pr-[1rem]"
        >
          <p> Explore All Products </p>
          <span className="inline-flex items-center justify-center rounded-full bg-blue-900 text-white transition-all duration-300 w-[3rem] h-[3rem] shrink-0">
            
          </span>
        </Link>
      </div>
    </section>
  );
}
