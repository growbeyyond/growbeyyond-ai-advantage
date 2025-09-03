import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  ArrowRight
} from "lucide-react";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge: "Low conversion rates and high customer acquisition costs",
      solution: "Implemented AI-powered lead scoring and personalized email campaigns",
      results: {
        conversion: "+340%",
        cac: "-65%",
        revenue: "$2.4M"
      },
      timeline: "6 months",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "GreenTech Startup",
      industry: "Clean Energy",
      challenge: "Zero brand awareness in competitive market",
      solution: "AI content strategy with predictive audience targeting",
      results: {
        conversion: "+580%",
        cac: "-45%",
        revenue: "$1.8M"
      },
      timeline: "8 months",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "InnovateCorp",
      industry: "E-commerce",
      challenge: "Declining ROAS and poor attribution tracking",
      solution: "Multi-touch attribution AI and automated bidding optimization",
      results: {
        conversion: "+225%",
        cac: "-38%",
        revenue: "$5.2M"
      },
      timeline: "4 months",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "HealthTech Pro",
      industry: "Healthcare",
      challenge: "Complex sales cycle and low lead quality",
      solution: "AI-powered lead nurturing and predictive analytics",
      results: {
        conversion: "+450%",
        cac: "-55%",
        revenue: "$3.1M"
      },
      timeline: "10 months",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      title: "RetailMax",
      industry: "Retail",
      challenge: "Seasonal fluctuations and inventory management",
      solution: "Demand forecasting AI and dynamic pricing optimization",
      results: {
        conversion: "+190%",
        cac: "-28%",
        revenue: "$4.7M"
      },
      timeline: "12 months",
      image: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      title: "FinanceForward",
      industry: "Fintech",
      challenge: "Strict compliance requirements and trust building",
      solution: "Compliant AI content and trust-building automation",
      results: {
        conversion: "+280%",
        cac: "-42%",
        revenue: "$6.3M"
      },
      timeline: "9 months",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600"
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Success Stories
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results From
              <br />
              <span className="gradient-text">AI-Powered Campaigns</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses across industries achieve extraordinary growth 
              through our cutting-edge AI marketing strategies and implementations.
            </p>

            {/* Overall Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">$24M+</div>
                <div className="text-muted-foreground text-sm">Revenue Generated</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">340%</div>
                <div className="text-muted-foreground text-sm">Avg Conversion Increase</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-muted-foreground text-sm">Campaigns Launched</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Featured</span> Case Studies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dive into how our AI marketing solutions transformed these businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-intense hover:-translate-y-2 group"
                >
                  <CardContent className="p-0">
                    {/* Image/Header */}
                    <div className={`h-48 ${study.image} relative overflow-hidden rounded-t-lg`}>
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="text-xs">
                          {study.industry}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{study.title}</h3>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center text-white text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {study.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Challenge & Solution */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">CHALLENGE</h4>
                        <p className="text-sm mb-4">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">SOLUTION</h4>
                        <p className="text-sm">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                          <div className="text-lg font-bold text-primary">{study.results.conversion}</div>
                          <div className="text-xs text-muted-foreground">Conversions</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="w-4 h-4 text-secondary" />
                          </div>
                          <div className="text-lg font-bold text-secondary">{study.results.cac}</div>
                          <div className="text-xs text-muted-foreground">CAC</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <DollarSign className="w-4 h-4 text-accent" />
                          </div>
                          <div className="text-lg font-bold text-accent">{study.results.revenue}</div>
                          <div className="text-xs text-muted-foreground">Revenue</div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full group">
                        View Full Case Study
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing portfolio of successful clients. Let's discuss how AI can 
              transform your marketing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-premium">
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Download Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;