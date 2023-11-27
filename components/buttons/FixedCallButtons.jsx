"use client";

import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import phoneNumber from "../../content/phoneNumber";
import { usePathname } from "next/navigation";
import { GTM_ID } from "../../lib/gtm";

const FixedCallButtons = () => {
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
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-center justify-between gap-2 p-5">
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-circle btn-lg bg-blue-400 border-none hover:bg-blue-500"
        onClick={() => gtag_report_conversion(pathname)}
      >
        <PhoneIcon className="h-8 w-8 text-white" />
      </a>
      <a
        href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
        target="_blank"
        className="btn btn-circle btn-lg bg-green-500 border-none hover:bg-green-600"
        onClick={() => gtag_report_conversion(pathname)}
      >
        <Image src="/whatsapp.svg" loading="lazy" width={45} height={45} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FixedCallButtons;
