"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({
        delay: 0.3,
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }).to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/bagan.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <section
        ref={heroRef}
        className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 md:px-8 w-full"
      >
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-gray-200  to-red-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mx-auto max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Full Stack Developer
          </p>
        </div>
      </section>
    </div>
  );
}
