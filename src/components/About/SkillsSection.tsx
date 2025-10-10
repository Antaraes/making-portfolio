"use client";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
  icon: string;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  SocialDesign: Skill[];
  Hobbies: Skill[];
}

interface SkillsSectionProps {
  skillsData: SkillsData;
}

export default function SkillsSection({ skillsData }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const skillCards = sectionRef.current?.querySelectorAll(".skill-card");

      if (skillCards) {
        gsap.fromTo(
          skillCards,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderSkillCategory = (
    title: string,
    skills: Skill[],
    colorClass: string
  ) => (
    <div className="mb-16">
      <h3 className={`text-3xl md:text-4xl font-bold mb-8 ${colorClass}`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div className="flex flex-col items-center gap-3">
              {skill.icon ? (
                <Icon
                  icon={skill.icon}
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-xl">
                    {skill.title.charAt(0)}
                  </span>
                </div>
              )}
              <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                {skill.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, creative abilities,
            and personal interests
          </p>
        </div>

        {renderSkillCategory(
          "Frontend Development",
          skillsData.frontend,
          "text-blue-600"
        )}
        {renderSkillCategory(
          "Backend Development",
          skillsData.backend,
          "text-purple-600"
        )}
        {renderSkillCategory(
          "Design & Social",
          skillsData.SocialDesign,
          "text-pink-600"
        )}
        {renderSkillCategory(
          "Hobbies & Interests",
          skillsData.Hobbies,
          "text-green-600"
        )}
      </div>
    </section>
  );
}
