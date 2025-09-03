import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, DollarSign, Users, Calendar, Target, BarChart3, Zap, Award, CheckCircle } from "lucide-react";
import { realCaseStudies, caseStudyStats } from "@/data/caseStudies";

const Portfolio = () => {

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{caseStudyStats.totalRevenue}</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{caseStudyStats.avgGrowth}</div>
                <div className="text-sm text-muted-foreground">Avg Growth Rate</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{caseStudyStats.clientsSaved}</div>
                <div className="text-sm text-muted-foreground">Client Savings</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{caseStudyStats.companiesTransformed}</div>
                <div className="text-sm text-muted-foreground">Companies Transformed</div>
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
              <Card key={index} className={`glass-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group overflow-hidden border-primary/20`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs border-primary/20">
                      {study.industry}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {study.timeline}
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-3 leading-tight text-primary">
                    {study.title}
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
                      Detailed Results
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">{metric.label}</span>
                            <span className="text-xs text-primary font-bold">+{metric.improvement}</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Before: {metric.before}</span>
                            <span>After: {metric.after}</span>
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
                    <p className="text-sm text-muted-foreground italic mb-3">"{study.testimonial}"</p>
                    <div className="text-xs">
                      <div className="font-semibold text-primary">{study.clientName}</div>
                      <div className="text-muted-foreground">{study.clientRole}</div>
                    </div>
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
      <ChatBot />
      <WhatsAppFloat />
    </div>
  );
};

export default Portfolio;