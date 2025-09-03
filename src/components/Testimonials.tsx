import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CEO, TechVista Solutions",
      avatar: "RS",
      content: "Grow Beyyond transformed our digital presence completely. Their AI-driven strategies increased our online conversions by 285% in just 4 months. The level of insight and automation they provided was truly game-changing for our Hyderabad-based startup.",
      rating: 5
    },
    {
      name: "Priya Mehta",
      role: "Marketing Director, InnovateIndia Corp",
      avatar: "PM",
      content: "The team's expertise in AI marketing is unparalleled. We saw immediate improvements in our lead quality and customer engagement rates. Their solutions helped us scale from local to national market presence.",
      rating: 5
    },
    {
      name: "Arjun Patel",
      role: "Founder, EcoTech Startup",
      avatar: "AP",
      content: "From startup to market leader in 6 months. Their AI strategies identified opportunities we never knew existed and helped us scale rapidly. Working with Maniteja and Rashi's team was the best business decision we made.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See how we've transformed businesses across industries 
            with our AI-powered marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-premium hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;