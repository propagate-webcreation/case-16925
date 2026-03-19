import type { Metadata } from "next";
import Header from "./components/shared/Header";
import HeroSection from "./components/home/HeroSection";
import WhySection from "./components/home/WhySection";
import ServicesSection from "./components/home/ServicesSection";
import FlowSection from "./components/home/FlowSection";
import CtaSection from "./components/home/CtaSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CompanyInfoSection from "./components/home/CompanyInfoSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "sumire for plus株式会社 | AIG損害保険正規代理店",
  description:
    "sumire for plus株式会社は、AIG損害保険の正規代理店として、法人向け損害保険を中心にお客様の事業リスクに最適な保険プランをご提案いたします。",
};

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <FlowSection />
      <CtaSection />
      <TestimonialsSection />
      <CompanyInfoSection />
      <ContactSection />
      <Footer />
    </>
  );
}
