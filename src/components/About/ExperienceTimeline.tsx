"use client";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  job: string;
  location: string;
  description: string;
  icon: string;
  date: string;
}

interface ExperienceTimelineProps {
  experienceData: Experience[];
}

export default function ExperienceTimeline({
  experienceData,
}: ExperienceTimelineProps) {
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timelineItems =
        timelineRef.current?.querySelectorAll(".timeline-item");

      if (timelineItems) {
        timelineItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-red-50/20 to-white"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("/bagan.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            My career path, experiences, and the roles that shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-black via-red-600 to-red-900" />

          <div className="space-y-12 lg:space-y-24">
            {experienceData.map((experience, index) => (
              <div
                key={index}
                className={`timeline-item relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                  }`}
                >
                  <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border border-gray-200 hover:border-red-500/50">
                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-16 h-16 bg-gradient-to-br from-black via-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          icon={experience.icon}
                          className="w-8 h-8 text-white"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full">
                        {experience.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                      {experience.title}
                    </h3>

                    {/* Job & Location */}
                    <div className="mb-4 space-y-1">
                      <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                        {experience.job}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Icon icon="mdi:map-marker" className="w-4 h-4" />
                        {experience.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-black via-red-600 to-red-800 rounded-full border-4 border-white shadow-lg ${
                    index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
