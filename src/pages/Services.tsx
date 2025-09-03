import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
  Target,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Transform your marketing with AI-powered strategies tailored to your business goals.",
      features: ["Market Analysis", "Competitor Intelligence", "Growth Forecasting", "ROI Optimization"],
      pricing: "Contact for Quote",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Smart SEO & SEM",
      description: "Dominate search results with AI-optimized campaigns that adapt in real-time.",
      features: ["Keyword Intelligence", "Content Optimization", "Technical SEO", "Paid Search Management"],
      pricing: "Contact for Quote",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Social Media Automation",
      description: "Engage your audience with AI-driven content and community management.",
      features: ["Content Creation", "Posting Automation", "Engagement Analytics", "Influencer Matching"],
      pricing: "Contact for Quote",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with advanced forecasting and insights.",
      features: ["Customer Journey Mapping", "Conversion Prediction", "Trend Analysis", "Performance Forecasting"],
      pricing: "Contact for Quote",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Smart Email Marketing",
      description: "Personalized email campaigns that convert with AI-powered optimization.",
      features: ["Dynamic Segmentation", "Content Personalization", "Send Time Optimization", "A/B Testing"],
      pricing: "Contact for Quote",
      color: "text-secondary"
    },
    {
      icon: Video,
      title: "AI Content Creation",
      description: "Scale your content production with AI-generated videos, images, and copy.",
      features: ["Video Generation", "Image Creation", "Copy Writing", "Brand Voice Training"],
      pricing: "Contact for Quote",
      color: "text-accent"
    }
  ];

  const additionalServices = [
    { icon: Target, title: "Conversion Rate Optimization", description: "AI-powered CRO to maximize your website performance" },
    { icon: Zap, title: "Marketing Automation", description: "End-to-end automation workflows that nurture leads" }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Complete AI Marketing Solutions
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Revolutionary</span> Marketing
              <br />
              Services That Deliver Results
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              From strategy to execution, our AI-powered services transform every aspect of your 
              digital marketing to drive unprecedented growth and ROI.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-intense hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <service.icon className={`w-10 h-10 ${service.color}`} />
                      <Badge variant="outline">{service.pricing}</Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Additional</span> Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expand your marketing arsenal with our specialized AI-driven services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="glass-card border-border/50 hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Supercharge</span> Your Marketing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover which AI marketing services will deliver 
              the biggest impact for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-premium">
                Get Free Strategy Session
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ChatBot />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;