import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenAuditPopup?: () => void;
}

const Navigation = ({ onOpenAuditPopup }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "AI Marketing", href: "/ai-marketing" },
    { name: "Real Estate", href: "/real-estate-marketing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png" 
              alt="Grow Beyyond Logo" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold gradient-text">Grow Beyyond</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={onOpenAuditPopup}>
              Get Free Audit
            </Button>
            <Button size="sm" className="shadow-premium">
              Start Growing
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden border-t border-border/50 glass-card">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" onClick={onOpenAuditPopup}>
                Get Free Audit
              </Button>
              <Button className="w-full shadow-premium">
                Start Growing
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;