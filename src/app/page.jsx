import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import Hero from "@/components/home/Hero";
import LeadershipSection from "@/components/home/LeadershipSection";
import Map from "@/components/home/Map";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseIndosol from "@/components/home/WhyChooseIndosol";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <AboutSection/>
    <ProductsSection />
    <WhyChooseIndosol/>
    <Map/>
    <LeadershipSection />
    <FAQSection/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
