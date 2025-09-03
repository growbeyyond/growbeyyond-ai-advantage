import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  Brain,
  Zap
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to AI Marketing Automation in 2024",
    excerpt: "Discover how leading brands are using AI to automate their marketing workflows and achieve 300% better ROI. This comprehensive guide covers everything from setup to optimization.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "AI Marketing",
    image: "bg-gradient-to-br from-primary to-secondary"
  };

  const blogPosts = [
    {
      title: "How AI Predictive Analytics Transformed Our Client's Lead Generation",
      excerpt: "A deep dive into how we increased lead quality by 450% using machine learning algorithms.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Case Study",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "The Future of Email Marketing: AI-Powered Personalization",
      excerpt: "Why generic email campaigns are dead and how AI creates personalized experiences at scale.",
      author: "Emily Watson",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Email Marketing",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "5 AI Tools Every Digital Marketer Should Know About",
      excerpt: "From content creation to analytics, these AI tools will revolutionize your marketing workflow.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Tools & Technology",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "ROI Analysis: Traditional vs AI-Powered Marketing Campaigns",
      excerpt: "Real data comparing the performance of traditional marketing against AI-enhanced strategies.",
      author: "Jennifer Liu",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Analytics",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      title: "Building Customer Trust with AI: A Ethical Framework",
      excerpt: "How to implement AI marketing while maintaining transparency and building customer trust.",
      author: "Michael Brown",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Ethics & Strategy",
      image: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      title: "Voice Search Optimization in the Age of AI",
      excerpt: "Preparing your content strategy for the voice-first future with AI optimization techniques.",
      author: "Lisa Chang",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "SEO & Voice",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600"
    }
  ];

  const categories = [
    { name: "AI Marketing", count: 24, icon: Brain },
    { name: "Case Studies", count: 18, icon: TrendingUp },
    { name: "Tools & Technology", count: 15, icon: Zap },
    { name: "Strategy", count: 12, icon: Brain },
    { name: "Analytics", count: 10, icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Brain className="w-4 h-4 mr-2" />
              AI Marketing Insights
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Thought Leadership</span>
              <br />
              in AI Marketing
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with our latest insights, case studies, and expert analysis 
              on AI-powered marketing strategies that drive real results.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Featured</span> Article
              </h2>
            </div>

            <Card className="glass-card border-border/50 hover:shadow-intense transition-all duration-500 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`${featuredPost.image} h-64 lg:h-auto relative`}>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.readTime}</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <Button className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-background-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card 
                      key={index}
                      className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-premium hover:-translate-y-1 group cursor-pointer"
                    >
                      <CardContent className="p-0">
                        <div className={`h-48 ${post.image} relative`}>
                          <div className="absolute inset-0 bg-black/30"></div>
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <User className="w-3 h-3 mr-1" />
                            <span className="mr-3">{post.author}</span>
                            <Clock className="w-3 h-3 mr-1" />
                            <span className="mr-3">{post.readTime}</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Categories */}
                  <Card className="glass-card border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Categories</h3>
                      <div className="space-y-3">
                        {categories.map((category, index) => (
                          <div 
                            key={index} 
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center">
                              <category.icon className="w-4 h-4 text-primary mr-2" />
                              <span className="text-sm">{category.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{category.count}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="glass-card border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4 gradient-text">
                        Stay Updated
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get the latest AI marketing insights delivered to your inbox weekly.
                      </p>
                      <Button className="w-full">
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to <span className="gradient-text">Contribute</span> or Learn More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Share your AI marketing insights with our community or get personalized 
              advice for your business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-premium">
                Submit Guest Post
              </Button>
              <Button variant="outline" size="lg">
                Get Expert Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;