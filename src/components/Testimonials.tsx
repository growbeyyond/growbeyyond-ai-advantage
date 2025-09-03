import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      avatar: "SC",
      content: "Grow Beyyond's AI-powered marketing increased our conversion rates by 340% in just 3 months. Their predictive analytics saved us hundreds of hours of manual optimization.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director, InnovateCorp",
      avatar: "MR",
      content: "The automation tools they implemented transformed our entire marketing operation. We now reach the right customers at exactly the right moment with personalized messaging.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Founder, GreenTech Startup",
      avatar: "EW",
      content: "From zero to million-dollar revenue in 8 months. Their AI strategies identified opportunities we never knew existed. Absolutely game-changing partnership.",
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