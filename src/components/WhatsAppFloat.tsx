import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your AI Marketing services. Can we discuss my business needs?";
    const whatsappUrl = `https://wa.me/918886435551?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/25 animate-bounce transition-all duration-300 group"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <span className="sr-only">Contact on WhatsApp</span>
    
    </Button>
  );
};

export default WhatsAppFloat;