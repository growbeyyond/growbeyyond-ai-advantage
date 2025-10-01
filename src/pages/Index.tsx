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
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { useAuditPopup } from "@/hooks/useAuditPopup";

const Index = () => {
  const { isOpen, openAuditPopup, closeAuditPopup } = useAuditPopup();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grow Beyyond",
    "url": "https://growbeyyond.in",
    "logo": "https://growbeyyond.in/logo.png",
    "description": "AI-powered marketing agency specializing in healthcare and business growth through cutting-edge artificial intelligence and data-driven strategies.",
    "email": "directors@growbeyyond.in",
    "telephone": ["+91-8886435551", "+91-8886435558"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/growbeyyond",
      "https://twitter.com/growbeyyond"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8886435551",
      "contactType": "Customer Service",
      "email": "directors@growbeyyond.in",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Marketing Automation",
            "description": "Automated marketing campaigns powered by artificial intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Predictive Analytics",
            "description": "Data-driven insights and predictions for marketing success"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Segmentation",
            "description": "AI-powered customer segmentation and targeting"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI-Powered Marketing Agency"
        description="Transform your business with AI-powered marketing solutions. Grow Beyyond specializes in predictive analytics, automation, and data-driven strategies that deliver 200-400% ROI increases."
        keywords="AI marketing, digital marketing agency, marketing automation, predictive analytics, healthcare marketing, business growth"
        schema={schema}
      />
      
      <Navigation onOpenAuditPopup={openAuditPopup} />
      <main className="pt-16">
        <Hero onOpenAuditPopup={openAuditPopup} />
        <ServicesOverview />
        <ROICalculator onOpenAuditPopup={openAuditPopup} />
        <RealCaseStudies />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
      {isOpen && <WelcomePopup onClose={closeAuditPopup} />}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;