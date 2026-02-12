import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function usePageViews(measurementId: string) {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", measurementId, {
      page_path: location.pathname + location.search,
    });
  }, [location, measurementId]);
}
