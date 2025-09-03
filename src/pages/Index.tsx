import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import RealCaseStudies from "@/components/RealCaseStudies";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import WelcomePopup from "@/components/WelcomePopup";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ServicesOverview />
        <RealCaseStudies />
        <Testimonials />
        <ContactSection />
      </main>
      <ChatBot />
      <WelcomePopup />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;