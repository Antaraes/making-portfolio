"use client";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your requirements, goals, and vision. We analyze your needs and create a detailed project roadmap.",
    icon: "mdi:lightbulb-on-outline",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Crafting the user experience and technical architecture. Creating wireframes, designs, and system architecture.",
    icon: "mdi:palette-outline",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Building your solution with clean, scalable code. Rigorous testing ensures quality and performance.",
    icon: "mdi:code-braces",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "Launching your project and providing ongoing maintenance. Continuous monitoring and updates as needed.",
    icon: "mdi:rocket-launch-outline",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = sectionRef.current?.querySelectorAll(".process-step");

      if (steps) {
        steps.forEach((step, index) => {
          gsap.fromTo(
            step,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }

      // Animate the connecting line
      const line = sectionRef.current?.querySelector(".process-line");
      if (line) {
        gsap.fromTo(
          line,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            My Work Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-red-600 to-red-900 process-line origin-top" />

          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"
                  }`}
                >
                  <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-500/50">
                    {/* Number badge */}
                    <div
                      className={`inline-block mb-4 ${
                        index % 2 === 0 ? "lg:float-right lg:ml-4" : "lg:float-left lg:mr-4"
                      }`}
                    >
                      <span className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-black via-red-600 to-red-800 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    <div className="clear-both">
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Icon circle - center on large screens */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-black via-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <Icon icon={step.icon} className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
