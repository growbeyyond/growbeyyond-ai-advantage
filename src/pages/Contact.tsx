import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Calendar,
  Zap
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Speak directly with our AI marketing experts",
      details: "+91 8886435551, +91 8886435558",
      availability: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get detailed responses within 2 hours",
      details: "directors@growbeyyond.in",
      availability: "24/7 response guarantee"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support for quick questions",
      details: "Chat widget on website",
      availability: "Mon-Fri, 8AM-8PM IST"
    },
    {
      icon: Calendar,
      title: "Video Call",
      description: "Schedule a personalized consultation",
      details: "Book via calendar link",
      availability: "Flexible scheduling"
    }
  ];

  const officeLocations = [
    {
      city: "Hyderabad",
      address: "Grow Beyyond Headquarters",
      state: "Telangana, India",
      type: "Headquarters"
    }
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
              <Zap className="w-4 h-4 mr-2" />
              Let's Start Your Growth Journey
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span>
              <br />
              Your Marketing?
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Get in touch with our AI marketing experts and discover how we can help 
              your business achieve extraordinary growth through cutting-edge technology.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-2xl font-bold gradient-text mb-2">&lt; 2hrs</div>
                <div className="text-muted-foreground text-sm">Response Time</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-2xl font-bold gradient-text mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Multiple Ways</span> to Connect
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the communication method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-premium hover:-translate-y-1 text-center group cursor-pointer"
                >
                  <CardContent className="p-8">
                    <method.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <div className="text-primary font-medium mb-2">{method.details}</div>
                    <div className="text-xs text-muted-foreground">{method.availability}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <ContactSection />

        {/* Office Locations */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Office Locations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit us in person or connect with our local teams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {officeLocations.map((office, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border/50 hover:shadow-premium transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                    <Badge variant="outline" className="mb-4">{office.type}</Badge>
                    <h3 className="text-xl font-semibold mb-3">{office.city}</h3>
                    <div className="text-muted-foreground space-y-1">
                      <div>{office.address}</div>
                      <div>{office.state}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Frequently Asked</span> Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glass-card border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold mb-3">How quickly can we get started?</h3>
                    <p className="text-muted-foreground text-sm">
                      We can begin your AI audit within 24 hours of contact and have initial 
                      results within a week.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold mb-3">What's included in the free audit?</h3>
                    <p className="text-muted-foreground text-sm">
                      Complete analysis of your current marketing, AI opportunity assessment, 
                      and a custom growth strategy presentation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold mb-3">Do you work with small businesses?</h3>
                    <p className="text-muted-foreground text-sm">
                      Absolutely! We have solutions for businesses of all sizes, from startups 
                      to enterprise companies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold mb-3">What kind of results can we expect?</h3>
                    <p className="text-muted-foreground text-sm">
                      Our clients typically see 200-400% increases in conversion rates and 
                      40-60% reductions in customer acquisition costs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatBot />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;