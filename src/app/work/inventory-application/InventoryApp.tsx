"use client";
import React, { useEffect, useRef } from "react";

const InventoryPortfolio = () => {
  const heroRef = useRef(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("animated")
        ) {
          entry.target.classList.add("animated");
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
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
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Hero Section - Bold & Dramatic */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 opacity-0 transition-all duration-1000 ease-out"
        style={{ transform: "translateY(40px)" }}
      >
        {/* Background Gradient Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#2CC4EF]/20 via-[#5DD4F5]/20 to-[#B2EEFF]/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#2CC4EF] to-[#B2EEFF] rounded-full text-sm font-semibold mb-6">
              Mobile Application Design
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-[#2CC4EF] via-[#5DD4F5] to-[#B2EEFF] bg-clip-text text-transparent">
              Inventory
            </span>
            <br />
            <span className="text-white">Management</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A revolutionary inventory management system designed to streamline
            warehouse operations, tracking, and real-time notifications for
            modern businesses.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              UI/UX Design
            </span>
            <span className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Figma
            </span>
            <span className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Mobile First
            </span>
            <span className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Design System
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Project Overview - Split Layout */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left - Project Info */}
            <div
              ref={addToRefs}
              className="opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: "translateY(40px)" }}
            >
              <span className="text-[#2CC4EF] text-sm uppercase tracking-widest font-semibold mb-4 block">
                Overview
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Reimagining inventory control
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                I designed a comprehensive inventory management system that
                empowers businesses to track stock levels, manage shipments,
                communicate with team members, and receive real-time
                notifications—all in one intuitive mobile application.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2CC4EF] to-[#5DD4F5] flex items-center justify-center flex-shrink-0">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">My Role</h4>
                    <p className="text-gray-400">
                      Lead UI/UX Designer - Figma Design from wireframes to
                      high-fidelity prototypes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5DD4F5] to-[#8BE0FA] flex items-center justify-center flex-shrink-0">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Duration</h4>
                    <p className="text-gray-400">
                      3 months - Research, Design, Testing & Iteration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8BE0FA] to-[#B2EEFF] flex items-center justify-center flex-shrink-0">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Platform</h4>
                    <p className="text-gray-400">
                      iOS & Android Mobile Application
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div
              ref={addToRefs}
              className="opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: "translateY(40px)" }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gradient-to-br from-[#2CC4EF]/20 to-[#2CC4EF]/5 border border-[#2CC4EF]/20 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-5xl font-black mb-2 bg-gradient-to-br from-[#2CC4EF] to-[#5DD4F5] bg-clip-text text-transparent">
                    50+
                  </h3>
                  <p className="text-gray-400">Screens Designed</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-[#5DD4F5]/20 to-[#5DD4F5]/5 border border-[#5DD4F5]/20 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-5xl font-black mb-2 bg-gradient-to-br from-[#5DD4F5] to-[#8BE0FA] bg-clip-text text-transparent">
                    5
                  </h3>
                  <p className="text-gray-400">Main Features</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-[#8BE0FA]/20 to-[#8BE0FA]/5 border border-[#8BE0FA]/20 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-5xl font-black mb-2 bg-gradient-to-br from-[#8BE0FA] to-[#B2EEFF] bg-clip-text text-transparent">
                    100%
                  </h3>
                  <p className="text-gray-400">Mobile Optimized</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-[#B2EEFF]/20 to-[#B2EEFF]/5 border border-[#B2EEFF]/20 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-5xl font-black mb-2 bg-gradient-to-br from-[#B2EEFF] to-[#2CC4EF] bg-clip-text text-transparent">
                    3
                  </h3>
                  <p className="text-gray-400">Design Iterations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screenboard Showcase */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={addToRefs}
            className="opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#2CC4EF]/20 via-[#5DD4F5]/20 to-[#B2EEFF]/20 p-8 md:p-16">
              <img
                src="/project/inventory/cover.png"
                alt="Inventory App Screenboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <p className="text-center text-gray-400 mt-8 text-lg">
              Complete application flow showcasing all key screens and user
              journeys
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={addToRefs}
            className="text-center mb-20 opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <span className="text-[#2CC4EF] text-sm uppercase tracking-widest font-semibold mb-4 block">
              Key Features
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Designed for{" "}
              <span className="bg-gradient-to-r from-[#2CC4EF] to-[#5DD4F5] bg-clip-text text-transparent">
                efficiency
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every feature was crafted with user needs in mind, from intuitive
              navigation to powerful functionality
            </p>
          </div>

          {/* Home Screen Feature */}
          <div
            ref={addToRefs}
            className="mb-32 opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="inline-block px-4 py-1 bg-[#2CC4EF]/20 border border-[#2CC4EF]/30 rounded-full text-sm font-semibold text-[#B2EEFF] mb-6">
                  01 — Dashboard
                </div>
                <h3 className="text-4xl font-bold mb-6">Inventory Dashboard</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  The home screen provides a comprehensive overview of inventory
                  status, quick actions, and real-time statistics. I designed an
                  intuitive card-based layout that prioritizes the most
                  important information while maintaining visual hierarchy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Real-time inventory levels
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Quick access actions
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Visual data representation
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Search and filter options
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <div className="relative bg-gradient-to-br from-[#2CC4EF]/10 to-[#5DD4F5]/10 rounded-3xl p-12 border border-[#2CC4EF]/20 backdrop-blur-sm">
                  <div className="max-w-md mx-auto">
                    <img
                      src="/project/inventory/Home apge.png"
                      alt="Home Dashboard"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Feature - Reversed */}
          <div
            ref={addToRefs}
            className="mb-32 opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 order-2 md:order-1">
                <div className="relative bg-gradient-to-br from-[#5DD4F5]/10 to-[#8BE0FA]/10 rounded-3xl p-12 border border-[#5DD4F5]/20 backdrop-blur-sm">
                  <div className="max-w-md mx-auto">
                    <img
                      src="/project/inventory/shipping.png"
                      alt="Shipping Management"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 order-1 md:order-2">
                <div className="inline-block px-4 py-1 bg-[#5DD4F5]/20 border border-[#5DD4F5]/30 rounded-full text-sm font-semibold text-[#B2EEFF] mb-6">
                  02 — Logistics
                </div>
                <h3 className="text-4xl font-bold mb-6">Shipping Control</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  Track shipments in real-time with an intuitive interface that
                  displays status, location, and estimated delivery times. The
                  design emphasizes clarity and actionable information at every
                  step.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#5DD4F5]" />
                    Live shipment tracking
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#5DD4F5]" />
                    Status timeline visualization
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#5DD4F5]" />
                    Multi-package management
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#5DD4F5]" />
                    Delivery notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Two Column Features */}
          <div className="grid md:grid-cols-2 gap-12 mb-32">
            {/* Messages */}
            <div
              ref={addToRefs}
              className="opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: "translateY(40px)" }}
            >
              <div className="relative bg-gradient-to-br from-[#8BE0FA]/10 to-[#A0E6FC]/10 rounded-3xl p-8 border border-[#8BE0FA]/20 backdrop-blur-sm h-full">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1 bg-[#8BE0FA]/20 border border-[#8BE0FA]/30 rounded-full text-sm font-semibold text-[#B2EEFF] mb-4">
                    03 — Communication
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Team Messages</h3>
                  <p className="text-gray-400 mb-6">
                    Built-in messaging system for seamless team communication
                    about inventory, orders, and warehouse operations.
                  </p>
                </div>
                <div className="max-w-sm mx-auto">
                  <img
                    src="/project/inventory/message.png"
                    alt="Messages"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div
              ref={addToRefs}
              className="opacity-0 transition-all duration-1000 ease-out"
              style={{ transform: "translateY(40px)" }}
            >
              <div className="relative bg-gradient-to-br from-[#A0E6FC]/10 to-[#B2EEFF]/10 rounded-3xl p-8 border border-[#A0E6FC]/20 backdrop-blur-sm h-full">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1 bg-[#A0E6FC]/20 border border-[#A0E6FC]/30 rounded-full text-sm font-semibold text-[#B2EEFF] mb-4">
                    04 — Alerts
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Smart Notifications
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Real-time alerts for low stock, shipment updates, and
                    important events keep the team informed and responsive.
                  </p>
                </div>
                <div className="max-w-sm mx-auto">
                  <img
                    src="/project/inventory/notification.png"
                    alt="Notifications"
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div
            ref={addToRefs}
            className="opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="inline-block px-4 py-1 bg-[#2CC4EF]/20 border border-[#2CC4EF]/30 rounded-full text-sm font-semibold text-[#B2EEFF] mb-6">
                  05 — Account
                </div>
                <h3 className="text-4xl font-bold mb-6">User Profile</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  Comprehensive profile management with access controls,
                  preferences, and account settings. Clean, organized interface
                  for managing personal and business information.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Account settings
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Notification preferences
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Security options
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#2CC4EF]" />
                    Theme customization
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3">
                <div className="relative bg-gradient-to-br from-[#2CC4EF]/10 to-[#B2EEFF]/10 rounded-3xl p-12 border border-[#2CC4EF]/20 backdrop-blur-sm">
                  <div className="max-w-md mx-auto">
                    <img
                      src="/project/inventory/profile.png"
                      alt="User Profile"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#0A4F64]/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            ref={addToRefs}
            className="text-center mb-20 opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <span className="text-[#2CC4EF] text-sm uppercase tracking-widest font-semibold mb-4 block">
              My Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              From concept to{" "}
              <span className="bg-gradient-to-r from-[#2CC4EF] to-[#5DD4F5] bg-clip-text text-transparent">
                execution
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Research",
                description:
                  "User interviews, competitor analysis, and identifying pain points in existing solutions",
                color: "from-[#2CC4EF] to-[#5DD4F5]",
              },
              {
                number: "02",
                title: "Wireframing",
                description:
                  "Low-fidelity sketches to establish information architecture and user flows",
                color: "from-[#5DD4F5] to-[#8BE0FA]",
              },
              {
                number: "03",
                title: "Design",
                description:
                  "High-fidelity mockups in Figma with complete design system and components",
                color: "from-[#8BE0FA] to-[#B2EEFF]",
              },
              {
                number: "04",
                title: "Testing",
                description:
                  "User testing, iteration based on feedback, and final refinements",
                color: "from-[#B2EEFF] to-[#2CC4EF]",
              },
            ].map((step, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="opacity-0 transition-all duration-1000 ease-out"
                style={{
                  transform: "translateY(40px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                  <div
                    className={`text-6xl font-black mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={addToRefs}
            className="text-center opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <span className="text-[#2CC4EF] text-sm uppercase tracking-widest font-semibold mb-4 block">
              Results
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              A design that{" "}
              <span className="bg-gradient-to-r from-[#2CC4EF] to-[#5DD4F5] bg-clip-text text-transparent">
                delivers
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-10 bg-gradient-to-br from-[#2CC4EF]/20 to-[#2CC4EF]/5 border border-[#2CC4EF]/20 rounded-3xl backdrop-blur-sm">
                <div className="text-6xl font-black mb-4 bg-gradient-to-br from-[#2CC4EF] to-[#5DD4F5] bg-clip-text text-transparent">
                  35%
                </div>
                <p className="text-xl text-gray-300">
                  Faster task completion through intuitive UI
                </p>
              </div>
              <div className="p-10 bg-gradient-to-br from-[#5DD4F5]/20 to-[#5DD4F5]/5 border border-[#5DD4F5]/20 rounded-3xl backdrop-blur-sm">
                <div className="text-6xl font-black mb-4 bg-gradient-to-br from-[#5DD4F5] to-[#8BE0FA] bg-clip-text text-transparent">
                  90%
                </div>
                <p className="text-xl text-gray-300">
                  Positive user feedback on design clarity
                </p>
              </div>
              <div className="p-10 bg-gradient-to-br from-[#8BE0FA]/20 to-[#8BE0FA]/5 border border-[#8BE0FA]/20 rounded-3xl backdrop-blur-sm">
                <div className="text-6xl font-black mb-4 bg-gradient-to-br from-[#8BE0FA] to-[#B2EEFF] bg-clip-text text-transparent">
                  100%
                </div>
                <p className="text-xl text-gray-300">
                  Coverage of essential inventory workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={addToRefs}
            className="opacity-0 transition-all duration-1000 ease-out"
            style={{ transform: "translateY(40px)" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Designed in{" "}
              <span className="bg-gradient-to-r from-[#2CC4EF] via-[#5DD4F5] to-[#8BE0FA] bg-clip-text text-transparent">
                Figma
              </span>
              ,
              <br />
              built for the future
            </h2>
            <p className="text-2xl text-gray-400 leading-relaxed mb-12">
              This inventory management system demonstrates my approach to
              creating beautiful, functional designs that solve real business
              problems while delighting users.
            </p>
            <div className="flex justify-center gap-4 text-6xl mb-8">
              <span>🎨</span>
              <span>📦</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryPortfolio;
