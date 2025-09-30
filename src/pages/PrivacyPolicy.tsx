import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Privacy Policy"
        description="Learn how Grow Beyyond protects and manages your personal information. Our comprehensive privacy policy outlines our commitment to data security and transparency."
        canonicalUrl="https://growbeyyond.in/privacy-policy"
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-muted">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Legal Document
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
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
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Grow Beyyond ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Fill out contact forms or request information</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a free AI audit</li>
                    <li>Register for an account or services</li>
                    <li>Communicate with us via email, phone, or chat</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you visit our website, we automatically collect certain information about your device and browsing actions, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages viewed and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Improve and personalize your experience</li>
                    <li>Communicate with you about our services, updates, and offers</li>
                    <li>Send you marketing and promotional communications (with your consent)</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze website usage and optimize our services</li>
                    <li>Detect, prevent, and address technical issues or fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, rent, or trade your personal information. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and services (e.g., hosting, analytics, email services)</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                    <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We use both session and persistent cookies for purposes including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                    <li>Essential website functionality</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Personalization and user preferences</li>
                    <li>Marketing and advertising</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Your Privacy Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your information to another party</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your information</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us at directors@growbeyyond.in
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We will take appropriate measures to ensure your information receives an adequate level of protection.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Updates to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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

export default PrivacyPolicy;
