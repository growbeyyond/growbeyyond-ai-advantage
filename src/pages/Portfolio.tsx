import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Target, Zap, Award } from "lucide-react";
import { realCaseStudies } from "@/data/realCaseStudies";
import { trackCTAClick } from "@/hooks/useConversionTracking";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";

const Portfolio = () => {
  const handleCTAClick = (buttonName: string) => {
    trackCTAClick(buttonName, 'Portfolio Page');
    window.open('https://wa.me/918886435551?text=Hi! I saw your portfolio and want to discuss my marketing needs.', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Portfolio & Case Studies"
        description="Real success stories from AI-powered marketing campaigns. See how we've helped healthcare professionals and businesses achieve 350%+ growth through intelligent automation and data-driven strategies."
        keywords="marketing case studies, AI marketing results, portfolio, success stories, healthcare marketing"
        canonicalUrl="https://growbeyyond.in/portfolio"
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Interactive Scroll-Morph Hero */}
        <ScrollMorphHero 
          title="Our Success Stories"
          subtitle="SCROLL TO EXPLORE"
          description="Discover our portfolio of successful AI-powered marketing campaigns that have transformed businesses across industries."
          images={realCaseStudies.map(study => study.imageUrl)}
        />

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-background via-background-secondary to-background-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Proven Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Results From <span className="gradient-text">AI-Powered Campaigns</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">11+</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">350%+</div>
                <div className="text-sm text-muted-foreground">Avg Growth Rate</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹50L+</div>
                <div className="text-sm text-muted-foreground">Client Revenue Impact</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">Health</div>
                <div className="text-sm text-muted-foreground">Sector Expertise</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realCaseStudies.map((study, index) => (
              <Card key={study.id} className={`glass-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group overflow-hidden border-primary/20`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs border-primary/20">
                      {study.industry}
                    </Badge>
                    {study.featured && (
                      <Badge variant="default" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardTitle className="text-xl mb-3 leading-tight text-primary">
                    {study.clientName}
                  </CardTitle>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        AI Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{result.metric}</span>
                            <span className="text-xs text-primary font-bold">{result.improvement}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            <span>Timeframe: {result.timeframe}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-gradient-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Client Testimonial
                    </h4>
                    <p className="text-sm text-muted-foreground italic mb-3">"{study.testimonial.quote}"</p>
                    <div className="text-xs">
                      <div className="font-semibold text-primary">{study.testimonial.author}</div>
                      <div className="text-muted-foreground">{study.testimonial.position}</div>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {study.websiteUrl !== "#" && (
                      <Button variant="outline" size="sm" className="flex-1">
                        Website
                      </Button>
                    )}
                    {study.instagramUrl && (
                      <Button variant="outline" size="sm" className="flex-1">
                        Instagram
                      </Button>
                    )}
                  </div>

                  <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardHeader>
              </Card>
            ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing portfolio of successful clients. Let's discuss how AI can 
              transform your marketing results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="shadow-premium"
                onClick={() => handleCTAClick('Start Your Success Story')}
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleCTAClick('Download Case Studies')}
              >
                Download Case Studies
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

export default Portfolio;