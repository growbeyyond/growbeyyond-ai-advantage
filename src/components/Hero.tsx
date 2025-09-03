import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Zap, Brain, Bot, Cpu, Network } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-6s" }}></div>
        
        {/* Floating AI Icons */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Brain className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: "-2s" }}>
          <Bot className="w-10 h-10 text-secondary" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float opacity-20" style={{ animationDelay: "-4s" }}>
          <Cpu className="w-14 h-14 text-accent" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: "-1s" }}>
          <Network className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-1/3 left-1/3 animate-float opacity-15" style={{ animationDelay: "-5s" }}>
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float opacity-15" style={{ animationDelay: "-3.5s" }}>
          <Zap className="w-8 h-8 text-accent" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-glow">
          <Sparkles className="w-4 h-4 mr-2" />
          Beyond Traditional Marketing - Into AI Excellence
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Grow Beyyond Expectations</span>
          <br />
          <span className="text-foreground">with</span>
          <br />
          <span className="gradient-text">AI-Powered Marketing</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your business with cutting-edge AI marketing solutions that drive 
          <span className="text-primary font-semibold"> 300% better results</span>. 
          The future of digital marketing is here.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6 shadow-intense group">
            Start Your AI Transformation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-primary/50 hover:border-primary"
          >
            Get Free AI Audit
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">200+</div>
            <div className="text-muted-foreground">AI Tools Integrated</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Successful Campaigns</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;