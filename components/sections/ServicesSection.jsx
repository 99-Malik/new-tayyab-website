import React from "react";
import Service from "../Service";

const ServicesSection = ({ heading, callButtonColor, disableLinks, id }) => {
  return (
    <div className="hero min-h-screen bg-base-100 text-info-content" id={id}>
      <div className="hero-content text-center  w-full h-full">
        <div className="pb-10 flex flex-col items-center">
          <h1 className="text-4xl text-black font-bold my-14 max-w-lg">{heading}</h1>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Service
              callButtonColor={callButtonColor}
              name="Washing Machine Repair"
              imageUrl="/images/washing/service.jpg"
              description="Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine."
              disableLink={disableLinks}
             
            />
            <Service
              callButtonColor={callButtonColor}
              name="Stove/Cooker Repair"
              imageUrl="/images/stove/service.jpg"
              disableLink={disableLinks}
              description="We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement parts for long lasting."
            />
            <Service
              callButtonColor={callButtonColor}
              name="Dishwasher Repair"
              imageUrl="/images/dishwasher/service.jpg"
              disableLink={disableLinks}
              description="We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
            />
            <Service
              callButtonColor={callButtonColor}
              name="Dryer Repair"
              imageUrl="/images/dryer/service.jpg"
              disableLink={disableLinks}
              description="We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
            />
            <Service
              callButtonColor={callButtonColor}
              name="Gas Oven Repair"
              imageUrl="/images/oven/service.jpg"
              disableLink={disableLinks}
              description="Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
