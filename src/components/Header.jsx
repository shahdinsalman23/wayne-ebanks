import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 shadow-md bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-2xl font-bold">Wayne Ebanks</h2>

        {/* Hamburger Button (Mobile + Tablet) */}
        <button
          className="lg:hidden text-3xl text-[#3692e5]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8 font-medium">
          <a href="#" className="hover:text-[#3692e5]">
            Home
          </a>
          <a href="#" className="hover:text-[#3692e5]">
            About
          </a>
          <a href="#" className="hover:text-[#3692e5]">
            Services
          </a>
          <a href="#" className="hover:text-[#3692e5]">
            Blogs
          </a>
          <a href="#" className="hover:text-[#3692e5]">
            Contact Us
          </a>
        </nav>

        {/* Desktop Social + Button */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-4 text-[#3692e5] text-xl">
            <li className="cursor-pointer hover:text-[#3692e5]">
              <FaFacebook />
            </li>
            <li className="cursor-pointer hover:text-[#3692e5]">
              <FaTwitter />
            </li>
            <li className="cursor-pointer hover:text-[#3692e5]">
              <FaLinkedin />
            </li>
          </ul>
          <button className="px-6 py-2 bg-[#3692e5] font-medium cursor-pointer text-white rounded-full border border-[#3692e5] hover:bg-transparent hover:text-[#3692e5] transition-all">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Wayne Ebanks</h2>
            <button
              className="text-3xl text-[#3692e5]"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
          </div>
        <div className="p-6 flex flex-col gap-6 font-medium">
          <a href="#" className="hover:text-[#3692e5]" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#" className="hover:text-[#3692e5]" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#" className="hover:text-[#3692e5]" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#" className="hover:text-[#3692e5]" onClick={() => setIsOpen(false)}>
            Blogs
          </a>
          <a href="#" className="hover:text-[#3692e5]" onClick={() => setIsOpen(false)}>
            Contact Us
          </a>

          {/* Social + Button */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4 text-[#3692e5] text-xl">
              <FaFacebook className="cursor-pointer hover:text-[#3692e5]" />
              <FaTwitter className="cursor-pointer hover:text-[#3692e5]" />
              <FaLinkedin className="cursor-pointer hover:text-[#3692e5]" />
            </div>
            <button className="px-6 py-2 bg-[#3692e5] cursor-pointer font-medium text-white rounded-full border border-[#3692e5] hover:bg-transparent hover:text-[#3692e5] transition-all">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
