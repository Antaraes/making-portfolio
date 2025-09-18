"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../Footer";
import SkillsMarquee from "./SkillMarquee";
import IntegratedHorizontalScroll from "./HorizontalScroll";
import Work from "./Project";
import Services from "./Services";

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textOverlayRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const videoWrapper = videoWrapperRef.current;
      const textOverlay = textOverlayRef.current;
      const progressBar = progressBarRef.current;
      const section = sectionRef.current;
      const skillsSection = skillsRef.current;
      const horizontalSection = horizontalRef.current;

      if (!section || !videoWrapper || !textOverlay || !progressBar) return;

      // Background color animation (white to black) - only for first half
      gsap.fromTo(
        section,
        {
          backgroundColor: "oklch(1 0 0)", // White
        },
        {
          backgroundColor: "oklch(0 0 0)", // Black
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "50% top",
            scrub: 0.5,
          },
          ease: "none",
        }
      );

      // Main video animation
      gsap.fromTo(
        videoWrapper,
        {
          y: 100,
          scale: 0.9,
          opacity: 0.8,
          borderRadius: "50px",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          borderRadius: "0px",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "90% top",
            scrub: 0.5,
            pin: videoWrapper,
            pinSpacing: false,
          },
          ease: "power2.out",
        }
      );

      // Overlay fade-out
      gsap.fromTo(
        videoWrapper.querySelector(".overlay"),
        {
          opacity: 0.3,
        },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "50% top",
            scrub: 0.5,
          },
          ease: "power2.out",
        }
      );

      // Text overlay animation
      const textElements = textOverlay.querySelectorAll("h3, p");
      gsap.fromTo(
        textElements,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "25% center",
            scrub: 0.5,
          },
          ease: "power2.out",
        }
      );

      // Progress bar animation
      gsap.fromTo(
        progressBar,
        {
          width: "0%",
        },
        {
          width: "100%",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "50% top",
            scrub: 0.5,
          },
          ease: "none",
        }
      );

      // Skills section slide up (separate from horizontal)
      if (skillsSection) {
        gsap.fromTo(
          skillsSection,
          {
            y: "100vh",
          },
          {
            y: "0vh",
            scrollTrigger: {
              trigger: section,
              start: "50% top",
              end: "bottom top",
              scrub: 0.8,
              anticipatePin: 1,
            },
            ease: "none",
          }
        );
      }

      // Fade out video text when skills section appears
      gsap.to(textOverlay, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "60% top",
          end: "80% top",
          scrub: 0.5,
        },
        ease: "power2.out",
      });

      // IMPORTANT: Don't animate the horizontal section here
      // Let it handle its own ScrollTrigger
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-auto overflow-hidden w-full"
      >
        {/* Video Section */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <div
            ref={videoWrapperRef}
            className="relative w-full max-w-[1505px] h-[696px]"
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source
                src="https://vbportfolio.nyc3.cdn.digitaloceanspaces.com/vbreel2025.mp4"
                type="video/mp4"
              />
            </video>

            <div className="overlay absolute inset-0 bg-black pointer-events-none" />

            <div
              ref={textOverlayRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            >
              <div className="text-center text-white">
                <h3 className="text-6xl font-bold mb-4">My Portfolio</h3>
                <p className="text-xl opacity-80">
                  Creative Development & Design
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10">
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <p className="text-sm mt-2 text-center opacity-60">
                Scroll to explore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section - Independent */}
      <div ref={horizontalRef}>
        <IntegratedHorizontalScroll />
      </div>

      {/* Footer Section - Independent */}
      <section className="relative z-20 bg-white">
        {/* Skills Section - Slides up first */}
        <div ref={skillsRef} className="relative z-20 pb-20 bg-white">
          <SkillsMarquee />
        </div>

        <div>
          <Work />
        </div>
        <div>
          <Services />
        </div>
      </section>
    </>
  );
};

export default VideoSection;
