import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import ServicesSection from "@/components/about/ServicesSection";
import StatsSection from "@/components/about/StatsSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import { createPageMetadata } from "@/lib/seo";

const AboutPage = () => {
  return (
    <div>
    <AboutHero/>
    <AboutSection/>
    <StatsSection/>
    <MissionVisionSection/>
    <ServicesSection />
    <LeadershipSection />
    <CertificationsSection />
    </div>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
