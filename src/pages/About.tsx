import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Brain, 
  Target, 
  Zap, 
  Users,
  Award,
  Globe,
  TrendingUp,
  Heart,
  ArrowRight,
  Linkedin,
  Twitter
} from "lucide-react";
import { trackCTAClick } from "@/hooks/useConversionTracking";

const About = () => {
  const teamMembers = [
    {
      name: "Maniteja Chowdary",
      role: "Founder & Managing Director",
      bio: "Visionary entrepreneur with 8+ years in digital marketing and AI innovation. Led multiple startups to successful exits through data-driven growth strategies. Expert in scaling businesses using cutting-edge AI technologies and strategic marketing automation.",
      avatar: "MC",
      image: "/lovable-uploads/888f5573-713f-426e-96c1-ab83c3a30e47.png",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Samreddy Tejavardhan Reddy",
      role: "Co-Founder & Real Estate Marketing Expert",
      bio: "Specialized in real estate marketing with deep expertise in property promotion, lead generation, and market positioning. Brings innovative digital marketing strategies tailored specifically for the real estate sector.",
      avatar: "TR",
      image: "/lovable-uploads/tejavardhan-reddy.jpeg",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Alimineti Jaya Bharath Reddy",
      role: "Co-Founder & Client Management",
      bio: "Expert in client relationship management and business development. Ensures seamless communication and exceptional service delivery, building long-lasting partnerships with clients across industries.",
      avatar: "BR",
      image: "",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We're always pushing the boundaries of what's possible with AI and marketing technology."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every strategy, campaign, and decision is focused on delivering measurable business outcomes."
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description: "AI enhances human creativity and intuition - it doesn't replace the human element."
    },
    {
      icon: Globe,
      title: "Ethical AI",
      description: "We believe in transparent, responsible AI that builds trust between brands and customers."
    }
  ];

  const milestones = [
    {
      year: "2024 Jan",
      title: "Company Founded",
      description: "Started Grow Beyyond with a vision to revolutionize AI marketing for businesses of all sizes."
    },
    {
      year: "2024 Q2",
      title: "First Client Success",
      description: "Launched our AI marketing solutions and achieved remarkable results for our initial clients."
    },
    {
      year: "2024 Q3",
      title: "Rapid Growth",
      description: "Expanded our client base significantly with proven AI-driven marketing strategies."
    },
    {
      year: "2024 Q4",
      title: "Multiple Industries",
      description: "Successfully served clients across various industries with tailored AI marketing solutions."
    },
    {
      year: "2025",
      title: "Continued Excellence",
      description: "Growing portfolio of satisfied clients with consistent results and innovative AI marketing approaches."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Us"
        description="Meet the AI marketing pioneers at Grow Beyyond. Founded in 2024, we specialize in healthcare marketing with 7+ active clients and ₹50L+ revenue impact. Learn about our mission and values."
        keywords="about grow beyyond, AI marketing agency, healthcare marketing experts, Maniteja Chowdary"
        canonicalUrl="https://growbeyyond.in/about"
      />
      
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
              <Users className="w-4 h-4 mr-2" />
              Meet the Team Behind the AI Revolution
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              We're <span className="gradient-text">Grow Beyyond</span>
              <br />
              The AI Marketing Pioneers
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              A team of AI marketing specialists dedicated to transforming healthcare businesses through 
              innovative digital strategies. Currently serving 11+ clients with a major focus on the health sector, 
              delivering exceptional results since 2024.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">11+</div>
                <div className="text-muted-foreground text-sm">Active Clients</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">₹50L+</div>
                <div className="text-muted-foreground text-sm">Client Revenue Impact</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">Health</div>
                <div className="text-muted-foreground text-sm">Sector Expertise</div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-bold gradient-text mb-2">2024</div>
                <div className="text-muted-foreground text-sm">Year Founded</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
              </div>
              
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Grow Beyyond was born from a simple yet powerful observation: while AI was revolutionizing 
                  every other industry, marketing was still stuck in the past. Our founders, a team of AI 
                  researchers and marketing veterans, saw an opportunity to bridge this gap.
                </p>
                
          <p className="text-lg leading-relaxed mb-6">
            In 2024, we started with a bold vision - to make AI-powered marketing accessible to 
            businesses of all sizes. We believed that every company, from startups to enterprises, 
            deserved access to the same cutting-edge technology that the tech giants used.
          </p>
                
                <p className="text-lg leading-relaxed">
                  Today, we're proud to have helped hundreds of businesses achieve extraordinary growth 
                  through our AI-powered marketing solutions. But we're just getting started. The future 
                  of marketing is here, and we're excited to help you be part of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="glass-card border-border/50 text-center hover:shadow-premium transition-all duration-300">
                  <CardContent className="p-8">
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Our <span className="gradient-text">Expert Team</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                World-class experts in AI, marketing, and data science working together 
                to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-premium hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      {member.image && <AvatarImage src={member.image} alt={member.name} />}
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gradient-to-b from-background to-background-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to revolutionize marketing with AI
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-20 text-right mr-8">
                      <Badge variant="outline" className="text-xs font-mono">
                        {milestone.year}
                      </Badge>
                    </div>
                    <div className="flex-grow glass-card p-6 rounded-lg border border-border/50">
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our growing family of successful clients and experience the power 
              of AI-driven marketing firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="shadow-premium group"
                onClick={() => {
                  trackCTAClick('Start Your AI Journey', 'About Page');
                  window.open('https://wa.me/918886435551?text=Hi! I want to start my AI marketing journey with Grow Beyyond.', '_blank');
                }}
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  trackCTAClick('Meet the Team', 'About Page');
                  document.querySelector('#team-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Meet the Team
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

export default About;