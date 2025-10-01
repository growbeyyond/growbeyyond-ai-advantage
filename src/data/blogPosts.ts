// Blog post data centralized for reuse across Blog and BlogPost pages
import aiSegmentationImg from "@/assets/blog-ai-segmentation.jpg";
import chatgptMarketingImg from "@/assets/blog-chatgpt-marketing.jpg";
import predictiveAnalyticsImg from "@/assets/blog-predictive-analytics.jpg";
import aiContentImg from "@/assets/blog-ai-content.jpg";
import automationImg from "@/assets/blog-automation.jpg";
import socialAiImg from "@/assets/blog-social-ai.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-customer-segmentation-guide",
    title: "AI-Powered Customer Segmentation: The Ultimate Guide",
    excerpt: "Learn how machine learning algorithms can identify high-value customer segments with 95% accuracy, leading to 300% better conversion rates.",
    author: "Maniteja Chowdary",
    date: "September 15, 2025",
    readTime: "12 min read",
    category: "AI Marketing",
    featured: true,
    image: aiSegmentationImg,
    content: `
      <h2>Understanding AI-Powered Customer Segmentation</h2>
      <p>Customer segmentation has evolved from simple demographic divisions to sophisticated AI-powered analysis that predicts behavior with remarkable accuracy. This guide explores how machine learning transforms customer understanding.</p>

      <h2>Key Benefits of AI Segmentation</h2>
      <ul>
        <li><strong>95% Accuracy:</strong> ML algorithms identify patterns humans might miss</li>
        <li><strong>Real-time Adaptation:</strong> Segments update as customer behavior changes</li>
        <li><strong>Predictive Power:</strong> Forecast future customer needs and behaviors</li>
        <li><strong>Scalability:</strong> Analyze millions of data points instantly</li>
      </ul>

      <h2>Implementation Strategy</h2>
      <p>Start by collecting comprehensive customer data, choose appropriate ML algorithms, train models with historical data, and continuously refine based on results.</p>
    `
  },
  {
    id: "chatgpt-marketing-use-cases",
    title: "ChatGPT for Marketing: 25 Proven Use Cases",
    excerpt: "Discover practical ways to leverage ChatGPT for content creation, customer service, and campaign optimization.",
    author: "Maniteja Chowdary",
    date: "September 12, 2025",
    readTime: "10 min read",
    category: "AI Tools",
    image: chatgptMarketingImg
  },
  {
    id: "predictive-analytics-framework",
    title: "Predictive Analytics in Digital Marketing: A Complete Framework",
    excerpt: "Build predictive models that forecast customer behavior and optimize marketing spend with data-driven insights.",
    author: "Maniteja Chowdary",
    date: "September 10, 2025",
    readTime: "15 min read",
    category: "Analytics",
    image: predictiveAnalyticsImg
  },
  {
    id: "ai-content-creation-scale",
    title: "AI Content Creation: Tools and Techniques for Scale",
    excerpt: "Master AI-powered content generation for blogs, social media, and video marketing at unprecedented scale.",
    author: "Maniteja Chowdary",
    date: "September 8, 2025",
    readTime: "8 min read",
    category: "Content Marketing",
    image: aiContentImg
  },
  {
    id: "marketing-automation-ml",
    title: "Marketing Automation with Machine Learning: Best Practices",
    excerpt: "Implement intelligent automation workflows that adapt and optimize based on real-time performance data.",
    author: "Maniteja Chowdary",
    date: "September 5, 2025",
    readTime: "11 min read",
    category: "Automation",
    image: automationImg
  },
  {
    id: "ai-social-media-strategy",
    title: "AI-Driven Social Media Strategy: Beyond Basic Scheduling",
    excerpt: "Use artificial intelligence to optimize posting times, content types, and audience engagement strategies.",
    author: "Maniteja Chowdary",
    date: "September 3, 2025",
    readTime: "9 min read",
    category: "Social Media",
    image: socialAiImg
  }
];