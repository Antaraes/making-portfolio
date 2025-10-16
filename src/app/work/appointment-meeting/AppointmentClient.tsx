"use client";
import React, { useEffect, useRef } from "react";

const AppointmentMeeting = () => {
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

  const contributors = [
    { name: "Linn Thit Htwe", role: "Backend Lead" },
    { name: "Linn Htet Aung", role: "Full Stack Developer" },
    { name: "Ye Yint Myint Myat", role: "Frontend Developer" },
    { name: "Shine Wai Tun", role: "Backend Developer" },
    { name: "Hpone Myat Thu", role: "Frontend Developer" },
    { name: "Min Bhone Thant", role: "Full Stack Developer & UI Lead" },
  ];

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

        .section-fade {
          opacity: 0;
        }

        .accent-border {
          border-color: #242b3a;
        }

        .accent-bg {
          background-color: #242b3a;
        }

        .accent-text {
          color: #4a5568;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(36, 43, 58, 0.3);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 py-32 text-center">
          {/* Project Type Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-gray-400 border border-gray-800 rounded-full accent-bg/50">
              Full Stack Web Application
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
            Meeting
            <br />
            <span className="text-[#242b3a]">Appointment</span>
            <br />
            System
          </h1>

          {/* Timeline */}
          <p className="text-lg md:text-xl text-gray-400 mb-4">
            January 2024 - March 2024
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collaborative full-stack appointment scheduling platform built with
            emphasis on functionality, teamwork, and code excellence
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-gray-800 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-600 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Hero Images - Full Width */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 space-y-8">
          {/* Desktop View */}
          <div
            ref={addToRefs}
            className="section-fade rounded-2xl overflow-hidden border border-gray-900"
          >
            <img
              src="/images/appointment/meetingappoinment.png"
              alt="Meeting Appointment System Dashboard"
              className="w-full h-auto"
            />
          </div>

          {/* Mobile Views Grid */}
          <div
            ref={addToRefs}
            className="section-fade grid md:grid-cols-2 gap-8"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-900">
              <img
                src="/images/appointment/meeting.png"
                alt="Mobile View 1"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-900">
              <img
                src="/images/appointment/meeting_mobile.png"
                alt="Mobile View 2"
                className="w-full h-auto"
              />
            </div>
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
                Building for
                <br />
                teamwork &
                <br />
                <span style={{ color: "#242b3a" }}>functionality</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4">
                  Project Overview
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Developed an Appointment Meeting application with a strong
                  emphasis on functionality and fostering a collaborative team
                  environment. I made backend and frontend structures of project
                  flows for full-stack app, working alongside a dedicated team of
                  six members.
                </p>
              </div>

              <div ref={addToRefs} className="section-fade grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    My Role
                  </h4>
                  <p className="text-gray-300">
                    Full Stack Developer & UI Lead
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Timeline
                  </h4>
                  <p className="text-gray-300">3 Months (Jan - Mar 2024)</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Team Size
                  </h4>
                  <p className="text-gray-300">6 Developers</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Platform
                  </h4>
                  <p className="text-gray-300">Web Application (Responsive)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sticky top-32"
              >
                Technical
                <br />
                <span style={{ color: "#242b3a" }}>Excellence</span>
              </h2>
            </div>

            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xl font-bold text-gray-300 mb-4">
                  Frontend Architecture
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Leveraged JavaScript with Next.js 13 for modern frontend
                  development, focusing on timely processing and efficient code
                  execution.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Next.js 13 with App Router for optimal performance
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Component-based architecture for reusability
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Responsive design for all devices
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Deployed on Vercel for seamless delivery
                  </li>
                </ul>
              </div>

              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xl font-bold text-gray-300 mb-4">
                  Backend Architecture
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Built with Node.js and TypeScript, emphasizing code reusability
                  and performance optimization through robust dependency injection
                  and inversion techniques.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Node.js with TypeScript for type-safe development
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Dependency injection for maintainable code
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    PostgreSQL with TypeORM and Sequelize
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#242b3a" }} className="mt-1">
                      →
                    </span>
                    Deployed on Render for reliable backend services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div
            ref={addToRefs}
            className="section-fade text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <span style={{ color: "#242b3a" }}>Features</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive appointment scheduling with team collaboration
            </p>
          </div>

          <div
            ref={addToRefs}
            className="section-fade grid md:grid-cols-3 gap-8"
          >
            <div className="p-8 bg-[#242b3a]/10 border border-[#242b3a]/30 rounded-2xl hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#242b3a] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Smart Scheduling
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Intelligent appointment booking system with conflict detection and
                availability management
              </p>
            </div>

            <div className="p-8 bg-[#242b3a]/10 border border-[#242b3a]/30 rounded-2xl hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#242b3a] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Team Collaboration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Built for teamwork with shared calendars, meeting coordination,
                and collaborative scheduling
              </p>
            </div>

            <div className="p-8 bg-[#242b3a]/10 border border-[#242b3a]/30 rounded-2xl hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#242b3a] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Real-time Notifications
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Instant updates for appointments, reminders, and schedule changes
                across the platform
              </p>
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
                Technology
                <br />
                <span style={{ color: "#242b3a" }}>Stack</span>
              </h2>
            </div>

            <div className="md:col-span-7">
              <div
                ref={addToRefs}
                className="section-fade grid md:grid-cols-2 gap-8"
              >
                <div className="border border-gray-900 rounded-xl p-6 space-y-4 bg-[#242b3a]/5">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Frontend
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Next.js 13</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>

                <div className="border border-gray-900 rounded-xl p-6 space-y-4 bg-[#242b3a]/5">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Backend
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>

                <div className="border border-gray-900 rounded-xl p-6 space-y-4 bg-[#242b3a]/5">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Database
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>PostgreSQL</li>
                    <li>TypeORM</li>
                    <li>Sequelize</li>
                    <li>Database Migrations</li>
                  </ul>
                </div>

                <div className="border border-gray-900 rounded-xl p-6 space-y-4 bg-[#242b3a]/5">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Deployment
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Vercel (Frontend)</li>
                    <li>Render (Backend)</li>
                    <li>CI/CD Pipeline</li>
                    <li>Git Version Control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contributors */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div
            ref={addToRefs}
            className="section-fade text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Amazing <span style={{ color: "#242b3a" }}>Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              This project was made possible by our dedicated team of six
              developers, prioritizing community and teamwork over UI intricacies
            </p>
          </div>

          <div
            ref={addToRefs}
            className="section-fade grid md:grid-cols-3 gap-6"
          >
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="p-6 border border-gray-900 rounded-xl bg-[#242b3a]/5 hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-[#242b3a] flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">
                    {contributor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{contributor.name}</h3>
                <p className="text-sm text-gray-500">{contributor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Key
                <br />
                <span style={{ color: "#242b3a" }}>Learnings</span>
              </h2>
            </div>

            <div className="md:col-span-7">
              <div ref={addToRefs} className="section-fade space-y-8">
                <div className="border-l-2 border-[#242b3a] pl-6">
                  <p className="text-lg text-gray-300">
                    Emphasized code reusability and performance optimization
                    through robust dependency injection and inversion techniques
                  </p>
                </div>
                <div className="border-l-2 border-[#242b3a] pl-6">
                  <p className="text-lg text-gray-300">
                    Maintained focus on timely processing in frontend while
                    ensuring efficient code execution
                  </p>
                </div>
                <div className="border-l-2 border-[#242b3a] pl-6">
                  <p className="text-lg text-gray-300">
                    Spearheaded UI design and comprehensive deployment strategy
                    across multiple platforms
                  </p>
                </div>
                <div className="border-l-2 border-[#242b3a] pl-6">
                  <p className="text-lg text-gray-300">
                    Actively engaged with team of six, prioritizing community and
                    teamwork throughout development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Links */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div ref={addToRefs} className="section-fade text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Open Source <span style={{ color: "#242b3a" }}>Code</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the codebase and see how we built this collaborative
              appointment system
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="https://github.com/Antaraes/meeting_appointment_ui.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 accent-bg text-white rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Frontend Repository
              </a>
              <a
                href="https://github.com/LinThitHtwe/Meeting_Appointment_System_API.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#242b3a] rounded-full font-medium hover:bg-[#242b3a]/10 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Backend Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 md:py-48 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div ref={addToRefs} className="section-fade max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Built with teamwork,
              <br />
              delivered with{" "}
              <span style={{ color: "#242b3a" }}>excellence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              This project showcases the power of collaborative development,
              clean architecture, and dedication to building functional,
              user-friendly applications.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-32 border-t border-gray-900" />
    </div>
  );
};

export default AppointmentMeeting;
