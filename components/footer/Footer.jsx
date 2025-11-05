'use client';
import React from 'react';
import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import phoneNumber from '../../content/phoneNumber';

const Footer = ({ color, company }) => {
  const pathname = usePathname();

  if (pathname.startsWith('/companies') || 
      pathname.startsWith('/boschRepair') || 
      pathname.startsWith('/siemensRepair') || 
      pathname.startsWith('/lgRepair') || 
      pathname.startsWith('/samsungRepair')) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Fix Appliances AE</h3>
                <p className="text-cyan-300 text-sm">Appliance Solutions</p>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your trusted partner for premium appliance repair services across Dubai and Abu Dhabi. 
              Expert technicians delivering reliable solutions for all major brands including Samsung, 
              LG, Bosch, Siemens, and Whirlpool.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-cyan-400" />
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Dubai & Abu Dhabi, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">info@fixmasterpro.ae</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/washing-machine-repair" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Washing Machine Repair
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/refrigerator-repair" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Refrigerator Repair
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/dishwasher-repair" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Dishwasher Repair
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/dryer-repair" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Dryer Repair
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/stovecooker-repair" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Stove & Cooker Repair
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/television-repair" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  TV Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacyPolicy" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Fix Appliances AE. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now
              </a>
              <a 
                href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hi, I need appliance repair service.`}
                target="_blank"
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
