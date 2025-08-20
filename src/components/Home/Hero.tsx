"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoSection from "./VideoSection";
import { SkiperCard } from "../ui/skiper-card";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(gridRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({
        delay: 0.3,
      });

      // Animate grid background first
      tl.to(gridRef.current, {
        opacity: 0.1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      })
        // Animate badge
        .to(
          badgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=1"
        )
        // Animate title
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        // Animate subtitle
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Animate description
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Create scroll-triggered animations
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        opacity: 0.8,
        scale: 0.95,
        ease: "none",
      });

      // Parallax effect for grid
      gsap.to(gridRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -200,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-white">
      {/* Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
      </div>

      <section
        ref={heroRef}
        className="relative z-10 mx-auto max-w-full min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-28 md:px-8 w-full">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            {/* Badge */}
            <h1
              ref={badgeRef}
              className="group mx-auto w-fit rounded-full border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm text-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300"
            >
              Crafting Innovative Solutions
              <ArrowRight className="ml-2 inline h-4 w-4 duration-300 group-hover:translate-x-1" />
            </h1>

            {/* Main Title */}
            <h2
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
            >
              Building the Future with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Code & Creativity
              </span>
            </h2>

            {/* Subtitle */}
            <h3
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Transforming Ideas into Digital Reality
            </h3>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="mx-auto max-w-2xl text-lg text-gray-500 leading-relaxed"
            >
              Experienced software engineer delivering robust, scalable applications with modern
              technologies. Explore my projects and expertise in creating exceptional digital
              experiences.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="group bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                View My Work
                <ArrowRight className="ml-2 inline h-4 w-4 duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                Get In Touch
              </button>
            </div>

            {/* Stats or Features */}
            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
