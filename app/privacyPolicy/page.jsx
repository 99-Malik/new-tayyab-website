"use client";
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
      send_to: "AW-11364296756	/sxVbCLOniLwYEP671N0p",
      event_callback: callback
    });
    return false;
  }
  return (
    <div className="hero min-h-screen bg-[url(/images/backgrounds/2.jpg)] bg-fixed mt-[-10px]">
      <div className="hero-overlay bg-black bg-opacity-70" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left md:ml-10">
          <h1 className="text-4xl font-bold text-[#F8860D] mt-[100px]">PRivacy Policy!</h1>
          <p className="py-6 text-white text-bold">
            Privacy Policy: At Appliance Fix AE, we value your privacy and are
            dedicated to safeguarding your personal information. This Privacy
            Policy outlines how we collect, utilize, protect, and share your
            data when you use our website and services. By engaging with our
            website or accessing our repair services, you consent to the terms
            described herein. We may collect different types of information when
            you interact with our website or contact us for appliance repair
            services, including personal information like your name, contact
            details (phone number, email address), and any relevant information
            you provide when scheduling repair services. We also gather device
            information, such as device identifiers, operating systems, browser
            types, and IP addresses, along with usage data related to your
            interactions with our website. Your information serves several vital
            purposes, primarily to facilitate our repair services by scheduling
            appointments, confirming service details, and promptly responding to
            your inquiries via phone or WhatsApp. Additionally, we analyze this
            data to enhance our website and services, ensuring a seamless user
            experience. Rest assured, we do not sell, trade, or rent your
            personal information to third parties. We may share your data with
            trusted service providers who assist us in delivering our services,
            always with a commitment to maintain data confidentiality. We take
            the security of your information seriously and implement measures to
            protect it from unauthorized access, disclosure, or alteration.
            However, please note that no internet data transmission is entirely
            secure, and while we strive to protect your data, we cannot
            guarantee absolute security. You have the option not to provide
            certain information, but this may limit your access to some of our
            services. You can also opt out of marketing communications by
            following the unsubscribe instructions in our emails or by
            contacting us directly. 
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
                  className="p-[0.9rem] bg-[#F8860D]  rounded-full"
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
