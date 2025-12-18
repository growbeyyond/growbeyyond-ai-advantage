import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Search, 
  MessageSquare, 
  BarChart3, 
  Mail, 
  Video,
  Globe,
  Palette,
  FileText,
  Users,
  TrendingUp,
  Download,
  Tv,
  BookOpen,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";
import { trackCTAClick } from "@/hooks/useConversionTracking";

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "Grow Beyyond",
      "url": "https://growbeyyond.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Package",
            "description": "Website creation, brand analysis, content creation, social media management, and SEO reporting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pro Package",
            "description": "Everything in Basic plus content production, SEO enhancement, ad campaigns, and priority support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Package",
            "description": "Complete digital transformation with comprehensive SEO, multi-platform ads, TV interviews, and Wikipedia page creation"
          }
        }
      ]
    }
  };

  const allServices = [
    { icon: Globe, title: "Website Creation", description: "Professional, conversion-optimized websites that represent your brand" },
    { icon: Palette, title: "Brand Analysis", description: "Deep dive into your brand positioning and market presence" },
    { icon: Video, title: "Content & Media Production", description: "High-quality content creation including videos, images, and graphics" },
    { icon: MessageSquare, title: "Social Media Management", description: "Complete social media strategy, posting, and engagement" },
    { icon: FileText, title: "Blog Creation", description: "SEO-optimized blog content that drives organic traffic" },
    { icon: Search, title: "SEO Optimization", description: "From basic SEO reports to comprehensive optimization strategies" },
    { icon: TrendingUp, title: "Ad Campaigns", description: "Multi-platform advertising across Google, Meta, and more" },
    { icon: Users, title: "Customer Engagement", description: "Build meaningful relationships with your audience" },
    { icon: BarChart3, title: "Performance Analytics", description: "Detailed insights and reporting on all marketing activities" },
    { icon: Tv, title: "TV Interviews & PR", description: "Media exposure through television and press coverage" },
    { icon: BookOpen, title: "Wikipedia Page Creation", description: "Establish authority with professionally created Wikipedia presence" },
    { icon: Settings, title: "Website Optimization", description: "Speed, performance, and conversion optimization" },
  ];

  const packages = [
    {
      name: "Basic",
      badge: "Starter",
      description: "Perfect for businesses starting their digital journey",
      features: [
        { name: "Website Creation", included: true },
        { name: "Brand Analysis", included: true },
        { name: "Content Creation", included: true },
        { name: "Social Media Management", included: true },
        { name: "Blog Creation", included: true },
        { name: "SEO Report", included: true },
        { name: "Customer Engagement", included: true },
        { name: "Performance Tracking", included: true },
        { name: "Bi-weekly Reporting", included: true },
        { name: "Ad Campaigns", included: false },
        { name: "Priority Support", included: false },
        { name: "TV Interview", included: false },
      ],
      color: "border-muted-foreground/30",
      popular: false
    },
    {
      name: "Pro",
      badge: "Most Popular",
      description: "Comprehensive marketing for growing businesses",
      features: [
        { name: "Website Creation", included: true },
        { name: "Brand Analysis", included: true },
        { name: "Content Production", included: true },
        { name: "Social Media Management", included: true },
        { name: "Blog Creation", included: true },
        { name: "SEO Enhancement", included: true },
        { name: "Ad Campaigns", included: true },
        { name: "Customer Interaction", included: true },
        { name: "Priority Support", included: true },
        { name: "Weekly Insights", included: false },
        { name: "TV Interview", included: false },
        { name: "Wikipedia Page", included: false },
      ],
      color: "border-primary",
      popular: true
    },
    {
      name: "Advanced",
      badge: "Enterprise",
      description: "Full-scale digital transformation for market leaders",
      features: [
        { name: "Website Creation", included: true },
        { name: "Brand Analysis", included: true },
        { name: "Content & Media Production", included: true },
        { name: "Social Media Management", included: true },
        { name: "Blog Creation", included: true },
        { name: "Comprehensive SEO", included: true },
        { name: "Multi-platform Ad Campaigns", included: true },
        { name: "TV Interview & PR", included: true },
        { name: "Wikipedia Page Creation", included: true },
        { name: "Website Optimization", included: true },
        { name: "Weekly Insights", included: true },
        { name: "Dedicated Account Manager", included: true },
      ],
      color: "border-secondary",
      popular: false
    }
  ];

  const handleContactClick = () => {
    trackCTAClick('Services Contact', 'Services Page');
    window.open('https://wa.me/918886435551?text=Hi! I want to know more about your marketing packages.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Digital Marketing Services & Packages"
        description="Comprehensive digital marketing services including website creation, social media management, SEO, ad campaigns, TV interviews, and Wikipedia page creation. Choose from Basic, Pro, or Advanced packages."
        keywords="digital marketing services Hyderabad, social media management, SEO services India, website creation, content marketing, ad campaigns, TV interview PR"
        canonicalUrl="https://growbeyyond.in/services"
        schema={serviceSchema}
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Brain className="w-4 h-4 mr-2" />
              PR & Digital Marketing Agency
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              Scale Your Business
              <br />
              <span className="gradient-text">"JUST LIKE THAT"</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Grow Beyyond combines the power of AI with innovative digital marketing techniques 
              to help businesses achieve organic reach and drive unprecedented growth.
            </p>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="/brochures/services-brochure.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </a>
            </Button>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                Best Packages
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Choose Your <span className="gradient-text">Growth Plan</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Flexible packages designed to meet your business needs at every stage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card 
                  key={index}
                  className={`glass-card relative overflow-hidden transition-all duration-500 hover:shadow-intense hover:-translate-y-2 ${pkg.color} ${pkg.popular ? 'scale-105 shadow-premium' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  )}
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Zap className="w-3 h-3 mr-1" />
                        {pkg.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className={pkg.popular ? 'pt-8' : ''}>
                    {!pkg.popular && (
                      <Badge variant="outline" className="w-fit mb-2">{pkg.badge}</Badge>
                    )}
                    <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className={`flex items-center text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}
                        >
                          <CheckCircle 
                            className={`w-4 h-4 mr-3 flex-shrink-0 ${feature.included ? 'text-primary' : 'text-muted-foreground/30'}`} 
                          />
                          <span className={!feature.included ? 'line-through' : ''}>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full group ${pkg.popular ? 'shadow-premium' : ''}`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      onClick={handleContactClick}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Complete Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing solutions to scale your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-premium"
                >
                  <CardContent className="p-6">
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Why Choose Us?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                At Grow Beyyond, <span className="gradient-text">Clients Come First</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine the power of AI with innovative digital marketing techniques to help 
                businesses achieve organic reach. We have a strong history of delivering successful 
                outcomes, ensuring personalized and effective marketing solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-4xl font-black text-primary mb-2">11+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-4xl font-black text-secondary mb-2">350%</div>
                  <div className="text-muted-foreground">Average Growth</div>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <div className="text-4xl font-black text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Grow Beyyond</span> Your Competition?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover which package will deliver 
              the biggest impact for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-premium" onClick={handleContactClick}>
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = 'tel:+918886435551'}>
                Call: +91 8886435551
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;