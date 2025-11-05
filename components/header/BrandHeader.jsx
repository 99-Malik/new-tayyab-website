'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import phoneNumber from '../../content/phoneNumber';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const BrandHeader = ({ brandName, logoPath, brandColor, textColor = 'text-white', logoWidth = 140, logoHeight = 45 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative z-50 bg-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="py-2" style={{ backgroundColor: brandColor }}>
        <div className="max-w-7xl ">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-white">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Service Available 24/7</span>
              <span className="hidden md:inline">•</span>
              <a 
                href={`tel:${phoneNumber}`}
                className="text-sm font-bold hover:opacity-80 transition-opacity"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with white background */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="bg-white p-2.5 rounded-md">
                <Image 
                  src={logoPath} 
                  alt={`${brandName} Logo`}
                  width={logoWidth}
                  height={logoHeight}
                  className=" object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <span className="text-gray-700 hover:opacity-70 font-medium transition-opacity cursor-pointer">
                Home
              </span>
              <span className="text-gray-700 hover:opacity-70 font-medium transition-opacity cursor-pointer">
                Contact
              </span>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${phoneNumber}`}
                className="px-6 py-3 rounded-full font-medium text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: brandColor }}
              >
                Call Now
              </a>
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
              <span
                className="block text-gray-700 hover:opacity-70 font-medium py-2 transition-opacity cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </span>
              <span
                className="block text-gray-700 hover:opacity-70 font-medium py-2 transition-opacity cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </span>
              <div className="pt-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="block w-full text-white text-center px-6 py-3 rounded-full font-medium transition-all duration-300"
                  style={{ backgroundColor: brandColor }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default BrandHeader;

