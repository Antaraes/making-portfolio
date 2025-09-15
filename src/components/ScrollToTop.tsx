"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Scroll to Top Component
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        if (!isVisible) {
          setIsVisible(true);
          // Show animation
          gsap.fromTo(
            buttonRef.current,
            {
              scale: 0,
              opacity: 0,
              rotate: -180,
            },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.4,
              ease: "back.out(1.7)",
            }
          );
        }
      } else {
        if (isVisible) {
          // Hide animation
          gsap.to(buttonRef.current, {
            scale: 0,
            opacity: 0,
            rotate: 180,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setIsVisible(false),
          });
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    // Click animation
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Icon rotation animation
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 0.6,
      ease: "power2.out",
    });

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(iconRef.current, {
      y: -2,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });

    gsap.to(iconRef.current, {
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <div
        ref={iconRef}
        className="transform transition-transform duration-200"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20"></div>
    </button>
  );
};
export default ScrollToTop;
