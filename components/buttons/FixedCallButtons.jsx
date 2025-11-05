"use client";

import React, { useState, useEffect } from "react";
import { PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import phoneNumber from "../../content/phoneNumber";
import { usePathname } from "next/navigation";
import { GTM_ID } from "../../lib/gtm";

const FixedCallButtons = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after page load for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Determine brand color based on pathname
  const getBrandColor = () => {
    if (pathname.startsWith('/boschRepair')) {
      return { 
        gradient: 'linear-gradient(135deg, #CF1F3B 0%, #8b1a2a 100%)',
        pulse: 'linear-gradient(135deg, #CF1F3B 0%, #8b1a2a 100%)'
      };
    } else if (pathname.startsWith('/siemensRepair')) {
      return { 
        gradient: 'linear-gradient(135deg, #01A4B4 0%, #007a87 100%)',
        pulse: 'linear-gradient(135deg, #01A4B4 0%, #007a87 100%)'
      };
    } else if (pathname.startsWith('/lgRepair')) {
      return { 
        gradient: 'linear-gradient(135deg, #A50034 0%, #7a0026 100%)',
        pulse: 'linear-gradient(135deg, #A50034 0%, #7a0026 100%)'
      };
    } else if (pathname.startsWith('/samsungRepair')) {
      return { 
        gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        pulse: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
      };
    }
    // Default colors for non-brand pages
    return { 
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      pulse: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    };
  };

  const brandColors = getBrandColor();

  // Get solid brand color for WhatsApp button
  const getSolidBrandColor = () => {
    if (pathname.startsWith('/boschRepair')) {
      return '#CF1F3B';
    } else if (pathname.startsWith('/siemensRepair')) {
      return '#01A4B4';
    } else if (pathname.startsWith('/lgRepair')) {
      return '#A50034';
    } else if (pathname.startsWith('/samsungRepair')) {
      return '#000000';
    }
    return '#06b6d4';
  };

  // Get brand-specific WhatsApp message
  const getWhatsAppMessage = () => {
    if (pathname.startsWith('/boschRepair')) {
      return `Hi, I need Bosch appliance repair service.`;
    } else if (pathname.startsWith('/siemensRepair')) {
      return `Hi, I need Siemens appliance repair service.`;
    } else if (pathname.startsWith('/lgRepair')) {
      return `Hi, I need LG appliance repair service.`;
    } else if (pathname.startsWith('/samsungRepair')) {
      return `Hi, I need Samsung appliance repair service.`;
    }
    return `Hi, I need appliance repair service.`;
  };

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-11336173490/ms1BCO3F1o0ZELKPwZ0q',
      'event_callback': callback
    });
    return false;
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Button Container - Vertically Stacked */}
      <div className="flex flex-col space-y-4">
        {/* WhatsApp Button - Top Position */}
        <a
          href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(getWhatsAppMessage())}`}
          target="_blank"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-full border-2 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group hover:opacity-90"
          style={{ backgroundColor: getSolidBrandColor() }}
          onClick={() => gtag_report_conversion(pathname)}
        >
          <ChatBubbleLeftRightIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </a>

        {/* Main Call Button - Bottom Position */}
        <div className="relative">
          <a
            href={`tel:${phoneNumber}`}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group opacity-90 hover:opacity-100"
            style={{ background: brandColors.gradient }}
            onClick={() => gtag_report_conversion(pathname)}
          >
            <PhoneIcon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white group-hover:scale-110 transition-transform duration-300" />
          </a>

          {/* Pulse Animation - Only on Call Button */}
          <div 
            className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-full animate-ping opacity-20"
            style={{ background: brandColors.pulse }}
          ></div>
          
          {/* Floating Badge - Mobile Only */}
          <div className="absolute -top-1 -right-1 sm:hidden">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: pathname.startsWith('/samsungRepair') ? '#000000' : pathname.startsWith('/boschRepair') ? '#CF1F3B' : pathname.startsWith('/siemensRepair') ? '#01A4B4' : pathname.startsWith('/lgRepair') ? '#A50034' : '#ef4444' }}></div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default FixedCallButtons;
