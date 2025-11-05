"use client";

import React from "react";
import Image from "next/image";
import phoneNumber from "../../content/phoneNumber";
import { PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 0, 0';
};

const BrandRepairPage = ({ 
  brandName, 
  primaryColor, 
  secondaryColor,
  heroGradient,
  sectionGradient,
  statsGradient,
  includeTV = false 
}) => {
  const services = [
    {
      title: "Washing Machine Repair",
      description: `Professional washing machine repair services for all major brands including Samsung, LG, Bosch, and more.`,
      imageSrc: "/washing.svg",
      imageAlt: "Washing Machine Repair",
      features: [
        "Motor and belt replacement",
        "Water pump and valve repair",
        "Electronic control board fix",
        "Drum and seal replacement"
      ],
      whatsappMessage: `Hi, I need washing machine repair service.`
    },
    {
      title: "Dryer Repair",
      description: "Expert dryer repair services to restore your clothes dryer to perfect working condition.",
      imageSrc: "/dryer.svg",
      imageAlt: "Dryer Repair",
      features: [
        "Heating element replacement",
        "Belt and pulley repair",
        "Thermostat and sensor fix",
        "Lint filter and vent cleaning"
      ],
      whatsappMessage: "Hi, I need dryer repair service."
    },
    {
      title: "Dishwasher Repair",
      description: "Complete dishwasher repair solutions for all major brands with thorough diagnostics.",
      imageSrc: "/dishwasher.svg",
      imageAlt: "Dishwasher Repair",
      features: [
        "Pump and motor repair",
        "Spray arm and filter cleaning",
        "Door seal replacement",
        "Control panel and wiring fix"
      ],
      whatsappMessage: "Hi, I need dishwasher repair service."
    },
    {
      title: "Oven & Stove Repair",
      description: "Professional gas and electric stove repair services with certified technicians.",
      imageSrc: "/stove.svg",
      imageAlt: "Oven & Stove Repair",
      features: [
        "Gas burner and igniter repair",
        "Oven heating element replacement",
        "Temperature control calibration",
        "Safety valve and regulator fix"
      ],
      whatsappMessage: "Hi, I need oven/stove repair service."
    },
    {
      title: "Refrigerator Repair",
      description: "Expert refrigerator repair services to keep your food fresh and appliance running efficiently.",
      imageSrc: "/fridge.svg",
      imageAlt: "Refrigerator Repair",
      features: [
        "Compressor and condenser repair",
        "Thermostat and sensor replacement",
        "Door seal and gasket fix",
        "Ice maker and water dispenser"
      ],
      whatsappMessage: "Hi, I need refrigerator repair service."
    },
    ...(includeTV ? [{
      title: "TV Repair",
      description: "Professional television repair services for all brands and models from screen to audio issues.",
      imageSrc: null,
      imageAlt: "TV Repair",
      isSvgIcon: true,
      svgIcon: (
        <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Screen and display repair",
        "Power supply and board fix",
        "Audio and speaker repair",
        "Remote control and connectivity"
      ],
      whatsappMessage: "Hi, I need TV repair service."
    }] : [])
  ];

  const appliances = [
    { name: "Washing Machine", imageSrc: "/washing.svg", imageAlt: "Washing Machine" },
    { name: "Refrigerator", imageSrc: "/fridge.svg", imageAlt: "Refrigerator" },
    { name: "Dishwasher", imageSrc: "/dishwasher.svg", imageAlt: "Dishwasher" },
    { name: "Dryer", imageSrc: "/dryer.svg", imageAlt: "Dryer" },
    { name: "Oven/Stove", imageSrc: "/stove.svg", imageAlt: "Oven/Stove" },
    ...(includeTV ? [{ name: "TV", imageSrc: null, isSvgIcon: true }] : [])
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: heroGradient }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">
                     {brandName} Service Center
                  </span>
                  <br />
            </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Expert {brandName} appliance repair services across Dubai and Abu Dhabi. 
                  Our certified technicians specialize in {brandName} washing machines, dishwashers, dryers, and all {brandName} appliances.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
              <button
                  className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  style={{ backgroundColor: primaryColor }}
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                  <PhoneIcon className="h-5 w-5" />
                  Call Now
              </button>
              <button
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => {
                    window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need ${brandName} appliance repair service.`;
                }}
              >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  WhatsApp
              </button>
            </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Certified Technicians</span>
                </div>
                
        </div>
      </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/image-1.jpg"
                  alt="Appliance Repair Service"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
        </div>
              
      </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span style={{ color: primaryColor }}>Professional {brandName} Repair</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional service with cutting-edge technology and experienced professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: primaryColor }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock availability for urgent repairs. Our expert technicians are always ready to help when you need us most.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: statsGradient }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Technicians</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of certified professionals with extensive experience in all major appliance brands and models.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: statsGradient }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality Service</h3>
              <p className="text-gray-600 leading-relaxed">
                We use only genuine parts and provide comprehensive warranties on all our repair services for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" style={{ background: sectionGradient }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
              src="/dishwasher.jpg"
                alt="Professional Appliance Repair"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(to top, rgba(${hexToRgb(primaryColor)}, 0.2) 0%, transparent 100%)` }}></div>
            </div>
            
            <div className="text-white space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Expert <span style={{ color: primaryColor }}>{brandName} Appliance Repair</span> Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Fix Appliances AE, we're the leading {brandName} appliance repair specialists in Dubai and Abu Dhabi. 
                Our expert technicians are certified {brandName} repair professionals with extensive experience in all {brandName} 
                appliance models including premium ranges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From washing machines and dishwashers to dryers and gas stoves, we provide comprehensive 
                repair solutions that ensure your appliances function at peak performance. Our commitment 
                to excellence and customer satisfaction sets us apart in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                  className="text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  style={{ backgroundColor: primaryColor }}
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                  Get Service Now
                </button>
                <button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                  onClick={() => {
                    window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need ${brandName} appliance repair service.`;
                  }}
                >
                  WhatsApp Us
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-clip-text text-transparent" style={{ backgroundImage: statsGradient }}>Success</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of satisfied customers across Dubai and Abu Dhabi
            </p>
      </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: statsGradient }}>
                  <Image src="/washing.svg" width={32} height={32} alt="Washing Machine" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2000+</div>
                <div className="text-gray-600 font-medium">Washing Machines</div>
                <div className="text-sm text-gray-500">Successfully Repaired</div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: statsGradient }}>
                  <Image src="/dishwasher.svg" width={32} height={32} alt="Dishwasher" style={{ filter: 'brightness(0) invert(1)' }}  />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3000+</div>
                <div className="text-gray-600 font-medium">Dishwashers</div>
                <div className="text-sm text-gray-500">Expertly Fixed</div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: statsGradient }}>
                  <Image src="/dryer.svg" width={32} height={32} alt="Dryer" style={{ filter: 'brightness(0) invert(1)' }}  />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1700+</div>
                <div className="text-gray-600 font-medium">Dryers</div>
                <div className="text-sm text-gray-500">Restored to Life</div>
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: statsGradient }}>
                  <Image src="/stove.svg" width={32} height={32} alt="Stove" style={{ filter: 'brightness(0) invert(1)' }}  />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2100+</div>
                <div className="text-gray-600 font-medium">Stoves & Cookers</div>
                <div className="text-sm text-gray-500">Perfectly Repaired</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliance Repair Services Section */}
      <section className="py-20" style={{ background: sectionGradient }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Professional <span style={{ color: primaryColor }}>Appliance Repair</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert repair services for all major appliance brands. Fast, reliable, and affordable solutions for your home.
            </p>
          </div>

          {/* Services Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
                  {service.isSvgIcon ? (
                    service.svgIcon
                  ) : (
                <Image 
                      src={service.imageSrc} 
                  width={80} 
                  height={80} 
                      alt={service.imageAlt} 
                      style={{ filter: 'brightness(0) invert(1)' }} 
                />
                  )}
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: primaryColor }}></div>
                        {feature}
                  </li>
                    ))}
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                      className="flex-1 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    style={{ backgroundColor: primaryColor }}
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                      <PhoneIcon className="w-5 h-5" />
                      Call Us
                  </button>
                  <button
                      className="flex-1 text-white border-2 border-white py-3 px-4 rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      style={{ backgroundColor: primaryColor }}
                      onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(service.whatsappMessage)}`}
                  >
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      WhatsApp
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: statsGradient }}>Quick Service</span> Selector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us what's broken and we'll connect you with the right {brandName} expert in seconds
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {appliances.map((appliance, index) => {
              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => {
                    window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need ${brandName} ${appliance.name.toLowerCase()} repair service.`;
                  }}
                >
                  <div className="p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/30" style={{ background: statsGradient }}>
                    <div className="flex justify-center mb-3">
                      {appliance.isSvgIcon ? (
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <Image 
                          src={appliance.imageSrc} 
                          width={48} 
                          height={48} 
                          alt={appliance.imageAlt}
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                    </div>
                    <div className="text-white font-semibold text-sm">{appliance.name}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't see your {brandName} appliance? No problem!</p>
            <button
              className="text-white w-full py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              style={{ backgroundColor: primaryColor }}
              onClick={() => {
                window.location.href = `tel:${phoneNumber}`;
              }}
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us
            </button>
          </div>
        </div>
      </section>

      {/* Live Service Status */}
      <section className="py-20" style={{ background: sectionGradient }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span style={{ color: primaryColor }}>Live Service</span> Status
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time updates on our service availability and response times
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: primaryColor }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Service Available</h3>
              <p className="text-white/80 mb-4">All technicians are online</p>
              <div className="text-3xl font-bold text-white">24/7</div>
            </div>

            {/* Response Time */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: primaryColor }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-white/80 mb-4">Average response</p>
              <div className="text-3xl font-bold text-white">&lt; 2 min</div>
            </div>

            {/* Active Jobs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: statsGradient }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Active Jobs</h3>
              <p className="text-white/80 mb-4">Currently serving</p>
              <div className="text-3xl font-bold text-white">47</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: statsGradient }}>Happy Customers</span> Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real customers who trust Fix Appliances AE
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ahmed",
                location: "Dubai Marina",
                story: "My washing machine broke down on a Sunday morning. Fix Appliances AE had a technician at my door within 2 hours and fixed it in 30 minutes!",
                rating: 5,
                appliance: "Washing Machine"
              },
              {
                name: "Mohammed Al-Rashid",
                location: "Abu Dhabi",
                story: "Professional service, fair pricing, and they actually fixed the problem the first time. Highly recommend!",
                rating: 5,
                appliance: "Refrigerator"
              },
              {
                name: "Lisa Johnson",
                location: "Jumeirah",
                story: "The technician was so knowledgeable and explained everything clearly. My dishwasher is working like new again!",
                rating: 5,
                appliance: "Dishwasher"
              }
            ].map((customer, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: statsGradient }}>
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{customer.name}</h4>
                    <p className="text-gray-600 text-sm">{customer.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(customer.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{customer.story}"</p>
                
                <div className="rounded-lg p-3" style={{ backgroundColor: `rgba(${hexToRgb(primaryColor)}, 0.1)` }}>
                  <p className="font-semibold text-sm" style={{ color: primaryColor }}>Fixed: {customer.appliance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${primaryColor} 100%)` }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Emergency {brandName} Service Available
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              {brandName} appliance emergency? We're here 24/7 to help you get back to normal life quickly. 
              Our certified {brandName} specialists are ready to assist.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/15 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Same Day Service</h3>
                <p className="text-white/90">Most {brandName} repairs completed within 24 hours</p>
              </div>
              <div className="bg-white/15 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Warranty Included</h3>
                <p className="text-white/90">90-day warranty on all {brandName} repairs</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white w-full py-4 rounded-full font-bold text-md hover:opacity-90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
                style={{ color: primaryColor }}
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                <PhoneIcon className="w-4 h-4" />
                CALL NOW
              </button>
              <button
                className="text-white border-2 border-white w-full py-4 rounded-full font-bold text-md hover:opacity-90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-2"
                style={{ backgroundColor: primaryColor }}
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Emergency: I need ${brandName} appliance repair service.`;
                }}
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Simple, reliable appliance repair process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">Contact us with your appliance issue</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Visit</h3>
              <p className="text-gray-600 text-sm">We arrange a convenient time for you</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Repair</h3>
              <p className="text-gray-600 text-sm">Our technician fixes your appliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">We ensure everything works perfectly</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Fix Your Appliances?
                </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let broken appliances disrupt your daily routine. Contact us now for fast, reliable repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
              className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2"
              style={{ color: primaryColor }}
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
              <PhoneIcon className="w-5 h-5" />
              Call Now
            </button>
            <button
              className="text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryColor }}
              onClick={() => {
                window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`;
              }}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              WhatsApp
                  </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandRepairPage;

