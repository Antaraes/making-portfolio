"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ExternalLink, Palette, Code, Smartphone, Zap, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Section {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  bgColor: string;
}

const IntegratedHorizontalScroll = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections: Section[] = [
    {
      id: 1,
      title: "Digital Landscapes",
      subtitle: "Crafting captivating experiences",
      description:
        "We transform ideas into stunning digital realities that captivate and engage your audience through innovative design and seamless functionality.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      category: "Brand Identity",
      icon: <Palette className="w-8 h-8" />,
      bgColor: "from-slate-900 to-slate-800",
    },
    {
      id: 2,
      title: "UX/UI Design",
      subtitle: "Intuitive Digital Experiences",
      description:
        "Transform complex data into intuitive, visually refined interfaces that empower confident decision-making and user engagement.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      category: "User Experience",
      icon: <Zap className="w-8 h-8" />,
      bgColor: "from-blue-600 to-purple-700",
    },
    {
      id: 3,
      title: "Dashboard Design",
      subtitle: "Data Visualization",
      description:
        "Built to decode complexity, our dashboards transform data into elegant and intuitive interfaces that drive business decisions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Analytics Platform",
      icon: <Play className="w-8 h-8" />,
      bgColor: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      title: "Web Development",
      subtitle: "Modern Digital Platforms",
      description:
        "Crafted for performance and clarity, our web solutions engage visitors and convert them into loyal customers through strategic design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      category: "Web Solutions",
      icon: <Code className="w-8 h-8" />,
      bgColor: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      title: "Mobile Design",
      subtitle: "App Interfaces",
      description:
        "Creating seamless mobile experiences that users love, with intuitive navigation and stunning visual design that performs flawlessly.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      category: "Mobile Experience",
      icon: <Smartphone className="w-8 h-8" />,
      bgColor: "from-purple-600 to-pink-600",
    },
  ];

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;

    if (!wrapper || !container) return;

    // Calculate the total width for horizontal scrolling
    const totalWidth = sections.length * window.innerWidth;

    // Set the wrapper height to create scroll distance
    gsap.set(wrapper, {
      height: totalWidth * 0.8, // Adjust this multiplier for scroll speed
    });

    // Create the horizontal scroll animation
    const horizontalTween = gsap.to(container, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
    });

    // Create ScrollTrigger for horizontal scroll
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      animation: horizontalTween,
      scrub: 1,
      pin: container,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: () => {
        // Recalculate on resize
        const newTotalWidth = sections.length * window.innerWidth;
        gsap.set(wrapper, { height: newTotalWidth * 0.8 });
        horizontalTween.vars.x = -(newTotalWidth - window.innerWidth);
      },
    });

    // Animate individual sections
    container.querySelectorAll(".horizontal-panel").forEach((panel, index) => {
      const content = panel.querySelector(".panel-content");
      const elements = content?.querySelectorAll(".fade-in-element");

      if (elements) {
        gsap.fromTo(
          elements,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "left 80%",
              end: "left 20%",
              containerAnimation: horizontalTween,
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Image parallax
      const image = panel.querySelector(".panel-image img");
      if (image) {
        gsap.fromTo(
          image,
          {
            scale: 1.2,
            x: 50,
          },
          {
            scale: 1,
            x: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "left right",
              end: "right left",
              containerAnimation: horizontalTween,
              scrub: 2,
            },
          }
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === wrapper || trigger.animation === horizontalTween) {
          trigger.kill();
        }
      });
    };
  }, [sections.length]);

  return (
    <div ref={wrapperRef} className="relative">
      <div ref={containerRef} className="flex w-fit">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="horizontal-panel flex-shrink-0 w-screen h-screen relative overflow-hidden"
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor}`}>
              <div className="panel-image absolute inset-0 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Large Background Number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/5 text-[35rem] font-light leading-none select-none">
                {String(section.id).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="panel-content relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
                <div className="grid lg:grid-cols-5 gap-16 items-center">
                  {/* Text Content */}
                  <div className="lg:col-span-3 text-white space-y-8">
                    {/* Category */}
                    <div className="fade-in-element flex items-center space-x-4">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        {section.icon}
                      </div>
                      <div>
                        <span className="text-xs font-medium tracking-widest uppercase opacity-70 block">
                          {section.category}
                        </span>
                        <span className="text-sm opacity-50">
                          0{section.id} / 0{sections.length}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-4">
                      <h1 className="fade-in-element text-5xl lg:text-7xl font-light leading-none">
                        {section.title.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </h1>
                      <h2 className="fade-in-element text-xl lg:text-2xl font-light opacity-80">
                        {section.subtitle}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="fade-in-element text-lg leading-relaxed opacity-90 max-w-xl">
                      {section.description}
                    </p>

                    {/* CTA Button */}
                    <div className="fade-in-element">
                      {index < sections.length - 1 ? (
                        <button className="group bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center space-x-3">
                          <span>Explore Project</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      ) : (
                        <button className="group bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3">
                          <span>Get in Touch</span>
                          <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="lg:col-span-2 hidden lg:flex justify-center items-center">
                    <div className="fade-in-element relative">
                      {/* Main Card */}
                      <div className="w-80 h-96 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
                        {/* Mini Image */}
                        <div className="h-48 overflow-hidden">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-cover opacity-80"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-4">
                          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
                            <div className="scale-125">{section.icon}</div>
                          </div>
                          <div className="text-center">
                            <h3 className="text-xl font-medium text-white mb-2">{section.title}</h3>
                            <p className="text-white/60 text-sm">{section.category}</p>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white/60 text-xs font-medium">{section.id}</span>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Hint - Only on first panel */}
            {index === 0 && (
              <div className="absolute bottom-8 right-8 text-white/50 text-sm flex items-center space-x-2">
                <span>Continue scrolling</span>
                <div className="w-6 h-4 border border-white/30 rounded-sm flex items-center justify-center">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegratedHorizontalScroll;
