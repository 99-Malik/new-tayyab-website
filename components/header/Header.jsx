"use client";

import React, { useState } from "react";
import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import phoneNumber from "../../content/phoneNumber";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  if (pathname.startsWith("/companies")) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-white">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Emergency Service Available 24/7</span>
              <span className="hidden md:inline">•</span>
              <Link 
                href={`tel:${phoneNumber}`}
                className="text-sm font-bold hover:text-cyan-200 transition-colors"
              >
                {phoneNumber}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800">Fix Appliances AE</h1>
                <p className="text-xs text-gray-600">Appliance Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-cyan-600 font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-3">
                    <Link href="/services/washing-machine-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">Washing Machine Repair</div>
                      <div className="text-sm text-gray-500">Professional washing machine services</div>
                    </Link>
                    <Link href="/services/refrigerator-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">Refrigerator Repair</div>
                      <div className="text-sm text-gray-500">Expert fridge maintenance & repair</div>
                    </Link>
                    <Link href="/services/dishwasher-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">Dishwasher Repair</div>
                      <div className="text-sm text-gray-500">Complete dishwasher solutions</div>
                    </Link>
                    <Link href="/services/television-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">TV Repair</div>
                      <div className="text-sm text-gray-500">Television repair & maintenance</div>
                    </Link>
                    <Link href="/services/dryer-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">Dryer Repair</div>
                      <div className="text-sm text-gray-500">Clothes dryer repair services</div>
                    </Link>
                    <Link href="/services/stovecooker-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">Stove / Cooker Repair</div>
                      <div className="text-sm text-gray-500">Kitchen appliance repair</div>
                    </Link>
                    <Link href="/services/gas-oven-repair" className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                      <div className="font-medium">Gas Oven Repair</div>
                      <div className="text-sm text-gray-500">Gas oven maintenance & repair</div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-gray-700 hover:text-cyan-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href={`tel:${phoneNumber}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Call Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-gray-700 hover:text-cyan-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-cyan-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium py-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/washing-machine-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Washing Machine Repair
                  </Link>
                  <Link
                    href="/services/refrigerator-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Refrigerator Repair
                  </Link>
                  <Link
                    href="/services/dishwasher-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dishwasher Repair
                  </Link>
                  <Link
                    href="/services/television-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    TV Repair
                  </Link>
                  <Link
                    href="/services/dryer-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dryer Repair
                  </Link>
                  <Link
                    href="/services/stovecooker-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Stove / Cooker Repair
                  </Link>
                  <Link
                    href="/services/gas-oven-repair"
                    className="block text-gray-600 hover:text-cyan-600 py-1 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gas Oven Repair
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="block text-gray-700 hover:text-cyan-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-full font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
