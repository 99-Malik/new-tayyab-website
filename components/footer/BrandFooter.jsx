'use client';

import React from 'react';
import Image from 'next/image';
import phoneNumber from '../../content/phoneNumber';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const BrandFooter = ({ brandName, logoPath, brandColor, logoWidth = 120, logoHeight = 40 }) => {
  return (
    <footer className="text-white" style={{ backgroundColor: brandColor }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <Image 
                  src={logoPath} 
                  alt={`${brandName} Logo`}
                  width={logoWidth}
                  height={logoHeight}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{brandName} Repair</h3>
                <p className="text-white/80 text-sm">Professional Appliance Solutions</p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed mb-6 max-w-md">
              Expert {brandName} appliance repair services across Dubai and Abu Dhabi. 
              Our certified technicians specialize in {brandName} washing machines, dishwashers, 
              dryers, and all {brandName} appliances.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-white" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-white" />
                <span className="text-white/90">Dubai & Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-white" />
                <span className="text-white/90">info@fixmasterpro.ae</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Washing Machine Repair
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Refrigerator Repair
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Dishwasher Repair
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Dryer Repair
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Stove & Cooker Repair
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  TV Repair
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Home
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-white/90 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Fix Appliances AE. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                style={{ color: brandColor }}
              >
                <PhoneIcon className="w-4 h-4" />
                Call Now
              </a>
              <a 
                href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need ${brandName} appliance repair service.`}
                target="_blank"
                className="text-white border-2 border-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                style={{ backgroundColor: brandColor }}
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BrandFooter;

