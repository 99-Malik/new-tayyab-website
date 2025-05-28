"use client";

import React from "react";
import BoschHeader from "../../components/header/BoschHeader";
import CallOrWhatsappButton from "../../components/buttons/SamsungButton";
import phoneNumber from "../../content/phoneNumber";
import ServicesSection from "../../components/sections/ServicesSection";
import Footer from "../../components/footer/samsungFooter";
import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const BoschPage = () => {
  return <div>
      {/* MAIN SECTION */}

      <div className="hero h-auto bg-[url(/images/backgrounds/lg.webp)] bg-fixed">
        <div className="hero-overlay bg-black bg-opacity-70" />
        <div className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10" style={{ zIndex: 0 }}>
          <Image src="/images/fridge/washing.jpg" className="max-w-xs md:max-w-xl shadow-2xl" height={200} width={200} />
          <div>
            <h1 className="text-4xl  font-raleway text-white leading-tight">
              <span className="text-[#F8860D] font-bold">
                RepairHomeUAE
              </span> <span>
                Siemens Appliances Service Center in UAE
              </span>
            </h1>
            <p className=" text-md text-center py-2 font-raleway text-white">
              Appliance Fix AE is an authorized Siemens service center in Dubai
              and Abu Dhabi, you can rest assured that your appliance will be
              fixed quickly and efficiently with the highest quality parts
              available.
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button className="px-5 py-4 bg-[#F8860D] hover:scale-110  text-black font-bold hover:bg-[white] hover:text-black hover:font-bold rounded-lg duration-200 shadow-md" onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                  gtag_report_conversion(`tel:${phoneNumber}`);
                }}>
                {phoneNumber}
              </button>
              <button className="px-5 py-4 bg-[#F8860D] hover:scale-110  text-black font-bold hover:bg-[white] hover:text-black hover:font-bold rounded-lg duration-200 shadow-md" onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}>
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-[#202020]" />
      <div className="w-full h-[100px] flex bg-[#202020] justify-center mt-[-2px]">
        <div className="w-[500px]  h-[80px] md:h-full  flex flex-col text-center align-middle">
          <h5 className="text-base text-[#F8860D] font-bold ">
            We Commit Quality Repairing
          </h5>
          <h1 className="text-3xl text-[#F8860D] font-extrabold">
            We Maintain Trust!
          </h1>
        </div>
      </div>

      <div className="w-auto mt-[-2px] bg-[#2c2a2a]  md:mx-0 md:w-full h-auto md:h-auto  flex flex-col md:flex-row justify-evenly items-center ">
        <div className="w-full p-4 md:w-[300px] h-[300px]">
          <div className="w-full   drop-shadow-3xl h-[250px] md:hover:scale-110 duration-300  bg-[#2c2a2a] rounded-2xl border-[3px] border-[#F8860D]  flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-[#F8860D] hover:scale-110 duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>

            <h1 className="text-xl mt-2 font-bold text-[#F8860D]">
              Call US AnyTime
            </h1>

            <h1 className="p-2 md:p-2 font-bold text-[#F8860D]">
              We do offer a 24*7 repair & service of Siemens Appliances.
            </h1>
          </div>
        </div>

        <div className="w-full p-4   md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl  bg-[#2c2a2a] md:hover:scale-110 duration-300 rounded-2xl  border-[3px] border-[#F8860D]  flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-[#F8860D] hover:scale-110 duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
            </svg>

            <h1 className="text-xl mt-2 font-bold text-[#F8860D]">
              Customer Satisfaction
            </h1>

            <h1 className="p-2 md:p-2 font-bold text-[#F8860D]">
              We maintain a professional workflow for excellent customer
              relationships.
            </h1>
          </div>
        </div>
        <div className="w-full p-4   md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-[#2c2a2a] border-[3px] border-[#F8860D]  md:hover:scale-110 duration-300 rounded-2xl  border-grey flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-[#F8860D] hover:scale-110 duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>

            <h1 className="text-xl mt-2 font-bold text-[#F8860D]">
              High Quality Service
            </h1>

            <h1 className="p-2 md:p-2 font-bold text-[#F8860D]">
              We Provide Top Notch High Quality Repairing Services for Siemens
              Home Appliances.
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full bg-black h-auto   ">
        <div className="hero min-h-screen bg-[#fafafa] bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
          <div className="hero-overlay bg-black bg-opacity-70" />
          <div className="hero-content  flex-col lg:flex-row-reverse ">
            <img loading="lazy" src="/images/2.webp" className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl" />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-[#F8860D]">
                "Siemens Appliances REPAIR IN DUBAI AND ABU DHABI"
              </h1>
              <p className="py-12 text-md px-4 font-semibold text-white">
                "We recognize the uniqueness of every repair task, which is why we offer tailor-made solutions designed to meet the specific requirements of our clients. <span className="text-lg text-[#F8860D] font-extrabold">
                  {" "}Our primary objective is to ensure the efficient and
                  effective repair of our clients' appliances, allowing them
                  to seamlessly resume their daily routines without
                  interruptions
                </span>.Therefore, you can always rely on Siemens Customer Care as the ultimate destination for repairing your home appliances. Simply get in touch with us via a call or WhatsApp to schedule an appointment."
              </p>
              <button className="btn btn-info-content bg-[#F8860D] font-extrabold text-black hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  " onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                  gtag_report_conversion(`tel:${phoneNumber}`);
                }}>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5">
            <div className="max-w-xs flex justify-end items-end">
              <img loading="lazy" src="/images/washing/2.jpg" className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl" />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img loading="lazy" src="/images/washing/1.jpg" className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl" />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img loading="lazy" src="/images/stove/1.jpg" className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl" />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img loading="lazy" src="/images/fridge/1.jpg" className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold max-w-xl mt-2">
              Appliance Fix AE in Dubai and Abu Dhabi provides you the best
              Siemens Repair Service.
            </h1>
            <div className="flex gap-10 pt-5 flex-col sm:flex-row">
              <div className="flex items-center gap-1">
                <WrenchScrewdriverIcon className="h-10 w-10 text-neutral-focus hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Expert Technician</div>
              </div>
              <div className="flex items-center gap-1">
                <CheckBadgeIcon className="h-12 w-12 text-neutral-focus hover:scale-110 duration-300" />
                <div className="text-lg font-bold">Best Service Quality</div>
              </div>
            </div>
            <p className="py-6 max-w-xl">
              Siemens Appliances are renowned for their resource-efficient
              operation, consuming less water, energy, and detergent.
              Therefore, you can always rely on Siemens Customer Care as the
              ultimate destination for repairing your home appliances. Simply
              get in touch with us via a call or WhatsApp to schedule an
              appointment. Our service center is equipped to deliver
              top-quality repair and maintenance services for the entire range
              of Siemens appliances, including Siemens washing machines,
              dishwashers, fridges, dryers, and all other electrical home
              appliances. Our commitment is to have a technician arrive and
              repair your machine on the same day. At the Siemens Service
              Center Dubai, our goal is to provide our customers with the
              finest repair and maintenance services. Our professionals
              possess the expertise to repair all models of Siemens washing
              machines, equipped with cutting-edge tools for maintenance and
              repair tasks. For all your Siemens home appliance repair needs,
              Our Siemens Service Center is the ultimate destination."
            </p>
            <div className="divider" />
            <CallOrWhatsappButton />
            <div className="flex gap-10 flex-col sm:flex-row" />
          </div>
        </div>
      </div>
      <div className="hero bg-[#171717]">
        <div className="flex flex-wrap px-2 md:px-10 justify-center lg:justify-between items-center py-5 w-full max-w-6xl gap-1">
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#F8860D] rounded-2xl  md:mb-0 md:mt-0">
              <div className="stat-figure text-secondary">
                <div className="h-[40px] w-[40px] md:w-[30px] md:ml-[-30px] ">
                  <Image src="/washing.svg" className="overflow-hidden  mt-3 " width={200} height={200} />
                </div>
              </div>
              <div className="stat-title text-[#F8860D]">More Than</div>
              <div className="stat-value text-[#F8860D]">2000+</div>
              <div className="stat-desc text-[#F8860D]">
                Washing Machines Repaired
              </div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#F8860D] rounded-2xl mt-2  md:mb-0 md:mt-0">
              <div className="stat-figure text-primary">
                <div className="h-[40px] w-[40px] md:w-[30px] md:ml-[-30px] ">
                  <Image src="/dishwasher.svg" className="overflow-hidden  mt-3 " width={200} height={200} />
                </div>
              </div>
              <div className="stat-title text-[#F8860D]">More Than</div>
              <div className="stat-value text-[#F8860D]">3000+</div>
              <div className="stat-desc text-[#F8860D]">
                Dishwasher Repaired
              </div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#F8860D] rounded-2xl mt-2  md:mb-0 md:mt-0">
              <div className="stat-figure text-secondary">
                <div className="h-[40px] w-[40px] md:w-[30px] md:ml-[-30px] ">
                  <Image src="/dryer.svg" className="overflow-hidden  mt-3 " width={200} height={200} />
                </div>
              </div>
              <div className="stat-title text-[#F8860D]">More than</div>
              <div className="stat-value text-[#F8860D]">1700+</div>
              <div className="stat-desc text-[#F8860D]">Dryer Repaired</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#F8860D] rounded-2xl mt-2 mb-2 md:mb-0 md:mt-0">
              <div className="stat-figure text-secondary">
                <div className="h-[40px] w-[40px] md:w-[30px] md:ml-[-30px] ">
                  <Image src="/stove.svg" className="overflow-hidden  mt-3 " width={200} height={200} />
                </div>
              </div>
              <div className="stat-title text-[#F8860D]">More than</div>
              <div className="stat-value text-[#F8860D]">2100+</div>
              <div className="stat-desc text-[#F8860D]">
                stove/Cooker Repaired
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-black h-auto md:h-[500px] ">
        <div className="hero min-h-screen bg-[#fafafa]">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <img loading="lazy" src="/images/fridge/2.jpg" className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl" />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                We Provide Repairing Services In Areas OF Dubai and Abu Dhabi!
              </h1>
              <p className="py-6 text-black">
                So, if you are looking for professional Siemens Repair
                Technicians in Dubai and Abu Dhabi, then contact us today.We
                provide repair services for all kinds of Siemens kitchen
                appliances, including washing
                machines,dishwashers,dryers,Fridges, cooking ranges,
                dishwashers, microwaves, and more. We have years of success in
                this industry We offer excellent customer service We have many
                satisfied customers Offer comprehensive Appliance repair
                insurance. We have well-trained technicians Our professionals
                used to latest repair tools for the best diagnosis At 24/7
                Customer Care, we are committed to providing our clients with
                the highest quality of service.
              </p>
              <button className="btn btn-info-content font-extrabold bg-[#F8860D] text-black hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  " onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                  gtag_report_conversion(`tel:${phoneNumber}`);
                }}>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold">
              Siemens Service Center Abu Dhabi
            </h1>
            <p className="py-6">
              We provide Siemens Service Center in Abu Dhabi.The best Siemens
              Service Center in Abu Dhabi.We provide following services:
            </p>
            <p>
              "Washing Machine Repair: In the UAE, count on us for dependable and efficient washing machine repair services. Our expert technicians will have your appliance running smoothly. Dishwasher Repair: Restore your dishes' sparkle with our trusted dishwasher repair service in the UAE.Siemens Service Center Dubai: We are dedicated to providing high-quality service and repairs for Siemens kitchen appliances. Our services cover a wide range of Siemens kitchen appliances, including fridges, cooking ranges, dishwashers, microwaves, and more. We have a proven track record of success, excellent customer service, and many satisfied customers.You can trust our well-trained technicians to deliver professional and reliable Siemens repairs, making sure your appliances are in capable hands. Siemens Service Center in Abu Dhabi: Our Siemens Service Team is here for you no matter what, no matter when. Whether you need help with your Siemens service center, we've got you covered. Siemens washing machines are known for using less water, energy, and detergent, so you can rely on Siemens Customer Care as the best place to fix your home appliances. <span className="text-lg font-bold">Simply call us or send a WhatsApp message to book your appointment. At our service center, we provide high-quality repair and maintenance services for all your Siemens appliances, including washing machines, dishwashers, fridges, dryers, and all electrical home appliances.</span> We aim to fix your machine the same day. Siemens Service Center Dubai: We strive to provide our customers with the best repair and maintenance services. Our professionals are skilled at repairing all models of Siemens washing machines and have access to cutting-edge equipment for maintaining and repairing Siemens appliances. No Extra Charges: We don't charge extra. We provide reliable and quick repair services."
            </p>
            <div className="flex flex-col mt-6 md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button className="px-5 py-4 bg-[#F8860D] font-extrabold text-black hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md" onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                  gtag_report_conversion(`tel:${phoneNumber}`);
                }}>
                {phoneNumber}
              </button>
              <button className="px-5 py-4 bg-[#F8860D] text-black font-extrabold hover:text-black hover:text-lg hover:bg-[white] rounded duration-200 shadow-md" onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}>
                Whatsapp Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}

      {/* Hero Section 3 */}
      <div className="w-full h-[40px] bg-[#2c2a2a]" />
      <div className="w-full h-[120px] flex bg-[#2c2a2a] justify-center mt-[-2px]">
        <div className="w-[500px]  h-[80px] md:h-full  flex flex-col text-center align-middle">
          <h5 className="text-base text-[#F8860D] font-bold ">
            Our Services
          </h5>
          <h1 className="text-3xl text-[#F8860D] font-extrabold">
            Expert In Repairing of!
          </h1>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div id="washing" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image src="/washing.svg" className="overflow-hidden p-2 ml-[18px] md:mt-5 " width={220} height={200} />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#002B3D]">
                <h2 className="card-title text-[#F8860D] hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Siemens Washing Machine Repair
                </h2>
                <div className="sm:w-[200px] text-start text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that
                    guarantee the optimal performance of your Siemens washing
                    machine. Our Washing Machine Repair Service is your
                    reliable partner for all your washing machine repair
                    needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral bg-[#F8860D] hover:scale-110 duration-300 text-black hover:bg-white mt-3  " onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                      gtag_report_conversion(`tel:${phoneNumber}`);
                    }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dryer" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side  bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image src="/dryer.svg" className="overflow-hidden p-2 ml-[12px] md:mt-5 " width={220} height={200} />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#002B3D]">
                <h2 className="card-title text-[#F8860D] hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Siemens Washing Dryer Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that ensure
                    the optimal performance of your Siemens dryer. Our Dryer
                    Repair Service is your trusted partner for all your dryer
                    repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral bg-[#F8860D] hover:scale-110 duration-300 text-black hover:bg-white mt-3  " onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                      gtag_report_conversion(`tel:${phoneNumber}`);
                    }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dishwasher" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image src="/dishwasher.svg" className="overflow-hidden p-2 ml-[12px] md:mt-5 " width={220} height={200} />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#002B3D]">
                <h2 className="card-title text-[#F8860D] hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Siemens Dishwasher Repair
                </h2>
                <div className="sm:w-[170px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Providing top-notch, expert solutions to ensure the
                    optimal performance of Siemens dishwasher. Our Dishwasher
                    Repair Service is your dependable choice for all your
                    dishwasher repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral bg-[#F8860D] hover:scale-110 duration-300 text-black hover:bg-white mt-3  " onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                      gtag_report_conversion(`tel:${phoneNumber}`);
                    }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="washing" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image src="/stove.svg" className="overflow-hidden p-5 ml-[13px] md:mt-5 " width={220} height={200} />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#002B3D]">
                <h2 className="card-title text-[#F8860D] hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Siemens Gas Cooker/Stove Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that ensure
                    the optimal performance of your Siemens gas cooker/stove.
                    Our Gas Cooker/Stove Repair Service is your trusted
                    partner for all your gas cooker/stove repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral bg-[#F8860D] hover:scale-110 duration-300 text-black hover:bg-white mt-3  " onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                      gtag_report_conversion(`tel:${phoneNumber}`);
                    }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="washing" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image src="/fridge.svg" className="overflow-hidden p-2 ml-[12px] md:mt-5 " width={220} height={200} />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#002B3D]">
                <h2 className="card-title text-[#F8860D] hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Siemens Fridge/Refrigerator Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that ensure
                    the optimal performance of your Siemens
                    Fridge/Refrigerator Repair. Our Refrigerator Repair
                    Service is your trusted partner for all your gas
                    cooker/stove repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-neutral bg-[#F8860D] hover:scale-110 duration-300 text-black hover:bg-white mt-3  " onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                      gtag_report_conversion(`tel:${phoneNumber}`);
                    }}>
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </div>;
};

export default BoschPage;
