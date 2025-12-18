import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Zap, Brain, Bot, Cpu, Network } from "lucide-react";
import { trackCTAClick } from "@/hooks/useConversionTracking";

interface HeroProps {
  onOpenAuditPopup?: () => void;
}

const Hero = ({ onOpenAuditPopup }: HeroProps) => {
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
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
          <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_200%] drop-shadow-[0_0_50px_hsl(var(--primary)/0.8)]">
            GROW BEYYOND
          </span>
          <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/90 mt-4">
            with <span className="text-primary font-black">AI-Powered Marketing</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
          Transform your business with cutting-edge AI marketing solutions that deliver 
          <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"> 300% better results</span>. 
          <br className="hidden md:block" />
          <span className="text-foreground font-semibold">The future of digital marketing starts now.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 px-4">
          <Button 
            size="lg" 
            className="text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 shadow-intense group hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
            onClick={() => trackCTAClick('Start AI Transformation', 'Hero')}
          >
            🚀 Start Your AI Transformation
            <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => {
              trackCTAClick('Get Free AI Audit', 'Hero');
              onOpenAuditPopup?.();
            }}
            className="text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 border-2 border-primary/70 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto"
          >
            ⚡ Get Free AI Audit
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">11+</div>
            <div className="text-muted-foreground">Active Clients</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">350%+</div>
            <div className="text-muted-foreground">Average Growth</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">Health</div>
            <div className="text-muted-foreground">Sector Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;