import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const [bookmarked, setBookmarked] = useState(false);
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.id === slug);
  
  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Default content if not provided
  const defaultContent = `
    <h2>Introduction</h2>
    <p>${post.excerpt}</p>
    
    <h2>Key Takeaways</h2>
    <p>This article explores cutting-edge strategies and practical applications in ${post.category}. Discover how AI and machine learning are transforming modern marketing practices.</p>

    <h2>Implementation Guide</h2>
    <p>Learn step-by-step approaches to implement these strategies in your organization. From initial setup to advanced optimization techniques.</p>

    <h2>Best Practices</h2>
    <ul>
      <li>Start with clear objectives and KPIs</li>
      <li>Leverage data-driven insights for decision making</li>
      <li>Continuously test and optimize your approach</li>
      <li>Combine AI automation with human creativity</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The future of marketing lies in the intelligent application of AI technologies. By following these strategies, you can stay ahead of the competition and drive measurable results.</p>
  `;

  const content = post.content || defaultContent;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const relatedPosts = blogPosts.filter(p => 
    p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords?.join(", ") || `${post.category}, AI marketing, digital marketing, machine learning, ${post.title}`}
        canonicalUrl={`https://growbeyyond.in/blog/${post.id}`}
        ogImage={post.image}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "datePublished": new Date(post.date).toISOString(),
          "keywords": post.keywords?.join(", ") || post.category,
          "articleSection": post.category,
          "wordCount": post.readTime,
          "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://growbeyyond.in/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Grow Beyyond",
            "logo": {
              "@type": "ImageObject",
              "url": "https://growbeyyond.in/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://growbeyyond.in/blog/${post.id}`
          }
        }}
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Back Button */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setBookmarked(!bookmarked)}
                className={bookmarked ? "text-primary" : ""}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${bookmarked ? "fill-current" : ""}`} />
                {bookmarked ? "Bookmarked" : "Bookmark"}
              </Button>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img 
                src={post.image} 
                alt={`${post.title} - ${post.keywords?.slice(0, 3).join(", ") || post.category}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Tags/Keywords Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Transform Your Marketing with AI?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a free AI marketing audit and discover how predictive analytics can revolutionize your campaigns.
              </p>
              <Button asChild size="lg" className="shadow-premium">
                <Link to="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="glass-card overflow-hidden hover:shadow-intense transition-all duration-300">
                    <Link to={`/blog/${relatedPost.id}`}>
                      <img 
                        src={relatedPost.image} 
                        alt={`${relatedPost.title} - ${relatedPost.category}`}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 text-foreground line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{relatedPost.readTime}</span>
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <ChatBot />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;