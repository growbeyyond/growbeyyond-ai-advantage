import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is AI-powered marketing and how does it work?",
      answer: "AI-powered marketing uses machine learning algorithms and artificial intelligence to automate, optimize, and personalize marketing campaigns. It analyzes vast amounts of data to identify patterns, predict customer behavior, and make real-time decisions that improve campaign performance. Our AI systems continuously learn and adapt to deliver better results over time."
    },
    {
      question: "How quickly can we see results from AI marketing?",
      answer: "Most clients see initial improvements within 2-4 weeks of implementation. However, the full power of AI marketing compounds over time as the algorithms learn more about your customers and optimize performance. Typical results include 200-400% improvement in conversion rates within 3-6 months."
    },
    {
      question: "Do I need technical expertise to use your AI marketing services?",
      answer: "Not at all! We handle all the technical complexity for you. Our team manages the AI implementation, optimization, and monitoring. You'll receive clear, actionable insights and reports through an easy-to-understand dashboard. We also provide training and ongoing support to ensure you get maximum value."
    },
    {
      question: "What makes your AI marketing different from traditional digital marketing?",
      answer: "Traditional marketing relies on manual analysis and static rules. Our AI marketing continuously analyzes millions of data points in real-time, automatically adjusting campaigns for optimal performance. This means 24/7 optimization, predictive insights, hyper-personalization at scale, and significantly better ROI - all without requiring constant human oversight."
    },
    {
      question: "How much does AI marketing cost?",
      answer: "Our pricing is customized based on your business size, goals, and required services. We offer flexible packages starting from ₹50,000/month for small businesses to enterprise solutions for larger organizations. The investment typically pays for itself within the first few months through improved efficiency and results. Contact us for a personalized quote."
    },
    {
      question: "Can AI marketing work for small businesses?",
      answer: "Absolutely! We have solutions specifically designed for businesses of all sizes. In fact, small businesses often benefit the most from AI marketing because it gives them enterprise-level capabilities without requiring a large team. Our starter packages make advanced AI technology accessible and affordable for growing businesses."
    },
    {
      question: "What data do you need to get started?",
      answer: "We'll need access to your existing marketing platforms (Google Ads, Facebook Ads, website analytics, email marketing tools, etc.) and any historical customer data you have. Don't worry if your data isn't perfect - our AI can work with whatever you have and actually helps clean and organize your data as it learns."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We take data security extremely seriously. All data is encrypted in transit and at rest, we're fully GDPR and CCPA compliant, and we never share your data with third parties. Our AI systems are built with privacy-first architecture, and we conduct regular security audits. You maintain full ownership and control of your data at all times."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including: dedicated account manager, 24/7 technical support, monthly strategy reviews, ongoing optimization recommendations, and access to our AI marketing academy. We're invested in your success and work as an extension of your team."
    },
    {
      question: "Can we integrate AI marketing with our existing tools?",
      answer: "Yes! Our AI platform integrates seamlessly with all major marketing tools including Google Ads, Facebook Ads, LinkedIn, HubSpot, Salesforce, Shopify, WordPress, and many more. We'll handle the technical integration and ensure everything works smoothly together."
    },
    {
      question: "What if AI marketing doesn't work for our business?",
      answer: "We're so confident in our AI marketing approach that we offer a 90-day performance guarantee. If you don't see significant improvements in your key metrics within the first 90 days, we'll work with you to make it right or provide a refund. However, in our 5+ years of operation, we've maintained a 98% client satisfaction rate."
    },
    {
      question: "How do you measure success and ROI?",
      answer: "We establish clear KPIs and success metrics from day one, tailored to your specific goals. Our dashboard provides real-time tracking of all key metrics including conversion rates, customer acquisition costs, lifetime value, revenue attribution, and overall ROI. You'll receive detailed monthly reports showing exactly how AI is impacting your bottom line."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got Questions? <span className="gradient-text">We've Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AI-powered marketing and how we can help your business grow
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
