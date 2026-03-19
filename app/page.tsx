import HeroSection from "./components/home/HeroSection";
import WhySection from "./components/home/WhySection";
import ServicesSection from "./components/home/ServicesSection";
import FlowSection from "./components/home/FlowSection";
import CtaSection from "./components/home/CtaSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import RepresentativeSection from "./components/home/RepresentativeSection";
import CompanyInfoSection from "./components/home/CompanyInfoSection";
import ContactSection from "./components/home/ContactSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <FlowSection />
      <CtaSection />
      <TestimonialsSection />
      <RepresentativeSection />
      <CompanyInfoSection />
      <ContactSection />
    </>
  );
}
