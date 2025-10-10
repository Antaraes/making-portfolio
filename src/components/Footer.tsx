"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
    <footer className="bg-[--background] text-[--foreground] mx-auto px-4 container py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-[--primary-foreground]">
            Let&apos;s work together
          </h3>
          <p className="text-[--muted-foreground]">hey@minbhonethant.dev</p>
          <div className="border-t border-[--chart-1] mt-2 w-16" />{" "}
          <p className="text-sm text-[--muted] mt-2">
            © 2025 Min Bhone Thant — Full Stack Developer.{" "}
            <a href="#" className="text-[--chart-3]">
              Privacy
            </a>
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
          <div>
            <h4 className="font-semibold text-[--primary-foreground]">
              Explore
            </h4>
            <ul className="footer-item space-y-2 mt-2">
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Playground
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[--primary-foreground]">
              Socials
            </h4>
            <ul className="footer-item space-y-2 mt-2">
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[--muted-foreground] hover:text-[--foreground]"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
