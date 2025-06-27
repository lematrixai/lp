'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
  }
}

export default function IntercomProvider() {
  useEffect(() => {
    // Load Intercom script
    const script = document.createElement('script');
    script.innerHTML = `
      window.intercomSettings = {
        app_id: 's4h2kb0h'
      };
    `;
    document.head.appendChild(script);

    // Load Intercom widget script
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://widget.intercom.io/widget/s4h2kb0h';
    widgetScript.async = true;
    document.head.appendChild(widgetScript);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(widgetScript)) {
        document.head.removeChild(widgetScript);
      }
    };
  }, []);

  return null;
} 