import { useState } from "react";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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

// Import blog images
import aiSegmentationImg from "@/assets/blog-ai-segmentation.jpg";
import chatgptMarketingImg from "@/assets/blog-chatgpt-marketing.jpg";
import predictiveAnalyticsImg from "@/assets/blog-predictive-analytics.jpg";
import aiContentImg from "@/assets/blog-ai-content.jpg";
import automationImg from "@/assets/blog-automation.jpg";
import socialAiImg from "@/assets/blog-social-ai.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "AI-Powered Customer Segmentation: The Ultimate Guide",
      excerpt: "Learn how machine learning algorithms can identify high-value customer segments with 95% accuracy, leading to 300% better conversion rates.",
      author: "Maniteja Chowdary",
      date: "September 15, 2025",
      readTime: "12 min read",
      category: "AI Marketing",
      featured: true,
      image: aiSegmentationImg
    },
    {
      title: "ChatGPT for Marketing: 25 Proven Use Cases",
      excerpt: "Discover practical ways to leverage ChatGPT for content creation, customer service, and campaign optimization.",
      author: "Maniteja Chowdary",
      date: "September 12, 2025",
      readTime: "10 min read",
      category: "AI Tools",
      image: chatgptMarketingImg
    },
    {
      title: "Predictive Analytics in Digital Marketing: A Complete Framework",
      excerpt: "Build predictive models that forecast customer behavior and optimize marketing spend with data-driven insights.",
      author: "Maniteja Chowdary",
      date: "September 10, 2025",
      readTime: "15 min read",
      category: "Analytics",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI Content Creation: Tools and Techniques for Scale",
      excerpt: "Master AI-powered content generation for blogs, social media, and video marketing at unprecedented scale.",
      author: "Maniteja Chowdary",
      date: "September 8, 2025",
      readTime: "8 min read",
      category: "Content Marketing",
      image: aiContentImg
    },
    {
      title: "Marketing Automation with Machine Learning: Best Practices",
      excerpt: "Implement intelligent automation workflows that adapt and optimize based on real-time performance data.",
      author: "Maniteja Chowdary",
      date: "September 5, 2025",
      readTime: "11 min read",
      category: "Automation",
      image: automationImg
    },
    {
      title: "AI-Driven Social Media Strategy: Beyond Basic Scheduling",
      excerpt: "Use artificial intelligence to optimize posting times, content types, and audience engagement strategies.",
      author: "Maniteja Chowdary",
      date: "September 3, 2025",
      readTime: "9 min read",
      category: "Social Media",
      image: socialAiImg
    },
    {
      title: "Computer Vision in E-commerce Marketing: Visual AI Applications",
      excerpt: "Leverage computer vision for product recommendations, visual search, and automated image optimization.",
      author: "Maniteja Chowdary",
      date: "September 1, 2025",
      readTime: "13 min read",
      category: "E-commerce",
      image: aiSegmentationImg
    },
    {
      title: "Natural Language Processing for Customer Insights",
      excerpt: "Extract valuable insights from customer feedback, reviews, and social mentions using NLP techniques.",
      author: "Maniteja Chowdary",
      date: "August 28, 2025",
      readTime: "10 min read",
      category: "Customer Intelligence",
      image: chatgptMarketingImg
    },
    {
      title: "AI Email Marketing: Personalization at Hyper-Scale",
      excerpt: "Create individually personalized email experiences for thousands of customers using AI algorithms.",
      author: "Maniteja Chowdary",
      date: "August 25, 2025",
      readTime: "7 min read",
      category: "Email Marketing",
      image: predictiveAnalyticsImg
    },
    {
      title: "Recommendation Engines: Building AI-Powered Product Suggestions",
      excerpt: "Design and implement recommendation systems that boost sales and improve customer experience.",
      author: "Maniteja Chowdary",
      date: "August 22, 2025",
      readTime: "14 min read",
      category: "AI Systems",
      image: aiContentImg
    },
    {
      title: "Conversion Rate Optimization with AI: Data-Driven Approaches",
      excerpt: "Use machine learning to identify conversion bottlenecks and automatically optimize landing pages.",
      author: "Maniteja Chowdary",
      date: "August 20, 2025",
      readTime: "12 min read",
      category: "CRO",
      image: automationImg
    },
    {
      title: "AI Voice Marketing: The Next Frontier in Customer Engagement",
      excerpt: "Explore voice AI applications for marketing, from voice search optimization to AI voice assistants.",
      author: "Maniteja Chowdary",
      date: "August 18, 2025",
      readTime: "9 min read",
      category: "Voice Technology",
      image: socialAiImg
    },
    {
      title: "Dynamic Pricing Strategies with AI: Maximize Revenue Intelligence",
      excerpt: "Implement AI-driven pricing models that adapt to market conditions and customer behavior in real-time.",
      author: "Maniteja Chowdary",
      date: "August 15, 2025",
      readTime: "11 min read",
      category: "Pricing Strategy",
      image: aiSegmentationImg
    },
    {
      title: "AI-Powered A/B Testing: Beyond Traditional Split Testing",
      excerpt: "Use machine learning to run more sophisticated experiments and discover winning variations faster.",
      author: "Maniteja Chowdary",
      date: "August 12, 2025",
      readTime: "8 min read",
      category: "Testing & Optimization",
      image: chatgptMarketingImg
    },
    {
      title: "Sentiment Analysis for Brand Monitoring: AI Social Listening",
      excerpt: "Monitor brand sentiment across digital channels using advanced AI sentiment analysis techniques.",
      author: "Maniteja Chowdary",
      date: "August 10, 2025",
      readTime: "10 min read",
      category: "Brand Intelligence",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI Lead Scoring: Qualify Prospects with Machine Learning",
      excerpt: "Build intelligent lead scoring models that identify sales-ready prospects with unprecedented accuracy.",
      author: "Maniteja Chowdary",
      date: "August 8, 2025",
      readTime: "13 min read",
      category: "Lead Generation",
      image: aiContentImg
    },
    {
      title: "Programmatic Advertising with AI: Smarter Ad Buying",
      excerpt: "Optimize programmatic ad campaigns using AI for better targeting, bidding, and creative optimization.",
      author: "Maniteja Chowdary",
      date: "August 5, 2025",
      readTime: "12 min read",
      category: "Paid Advertising",
      image: automationImg
    },
    {
      title: "AI Chat Marketing: Conversational AI for Customer Acquisition",
      excerpt: "Design AI chatbots that convert visitors into customers through intelligent conversation flows.",
      author: "Maniteja Chowdary",
      date: "August 3, 2025",
      readTime: "9 min read",
      category: "Conversational AI",
      image: socialAiImg
    },
    {
      title: "Predictive Customer Lifetime Value with Machine Learning",
      excerpt: "Calculate and optimize customer lifetime value using advanced machine learning algorithms.",
      author: "Maniteja Chowdary",
      date: "August 1, 2025",
      readTime: "14 min read",
      category: "Customer Analytics",
      image: aiSegmentationImg
    },
    {
      title: "AI Image Recognition for Marketing: Visual Intelligence Applications",
      excerpt: "Use computer vision for logo detection, visual content analysis, and automated image tagging.",
      author: "Maniteja Chowdary",
      date: "July 29, 2025",
      readTime: "11 min read",
      category: "Visual AI",
      image: chatgptMarketingImg
    },
    {
      title: "Real-Time Marketing with AI: Instant Campaign Optimization",
      excerpt: "Implement real-time AI systems that adjust marketing campaigns based on live performance data.",
      author: "Maniteja Chowdary",
      date: "July 26, 2025",
      readTime: "10 min read",
      category: "Real-Time Marketing",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI-Driven Influencer Marketing: Find Perfect Brand Ambassadors",
      excerpt: "Use AI to identify, evaluate, and collaborate with influencers who align with your brand values.",
      author: "Maniteja Chowdary",
      date: "July 24, 2025",
      readTime: "8 min read",
      category: "Influencer Marketing",
      image: aiContentImg
    },
    {
      title: "Market Research Automation with AI: Intelligent Data Collection",
      excerpt: "Automate market research processes using AI for faster insights and competitive intelligence.",
      author: "Maniteja Chowdary",
      date: "July 22, 2025",
      readTime: "12 min read",
      category: "Market Research",
      image: automationImg
    },
    {
      title: "AI Content Personalization: Individual Customer Experiences",
      excerpt: "Create personalized content experiences for each visitor using AI-powered content engines.",
      author: "Maniteja Chowdary",
      date: "July 19, 2025",
      readTime: "9 min read",
      category: "Personalization",
      image: socialAiImg
    },
    {
      title: "Fraud Detection in Digital Marketing: AI Security Solutions",
      excerpt: "Protect your marketing spend from fraud using machine learning detection algorithms.",
      author: "Maniteja Chowdary",
      date: "July 17, 2025",
      readTime: "11 min read",
      category: "Security & Fraud",
      image: aiSegmentationImg
    },
    {
      title: "AI Video Marketing: Automated Video Creation and Optimization",
      excerpt: "Generate and optimize video content at scale using artificial intelligence technologies.",
      author: "Maniteja Chowdary",
      date: "July 15, 2025",
      readTime: "13 min read",
      category: "Video Marketing",
      image: chatgptMarketingImg
    },
    {
      title: "Customer Journey Mapping with AI: Intelligent Path Analysis",
      excerpt: "Use AI to analyze and optimize customer journeys across all touchpoints and channels.",
      author: "Maniteja Chowdary",
      date: "July 12, 2025",
      readTime: "10 min read",
      category: "Customer Journey",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI-Powered SEO: Next-Generation Search Optimization",
      excerpt: "Optimize for search engines using AI tools for keyword research, content optimization, and ranking prediction.",
      author: "Maniteja Chowdary",
      date: "July 10, 2025",
      readTime: "14 min read",
      category: "SEO & Search",
      image: aiContentImg
    },
    {
      title: "Attribution Modeling with Machine Learning: Multi-Touch Analytics",
      excerpt: "Build sophisticated attribution models that accurately measure marketing channel performance.",
      author: "Maniteja Chowdary",
      date: "July 8, 2025",
      readTime: "12 min read",
      category: "Attribution & Analytics",
      image: automationImg
    },
    {
      title: "AI Crisis Management: Automated Brand Protection Strategies",
      excerpt: "Implement AI systems that detect and respond to brand crises before they escalate.",
      author: "Maniteja Chowdary",
      date: "July 5, 2025",
      readTime: "9 min read",
      category: "Crisis Management",
      image: socialAiImg
    },
    {
      title: "Competitive Intelligence with AI: Stay Ahead of the Market",
      excerpt: "Use artificial intelligence to monitor competitors and identify market opportunities in real-time.",
      author: "Maniteja Chowdary",
      date: "July 3, 2025",
      readTime: "11 min read",
      category: "Competitive Intelligence",
      image: aiSegmentationImg
    },
    {
      title: "AI-Driven Mobile Marketing: Smartphone-First Strategies",
      excerpt: "Optimize mobile marketing campaigns using AI for location targeting, app marketing, and mobile personalization.",
      author: "Maniteja Chowdary",
      date: "July 1, 2025",
      readTime: "10 min read",
      category: "Mobile Marketing",
      image: chatgptMarketingImg
    },
    {
      title: "Marketing Mix Modeling with AI: Optimize Budget Allocation",
      excerpt: "Use advanced analytics to determine optimal marketing spend allocation across channels and campaigns.",
      author: "Maniteja Chowdary",
      date: "June 29, 2025",
      readTime: "13 min read",
      category: "Budget Optimization",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI Retail Marketing: Intelligent Shopping Experiences",
      excerpt: "Transform retail marketing with AI-powered recommendations, inventory optimization, and customer insights.",
      author: "Maniteja Chowdary",
      date: "June 27, 2025",
      readTime: "12 min read",
      category: "Retail Marketing",
      image: aiContentImg
    },
    {
      title: "Neurosymbolic AI in Marketing: The Future of Intelligent Campaigns",
      excerpt: "Explore the cutting-edge fusion of neural networks and symbolic reasoning for next-level marketing AI.",
      author: "Maniteja Chowdary",
      date: "June 25, 2025",
      readTime: "15 min read",
      category: "Advanced AI",
      image: automationImg
    },
    {
      title: "AI Ethics in Marketing: Responsible AI Implementation",
      excerpt: "Build ethical AI marketing systems that respect privacy, avoid bias, and maintain customer trust.",
      author: "Maniteja Chowdary",
      date: "June 22, 2025",
      readTime: "11 min read",
      category: "AI Ethics",
      image: socialAiImg
    },
    {
      title: "Cross-Channel Marketing Orchestration with AI",
      excerpt: "Coordinate marketing messages across all channels using AI for consistent, optimized customer experiences.",
      author: "Maniteja Chowdary",
      date: "June 20, 2025",
      readTime: "10 min read",
      category: "Omnichannel",
      image: aiSegmentationImg
    },
    {
      title: "AI Trend Prediction: Forecast Market Changes Before They Happen",
      excerpt: "Use machine learning to predict marketing trends and consumer behavior shifts before your competitors.",
      author: "Maniteja Chowdary",
      date: "June 18, 2025",
      readTime: "9 min read",
      category: "Trend Analysis",
      image: chatgptMarketingImg
    },
    {
      title: "Marketing Automation Workflows: AI-Powered Customer Nurturing",
      excerpt: "Design intelligent automation workflows that adapt to customer behavior and optimize engagement.",
      author: "Maniteja Chowdary",
      date: "June 15, 2025",
      readTime: "12 min read",
      category: "Marketing Automation",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI-Enhanced Creative Development: Art Meets Algorithm",
      excerpt: "Combine human creativity with AI assistance to produce more effective marketing creative at scale.",
      author: "Maniteja Chowdary",
      date: "June 13, 2025",
      readTime: "8 min read",
      category: "Creative AI",
      image: aiContentImg
    },
    {
      title: "Voice Search Optimization: AI-Powered Voice Marketing Strategies",
      excerpt: "Optimize your content and campaigns for voice search using natural language processing and AI insights.",
      author: "Maniteja Chowdary",
      date: "June 10, 2025",
      readTime: "11 min read",
      category: "Voice Search",
      image: automationImg
    },
    {
      title: "AI Marketing ROI Measurement: Advanced Attribution & Analytics",
      excerpt: "Measure true marketing ROI using AI-powered attribution models and advanced analytics frameworks.",
      author: "Maniteja Chowdary",
      date: "June 8, 2025",
      readTime: "13 min read",
      category: "ROI & Measurement",
      image: socialAiImg
    },
    {
      title: "Quantum Computing in Marketing: The Next Technology Frontier",
      excerpt: "Explore how quantum computing will revolutionize marketing analytics, optimization, and customer modeling.",
      author: "Maniteja Chowdary",
      date: "June 5, 2025",
      readTime: "14 min read",
      category: "Emerging Technology",
      image: aiSegmentationImg
    },
    {
      title: "AI-Powered Crisis Communication: Automated Response Systems",
      excerpt: "Build AI systems that detect, analyze, and respond to communication crises in real-time.",
      author: "Maniteja Chowdary",
      date: "June 3, 2025",
      readTime: "10 min read",
      category: "Crisis Communication",
      image: chatgptMarketingImg
    },
    {
      title: "Behavioral Economics & AI: Psychology-Driven Marketing",
      excerpt: "Apply behavioral economics principles with AI to create more persuasive and effective marketing campaigns.",
      author: "Maniteja Chowdary",
      date: "June 1, 2025",
      readTime: "12 min read",
      category: "Behavioral Marketing",
      image: predictiveAnalyticsImg
    },
    {
      title: "AI Content Strategy: Data-Driven Content Planning and Creation",
      excerpt: "Develop content strategies using AI insights for topic research, content gaps, and performance prediction.",
      author: "Maniteja Chowdary",
      date: "May 28, 2025",
      readTime: "9 min read",
      category: "Content Strategy",
      image: aiContentImg
    },
    {
      title: "Marketing Performance Optimization with Reinforcement Learning",
      excerpt: "Use reinforcement learning algorithms to continuously optimize marketing campaigns for maximum performance.",
      author: "Maniteja Chowdary",
      date: "May 26, 2025",
      readTime: "15 min read",
      category: "Advanced Optimization",
      image: automationImg
    },
    {
      title: "AI-Driven Customer Success: Proactive Retention Strategies",
      excerpt: "Implement AI systems that predict customer churn and automatically trigger retention campaigns.",
      author: "Rashi Gupta",
      date: "May 24, 2025",
      readTime: "11 min read",
      category: "Customer Success",
      image: socialAiImg
    },
    {
      title: "Augmented Reality Marketing with AI: Immersive Brand Experiences",
      excerpt: "Combine AR technology with AI to create personalized, immersive marketing experiences.",
      author: "Maniteja Chowdary",
      date: "December 22, 2024",
      readTime: "10 min read",
      category: "AR & Immersive Tech",
      image: aiSegmentationImg
    },
    {
      title: "AI Marketing Stack Integration: Building Unified Technology Ecosystems",
      excerpt: "Integrate AI tools across your marketing technology stack for seamless data flow and optimization.",
      author: "Maniteja Chowdary",
      date: "December 20, 2024",
      readTime: "13 min read",
      category: "MarTech Integration",
      image: chatgptMarketingImg
    }
  ];

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

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
              </div>
              
              <Card className="glass-card border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-premium">
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 overflow-hidden">
                    {featuredPost.image ? (
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover"
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
                    <h3 className="text-2xl font-bold mb-4 gradient-text">{featuredPost.title}</h3>
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
                </div>
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
                <Card 
                  key={index}
                  className="glass-card border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-premium hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
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
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background-muted border border-border/50 focus:border-primary focus:outline-none"
              />
              <Button className="px-8">
                Subscribe
                <Zap className="ml-2 w-4 h-4" />
              </Button>
            </div>
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