import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const popularPages = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "AI Marketing", path: "/ai-marketing" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "About Us", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Explore our AI marketing services, portfolio, and blog."
        canonicalUrl="https://growbeyyond.in/404"
      />
      
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-9xl md:text-[12rem] font-bold gradient-text mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved. 
              Let's help you find what you need.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="shadow-premium">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Search className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Popular Pages</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="px-4 py-3 bg-background hover:bg-accent rounded-lg transition-colors text-foreground hover:text-accent-foreground font-medium"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
