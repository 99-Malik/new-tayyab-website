"use client";

import React, { useState, useEffect } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
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
    <div className="fixed bottom-4 right-4 z-50">
      {/* Button Container - Vertically Stacked */}
      <div className="flex flex-col space-y-3">
        {/* WhatsApp Button - Top Position */}
        <a
          href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`}
          target="_blank"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sm:rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          onClick={() => gtag_report_conversion(pathname)}
        >
          <Image 
            src="/whatsapp.svg" 
            width={20} 
            height={20} 
            alt="WhatsApp" 
            className="group-hover:scale-110 transition-transform duration-300" 
          />
        </a>

        {/* Main Call Button - Bottom Position */}
        <div className="relative">
          <a
            href={`tel:${phoneNumber}`}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl sm:rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            onClick={() => gtag_report_conversion(pathname)}
          >
            <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </a>

          {/* Pulse Animation - Only on Call Button */}
          <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl sm:rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-ping opacity-20"></div>
          
          {/* Floating Badge - Mobile Only */}
          <div className="absolute -top-1 -right-1 sm:hidden">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Trust Indicator - Mobile Only */}
      <div className="mt-2 text-center sm:hidden">
        <p className="text-[8px] text-gray-600 bg-white/80 px-2 py-1 rounded-full shadow-sm">
          24/7 Available
        </p>
      </div>
    </div>
  );
};

export default FixedCallButtons;
