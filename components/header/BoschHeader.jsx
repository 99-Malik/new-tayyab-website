'use client';

import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import phoneNumber from '../../content/phoneNumber';
import Image from 'next/image';
import {PhoneIcon, WrenchScrewdriverIcon} from '@heroicons/react/24/solid';
const BoschHeader = () => {
  const [showMenu, setShowMenu] = useState (false);
  const [showServices, setShowServices] = useState (false);
  const servicesRef = useRef (null);
  const toggleMenu = () => setShowMenu (!showMenu);
  const toggleServices = () => setShowServices (!showServices);
  const handleClickOutside = event => {
    if (servicesRef.current && !servicesRef.current.contains (event.target)) {
      setShowServices (false);
    }
  };

  const [scrollPosition, setScrollPosition] = useState (0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition (position);
    let classes = document.getElementById ('header')?.classList;
    if (classes) {
      if (position > 60) {
        classes.remove ('bg-transparent');
        classes.remove ('py-2');
        classes.add ('bg-black');
        classes.add ('shadow-md');
      }
      if (position < 60) {
        classes.add ('bg-transparent');
        classes.add ('py-2');
        classes.remove ('bg-black');
        classes.remove ('shadow-md');
      }
    }
  };

  useEffect (() => {
    window.addEventListener ('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener ('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="mt-[-10px]" style={{zIndex: 50000}}>
      <div className=" flex justify-center py-1 sm:py-0 text-black font-raleway z-50">
        <div
          id="header"
          className="navbar max-w-7xl fixed bg-transparent duration-300 py-5"
          style={{zIndex: 50000}}
        >
          <div className="navbar-start">
            <div className="ml-[5px] dropdown m-0">
              <label
                tabIndex={0}
                className="btn btn-ghost px-3 text-white lg:hidden"
                onClick={() => toggleMenu ()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {showMenu &&
                <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box z-50">
                  <li>
                    <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="#">Home</Link>
                  </li>
                  <li>
                    <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="/contact">About Us</Link>
                  </li>
                  <li>
                    <summary className="text-white hover:bg-[#F8860D] font-bold">Services</summary>
                    <ul className="p-2 z-50 focus:!bg-black hover:black">
                      <li>
                        <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold"  href="#washing">
                          Washing Machine Repair
                        </Link>
                      </li>
    
                      <li>
                        <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="#dryer">
                          Dryer Repair
                        </Link>
                      </li>
      
                      <li>
                        <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="#dishwasher">
                          Dishwasher Repair
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="#stove">
                          Gas Stove / Cooker Repair
                        </Link>
                      </li>
                     
                    </ul>
                  </li>
                  <li>
                    <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="/contact">Contact Us</Link>
                  </li>
                </ul>}
            </div>
            <Link
              href="#"
              className="btn btn-ghost normal-case sm:text-lg px-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10  text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h1 className="text-white text-xl">RepairHome</h1><span><h1 className="text-[#F8860D] text-xl ml-[-2px] mt-0.5 font-extrabold">UAE</h1></span>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex z-50 text-info-content font-extrabold">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="#">Home</Link>
              </li>
              <li>
                <Link  className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="/contact">About Us</Link>
              </li>
              <li>
                <Link className="text-white hover:bg-[#F8860D] hover:text-black font-bold" href="#">Services</Link>
              </li>
              <li>
                <button
                  className="px-5 ml-[5px]  bg-[#F8860D] text-white hover:bg-[white] hover:black rounded duration-150 shadow-md"
                  onClick={() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }}
                >
                  Call Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BoschHeader;
