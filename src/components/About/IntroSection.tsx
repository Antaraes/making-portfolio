"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll(".intro-element");

      if (elements) {
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="intro-element text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-black via-red-600 to-red-800 bg-clip-text text-transparent">
                Min Bhone Thant
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Full Stack Developer | Software Engineer | IT Enthusiast
            </p>
          </div>

          <div className="intro-element space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              I am a reliable, hardworking, and enthusiastic individual with a strong passion for IT. Having completed secondary school and an IT diploma program, I have built a solid foundation to pursue a career as a software developer. My experience as a Software Engineer at ACE Data Systems has equipped me with essential skills in problem-solving, critical thinking, and a strong understanding of enterprise-level systems.
            </p>

            <p>
              With 5 years of total work experience, I've worked across diverse roles including Software Engineer at ACE Data Systems, Full Stack Developer at National Cyber City, Frontend Developer at Tee Htwin Enterprise, and IT Support at Kaung San Group. My expertise includes modern frameworks like React, Next.js, React Native, Node.js, Python, Django, and emerging technologies like Rust.
            </p>

            <p>
              My technical skill set spans across frontend development (HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Angular, Vue, Next.js, TypeScript, Three.js), backend development (Python, Django, Flask, Node.js, C#.NET, MySQL, PostgreSQL, MongoDB, Redis), and cloud infrastructure (AWS, Docker, Kubernetes). I'm also proficient in system administration with VMware workstation and Linux.
            </p>

            <p>
              Beyond coding, I'm passionate about digital tools including Adobe Photoshop, Adobe Premiere, Canva, Ableton Live, and FL Studio. I am eager to expand my knowledge and am committed to growing as a professional developer, continuously learning new technologies and taking on challenging projects that push my abilities.
            </p>
          </div>

          <div className="intro-element grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                5+
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                30+
              </div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
