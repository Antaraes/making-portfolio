"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceSubItem {
  title: string;
  description: string;
}

interface ServiceSection {
  category: string;
  title: string;
  description: string;
  subServices: ServiceSubItem[];
}

interface ServiceSectionsProps {
  sections: ServiceSection[];
}

export default function ServiceSections({ sections }: ServiceSectionsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const serviceBlocks =
        sectionRef.current?.querySelectorAll(".service-block");

      if (serviceBlocks) {
        serviceBlocks.forEach((block) => {
          gsap.fromTo(
            block,
            {
              opacity: 0,
              y: 60,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: block,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="space-y-24 md:space-y-32">
          {sections.map((section, index) => (
            <div key={index} className="service-block">
              {/* Category label */}
              <div className="mb-4">
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                  {section.category}
                </span>
              </div>

              {/* Section title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                {section.title}
              </h2>

              {/* Section description */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
                {section.description}
              </p>

              {/* Sub-services grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {section.subServices.map((subService, subIndex) => (
                  <div
                    key={subIndex}
                    className="group"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {subService.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {subService.description}
                    </p>

                    {/* Animated underline */}
                    <div className="mt-4 h-0.5 w-0 bg-red-600 group-hover:w-12 transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* Divider line */}
              {index < sections.length - 1 && (
                <div className="mt-24 md:mt-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
