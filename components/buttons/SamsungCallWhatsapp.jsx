'use client';

import React from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import phoneNumber from "../../content/phoneNumber";
import { usePathname } from "next/navigation";
import { GTM_ID } from "../../lib/gtm";

const ModernCallWhatsapp = () => {
  const pathname = usePathname();
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: `${GTM_ID}/sxVbCLOniLwYEP671N0p`,
      event_callback: callback,
    });
    return false;
  }
  
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Instant Service</h3>
        <p className="text-gray-600">Choose your preferred way to contact us</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={() => gtag_report_conversion(pathname)}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <PhoneIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-lg">Call Now</div>
              <div className="text-cyan-100 text-sm">{phoneNumber}</div>
            </div>
          </div>
        </a>
        
        {/* WhatsApp Button */}
        <a
          href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`}
          target="_blank"
          className="group bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={() => gtag_report_conversion(pathname)}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image src="/whatsapp.svg" width={24} height={24} alt="WhatsApp" />
            </div>
            <div>
              <div className="font-semibold text-lg">WhatsApp</div>
              <div className="text-green-100 text-sm">Quick Response</div>
            </div>
          </div>
        </a>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          📞 Available 24/7 • 🚀 Same Day Service • ✅ Certified Technicians
        </p>
      </div>
    </div>
  );
};

export default ModernCallWhatsapp;
