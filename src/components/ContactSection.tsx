import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { trackFormSubmit, trackContactClick } from "@/hooks/useConversionTracking";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      // Track conversion
      trackFormSubmit('contact_form', { company: formData.company });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll contact you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Grow Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your marketing with AI? Get your free consultation and 
            discover how we can accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card border-border/50 shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Get Your Free AI Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background-muted border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background-muted border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background-muted border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your marketing goals and challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-background-muted border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-premium group"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get My Free Audit"}
                  {!isLoading && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="glass-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 gradient-text">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <span>directors@growbeyyond.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <span>+91 8886435551, +91 8886435558</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <span>Mon-Fri: 9AM-6PM IST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="glass-card border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 gradient-text">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center mr-3 mt-0.5">1</div>
                    <div>
                      <div className="font-medium">Free AI Audit</div>
                      <div className="text-sm text-muted-foreground">Complete analysis of your current marketing performance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm flex items-center justify-center mr-3 mt-0.5">2</div>
                    <div>
                      <div className="font-medium">Strategy Session</div>
                      <div className="text-sm text-muted-foreground">Personalized growth strategy designed for your business</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center mr-3 mt-0.5">3</div>
                    <div>
                      <div className="font-medium">AI Implementation</div>
                      <div className="text-sm text-muted-foreground">Launch your AI-powered marketing campaigns</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;