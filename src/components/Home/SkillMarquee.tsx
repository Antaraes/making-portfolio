"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "motion/react";

const skills = [
  // Frontend
  {
    name: "HTML",
    src: "https://skillicons.dev/icons?i=html&theme=light",
    link: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    name: "CSS",
    src: "https://skillicons.dev/icons?i=css&theme=light",
    link: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    name: "SCSS",
    src: "https://skillicons.dev/icons?i=sass&theme=light",
    link: "https://sass-lang.com",
  },
  {
    name: "JavaScript",
    src: "https://skillicons.dev/icons?i=javascript&theme=light",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "Tailwind CSS",
    src: "https://skillicons.dev/icons?i=tailwindcss&theme=light",
    link: "https://tailwindcss.com",
  },
  {
    name: "Bootstrap",
    src: "https://skillicons.dev/icons?i=bootstrap&theme=light",
    link: "https://getbootstrap.com",
  },
  {
    name: "React",
    src: "https://skillicons.dev/icons?i=react&theme=light",
    link: "https://react.dev",
  },
  {
    name: "Next.js",
    src: "https://skillicons.dev/icons?i=nextjs&theme=light",
    link: "https://nextjs.org",
  },
  {
    name: "Three.js",
    src: "https://skillicons.dev/icons?i=threejs&theme=light",
    link: "https://threejs.org",
  },
  {
    name: "Flutter",
    src: "https://skillicons.dev/icons?i=flutter&theme=light",
    link: "https://flutter.dev",
  },

  // Backend
  {
    name: "Python",
    src: "https://skillicons.dev/icons?i=python&theme=light",
    link: "https://www.python.org",
  },
  {
    name: "Django",
    src: "https://skillicons.dev/icons?i=django&theme=light",
    link: "https://www.djangoproject.com",
  },
  {
    name: "Flask",
    src: "https://skillicons.dev/icons?i=flask&theme=light",
    link: "https://flask.palletsprojects.com",
  },
  {
    name: "C#",
    src: "https://skillicons.dev/icons?i=cs&theme=light",
    link: "https://learn.microsoft.com/dotnet/csharp/",
  },
  {
    name: "MySQL",
    src: "https://skillicons.dev/icons?i=mysql&theme=light",
    link: "https://www.mysql.com",
  },
  {
    name: "Redis",
    src: "https://skillicons.dev/icons?i=redis&theme=light",
    link: "https://redis.io",
  },
  {
    name: "Docker",
    src: "https://skillicons.dev/icons?i=docker&theme=light",
    link: "https://www.docker.com",
  },
  {
    name: "PostgreSQL",
    src: "https://skillicons.dev/icons?i=postgres&theme=light",
    link: "https://www.postgresql.org",
  },
  {
    name: "NestJS",
    src: "https://skillicons.dev/icons?i=nestjs&theme=light",
    link: "https://nestjs.com",
  },
  {
    name: "MongoDB",
    src: "https://skillicons.dev/icons?i=mongodb&theme=light",
    link: "https://www.mongodb.com",
  },
  {
    name: "FastAPI",
    src: "https://skillicons.dev/icons?i=fastapi&theme=light",
    link: "https://fastapi.tiangolo.com",
  },
  {
    name: "GraphQL",
    src: "https://skillicons.dev/icons?i=graphql&theme=light",
    link: "https://graphql.org",
  },

  // Social / Design
  {
    name: "Photoshop",
    src: "https://skillicons.dev/icons?i=ps&theme=light",
    link: "https://www.adobe.com/products/photoshop.html",
  },
  {
    name: "Figma",
    src: "https://skillicons.dev/icons?i=figma&theme=light",
    link: "https://www.figma.com",
  },
];

export default function SkillsIconCarousel() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const springConfig = { stiffness: 100, damping: 15 };
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Animate the marquee track infinitely
    gsap.to(marquee, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className="relative overflow-hidden w-full bg-background py-20">
      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee container */}
      <div className="flex whitespace-nowrap items-center gap-16 w-max" ref={marqueeRef}>
        {[...skills, ...skills].map((skill, idx) => (
          <div
            key={idx}
            className="group relative inline-flex items-center justify-center"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 10 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
                  className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                  <div className="relative z-30 text-base font-bold text-white">{skill.name}</div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon */}
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <img
                onMouseMove={handleMouseMove}
                src={skill.src}
                alt={skill.name}
                width={80}
                height={80}
                className="relative object-cover transition duration-500 group-hover:z-30 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
