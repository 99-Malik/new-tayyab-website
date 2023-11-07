"use client";

import React from "react";
import BoschHeader from "../../../components/header/BoschHeader";
import CallOrWhatsappButton from "../../../components/buttons/SamsungButton";
import phoneNumber from "../../../content/phoneNumber";
import ServicesSection from "../../../components/sections/ServicesSection";
import Footer from "../../../components/footer/samsungFooter";
import Image from "next/image";
import {
  CheckBadgeIcon,
  WrenchScrewdriverIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const BoschPage = () => {
  return (
    <div className="mt-[-10px]">
      {/* MAIN SECTION */}

      <div className="hero min-h-screen bg-[url(/images/backgrounds/lg.webp)] bg-fixed">
        <div className="hero-overlay bg-black bg-opacity-70" />
        <div
          className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/washing/1.webp"
            className="max-w-xs md:max-w-xl shadow-2xl"
            height={300}
            width={300}
          />
          <div>
            <h1 className="text-4xl  font-raleway text-white leading-tight">
              <span className="text-[#F8860D] font-bold">
                RepairHomeUAE
              </span>{" "}
              <span>
                Samsung Appliances Service Center a Best Washing Machine Repair
                Company in Dubai and Abu Dhabi.
              </span>
            </h1>
            <p className=" text-md py-5 font-raleway text-white">
              We offer the best in Dubai and Abu Dhabi, Affordable, Professional
              Samsung Washing Machine Repair Dubai. We offer our services 24/7. We
              are experts for Samsung Washing Machine Repair service in Duba and
              Abu Dhabi.{" "}
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-[#F8860D] hover:scale-110  text-black font-bold hover:bg-[white] hover:text-black hover:font-bold rounded-lg duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4 bg-[#F8860D] hover:scale-110  text-black font-bold hover:bg-[white] hover:text-black hover:font-bold rounded-lg duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`;
                }}
              >
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

      <div className=" w-full bg-black h-auto   ">
        <div className="hero min-h-screen bg-[#fafafa] bg-[url(/images/backgrounds/bg.webp)] bg-fixed">
          <div className="hero-overlay bg-black bg-opacity-70" />
          <div className="hero-content  flex-col lg:flex-row-reverse ">
            <img loading="lazy"
              src="/images/washing/1.jpg"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-2xl mt-3 md:mt-0 md:text-5xl font-bold text-[#F8860D]">
                "Samsung WASHING MACHINE REPAIR IN DUBAI AND ABU DHABI"
              </h1>
              <p className="py-12 text-lg px-4  text-white">
                Samsung stands out as a favored brand among the residents of
                Dubai, with{" "}
                <span className="text-lg text-[#F8860D] font-extrabold">
                  Samsung washing machines
                </span>{" "}
                finding their place in many households across the city.No matter
                what, no matter when: The Samsung Service Team is here for you. If
                you need help with your Samsung service Center, we have got you
                covered! Samsung washing machines use less water, energy and
                detergent. As per the Samsung Company, they state, 'Samsung washing
                machines not only simplify your life, but they do so
                consistently throughout the appliance's lifespan. Their
                automatic programs ensure user-friendly operation while
                delivering optimal results with minimal resource consumption.so
                you can always be sure that your Samsung Customer care is the best
                place to fix your home appliances. Just call us or WhatsApp us
                for booking your appointment.
              </p>
              <button
                className="btn btn-info-content bg-[#F8860D] text-black hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
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
              <img loading="lazy"
                src="/images/washing/2.jpg"
                className="max-w-[5.5rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[8.5rem] xl:max-w-[14rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-end">
              <img loading="lazy"
                src="/images/washing/1.jpg"
                className="max-w-[6.5rem] sm:max-w-[9rem] md:max-w-[13rem] lg:max-w-[11rem] xl:max-w-[18rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-end items-start">
              <img loading="lazy"
                src="/images/washing/5.jpg"
                className="max-w-[4rem] sm:max-w-[5.5rem] md:max-w-[7rem] lg:max-w-[6rem] xl:max-w-[10rem] shadow-2xl"
              />
            </div>
            <div className="max-w-xs flex justify-start items-start">
              <img loading="lazy"
                src="/images/washing/6.jpg"
                className="max-w-[5rem] sm:max-w-[7rem] md:max-w-[9.5rem] lg:max-w-[7.5rem] xl:max-w-[13rem] shadow-2xl"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold max-w-xl">
              Repair Home UAE in Dubai and Abu Dhabi knowing all the quality,
              reliability, and functionality standers provide you the best Samsung
              Washing Machine Repair Service.
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
            <p className="py-6 text-md max-w-xl">
              <h1 className="text-lg font-bold max-w-xl">
                Repair Home UAE in Dubai & Abu Dhabi offers guaranteed Samsung
                washing machine repair. Our company is a quality conscious
                company, so we always provide guaranteed services. As our
                customers trust us so we never like to lose our trust.
              </h1>
              The Samsung washing machines entered the market almost four decades
              ago. The company emphasis bringing ease to the laundry with
              various new features as well as supporting washer-dryer,
              polyester-spin cycle, non-stop programming and many more. Due to
              all of the innovative work, Samsung is regarded as one of the top
              washing machines brands in Dubai. And our company is treated as
              the most loved repairing company for Samsung Washing Machine Repair
              Dubai. So, always be the first to get our repair services. "Our
              team comprises extensively trained professionals who possess
              in-depth knowledge of Samsung Washing Machine standards.
              Additionally, they exhibit exceptional honesty and kindness in
              their interactions with customers. We follow a transparent
              approach by initiating a detailed discussion with customers
              regarding repair costs before commencing any work. This ensures
              complete clarity and eliminates any potential misunderstandings
              between our technicians and the customers. Furthermore, we come
              prepared with all the essential equipment needed for repairs. If a
              repair can be conducted at the customer's location, we will
              perform it on-site. In cases where the repair requires more
              extensive work, we will safely transport the appliance to our
              facility, providing customers with a timeline for the repair."
            </p>
            <div className="divider" />
            <CallOrWhatsappButton />
            <div className="flex gap-10 flex-col sm:flex-row" />
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] bg-[#2c2a2a]" />
      <div className="w-full h-[120px] flex bg-[#2c2a2a] justify-center mt-[-2px]">
        <div className="w-[500px]  h-[80px] md:h-full  flex flex-col text-center align-middle">
          <h5 className="text-base text-[#F8860D] font-bold ">Our Services</h5>
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
                    <Image
                      src="/washing.svg"
                      className="overflow-hidden p-2 ml-[50px] md:mt-5 "
                      width={220}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#002B3D]">
                <h2 className="card-title text-[#F8860D] hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Samsung Washing Machine Repair
                </h2>
                <div className="sm:w-[200px] text-start text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that guarantee
                    the optimal performance of your Samsung washing machine. Our
                    Washing Machine Repair Service is your reliable partner for
                    all your washing machine repair needs."
                  </p>
                </div>

                <div className="card-actions  justify-end">
                  <button
                    className="btn btn-neutral bg-[#F8860D] hover:scale-110 duration-300 text-black hover:bg-white mt-3  "
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
                    Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mb-4 md:mb-10 bg-black h-auto md:h-[500px] ">
        <div className="hero min-h-screen bg-[#fafafa]">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <img loading="lazy"
              src="/images/fridge/2.jpg"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-base-content">
                We Provide Repairing Servies In Areas OF Dubai and Abu Dhabi!
              </h1>
              <p className="py-6 text-black">
                Recognizing the demand for budget-friendly services among the
                majority of Dubai's residents, our company consistently strives
                to offer cost-effective and within-budget solutions. We maintain
                a policy of fair pricing, charging our customers in accordance
                with the actual work required, without any excessive fees. If
                you're seeking budget-friendly Samsung Washing Machine Repair
                Services in Dubai and Abu Dhabi.
              </p>
              <button
                className="btn btn-info-content bg-[#F8860D] text-black hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="hero mb-10 bg-[#171717]">
        <div className="flex flex-wrap px-2 md:px-10 justify-center lg:justify-between items-center py-5 w-full max-w-6xl gap-1">
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#F8860D] rounded-2xl  md:mb-0 md:mt-0">
              <div className="stat-figure text-secondary">
                <div className="h-[40px] w-[40px] md:w-[30px] md:ml-[-30px] ">
                  <Image
                    src="/washing.svg"
                    className="overflow-hidden  mt-3 "
                    width={200}
                    height={200}
                  />
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
                  <Image
                    src="/dishwasher.svg"
                    className="overflow-hidden  mt-3 "
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="stat-title text-[#F8860D]">More Than</div>
              <div className="stat-value text-[#F8860D]">3000+</div>
              <div className="stat-desc text-[#F8860D]">
                Dishwasher Repaired
              </div>
            </div>
          </div>
          <div className="stats shadow w-full mb-4 max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#F8860D] rounded-2xl mt-2  md:mb-0 md:mt-0">
              <div className="stat-figure text-secondary">
                <div className="h-[40px] w-[40px] md:w-[30px] md:ml-[-30px] ">
                  <Image
                    src="/dryer.svg"
                    className="overflow-hidden  mt-3 "
                    width={200}
                    height={200}
                  />
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
                  <Image
                    src="/stove.svg"
                    className="overflow-hidden  mt-3 "
                    width={200}
                    height={200}
                  />
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
      {/* Hero Section 3 */}

      {/* Footer */}
    </div>
  );
};

export default BoschPage;
