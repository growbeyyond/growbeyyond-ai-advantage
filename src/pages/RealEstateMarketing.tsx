import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  Building2, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Phone, 
  Mail,
  ArrowRight,
  Shield,
  Download,
  BarChart3,
  Megaphone,
  UserCheck,
  FileCheck,
  HeadphonesIcon,
  Award,
  Clock,
  MapPin
} from "lucide-react";
import { trackCTAClick } from "@/hooks/useConversionTracking";

const RealEstateMarketing = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Grow Beyyond"
    },
    "description": "Complete sales-driven marketing for real estate projects. Sell plots, apartments & villas faster with our risk-free pay-after-sale model.",
    "areaServed": "India",
    "serviceType": "Digital Marketing for Real Estate"
  };

  const services = [
    { icon: Target, title: "Buyer-Intent Ads", desc: "High-intent ads reaching verified property buyers actively searching" },
    { icon: MapPin, title: "Locality Targeting", desc: "Precision targeting for your project's specific location and nearby areas" },
    { icon: UserCheck, title: "Lead Verification", desc: "Every inquiry verified, filtered into hot, warm, and cold leads" },
    { icon: Users, title: "Competitor Targeting", desc: "Capture buyers researching similar projects in your area" },
    { icon: HeadphonesIcon, title: "Lead Nurturing", desc: "Systematic follow-ups to keep prospects engaged" },
    { icon: BarChart3, title: "Weekly Reports", desc: "Transparent reporting on leads, conversions, and ROI" },
    { icon: Megaphone, title: "Branding Support", desc: "Complete branding from Meta & Google ads to banners and reels" },
    { icon: FileCheck, title: "Sales Assistance", desc: "Help your sales team convert leads into site visits" },
    { icon: Award, title: "Closure Support", desc: "Support through the entire sales funnel to booking" },
  ];

  const handleContactClick = () => {
    trackCTAClick('Real Estate Contact', 'Real Estate Page');
    window.open('https://wa.me/919136376777?text=Hi! I want to discuss real estate marketing for my project.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Marketing - Sell Plots, Apartments & Villas Faster"
        description="Risk-free real estate marketing with pay-after-sale model. Sell open plots, apartments & villas faster with AI-powered buyer-intent ads and lead verification."
        keywords="real estate marketing Hyderabad, property marketing India, sell plots faster, apartment marketing, villa marketing, real estate digital marketing, property lead generation"
        canonicalUrl="https://growbeyyond.in/real-estate-marketing"
        schema={schema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-glow">
              <Building2 className="w-4 h-4 mr-2" />
              Real Estate Marketing
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">SELL SMARTER.</span>
              <br />
              <span className="text-foreground">PAY LATER.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sell your <span className="text-primary font-bold">Open Plots</span>, <span className="text-primary font-bold">Apartments</span> & <span className="text-primary font-bold">Villas</span> faster with our risk-free marketing model
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-intense group"
                onClick={handleContactClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 border-primary/70"
                onClick={() => {
                  trackCTAClick('Real Estate Call', 'Real Estate Page');
                  window.location.href = 'tel:+919136376777';
                }}
              >
                +91 9136376777
              </Button>
            </div>
            
            <div className="mb-12">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4"
                asChild
              >
                <a href="/brochures/real-estate-brochure.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Risk-Free Model</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Verified Leads Only</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Pay After Sale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Complete Project Marketing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Online + Offline</span> Marketing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Meta & Google ads to banners, reels, and branding – we handle complete project promotion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border-border/50 hover:shadow-premium transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Price Packages</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Pay less upfront, pay more only when you sell
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plots Package */}
            <Card className="glass-card border-primary/30 shadow-premium relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardHeader className="text-center pb-4">
                <Badge className="w-fit mx-auto mb-4">Open Land</Badge>
                <CardTitle className="text-2xl font-bold">Plots Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-black text-primary mb-2">₹250</div>
                  <div className="text-muted-foreground">per sq. yard (Total)</div>
                </div>
                <div className="space-y-4 text-left bg-background-muted rounded-lg p-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pay Now:</span>
                    <span className="font-bold text-foreground">₹60/sq.yd</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pay After Sale:</span>
                    <span className="font-bold text-primary">₹190/sq.yd</span>
                  </div>
                </div>
                <Button className="w-full" onClick={handleContactClick}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Apartments Package */}
            <Card className="glass-card border-secondary/50 shadow-intense relative overflow-hidden scale-105">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">Apartments & Villas</Badge>
                <CardTitle className="text-2xl font-bold">Flats Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-black text-secondary mb-2">₹100</div>
                  <div className="text-muted-foreground">per sq. ft (Total)</div>
                </div>
                <div className="space-y-4 text-left bg-background-muted rounded-lg p-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pay Now:</span>
                    <span className="font-bold text-foreground">₹30/sq.ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pay After Sale:</span>
                    <span className="font-bold text-secondary">₹70/sq.ft</span>
                  </div>
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90" onClick={handleContactClick}>
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="glass-card border-accent/30 shadow-premium relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary"></div>
              <CardHeader className="text-center pb-4">
                <Badge variant="outline" className="w-fit mx-auto mb-4 border-accent text-accent">Enterprise</Badge>
                <CardTitle className="text-2xl font-bold">Premium Builder</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-black text-accent mb-2">Custom</div>
                  <div className="text-muted-foreground">For 100+ units or multiple projects</div>
                </div>
                <div className="space-y-3 text-left mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">End-to-End Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Complete Branding Kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Priority Support</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10" onClick={handleContactClick}>
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center shadow-intense">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your <span className="gradient-text">Project Sales</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful real estate developers who've accelerated their sales with our risk-free marketing model
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 shadow-intense" onClick={handleContactClick}>
                <Phone className="w-5 h-5 mr-2" />
                +91 9136376777
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => window.location.href = 'mailto:directors@growbeyyond.in'}
              >
                <Mail className="w-5 h-5 mr-2" />
                directors@growbeyyond.in
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Also available: <span className="font-semibold">+91 8886435551</span>
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealEstateMarketing;
