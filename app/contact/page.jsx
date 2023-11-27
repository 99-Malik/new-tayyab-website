"use";
import React from "react";
import phoneNumber from "../../content/phoneNumber";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BoschHeader from "../../components/header/BoschHeader";

const ContactPage = () => {
  function gtag_report_conversion(url) {
    var callback = function() {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-11364296756/sxVbCLOniLwYEP671N0p",
      event_callback: callback
    });
    return false;
  }
  return (
    <div className="hero min-h-screen bg-[url(/images/backgrounds/2.jpg)] bg-fixed">
      <div className="hero-overlay bg-black bg-opacity-70" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left md:ml-10 mt-[15px]">
          <h1 className="text-3xl font-bold text-[#F8860D]">Contact Us!</h1>
          <p className="py-6 text-white text-bold">
            For all your Samsung,Lg,Bosch,Siemens,Electrolux and Whirlpool
            appliance repair needs, don't hesitate to contact us today! <br />{" "}
            We are available 24/7 to serve you.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#202020]">
          <div className="card-body">
            <div className="flex gap-3 flex-col">
              <p className="text-[#F8860D] font-bold">Call us on: </p>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer"
              >
                <div className="p-4 bg-[#F8860D] rounded-full">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-medium text-white">
                  {phoneNumber}
                </div>
              </a>
              <p className="mt-10 text-[#F8860D] font-bold">Reach us on: </p>
              <div className="flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer">
                <a
                  href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
                  target="_blank"
                  className="p-[0.9rem] bg-[#F8860D] rounded-full"
                >
                  <Image
                    src="/whatsapp.svg"
                    width={30}
                    height={30}
                    alt="WhatsApp"
                  />
                </a>
                <div className="text-lg font-medium text-white">Whatsapp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
