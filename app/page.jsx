"use client";

import React from "react";
import Image from "next/image";
import phoneNumber from "../content/phoneNumber";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Fix Appliances AE
                  </span>
                  <br />
                  <span className="text-white">Appliance Solutions</span>
            </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Your trusted partner for premium appliance repair services across Dubai and Abu Dhabi. 
                  Expert technicians delivering reliable solutions for all major brands.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
              <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                  📞 Call Now
              </button>
              <button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                onClick={() => {
                    window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`;
                }}
              >
                  💬 WhatsApp
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
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">All Major Brands</span>
          </div>
        </div>
      </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/1.png"
                  alt="Appliance Repair Service"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
        </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Fix Appliances AE</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional service with cutting-edge technology and experienced professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
              src="/1.png"
                alt="Professional Appliance Repair"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="text-white space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Welcome to the Future of 
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Appliance Repair</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Fix Appliances AE, we're revolutionizing appliance repair services across Dubai and Abu Dhabi. 
                Our expert technicians specialize in repairing all major brands including Samsung, LG, Bosch, 
                Siemens, and Whirlpool appliances.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From washing machines and dishwashers to dryers and gas stoves, we provide comprehensive 
                repair solutions that ensure your appliances function at peak performance. Our commitment 
                to excellence and customer satisfaction sets us apart in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                  Get Service Now
                </button>
                <button
                  className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                  onClick={() => {
                    window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`;
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
              Our <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Success</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of satisfied customers across Dubai and Abu Dhabi
            </p>
      </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/washing.svg" width={32} height={32} alt="Washing Machine" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">2000+</div>
                <div className="text-gray-600 font-medium">Washing Machines</div>
                <div className="text-sm text-gray-500">Successfully Repaired</div>
              </div>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/dishwasher.svg" width={32} height={32} alt="Dishwasher" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3000+</div>
                <div className="text-gray-600 font-medium">Dishwashers</div>
                <div className="text-sm text-gray-500">Expertly Fixed</div>
              </div>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/dryer.svg" width={32} height={32} alt="Dryer" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1700+</div>
                <div className="text-gray-600 font-medium">Dryers</div>
                <div className="text-sm text-gray-500">Restored to Life</div>
              </div>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/stove.svg" width={32} height={32} alt="Stove" />
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Appliance Repair</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert repair services for all major appliance brands. Fast, reliable, and affordable solutions for your home.
            </p>
          </div>

          {/* Services Grid - Mobile First */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Washing Machine Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Image 
                  src="/washing.svg" 
                  width={80} 
                  height={80} 
                  alt="Washing Machine Repair" 
                  className="text-white"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Washing Machine Repair</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional washing machine repair services for all major brands including Samsung, LG, Bosch, and more.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Motor and belt replacement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Water pump and valve repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Electronic control board fix
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Drum and seal replacement
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need washing machine repair service.`}
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Dryer Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Image 
                  src="/dryer.svg" 
                  width={80} 
                  height={80} 
                  alt="Dryer Repair" 
                  className="text-white"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dryer Repair</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Expert dryer repair services to restore your clothes dryer to perfect working condition.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Heating element replacement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Belt and pulley repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Thermostat and sensor fix
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Lint filter and vent cleaning
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need dryer repair service.`}
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Dishwasher Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center">
                <Image 
                  src="/dishwasher.svg" 
                  width={80} 
                  height={80} 
                  alt="Dishwasher Repair" 
                  className="text-white"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dishwasher Repair</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Complete dishwasher repair solutions for all major brands with thorough diagnostics.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    Pump and motor repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    Spray arm and filter cleaning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    Door seal replacement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    Control panel and wiring fix
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need dishwasher repair service.`}
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Oven/Stove Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Image 
                  src="/stove.svg" 
                  width={80} 
                  height={80} 
                  alt="Oven & Stove Repair" 
                  className="text-white"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Oven & Stove Repair</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional gas and electric stove repair services with certified technicians.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Gas burner and igniter repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Oven heating element replacement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Temperature control calibration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Safety valve and regulator fix
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need oven/stove repair service.`}
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Refrigerator Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Image 
                  src="/fridge.svg" 
                  width={80} 
                  height={80} 
                  alt="Refrigerator Repair" 
                  className="text-white"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refrigerator Repair</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Expert refrigerator repair services to keep your food fresh and appliance running efficiently.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Compressor and condenser repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Thermostat and sensor replacement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Door seal and gasket fix
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Ice maker and water dispenser
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need refrigerator repair service.`}
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* TV Repair Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">TV Repair</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Professional television repair services for all brands and models from screen to audio issues.
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Screen and display repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Power supply and board fix
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Audio and speaker repair
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Remote control and connectivity
                  </li>
                </ul>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `tel:${phoneNumber}`}
                  >
                    📞 Call Us
                  </button>
                  <button
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need TV repair service.`}
                  >
                    💬 WhatsApp
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Service Selector */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Quick Service</span> Selector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us what's broken and we'll connect you with the right expert in seconds
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: "Washing Machine", icon: "🧺", color: "from-blue-500 to-blue-600" },
              { name: "Refrigerator", icon: "🧊", color: "from-cyan-500 to-cyan-600" },
              { name: "Dishwasher", icon: "🍽️", color: "from-green-500 to-green-600" },
              { name: "Dryer", icon: "🌪️", color: "from-orange-500 to-orange-600" },
              { name: "Oven/Stove", icon: "🔥", color: "from-red-500 to-red-600" },
              { name: "TV", icon: "📺", color: "from-purple-500 to-purple-600" }
            ].map((appliance, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need ${appliance.name.toLowerCase()} repair service.`;
                }}
              >
                <div className={`bg-gradient-to-r ${appliance.color} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="text-4xl mb-2">{appliance.icon}</div>
                  <div className="text-white font-semibold text-sm">{appliance.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't see your appliance? No problem!</p>
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                window.location.href = `tel:${phoneNumber}`;
              }}
            >
              📞 Call for Any Appliance
            </button>
          </div>
        </div>
      </section>

      {/* Live Service Status */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Live Service</span> Status
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time updates on our service availability and response times
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Service Available</h3>
              <p className="text-cyan-300 mb-4">All technicians are online</p>
              <div className="text-3xl font-bold text-green-400">24/7</div>
            </div>

            {/* Response Time */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">⚡</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-cyan-300 mb-4">Average response</p>
              <div className="text-3xl font-bold text-cyan-400">&lt; 2 min</div>
            </div>

            {/* Active Jobs */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">🔧</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Active Jobs</h3>
              <p className="text-cyan-300 mb-4">Currently serving</p>
              <div className="text-3xl font-bold text-blue-400">47</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Happy Customers</span> Stories
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
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                
                <div className="bg-cyan-50 rounded-lg p-3">
                  <p className="text-cyan-700 font-semibold text-sm">Fixed: {customer.appliance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="text-6xl mb-6">🚨</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Emergency Service Available
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Appliance emergency? We're here 24/7 to help you get back to normal life quickly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Same Day Service</h3>
                <p className="text-white/80">Most repairs completed within 24 hours</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-2">Warranty Included</h3>
                <p className="text-white/80">90-day warranty on all repairs</p>
              </div>
            </div>
            
            <button
              className="bg-white text-red-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              onClick={() => {
                window.location.href = `tel:${phoneNumber}`;
              }}
            >
              🚨 EMERGENCY CALL NOW
            </button>
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
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">Contact us with your appliance issue</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Visit</h3>
              <p className="text-gray-600 text-sm">We arrange a convenient time for you</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Repair</h3>
              <p className="text-gray-600 text-sm">Our technician fixes your appliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">We ensure everything works perfectly</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Fix Your Appliances?
                </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Don't let broken appliances disrupt your daily routine. Contact us now for fast, reliable repair services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    onClick={() => {
                      window.location.href = `tel:${phoneNumber}`;
                    }}
                  >
              📞 Call Now
            </button>
            <button
              className="bg-cyan-600 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-700 transition-all duration-300"
              onClick={() => {
                window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`;
              }}
            >
              💬 WhatsApp
                  </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;