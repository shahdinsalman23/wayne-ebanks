import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3692e5] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Wayne Ebanks</h2>
          <p className="text-white text-sm leading-relaxed">
            Wayne Ebanks provides innovative software, AI, and digital 
            solutions to help businesses grow with cutting-edge technology.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-sky-500 rounded-full hover:bg-sky-600 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-blue-800 rounded-full hover:bg-blue-900 transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-pink-600 rounded-full hover:bg-pink-700 transition"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue- text-white transition">
                AI Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 text-white transition">
                SEO Optimization
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="text-white">
              📍 manchester, USA
            </li>
            <li className="text-white">
              📧 info@wayne.com
            </li>
            <li className="text-white">
              📞 +92 300 1234567
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white  mt-10 py-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Wayne Ebanks. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
