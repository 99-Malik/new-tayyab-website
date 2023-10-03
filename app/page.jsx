"use client";

import React from "react";
import BoschHeader from "../components/header/BoschHeader";
import CallOrWhatsappButton from "../components/buttons/CallOrWhatsappButton";
import phoneNumber from "../content/phoneNumber";
import ServicesSection from "../components/sections/ServicesSection";
import Footer from "../components/footer/Footer";
import Image from "next/image";

const BoschPage = () => {
  return (
    <div className="mt-[-10px]">
    
      {/* MAIN SECTION */}

      <div className="hero min-h-screen bg-[url(/images/backgrounds/2.jpg)] bg-fixed">
        <div className="hero-overlay bg-black bg-opacity-70" />
        <div
          className="hero-content flex-col-reverse lg:flex-row-reverse mt-20 md:mt-10"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/fridge/washing.jpg"
            className="max-w-xs md:max-w-xl shadow-2xl"
            height={300}
            width={300}
          />
          <div>
            <h1 className="text-4xl  font-raleway text-white leading-tight">
              <span className="text-[#FF2600] font-bold">
                RepairHomeUAE
              </span>{" "}
              <span>Appliances Service Center</span>
            </h1>
            <p className="py-6 text-lg font-raleway text-white">
              "RepairHomeUAE is your premier Home Appliances Repair Service
              Center serving Dubai and Abu Dhabi. Count on our highly-trained
              technicians for expert and dependable repairs of washing machines,
              dishwashers, dryers, and stove/cooking ranges. We proudly carry
              official authorization from these brands, ensuring your appliances
              receive the skilled care they deserve."
            </p>
            <div className="flex flex-col md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 bg-[#FF2600]  hover:scale-110  text-black font-bold hover:bg-[white] hover:text-black hover:font-bold rounded-lg duration-200 shadow-md"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                {phoneNumber}
              </button>
              <button
                className="px-5 py-4 bg-[#FF2600]  hover:scale-110  text-black font-bold hover:bg-[white] hover:text-black hover:font-bold rounded-lg duration-200 shadow-md"
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
          <h5 className="text-base text-[#FF2600] font-bold ">
            We Commit Quality Repairing
          </h5>
          <h1 className="text-3xl text-[#FF2600] font-extrabold">
            We Maintain Trust!
          </h1>
        </div>
      </div>

      <div className="w-auto mt-[-2px] bg-[#202020]  md:mx-0 md:w-full h-auto md:h-auto  flex flex-col md:flex-row justify-evenly items-center ">
        <div className="w-full p-4 md:w-[300px] h-[300px]">
          <div className="w-full   drop-shadow-3xl h-[250px] md:hover:scale-110 duration-300  bg-[#171717] rounded-2xl border-[3px] border-[#FF2600] flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20 text-[#FF2600] hover:scale-110 duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <h1 className="text-xl mt-2 bold text-[#FF2600]">
              Call US AnyTime
            </h1>

            <h1 className="p-2 md:p-2 text-[#FF2600]">
              We do offer a 24*7 repair & service of All Brands Appliances.
            </h1>
          </div>
        </div>

        <div className="w-full p-4   md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl  bg-[#171717] md:hover:scale-110 duration-300 rounded-2xl  border-[3px] border-[#FF2600] flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20 text-[#FF2600] hover:scale-110 duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>

            <h1 className="text-xl mt-2 font-bold text-[#FF2600]">
              Customer Satisfaction
            </h1>

            <h1 className="p-2 md:p-2 font-bold text-[#FF2600]">
              We maintain a professional workflow for excellent customer
              relationships.
            </h1>
          </div>
        </div>
        <div className="w-full p-4   md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-[#171717] border-[3px] border-[#FF2600] md:hover:scale-110 duration-300 rounded-2xl  border-grey flex flex-col justify-center items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20 text-[#FF2600] hover:scale-110 duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>

            <h1 className="text-xl mt-2 font-bold text-[#FF2600]">
              High Quality Service
            </h1>

            <h1 className="p-2 md:p-2 font-bold text-[#FF2600]">
              We Provide Top Notch High Quality Repairing Services for All
              brands Appliances Appliances.
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full bg-black h-auto   ">
        <div className="hero min-h-screen bg-[#fafafa] bg-[url(/images/backgrounds/bg.jpg)] bg-fixed">
          <div className="hero-overlay bg-black bg-opacity-70" />
          <div className="hero-content  flex-col lg:flex-row-reverse ">
            <img
              src="/images/2.jpg"
              className="sm:w-[full] md:max-w-sm sm:h-full md:px-0 px-5 ml-[-8px] md:ml-0  md:mx-0 rounded-xl drop-shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-[#FF2600]">
                "Welcome to the realm of appliance repair solutions!"
              </h1>
              <p className="py-6 font-semibold text-white">
                "Discover the pinnacle of appliance repair expertise at
                RepairHomeUAE, proudly serving Dubai and Abu Dhabi. We
                specialize in the repair and maintenance of essential household
                appliances, including washing machines, dishwashers, dryers, and
                gas stoves/cookers. Our skilled technicians are committed to
                delivering professional and reliable services, ensuring that
                your appliances function seamlessly. At RepairHomeUAE, we stand
                as your trusted partner, providing top-tier solutions to meet
                your every repair need. Experience the difference in service
                excellence with us."
              </p>
              <button
                className="btn btn-info-content bg-[#FF2600]  text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
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
      <div className="hero bg-[#171717]">
        <div className="flex flex-wrap px-2 md:px-10 justify-center lg:justify-between items-center py-5 w-full max-w-6xl gap-1">
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#FF2600] rounded-2xl  md:mb-0 md:mt-0">
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
              <div className="stat-title text-[#FF2600]">More Than</div>
              <div className="stat-value text-[#FF2600]">2000+</div>
              <div className="stat-desc text-[#FF2600]">
                Washing Machines Repaired
              </div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#FF2600] rounded-2xl mt-2  md:mb-0 md:mt-0">
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
              <div className="stat-title text-[#FF2600]">More Than</div>
              <div className="stat-value text-[#FF2600]">3000+</div>
              <div className="stat-desc text-[#FF2600]">
                Dishwasher Repaired
              </div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#FF2600] rounded-2xl mt-2  md:mb-0 md:mt-0">
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
              <div className="stat-title text-[#FF2600]">More than</div>
              <div className="stat-value text-[#FF2600]">1700+</div>
              <div className="stat-desc text-[#FF2600]">Dryer Repaired</div>
            </div>
          </div>
          <div className="stats shadow w-full max-w-[280px] md:w-[250px] bg-[#171717]">
            <div className="stat place-items-center bg-[#171717] border-[3px] border-[#FF2600] rounded-2xl mt-2 mb-2 md:mb-0 md:mt-0">
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
              <div className="stat-title text-[#FF2600]">More than</div>
              <div className="stat-value text-[#FF2600]">2100+</div>
              <div className="stat-desc text-[#FF2600]">
                stove/Cooker Repaired
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section 3 */}
      <div className="w-full h-[40px] bg-[#202020] " />
      <div className="w-full h-[120px] flex bg-[#202020]  justify-center mt-[-2px]">
        <div className="w-[500px]  h-[80px] md:h-full  flex flex-col text-center align-middle">
          <h5 className="text-base text-[#FF2600] font-bold ">Our Services</h5>
          <h1 className="text-3xl text-[#FF2600] font-extrabold">
            We are Expert In Repairing of!
          </h1>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div id="washing" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.jpg)] bg-fixed">
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
              <div className="card-body bg-[#202020]">
                <h2 className="card-title text-white hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Washing Machine Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that guarantee
                    the optimal performance of your washing machine. Our Washing
                    Machine Repair Service is your reliable partner for all your
                    washing machine repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-neutral bg-[#FF2600] hover:scale-110 duration-300 text-white hover:bg-white mt-3  "
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
      <div id="dryer" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.jpg)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image
                      src="/dryer.svg"
                      className="overflow-hidden p-2 ml-[50px] md:mt-5 "
                      width={220}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#202020]">
                <h2 className="card-title text-white hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Washing Dryer Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that ensure the
                    optimal performance of your dryer. Our Dryer Repair Service
                    is your trusted partner for all your dryer repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-neutral bg-[#FF2600] hover:scale-110 duration-300 text-white hover:bg-white mt-3  "
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
      <div id="dishwasher" className="w-full h-auto flex justify-center">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.jpg)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image
                      src="/dishwasher.svg"
                      className="overflow-hidden p-2 ml-[50px] md:mt-5 "
                      width={220}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#202020]">
                <h2 className="card-title text-white hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Dishwasher Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Providing top-notch, expert solutions to ensure the optimal
                    performance of your dishwasher. Our Dishwasher Repair
                    Service is your dependable choice for all your dishwasher
                    repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-neutral bg-[#FF2600] hover:scale-110 duration-300 text-white hover:bg-white mt-3  "
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
      <div id="stove" className="w-full h-auto flex justify-center mb-10">
        <div className="w-full mx-5 md:mx-5 h-auto flex flex-col justify-center items-center">
          <div className="mt-5 drop-shadow-xl bg-white  border-[1px] border-grey rounded-2xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="w-full md:w-full h-[270px] md:h-[270px] rounded-t-lg bg-black bg-[url(/images/backgrounds/bg.jpg)] bg-fixed">
                <div className="hero-overlay bg-black w-full h-[270px] rounded-t-lg bg-opacity-80 ">
                  <div className="w-full md:w-full h-[270px] px-7 md:h-[270px] p-4">
                    <Image
                      src="/stove.svg"
                      className="overflow-hidden p-2 ml-[50px] md:mt-5 "
                      width={220}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body bg-[#202020]">
                <h2 className="card-title text-white hover:scale-110 font-bold duration-300 hover:cursor-pointer">
                  Gas Cooker/Stove Repair
                </h2>
                <div className="sm:w-[200px] text-white  md:w-[500px] h-auto">
                  <p>
                    "Delivering top-tier, professional solutions that ensure the
                    optimal performance of your gas cooker/stove. Our Gas
                    Cooker/Stove Repair Service is your trusted partner for all
                    your gas cooker/stove repair needs."
                  </p>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-neutral bg-[#FF2600] hover:scale-110 duration-300 text-white hover:bg-white mt-3  "
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
      {/* Footer */}
   
    </div>
  );
};

export default BoschPage;
