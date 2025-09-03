import { useState, useEffect } from "react";
import { X, Gift, Rocket, CheckCircle, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenWelcomePopup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `🚀 NEW LEAD FROM WEBSITE 🚀
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Request: FREE AI Marketing Audit Worth ₹25,000

Interested in transforming their business with AI-powered marketing!`;

    const whatsappUrl = `https://wa.me/918886435551?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Success! 🎉",
      description: "Redirecting to WhatsApp... We'll contact you within 30 minutes!",
    });

    handleClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <Card className="w-full max-w-lg mx-auto relative overflow-hidden border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <CardHeader className="text-center space-y-4 pb-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Gift className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent flex items-center justify-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              FREE AI Marketing Audit
            </CardTitle>
            <CardDescription className="text-lg font-semibold text-accent mt-2">
              Worth ₹25,000 - Limited Time Offer!
            </CardDescription>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Comprehensive AI strategy analysis</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Custom ROI projections</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Competition analysis report</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="business">Business Type *</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleChange("businessType", value)} required>
                <SelectTrigger className="border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS/Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Professional Services</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="food">Food & Beverage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 text-lg group transition-all duration-300"
              disabled={!formData.name || !formData.email || !formData.phone || !formData.businessType}
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Get FREE Audit via WhatsApp
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              🔒 Your information is secure. We'll contact you within 30 minutes.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePopup;