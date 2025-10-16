"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const GoodWritesAI = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style jsx>{`
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes neonPulse {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(16, 185, 129, 0.8),
              0 0 20px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.4),
              0 0 40px rgba(16, 185, 129, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(16, 185, 129, 1),
              0 0 30px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.6),
              0 0 50px rgba(16, 185, 129, 0.4), 0 0 60px rgba(16, 185, 129, 0.2);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4),
              0 0 40px rgba(16, 185, 129, 0.2),
              inset 0 0 20px rgba(16, 185, 129, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.6),
              0 0 60px rgba(16, 185, 129, 0.4),
              inset 0 0 30px rgba(16, 185, 129, 0.2);
          }
        }

        .section-fade {
          opacity: 0;
        }

        .neon-text {
          color: #10b981;
          text-shadow: 0 0 10px rgba(16, 185, 129, 0.8),
            0 0 20px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.4);
        }

        .neon-text-animate {
          animation: neonPulse 2s ease-in-out infinite;
        }

        .neon-border {
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.2),
            inset 0 0 10px rgba(16, 185, 129, 0.1);
        }

        .neon-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .neon-bg {
          background: linear-gradient(
            135deg,
            rgba(16, 185, 129, 0.1) 0%,
            rgba(5, 150, 105, 0.1) 50%,
            rgba(4, 120, 87, 0.1) 100%
          );
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #10b981 0%,
            #34d399 50%,
            #6ee7b7 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ai-gradient {
          background: linear-gradient(
            135deg,
            #10b981 0%,
            #059669 50%,
            #047857 100%
          );
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "700ms" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1000ms" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 py-32 text-center">
          {/* AI Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wider uppercase neon-border rounded-full neon-bg">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span className="text-emerald-400">
                AI-Powered Research Platform
              </span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
            Good Writes
            <br />
            <span className="neon-text neon-text-animate">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Streamlining academic research with AI-powered document insights,
            intelligent library management, and collaborative rich-text editing
          </p>

          {/* Impact Statement */}
          <div className="inline-flex items-center gap-2 px-6 py-3 neon-border rounded-full neon-bg">
            <svg
              className="w-5 h-5 text-emerald-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-emerald-300">
              Transformed research workflows for academic excellence
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 neon-border rounded-full flex justify-center p-2">
            <div
              className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce"
              style={{ boxShadow: "0 0 10px rgba(16, 185, 129, 0.8)" }}
            />
          </div>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div>
            <Image
              src="/project/research-paper/research-paper.png"
              alt="Good Writes AI Platform"
              className="w-full h-auto"
              width={1600}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title */}
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sticky top-32"
              >
                Revolutionizing
                <br />
                academic
                <br />
                <span className="neon-text">research</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xs font-medium tracking-widest uppercase text-emerald-400 mb-4">
                  Project Goal
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Good Writes AI aims to streamline academic research by
                  integrating AI-powered document insights, efficient library
                  management, and rich text editing for seamless note-taking and
                  collaboration.
                </p>
              </div>

              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xs font-medium tracking-widest uppercase text-emerald-400 mb-4">
                  My Solution
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  As a Full Stack Developer, I built the platform using Next.js,
                  NestJS, MongoDB, and Python LLM APIs, ensuring AI-driven
                  research, structured document storage (AWS S3), and smooth
                  deployment (Railway).
                </p>
              </div>

              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xs font-medium tracking-widest uppercase text-emerald-400 mb-4">
                  Impact
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  My work enhanced research efficiency, provided AI-powered
                  document analysis, and improved user experience with an
                  intuitive, feature-rich interface.
                </p>
              </div>

              <div
                ref={addToRefs}
                className="section-fade grid grid-cols-2 gap-8 pt-8"
              >
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Role
                  </h4>
                  <p className="text-gray-300">
                    Full Stack Developer & AI Engineer
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Duration
                  </h4>
                  <p className="text-gray-300">5 months</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Platform
                  </h4>
                  <p className="text-gray-300">Web Application</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Tech Stack
                  </h4>
                  <p className="text-gray-300">
                    Next.js, NestJS, Python, MongoDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sticky top-32"
              >
                Key
                <br />
                <span className="neon-text">Features</span>
              </h2>
            </div>

            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">
                  AI-Powered Document Analysis
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Leveraging advanced Python LLM APIs to extract insights,
                  summarize content, and answer questions about research
                  documents.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Automatic document summarization
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Key insight extraction and highlighting
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Interactive Q&A with documents
                  </li>
                </ul>
              </div>

              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">
                  Intelligent Library Management
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Efficient document storage with AWS S3 integration and MongoDB
                  for metadata management.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Unlimited cloud storage with AWS S3
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Advanced search and filtering
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Custom tags and categorization
                  </li>
                </ul>
              </div>

              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">
                  Rich Text Editing & Collaboration
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Powerful editor with markdown support, inline citations, and
                  collaborative features.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Full markdown support with live preview
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Inline document citations
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">→</span>
                    Real-time collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Skills &
                <br />
                <span className="neon-text">Deliverables</span>
              </h2>
            </div>

            <div className="md:col-span-7">
              <div
                ref={addToRefs}
                className="section-fade grid md:grid-cols-2 gap-8"
              >
                <div className="neon-border rounded-xl p-6 space-y-4 neon-bg">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-emerald-400">
                    Frontend
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Next.js</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                <div className="neon-border rounded-xl p-6 space-y-4 neon-bg">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-emerald-400">
                    Backend & Data
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>NestJS</li>
                    <li>MongoDB</li>
                    <li>Python LLM APIs</li>
                    <li>AWS S3</li>
                  </ul>
                </div>

                <div className="neon-border rounded-xl p-6 space-y-4 neon-bg">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-emerald-400">
                    DevOps
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Docker</li>
                    <li>AWS Amplify</li>
                    <li>Railway</li>
                    <li>CI/CD</li>
                  </ul>
                </div>

                <div className="neon-border rounded-xl p-6 space-y-4 neon-bg">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-emerald-400">
                    AI & ML
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>OpenAI GPT</li>
                    <li>LangChain</li>
                    <li>RAG Pipeline</li>
                    <li>Embeddings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Impact */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div
            ref={addToRefs}
            className="section-fade max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 neon-border rounded-full neon-bg">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-emerald-300">
                Personal Significance
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              This project has been{" "}
              <span className="neon-text">transformative</span> for me
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              Building Good Writes AI taught me the intricacies of AI
              integration, large-scale document processing, and creating
              intuitive user experiences. It challenged me to solve complex
              problems around LLM APIs, cloud storage architecture, and
              real-time collaboration—skills that have significantly elevated my
              capabilities as a developer.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 md:py-48 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div ref={addToRefs} className="section-fade max-w-4xl space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Empowering researchers with{" "}
              <span className="neon-text neon-text-animate">
                AI intelligence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              This project represents the cutting edge of AI-powered research
              tools, combining advanced language models with intuitive design to
              create a platform that truly transforms how researchers work.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="/contact"
                className="px-8 py-4 ai-gradient text-white rounded-full font-medium hover:shadow-lg transition-all neon-glow"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-32 border-t border-gray-900" />
    </div>
  );
};

export default GoodWritesAI;
