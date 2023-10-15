import React from "react";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import phoneNumber from "../../content/phoneNumber";
import { usePathname } from "next/navigation";
import { GTM_ID } from "../../lib/gtm";

const CallOrWhatsappButton = () => {
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
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer"
          onClick={() => gtag_report_conversion(pathname)}
        >
          <div className="p-4 bg-[#F8860D] rounded-full">
            <PhoneIcon className="h-6 w-6 text-white" />
          </div>
          <div className="text-lg font-medium">{phoneNumber}</div>
        </a>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <div className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer">
          <a
            href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
            target="_blank"
            className="p-[0.9rem] bg-[#F8860D] rounded-full"
            onClick={() => gtag_report_conversion(pathname)}
          >
            <Image src="/whatsapp.svg" width={30} height={30} alt="WhatsApp" />
          </a>
          <div className="text-lg font-medium">Whatsapp Us</div>
        </div>
      </div>
    </div>
  );
};

export default CallOrWhatsappButton;
