"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Footer = () => {
  useGSAP(() => {
    gsap.from(".footer-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Let&apos;s work together
            </h3>
            <a
              href="mailto:minbhonethantajm@gmail.com"
              className="text-lg md:text-xl text-red-600 hover:text-red-700 transition-colors duration-200 font-medium"
            >
              minbhonethantajm@gmail.com
            </a>
            <div className="border-t-2 border-red-600 mt-4 w-16" />
            <p className="text-sm text-gray-600 mt-4 max-w-md">
              Full Stack Developer specializing in modern web technologies,
              mobile development, and cloud infrastructure.
            </p>
          </div>

          {/* Explore Links */}
          <div className="footer-item">
            <h4 className="font-bold text-black text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-item">
            <h4 className="font-bold text-black text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/min-bhone-thant-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Antaraes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm md:text-base"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2025 Min Bhone Thant — Full Stack Developer. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
