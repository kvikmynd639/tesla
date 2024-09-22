"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbWorld } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg('bg-white shadow-md');
    } else {
      setNavbarBg('bg-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto flex justify-between items-center p-5 space-x-5">
        {/* Left - Tesla Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
              alt="Tesla Logo"
              width="120"
              height="30"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-4 justify-center flex-1 font-semibold text-sm">
          <Link href="/model-s" className="text-gray-50 hover:text-black">Vehicles</Link>
          <Link href="/model-3" className="text-gray-50 hover:text-black">Energy</Link>
          <Link href="/model-x" className="text-gray-50 hover:text-black">Charging</Link>
          <Link href="/model-y" className="text-gray-50 hover:text-black">Discover</Link>
          <Link href="/cybertruck" className="text-gray-50 hover:text-black">Shop</Link>
        </div>

        {/* Right - Profile, Support, Country */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/profile" className="text-gray-50 hover:text-black"><CgProfile/></Link>
          <Link href="/support" className="text-gray-50 hover:text-black"><FaQuestion/></Link>
          <Link href="/support" className="text-gray-50 hover:text-black"><TbWorld/></Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <Link href="/model-s" className="block px-4 py-2 text-gray-700 hover:text-black">Model S</Link>
          <Link href="/model-3" className="block px-4 py-2 text-gray-700 hover:text-black">Model 3</Link>
          <Link href="/model-x" className="block px-4 py-2 text-gray-700 hover:text-black">Model X</Link>
          <Link href="/model-y" className="block px-4 py-2 text-gray-700 hover:text-black">Model Y</Link>
          <Link href="/cybertruck" className="block px-4 py-2 text-gray-700 hover:text-black">Cybertruck</Link>
          <Link href="/powerwall" className="block px-4 py-2 text-gray-700 hover:text-black">Powerwall</Link>
          <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:text-black">Profile</Link>
          <Link href="/support" className="block px-4 py-2 text-gray-700 hover:text-black">Support</Link>
        </div>
      )}
    </nav>
  );
}
