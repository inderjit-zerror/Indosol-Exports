import ContactSection from "@/components/contact/ContactSection";
import { createPageMetadata } from "@/lib/seo";

const ContactPage = () => {
  return (
    <>
      <ContactSection />
    </>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
