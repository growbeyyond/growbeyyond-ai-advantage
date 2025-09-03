import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ROICalculator from "@/components/ROICalculator";
import RealCaseStudies from "@/components/RealCaseStudies";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import WelcomePopup from "@/components/WelcomePopup";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useAuditPopup } from "@/hooks/useAuditPopup";

const Index = () => {
  const { isOpen, openAuditPopup, closeAuditPopup } = useAuditPopup();

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenAuditPopup={openAuditPopup} />
      <main className="pt-16">
        <Hero onOpenAuditPopup={openAuditPopup} />
        <ServicesOverview />
        <ROICalculator onOpenAuditPopup={openAuditPopup} />
        <RealCaseStudies />
        <Testimonials />
        <ContactSection />
      </main>
      <ChatBot />
      {isOpen && <WelcomePopup onClose={closeAuditPopup} />}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;