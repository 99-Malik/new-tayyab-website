"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallButton from "./buttons/CallButton";
import { useRouter } from "next/navigation";

const Service = ({ name, imageUrl, description, dark, callButtonColor="bg-[#F8860D]", disableLink }) => {
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
    <div
      className={`card w-80 sm:w-[20rem] ${
        dark ? "bg-[#202020]  text-info-content" : "bg-[#202020] text-white"
      } shadow hover:shadow-md duration-300 rounded-none`}
    >
      <figure
        onClick={() => {
          if (!disableLink) {
            router.push(`/services/${slugify(name)}`);
          }
        }}
      >
        <Image
          src={imageUrl}
          className="w-full hover:scale-105 duration-300 cursor-pointer"
          width={300}
          height={300}
          alt="repair"
        />
      </figure>
      <div className="card-body">
        <h2
          className="card-title text-base cursor-pointer hover:scale-105 duration-300"
          onClick={() => {
            if (!disableLink) {
              router.push(`/services/${slugify(name)}`);
            }
          }}
        >
          {name}
        </h2>
        <p
          className="text-start text-sm cursor-pointer"
          onClick={() => {
            if (!disableLink) {
              router.push(`/services/${slugify(name)}`);
            }
          }}
        >
          {description}
        </p>
        <div className="card-actions justify-end">
        <button
                className="btn btn-info-content mt-[10px] bg-[#F8860D]  text-white hover:text-black hover:bg-white hover:scale-110 duration-200 shadow-md  "
                onClick={() => {
                  window.location.href = `tel:${phoneNumber}`;
                }}
              >
                Call Now
              </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
