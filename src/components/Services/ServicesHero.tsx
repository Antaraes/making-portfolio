"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([headlineRef.current, sublineRef.current], {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(shadowRef.current, {
        width: "63%",
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .to(
          sublineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background shadow effect */}
      <div
        ref={shadowRef}
        className="absolute top-0 left-0 h-full bg-gradient-to-br from-red-50/40 to-gray-50/40"
        style={{ width: "0%" }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-6 tracking-tight"
          >
            Services that drive{" "}
            <span className="italic text-red-600">growth</span>
          </h1>
          <p
            ref={sublineRef}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
          >
            From frontend to full-stack development, I deliver comprehensive
            solutions tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
