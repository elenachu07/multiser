import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * usePageViews - reliable SPA page view sender for GA4
 * measurementId: your "G-XXXX" GA4 ID
 */
export function usePageViews(measurementId: string) {
  const location = useLocation();

  useEffect(() => {
    const page_path = location.pathname + location.search;

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // Helper to call gtag if ready
    const sendViaGtag = () => {
      try {
        if (typeof window.gtag === "function") {
          window.gtag("config", measurementId, { page_path });
          return true;
        }
      } catch (e) {
        // ignore and fallback to dataLayer push
      }
      return false;
    };

    // First attempt: if gtag exists right away, use it
    if (sendViaGtag()) {
      return;
    }

    // Fallback push (this will be consumed by gtag when it loads)
    window.dataLayer.push({
      event: "page_view",
      page_path,
    });

    // Poll for gtag becoming available for a short time and then send the real config call once.
    let attempts = 0;
    const maxAttempts = 20; // 20 * 250ms = 5 seconds
    const interval = setInterval(() => {
      attempts++;
      if (sendViaGtag() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [location, measurementId]);
}
