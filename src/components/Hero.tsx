import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-6s" }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium shadow-glow">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Marketing Solutions
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Grow Beyyond</span>
          <br />
          <span className="text-foreground">Expectations with</span>
          <br />
          <span className="gradient-text">AI-Driven Marketing</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your business with cutting-edge AI marketing strategies. We deliver 
          <span className="text-primary font-semibold"> 300% better ROI </span>
          through data-driven campaigns that adapt and optimize in real-time.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6 shadow-intense group">
            Start Your Growth Journey
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
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">300%</div>
            <div className="text-muted-foreground">Average ROI Increase</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">AI Tools Integrated</div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl shadow-premium">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Successful Campaigns</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;