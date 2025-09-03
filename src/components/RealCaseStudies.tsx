import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp, Users, Award, Globe } from "lucide-react";
import { realCaseStudies } from "@/data/realCaseStudies";

const RealCaseStudies = () => {
  const featuredCases = realCaseStudies.filter(study => study.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium shadow-glow">
            <Award className="w-4 h-4 mr-2" />
            Real Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-primary">Proven Results</span>
            <br />
            <span className="text-foreground">for Real Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These aren't just numbers - they're real transformations of businesses 
            we've helped grow using AI-powered marketing strategies.
          </p>
        </div>

        {/* Featured Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredCases.map((study, index) => (
            <Card key={study.id} className="glass-card p-8 hover:shadow-intense transition-all duration-300 group hover:scale-105">
              {/* Industry Badge */}
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                {study.industry}
              </Badge>

              {/* Client Name */}
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {study.clientName}
              </h3>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Challenge</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {study.challenge.length > 120 ? `${study.challenge.substring(0, 120)}...` : study.challenge}
                </p>
              </div>

              {/* Key Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Key Results</h4>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <div key={idx} className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-2xl font-black text-primary mb-1">{result.improvement}</div>
                      <div className="text-xs text-muted-foreground">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {study.services.slice(0, 2).map((service, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                  {study.services.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{study.services.length - 2} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                {study.websiteUrl && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(study.websiteUrl, '_blank')}
                    className="text-xs group/btn"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Website
                  </Button>
                )}
                {study.instagramUrl && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => window.open(study.instagramUrl, '_blank')}
                    className="text-xs text-primary hover:text-primary/80"
                  >
                    Instagram
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed Case Study - Featured */}
        <div className="mb-16">
          <Card className="glass-card p-12 shadow-premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 px-3 py-1">
                  🏆 Featured Success Story
                </Badge>
                <h3 className="text-3xl font-black mb-4 text-primary">
                  {featuredCases[0]?.clientName}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredCases[0]?.solution}
                </p>

                {/* Detailed Results */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {featuredCases[0]?.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-black text-primary mb-2">{result.improvement}</div>
                      <div className="text-sm font-semibold text-foreground mb-1">{result.metric}</div>
                      <div className="text-xs text-muted-foreground">in {result.timeframe}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground mb-6">
                  "{featuredCases[0]?.testimonial.quote}"
                  <footer className="text-sm font-semibold text-foreground mt-2">
                    - {featuredCases[0]?.testimonial.author}, {featuredCases[0]?.testimonial.position}
                  </footer>
                </blockquote>
              </div>

              <div className="space-y-6">
                {/* Impact Stats */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">Revenue Growth</div>
                      <div className="text-sm text-muted-foreground">Average 300% increase across all clients</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">Patient/Client Acquisition</div>
                      <div className="text-sm text-muted-foreground">250% average improvement in new clients</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">Digital Presence</div>
                      <div className="text-sm text-muted-foreground">400% boost in online visibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join these successful businesses and see how AI-powered marketing can transform your growth trajectory.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 shadow-intense group">
            Start Your Success Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealCaseStudies;