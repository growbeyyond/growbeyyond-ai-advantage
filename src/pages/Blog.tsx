import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  Brain,
  Zap,
  Search
} from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit } from "@/hooks/useConversionTracking";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    trackFormSubmit('newsletter', { email });
    
    toast({
      title: "Subscribed!",
      description: "You'll receive our latest AI marketing insights weekly.",
    });
    setEmail("");
    setIsSubscribing(false);
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Grow Beyyond AI Marketing Blog",
    "description": "Expert insights on AI marketing, automation, and digital transformation",
    "url": "https://growbeyyond.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Grow Beyyond",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growbeyyond.in/logo.png"
      }
    },
    "author": {
      "@type": "Person",
      "name": "Maniteja Chowdary"
    }
  };

  const categories = ["All", "AI Marketing", "Analytics", "Content Marketing", "Automation", "AI Tools"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts by both search query and category
  let filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (searchQuery.trim()) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="AI Marketing Blog"
        description="Latest AI marketing insights, strategies, and case studies. Learn about machine learning, automation, predictive analytics, and cutting-edge marketing technologies."
        keywords="AI marketing blog, marketing insights, AI strategies, machine learning marketing, automation guides"
        canonicalUrl="https://growbeyyond.in/blog"
        schema={blogSchema}
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                <Brain className="w-4 h-4 mr-2" />
                AI Marketing Intelligence Hub
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">AI Marketing</span>
                <br />
                Insights & Strategies
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay ahead of the curve with cutting-edge AI marketing strategies, tools, and insights 
                from industry experts. Transform your marketing with artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles by title, topic, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-card border-border/50 focus:border-primary"
                />
              </div>
              {searchQuery && (
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} matching "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </section>


        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
              </div>
              
              <Card className="glass-card border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-premium">
                <Link to={`/blog/${featuredPost.id}`} className="md:flex">
                  <div className="md:w-1/2 h-64 overflow-hidden">
                    {featuredPost.image ? (
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center h-full">
                        <div className="text-center">
                          <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                          <Badge variant="outline" className="border-primary/50">Featured</Badge>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="md:w-1/2 p-8">
                    <Badge variant="secondary" className="mb-4">{featuredPost.category}</Badge>
                    <h3 className="text-2xl font-bold mb-4 gradient-text hover:text-primary transition-colors">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="mr-4">{featuredPost.readTime}</span>
                        <span>{featuredPost.date}</span>
                      </div>
                      <Button variant="outline" className="border-primary/50 hover:border-primary">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "" : "border-border/50 hover:border-primary/50"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <Link to={`/blog/${post.id}`} key={index}>
                  <Card 
                    className="glass-card border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-premium hover:-translate-y-1 group cursor-pointer h-full"
                  >
                    <div className="h-48 overflow-hidden">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 flex items-center justify-center h-full">
                          <TrendingUp className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3 border-primary/30">{post.category}</Badge>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground">
                            Read More
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with <span className="gradient-text">AI Marketing Trends</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest AI marketing insights, case studies, and strategies delivered to your inbox every week.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-background-muted border border-border/50 focus:border-primary"
                disabled={isSubscribing}
              />
              <Button className="px-8" type="submit" disabled={isSubscribing}>
                {isSubscribing ? "Subscribing..." : "Subscribe"}
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
