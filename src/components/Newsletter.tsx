import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { trackFormSubmit } from "@/hooks/useConversionTracking";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address").max(255, "Email is too long"),
});

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = emailSchema.safeParse({ email });
    if (!validation.success) {
      toast({
        title: "Invalid Email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Track conversion
      trackFormSubmit('newsletter');
      
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest AI marketing insights and tips.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="glass-card rounded-2xl p-8 md:p-12 border border-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Ahead with <span className="gradient-text">AI Insights</span>
        </h3>
        <p className="text-muted-foreground mb-8">
          Get exclusive AI marketing strategies, case studies, and industry insights delivered to your inbox weekly.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isLoading}
            required
          />
          <Button 
            type="submit" 
            className="shadow-premium whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe
                <Sparkles className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-4">
          Join 5,000+ marketers. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
