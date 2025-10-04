"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import phoneNumber from "../content/phoneNumber";

const Service = ({ name, imageUrl, description, dark, callButtonColor="bg-gradient-to-r from-cyan-500 to-blue-600", disableLink }) => {
  const router = useRouter();
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };
  
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => {
          if (!disableLink) {
            router.push(`/services/${slugify(name)}`);
          }
        }}
      >
        <Image
          src={imageUrl}
          className="w-full h-48 object-cover group-hover:scale-110 duration-500 transition-transform"
          width={400}
          height={300}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3
          className="text-xl font-bold text-gray-900 mb-3 cursor-pointer hover:text-cyan-600 transition-colors duration-300"
          onClick={() => {
            if (!disableLink) {
              router.push(`/services/${slugify(name)}`);
            }
          }}
        >
          {name}
        </h3>
        
        <p
          className="text-gray-600 leading-relaxed mb-6 cursor-pointer"
          onClick={() => {
            if (!disableLink) {
              router.push(`/services/${slugify(name)}`);
            }
          }}
        >
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <button
            className={`${callButtonColor} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            onClick={() => {
              window.location.href = `tel:${phoneNumber}`;
            }}
          >
            Call Now
          </button>
          
          {!disableLink && (
            <Link
              href={`/services/${slugify(name)}`}
              className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors duration-300"
            >
              Learn More →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
