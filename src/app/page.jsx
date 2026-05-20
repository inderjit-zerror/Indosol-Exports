import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import WhyChooseIndosol from "@/components/home/WhyChooseIndosol";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <AboutSection/>
    <WhyChooseIndosol/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
