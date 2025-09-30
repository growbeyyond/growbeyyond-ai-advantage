import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms of Service"
        description="Read the terms and conditions for using Grow Beyyond's AI-powered marketing services. Understand your rights and responsibilities when working with us."
        canonicalUrl="https://growbeyyond.in/terms-of-service"
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <FileText className="w-4 h-4 mr-2" />
              Legal Document
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Last Updated: September 30, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <div className="space-y-8 text-foreground">
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service ("Terms") govern your access to and use of Grow Beyyond's website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Grow Beyyond provides AI-powered marketing services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>AI strategy and consulting</li>
                    <li>Search engine optimization (SEO) and marketing (SEM)</li>
                    <li>Social media automation and management</li>
                    <li>Predictive analytics and data analysis</li>
                    <li>Email marketing automation</li>
                    <li>AI content creation and optimization</li>
                    <li>Conversion rate optimization</li>
                    <li>Marketing automation workflows</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Client Obligations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To ensure successful service delivery, clients must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide timely access to necessary platforms and data</li>
                    <li>Respond to requests for information within reasonable timeframes</li>
                    <li>Provide honest and accurate information about their business</li>
                    <li>Maintain necessary third-party service subscriptions</li>
                    <li>Review and approve deliverables in a timely manner</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Payment terms include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Fees:</strong> Service fees are specified in your service agreement or proposal</li>
                    <li><strong>Payment Schedule:</strong> Payments are due according to the agreed schedule (monthly, quarterly, or as specified)</li>
                    <li><strong>Late Payments:</strong> Late payments may incur additional fees and may result in service suspension</li>
                    <li><strong>Refunds:</strong> Refund eligibility is determined on a case-by-case basis according to our refund policy</li>
                    <li><strong>Price Changes:</strong> We reserve the right to modify our pricing with 30 days' notice</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
                  <h3 className="text-xl font-semibold mb-3">Our IP</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and algorithms, are the exclusive property of Grow Beyyond and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <h3 className="text-xl font-semibold mb-3">Client IP</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You retain ownership of any intellectual property you provide to us. By using our services, you grant us a license to use, reproduce, and modify your content solely for the purpose of providing our services.
                  </p>
                  <h3 className="text-xl font-semibold mb-3">Work Product</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon full payment, you will own the specific deliverables created for you. However, we retain ownership of our methodologies, processes, tools, and any general knowledge gained.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Both parties agree to keep confidential any proprietary or sensitive information shared during the course of our relationship. This includes business strategies, financial information, customer data, and any information marked as confidential. This obligation continues even after termination of services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Service Level Agreement (SLA)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We commit to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>99.9% uptime for our digital services</li>
                    <li>Response to support inquiries within 24 hours (business days)</li>
                    <li>Monthly performance reports and strategy reviews</li>
                    <li>Quarterly business reviews for enterprise clients</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Warranties and Disclaimers</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Our Warranties:</strong> We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Disclaimers:</strong> While we strive for excellent results, we cannot guarantee specific outcomes such as:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Specific search engine rankings</li>
                    <li>Exact conversion rates or revenue increases</li>
                    <li>Specific numbers of leads or sales</li>
                    <li>Results within a specific timeframe</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Marketing results depend on many factors beyond our control, including market conditions, competition, and client-specific variables.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, Grow Beyyond shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services. Our total liability shall not exceed the amount paid by you to us in the 12 months preceding the claim.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Grow Beyyond and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from: (a) your use of our services, (b) your violation of these Terms, (c) your violation of any rights of another party, or (d) any content you provide to us.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Term and Termination</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Term:</strong> Service agreements typically run for a minimum term as specified in your contract (commonly 3, 6, or 12 months).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Termination by You:</strong> You may terminate services by providing 30 days' written notice. Early termination may result in fees as specified in your agreement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Termination by Us:</strong> We may terminate or suspend services immediately if you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Violate these Terms</li>
                    <li>Fail to make required payments</li>
                    <li>Engage in fraudulent or illegal activities</li>
                    <li>Provide false or misleading information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In the event of any dispute:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Negotiation:</strong> Parties will attempt to resolve disputes through good faith negotiation</li>
                    <li><strong>Mediation:</strong> If negotiation fails, disputes will be submitted to mediation</li>
                    <li><strong>Arbitration:</strong> Unresolved disputes will be settled through binding arbitration</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts located in Hyderabad, Telangana.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">15. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">17. Entire Agreement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms, along with any service agreements and proposals, constitute the entire agreement between you and Grow Beyyond regarding our services and supersede all prior agreements and understandings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these Terms, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="text-muted-foreground"><strong>Email:</strong> directors@growbeyyond.in</p>
                    <p className="text-muted-foreground"><strong>Phone:</strong> +91 8886435551, +91 8886435558</p>
                    <p className="text-muted-foreground"><strong>Address:</strong> Hyderabad, Telangana, India</p>
                  </div>
                </div>

              </div>
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

export default TermsOfService;
