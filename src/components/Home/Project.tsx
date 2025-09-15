import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Types
interface Project {
  id: number;
  title: string;
  subTitle: string;
  link?: string;
  tabs: string[];
  image: string[];
  background: string;
}

interface Contributor {
  id: number;
  name: string;
  designation: string;
  image: string;
}

// Work Component
const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Appointment Meeting",
      subTitle: "Recently Projects",
      link: "https://userogue.com",
      tabs: ["React", "Next Js", "Python", "TypeScript"],
      image: ["/images/appointment/meetingappoinment.png"],
      background: "#ced6de",
    },
    {
      id: 2,
      title: "Node Framework Template",
      subTitle: "Open Source Node Framework",
      link: "https://github.com/Antaraes/node_template",
      tabs: ["Node Js", "Open Source", "CLI"],
      image: ["/images/nodejsTemplate.webp"],
      background: "#f0f0f0",
    },
    {
      id: 3,
      title: "Atxapt Apartment",
      subTitle: "Texas, USA Showcase",
      tabs: ["React Js", "Machine Learning", "Python"],
      image: ["/images/atxapt.png"],
      background: "#e8f4fd",
    },
    {
      id: 4,
      title: "Event Management",
      subTitle: "To sell event tickets and create events",
      tabs: ["Node Js", "Next Js", "MongoDB"],
      image: ["/images/event.png"],
      background: "#fef7f0",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
          },
        }
      );

      // Projects stagger animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2
              ref={titleRef}
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Work
            </h2>
            <p
              ref={subtitleRef}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            >
              From beautiful marketing websites to fun, intuitive mobile apps,
              all the way to powerful, data-driven SaaS dashboards that your
              clients will love to use.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border-b-2 border-orange-400 text-gray-900 font-medium hover:bg-orange-50 transition-colors duration-300">
            See all projects
          </button>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="project-card  group">
      <div
        className="aspect-[4/3] overflow-hidden bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        style={{ backgroundColor: project.background }}
      >
        <img
          src={project.image[0]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8 ">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.subTitle}</p>
        <div className="flex flex-wrap gap-2">
          {project.tabs.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-700 font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tabs.length > 3 && (
            <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-600">
              +{project.tabs.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
