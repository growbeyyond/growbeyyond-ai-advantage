export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    timeframe: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  websiteUrl: string;
  instagramUrl?: string;
  services: string[];
  imageUrl: string;
  featured: boolean;
}

export const realCaseStudies: CaseStudy[] = [
  {
    id: "dr-sindhu-oncology",
    clientName: "Dr. Sindhu Pericherla - OncoCarе",
    industry: "Healthcare - Oncology",
    challenge: "Leading oncologist needed to build trust with cancer patients online and increase consultation bookings through digital presence while maintaining medical credibility.",
    solution: "Comprehensive AI-powered digital marketing strategy including compassionate content creation, patient education campaigns, SEO optimization for medical terms, and reputation management across digital platforms.",
    results: [
      {
        metric: "Online Consultations",
        improvement: "+280%",
        timeframe: "6 months"
      },
      {
        metric: "Website Traffic",
        improvement: "+320%",
        timeframe: "4 months"
      },
      {
        metric: "Patient Inquiries",
        improvement: "+250%",
        timeframe: "3 months"
      },
      {
        metric: "Social Media Engagement",
        improvement: "+400%",
        timeframe: "5 months"
      }
    ],
    testimonial: {
      quote: "Grow Beyyond transformed how I connect with patients online. Their AI-driven approach helped me build trust and reach more cancer patients who needed care. The results exceeded my expectations.",
      author: "Dr. Sindhu Pericherla",
      position: "Medical Oncologist, American Oncology Institute"
    },
    websiteUrl: "https://drsindhupericherlaonco.in/",
    instagramUrl: "https://www.instagram.com/oncocare_drsindhu/",
    services: ["AI Content Marketing", "Medical SEO", "Patient Education Campaigns", "Reputation Management"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: true
  },
  {
    id: "dr-namratha-oncology",
    clientName: "Dr. Namratha Sai Reddy",
    industry: "Healthcare - Radiation Oncology",
    challenge: "Gold medalist radiation oncologist needed to establish digital authority and increase patient trust while competing with established practices in Hyderabad.",
    solution: "AI-powered personal branding strategy, educational content automation, patient success story campaigns, and targeted digital advertising for cancer treatment services.",
    results: [
      {
        metric: "Patient Consultations",
        improvement: "+300%",
        timeframe: "5 months"
      },
      {
        metric: "Digital Authority Score",
        improvement: "+450%",
        timeframe: "6 months"
      },
      {
        metric: "Emergency Calls",
        improvement: "+200%",
        timeframe: "3 months"
      },
      {
        metric: "Online Reviews",
        improvement: "+350%",
        timeframe: "4 months"
      }
    ],
    testimonial: {
      quote: "Their AI marketing approach helped me reach more cancer patients in need. The personalized campaigns and digital strategy significantly increased my practice visibility.",
      author: "Dr. Namratha Sai Reddy",
      position: "Radiation Oncologist, ECMO Certified"
    },
    websiteUrl: "https://drnamrathasaireddy.in/",
    instagramUrl: "https://www.instagram.com/drbijivemulanamratha/",
    services: ["Personal Branding", "Medical Content AI", "Patient Acquisition", "Digital Authority Building"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: true
  },
  {
    id: "footryx-clinics",
    clientName: "Footryx Clinics",
    industry: "Healthcare - Podiatry & Gait Analysis",
    challenge: "Specialized foot clinic needed to educate patients about advanced gait analysis technology and increase bookings for their unique 3D analysis services.",
    solution: "Educational video marketing, AI-powered local SEO, patient testimonial campaigns, and social proof strategies highlighting their advanced technology and 95% success rate.",
    results: [
      {
        metric: "Gait Analysis Bookings",
        improvement: "+380%",
        timeframe: "4 months"
      },
      {
        metric: "Local Search Visibility",
        improvement: "+420%",
        timeframe: "3 months"
      },
      {
        metric: "Patient Retention",
        improvement: "+180%",
        timeframe: "6 months"
      },
      {
        metric: "Revenue Growth",
        improvement: "+300%",
        timeframe: "5 months"
      }
    ],
    testimonial: {
      quote: "Grow Beyyond's AI marketing helped us explain our complex gait analysis technology to patients. Our bookings tripled and we're now the leading podiatry clinic in Hyderabad.",
      author: "Dr. Pradeep Kumar",
      position: "Chief Podiatrist, Footryx Clinics"
    },
    websiteUrl: "https://footryxclinics.com/",
    instagramUrl: "https://www.instagram.com/footryxclinics_official/",
    services: ["Educational Content Marketing", "Local SEO", "Technology Explanation Videos", "Patient Journey Mapping"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: true
  },
  {
    id: "astrotoday",
    clientName: "AstroToday - K.C Reddy",
    industry: "Spiritual Services - Astrology & Vastu",
    challenge: "Renowned astrologer needed to digitize consultations and reach global audience while maintaining authenticity of Vedic astrology traditions.",
    solution: "AI-driven content strategy for astrological insights, automated booking systems, social media presence building, and educational content about Vedic astrology and Vastu.",
    results: [
      {
        metric: "Online Consultations",
        improvement: "+500%",
        timeframe: "6 months"
      },
      {
        metric: "International Clients",
        improvement: "+600%",
        timeframe: "8 months"
      },
      {
        metric: "Social Media Following",
        improvement: "+750%",
        timeframe: "5 months"
      },
      {
        metric: "Website Engagement",
        improvement: "+400%",
        timeframe: "4 months"
      }
    ],
    testimonial: {
      quote: "Grow Beyyond helped me take ancient Vedic wisdom to the digital world. Now I can guide people globally while maintaining the authenticity of our traditions.",
      author: "K.C Reddy",
      position: "Vedic Astrologer & Vastu Expert"
    },
    websiteUrl: "https://astrotoday.net/",
    instagramUrl: "https://www.instagram.com/astrotoday.official/",
    services: ["Spiritual Content Marketing", "Global Audience Building", "Consultation Automation", "Cultural Digital Transformation"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: false
  },
  {
    id: "ista-digital-media",
    clientName: "ISTA Digital Media",
    industry: "Event Management - Medical Events",
    challenge: "Medical event organizer needed to increase doctor participation in CME programs and corporate events while building industry credibility.",
    solution: "B2B AI marketing strategy, professional network building, thought leadership content, and automated event marketing campaigns targeting medical professionals.",
    results: [
      {
        metric: "Doctor Registrations",
        improvement: "+450%",
        timeframe: "4 months"
      },
      {
        metric: "Event Attendance",
        improvement: "+300%",
        timeframe: "3 months"
      },
      {
        metric: "Brand Partnerships",
        improvement: "+250%",
        timeframe: "5 months"
      },
      {
        metric: "Industry Recognition",
        improvement: "+400%",
        timeframe: "6 months"
      }
    ],
    testimonial: {
      quote: "Their AI-powered B2B marketing strategy helped us become the leading medical event organizer. Our doctor participation rates have never been higher.",
      author: "Rajesh Kumar",
      position: "Founder, ISTA Digital Media"
    },
    websiteUrl: "https://istadigitalmedia.com/",
    services: ["B2B Marketing", "Professional Network Building", "Event Marketing Automation", "Medical Industry Branding"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: false
  },
  {
    id: "seema-life-coach",
    clientName: "Seema - Life Coach",
    industry: "Personal Development - Life Coaching",
    challenge: "Professional life coach needed to scale her practice online and reach more clients seeking personal transformation and career guidance.",
    solution: "Personal brand building, AI-powered content creation for motivational content, client success story campaigns, and digital coaching platform optimization.",
    results: [
      {
        metric: "Coaching Clients",
        improvement: "+350%",
        timeframe: "5 months"
      },
      {
        metric: "Online Course Sales",
        improvement: "+400%",
        timeframe: "4 months"
      },
      {
        metric: "Social Media Reach",
        improvement: "+600%",
        timeframe: "3 months"
      },
      {
        metric: "Client Transformation Rate",
        improvement: "+180%",
        timeframe: "6 months"
      }
    ],
    testimonial: {
      quote: "Grow Beyyond's AI marketing helped me reach more people who needed life transformation. My coaching practice has grown beyond my dreams.",
      author: "Seema",
      position: "Certified Life Coach & Transformation Expert"
    },
    websiteUrl: "#",
    instagramUrl: "https://www.instagram.com/seemaalifecoach/",
    services: ["Personal Brand Building", "Motivational Content AI", "Client Acquisition", "Digital Coaching Optimization"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: false
  },
  {
    id: "natureland-infra",
    clientName: "Natureland Infrastructure",
    industry: "Real Estate & Infrastructure",
    challenge: "Infrastructure company needed to build trust with potential property buyers and increase lead generation for their real estate projects.",
    solution: "Trust-building content strategy, property showcase campaigns, AI-powered lead nurturing, and social proof marketing for real estate credibility.",
    results: [
      {
        metric: "Property Inquiries",
        improvement: "+380%",
        timeframe: "4 months"
      },
      {
        metric: "Site Visits",
        improvement: "+300%",
        timeframe: "3 months"
      },
      {
        metric: "Conversion Rate",
        improvement: "+220%",
        timeframe: "5 months"
      },
      {
        metric: "Digital Presence",
        improvement: "+450%",
        timeframe: "6 months"
      }
    ],
    testimonial: {
      quote: "Their AI marketing approach helped us build trust with property buyers. Our inquiries and site visits have increased dramatically.",
      author: "Suresh Reddy",
      position: "Director, Natureland Infrastructure"
    },
    websiteUrl: "#",
    instagramUrl: "https://www.instagram.com/natureland_infra_official/",
    services: ["Real Estate Marketing", "Trust Building Campaigns", "Lead Generation AI", "Property Showcase Strategies"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: false
  },
  {
    id: "dr-prasanna-boddupally",
    clientName: "Dr. Prasanna Boddupally",
    industry: "Healthcare - Dermatology",
    challenge: "Expert dermatologist needed to establish online presence and attract patients seeking specialized skin care treatments in a competitive healthcare market.",
    solution: "AI-powered personal branding, educational skin care content strategy, local SEO optimization, and patient testimonial campaigns for dermatology services.",
    results: [
      {
        metric: "Patient Consultations",
        improvement: "+320%",
        timeframe: "5 months"
      },
      {
        metric: "Online Visibility",
        improvement: "+400%",
        timeframe: "4 months"
      },
      {
        metric: "Treatment Bookings",
        improvement: "+280%",
        timeframe: "3 months"
      },
      {
        metric: "Social Engagement",
        improvement: "+350%",
        timeframe: "4 months"
      }
    ],
    testimonial: {
      quote: "Grow Beyyond's AI marketing helped me connect with patients seeking quality skin care. My practice visibility has grown significantly.",
      author: "Dr. Prasanna Boddupally",
      position: "Dermatologist & Skin Care Specialist"
    },
    websiteUrl: "https://www.drprasannaboddupally.in/",
    services: ["Medical Branding", "Dermatology SEO", "Patient Education Content", "Healthcare Marketing"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: false
  },
  {
    id: "fruits-express",
    clientName: "Fruits Express",
    industry: "E-commerce - Fresh Produce Delivery",
    challenge: "Online fruit delivery startup needed to build brand awareness and increase orders in a competitive fresh produce market.",
    solution: "E-commerce marketing strategy, AI-powered social media campaigns, customer retention automation, and local delivery optimization marketing.",
    results: [
      {
        metric: "Online Orders",
        improvement: "+450%",
        timeframe: "4 months"
      },
      {
        metric: "Customer Base",
        improvement: "+380%",
        timeframe: "5 months"
      },
      {
        metric: "Repeat Orders",
        improvement: "+300%",
        timeframe: "3 months"
      },
      {
        metric: "Brand Awareness",
        improvement: "+500%",
        timeframe: "4 months"
      }
    ],
    testimonial: {
      quote: "Their AI marketing transformed our fruit delivery business. Orders increased dramatically and we've built a loyal customer base.",
      author: "Fruits Express Team",
      position: "Fresh Produce Delivery"
    },
    websiteUrl: "https://fruitsexpress.in/",
    services: ["E-commerce Marketing", "Social Media AI", "Customer Retention", "Local Delivery Marketing"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: true
  },
  {
    id: "plotsque",
    clientName: "Plotsque",
    industry: "Real Estate - Land & Plots",
    challenge: "Real estate company needed to generate quality leads for plot sales and build trust with property investors in a competitive market.",
    solution: "Real estate lead generation campaigns, AI-powered property showcase marketing, investor trust-building content, and targeted digital advertising.",
    results: [
      {
        metric: "Lead Generation",
        improvement: "+420%",
        timeframe: "4 months"
      },
      {
        metric: "Site Visits",
        improvement: "+350%",
        timeframe: "3 months"
      },
      {
        metric: "Plot Sales",
        improvement: "+280%",
        timeframe: "6 months"
      },
      {
        metric: "Investor Inquiries",
        improvement: "+400%",
        timeframe: "5 months"
      }
    ],
    testimonial: {
      quote: "Grow Beyyond's AI marketing strategy helped us reach serious property investors. Our lead quality and conversions improved significantly.",
      author: "Plotsque Team",
      position: "Real Estate & Plot Sales"
    },
    websiteUrl: "https://www.plotsque.com/",
    services: ["Real Estate Marketing", "Lead Generation AI", "Property Showcase", "Investor Marketing"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: true
  },
  {
    id: "chitraka-fabrics",
    clientName: "Chitraka Fabrics",
    industry: "Retail - Textiles & Fashion",
    challenge: "Traditional fabric store needed to expand online presence and reach customers beyond their local market while maintaining their heritage appeal.",
    solution: "Fashion e-commerce marketing, AI-powered product showcase campaigns, cultural branding strategy, and social media fashion marketing.",
    results: [
      {
        metric: "Online Sales",
        improvement: "+380%",
        timeframe: "5 months"
      },
      {
        metric: "Website Traffic",
        improvement: "+450%",
        timeframe: "4 months"
      },
      {
        metric: "Customer Reach",
        improvement: "+520%",
        timeframe: "6 months"
      },
      {
        metric: "Social Following",
        improvement: "+600%",
        timeframe: "4 months"
      }
    ],
    testimonial: {
      quote: "Their AI marketing helped us take our traditional fabrics business online. We now reach customers across India with our heritage collection.",
      author: "Chitraka Fabrics Team",
      position: "Traditional Textiles & Fashion"
    },
    websiteUrl: "https://www.chitrakafabrics.in/",
    services: ["Fashion Marketing", "E-commerce AI", "Cultural Branding", "Social Media Marketing"],
    imageUrl: "/lovable-uploads/3957b019-161b-40ff-aed4-84170e7306b4.png",
    featured: true
  }
];