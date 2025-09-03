import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Search, 
  MessageSquare, 
  BarChart3, 
  Mail, 
  Video,
  ArrowRight
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Strategy",
      description: "Advanced machine learning algorithms analyze your market and create data-driven strategies that adapt in real-time.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Smart SEO & SEM",
      description: "AI-optimized search campaigns that automatically adjust keywords, bids, and content for maximum visibility.",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Social Media Automation",
      description: "Intelligent content creation and posting schedules powered by AI sentiment analysis and engagement prediction.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and campaign performance with our proprietary AI analytics platform.",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Smart Email Marketing",
      description: "Personalized email campaigns with AI-driven subject lines, content, and optimal sending times.",
      color: "text-secondary"
    },
    {
      icon: Video,
      title: "AI Content Creation",
      description: "Automated video, image, and copy generation tailored to your brand voice and audience preferences.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">AI-Powered</span> Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform every aspect of your digital marketing. 
            Our cutting-edge solutions deliver unprecedented results through automation and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-intense hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 shadow-premium group">
            Explore All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;