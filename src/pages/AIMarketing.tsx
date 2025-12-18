import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Eye,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Bot,
  Database
} from "lucide-react";
import { trackCTAClick } from "@/hooks/useConversionTracking";

const AIMarketing = () => {
  const aiCapabilities = [
    {
      icon: Brain,
      title: "Machine Learning Optimization",
      description: "Our algorithms continuously learn from campaign data to improve performance automatically",
      benefit: "300% better ROI through intelligent optimization"
    },
    {
      icon: Target,
      title: "Predictive Audience Targeting",
      description: "AI identifies your ideal customers before they even know they need your product",
      benefit: "85% reduction in customer acquisition costs"
    },
    {
      icon: Eye,
      title: "Real-Time Performance Analysis",
      description: "Instant insights and automatic adjustments keep your campaigns performing at peak",
      benefit: "24/7 optimization without human intervention"
    },
    {
      icon: MessageCircle,
      title: "Conversational AI",
      description: "Smart chatbots and voice assistants that understand context and drive conversions",
      benefit: "60% increase in lead qualification rate"
    },
    {
      icon: Database,
      title: "Unified Data Intelligence",
      description: "AI connects all your marketing data sources for complete customer journey insights",
      benefit: "360° view of customer behavior patterns"
    },
    {
      icon: Bot,
      title: "Automated Campaign Management",
      description: "Let AI handle bid management, budget allocation, and creative optimization",
      benefit: "75% time savings on campaign management"
    }
  ];

  const aiTools = [
    "GPT-4 & Advanced Language Models",
    "Computer Vision for Creative Analysis",
    "Predictive Analytics Platform",
    "Natural Language Processing",
    "Recommendation Engines",
    "Sentiment Analysis Tools",
    "Attribution Modeling AI",
    "Dynamic Pricing Algorithms"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI Marketing Solutions"
        description="Harness cutting-edge AI technology for marketing automation, optimization, and acceleration. Our proprietary AI systems deliver results that traditional marketing cannot achieve."
        keywords="AI marketing, artificial intelligence marketing, machine learning marketing, marketing automation, predictive targeting"
        canonicalUrl="https://growbeyyond.in/ai-marketing"
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Generation AI Technology
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Future of Marketing is
              <br />
              <span className="gradient-text">Artificially Intelligent</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Harness cutting-edge AI technology to automate, optimize, and accelerate your marketing 
              like never before. Our proprietary AI systems deliver results that human marketers 
              alone simply cannot achieve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-intense"
                onClick={() => {
                  trackCTAClick('See AI in Action', 'AI Marketing Hero');
                  window.open('https://wa.me/918886435551?text=Hi! I want to see AI Marketing in action.', '_blank');
                }}
              >
                See AI in Action
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => {
                  trackCTAClick('Get AI Audit', 'AI Marketing Hero');
                  window.open('https://wa.me/918886435551?text=Hi! I would like to get a free AI Marketing Audit.', '_blank');
                }}
              >
                Get AI Audit
              </Button>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">AI-Powered</span> Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the power of artificial intelligence across every aspect of your marketing strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-intense hover:-translate-y-2 group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <capability.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="text-sm font-medium text-secondary">
                      💡 {capability.benefit}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gradient-text">50+ AI Tools</span>
                  <br />
                  in Our Arsenal
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We leverage the latest and most powerful AI technologies to give your marketing 
                  an unfair advantage. Our toolkit is constantly evolving with cutting-edge innovations.
                </p>
                <Button 
                  size="lg" 
                  className="shadow-premium group"
                  onClick={() => {
                    trackCTAClick('Explore AI Stack', 'AI Marketing Tools');
                    window.open('https://wa.me/918886435551?text=Hi! I want to learn more about your AI marketing tools.', '_blank');
                  }}
                >
                  Explore Our AI Stack
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiTools.map((tool, index) => (
                  <div 
                    key={index}
                    className="glass-card p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 text-primary mr-3" />
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real <span className="gradient-text">AI Results</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our AI technology delivers measurable improvements across key marketing metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">340%</div>
                <div className="text-muted-foreground">Conversion Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">85%</div>
                <div className="text-muted-foreground">Reduction in CAC</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Automated Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5x</div>
                <div className="text-muted-foreground">Faster Campaign Setup</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience <span className="gradient-text">AI Marketing</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't get left behind. Join the AI marketing revolution and see what's possible 
              when cutting-edge technology meets expert strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="shadow-premium"
                onClick={() => {
                  trackCTAClick('Start AI Transformation', 'AI Marketing CTA');
                  window.open('https://wa.me/918886435551?text=Hi! I want to start my AI marketing transformation.', '_blank');
                }}
              >
                Start Your AI Transformation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  trackCTAClick('Book AI Demo', 'AI Marketing CTA');
                  window.open('https://wa.me/918886435551?text=Hi! I would like to book an AI marketing demo.', '_blank');
                }}
              >
                Book AI Demo
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

export default AIMarketing;