// Conversion tracking utility for Zoho PageSense and other analytics
declare global {
  interface Window {
    pagesense?: {
      push: (args: unknown[]) => void;
    };
    dataLayer?: unknown[];
  }
}

type ConversionEvent = 
  | 'contact_form_submit'
  | 'newsletter_subscribe'
  | 'cta_click'
  | 'audit_request'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click';

interface TrackingData {
  event: ConversionEvent;
  category?: string;
  label?: string;
  value?: number;
  metadata?: Record<string, string | number | boolean>;
}

export const trackConversion = ({ event, category, label, value, metadata }: TrackingData) => {
  // Log for debugging
  console.log('Conversion tracked:', { event, category, label, value, metadata });

  // Zoho PageSense tracking
  if (window.pagesense) {
    window.pagesense.push(['trackEvent', event, {
      category: category || 'conversion',
      label: label || event,
      value: value || 1,
      ...metadata,
    }]);
  }

  // Google Analytics / GTM (if added later)
  if (window.dataLayer) {
    window.dataLayer.push({
      event: event,
      eventCategory: category || 'conversion',
      eventLabel: label || event,
      eventValue: value || 1,
      ...metadata,
    });
  }
};

export const trackCTAClick = (buttonName: string, location: string) => {
  trackConversion({
    event: 'cta_click',
    category: 'CTA',
    label: buttonName,
    metadata: { location, timestamp: new Date().toISOString() },
  });
};

export const trackFormSubmit = (formName: string, formData?: Record<string, string>) => {
  trackConversion({
    event: formName === 'newsletter' ? 'newsletter_subscribe' : 'contact_form_submit',
    category: 'Form',
    label: formName,
    metadata: { 
      formName, 
      timestamp: new Date().toISOString(),
      hasCompany: formData?.company ? 'yes' : 'no',
    },
  });
};

export const trackContactClick = (type: 'whatsapp' | 'phone' | 'email', value: string) => {
  const eventMap = {
    whatsapp: 'whatsapp_click',
    phone: 'phone_click',
    email: 'email_click',
  } as const;
  
  trackConversion({
    event: eventMap[type],
    category: 'Contact',
    label: type,
    metadata: { value, timestamp: new Date().toISOString() },
  });
};

// Custom hook for easy usage in components
export const useConversionTracking = () => {
  return {
    trackConversion,
    trackCTAClick,
    trackFormSubmit,
    trackContactClick,
  };
};
