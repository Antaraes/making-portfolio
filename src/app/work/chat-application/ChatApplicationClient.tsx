"use client";
import React, { useEffect, useRef } from "react";
import { Metadata } from "next";
import { gsap } from "gsap";

export default function ChatApplicationPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, metaRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({
        delay: 0.3,
      });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          metaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Animate feature cards on scroll (only once)
      gsap.utils.toArray<HTMLElement>(".feature-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      // Animate image sections (only once)
      gsap.utils.toArray<HTMLElement>(".image-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
            once: true,
          },
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-32 md:px-8 text-center">
          <div
            ref={metaRef}
            className="flex items-center justify-center gap-6 mb-8 text-white/90 text-sm md:text-base font-medium"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              iOS & Android
            </span>
            <span className="w-1 h-1 bg-white rounded-full" />
            <span>January 2025</span>
          </div>

          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight"
          >
            Chat App
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Let's create a space for your connection.
          </p>

          <div className="mt-12">
            <div className="inline-block animate-bounce">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="max-w-6xl mx-auto px-4 py-24 md:px-8">
        <div className="space-y-8">
          <div className="text-sm uppercase tracking-wider text-green-600 font-semibold">
            Project Summary
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
            Designing a feature-rich, real-time chat application from scratch to
            production
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
            As the UI/UX Designer, I crafted the complete design system in
            Figma—from initial wireframes to high-fidelity components ready for
            development. Working with an impressive team of Flutter and Laravel
            developers, I focused on creating accessible, intuitive interfaces
            with a mobile-first approach. Every component, interaction, and user
            flow was thoughtfully designed to ensure seamless communication,
            social connectivity, and user safety.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              UI/UX Design
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Figma
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Design System
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Mobile Design
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Prototyping
            </span>
          </div>
        </div>
      </section>

      {/* Main Showcase Image */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:px-8 image-section">
        <div className="relative  overflow-hidden  from-green-50 to-teal-50 p-8 md:p-16">
          <img
            src="/project/chat/showcase.png"
            alt="Chat App Showcase"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* My Role & Team */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-green-400 font-semibold mb-4">
                My Role
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                UI/UX Designer
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I led the design process from initial concept to
                production-ready components, creating every screen, interaction,
                and design asset in Figma.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">
                    User research and persona development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">
                    Wireframing and user flow mapping
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">
                    High-fidelity UI design in Figma
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">
                    Interactive prototyping and user testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">
                    Design system creation and component library
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">
                    Developer handoff and design QA
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-green-400 font-semibold mb-4">
                Team Collaboration
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Working with an Impressive Team
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                This project was brought to life through seamless collaboration
                with talented developers who transformed my designs into a fully
                functional application.
              </p>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      📱
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Flutter Developers</h4>
                      <p className="text-sm text-gray-400">
                        Mobile Development
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Built native iOS and Android apps with pixel-perfect
                    implementation of designs
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                      🔧
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Laravel Developers</h4>
                      <p className="text-sm text-gray-400">
                        Backend Development
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Created robust APIs, real-time messaging infrastructure, and
                    database architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core User Needs */}
      <section className="max-w-6xl mx-auto px-4 py-24 md:px-8">
        <div className="mb-16">
          <div className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-4">
            Core User Needs
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Understanding what users want
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Fast, secure, and intuitive login",
              description:
                "Users need to get into the app easily, with confidence that their data is protected.",
              icon: "🔐",
            },
            {
              title: "Real-time communication",
              description:
                "Users expect instant messaging with delivery status and expressive communication (emojis, voice, video).",
              icon: "⚡",
            },
            {
              title: "Safe interaction with control over contacts",
              description:
                "Users want to manage who can message them, report abuse, or avoid unwanted contact.",
              icon: "🛡️",
            },
            {
              title: "Friend & group discovery",
              description:
                "Users want to quickly find and add friends or create groups for social or work chats.",
              icon: "👥",
            },
            {
              title: "Personalization & account management",
              description:
                "Users should be able to manage their profile, settings, and even delete or reset their account.",
              icon: "⚙️",
            },
          ].map((need, index) => (
            <div
              key={index}
              className="feature-card group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-green-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {need.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {need.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {need.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Goals */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-4">
              Product Goals
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Building the right solution
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Reliable real-time chat system",
                description:
                  "Fast message delivery, message status, and various media formats.",
              },
              {
                title: "Secure and friendly environment",
                description:
                  "Support moderation tools like report, mute, block, and suspend features.",
              },
              {
                title: "Easy social connection",
                description:
                  "Friend discovery via QR scan, contact syncing, and group creation.",
              },
              {
                title: "Simple, user-friendly interface",
                description:
                  "Familiar feel with easy navigation, clear buttons, and intuitive icons.",
              },
            ].map((goal, index) => (
              <div
                key={index}
                className="feature-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-green-500 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {goal.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="max-w-6xl mx-auto px-4 py-24 md:px-8">
        <div className="mb-16">
          <div className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-4">
            Design System
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building a Scalable Design System in Figma
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl">
            I created a comprehensive design system from the ground up in
            Figma—establishing a modern, lightweight foundation built on a 4px
            base grid with rounded, line-based iconography. This system included
            reusable components, auto-layout structures, and design tokens that
            ensured consistency across all screens and made developer handoff
            seamless.
          </p>
        </div>

        <div className="space-y-12">
          {/* Color System */}
          <div className="feature-card bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Color & Status Indicators
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Primary", color: "bg-green-500", hex: "#29A147" },
                { name: "Success", color: "bg-green-400", hex: "Green" },
                { name: "Warning", color: "bg-yellow-400", hex: "Yellow" },
                { name: "Error", color: "bg-red-500", hex: "Red" },
                { name: "Inactive", color: "bg-gray-400", hex: "Grey" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`${item.color} w-full h-20 rounded-xl mb-3 shadow-lg`}
                  />
                  <div className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">{item.hex}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Button Variants */}
          <div className="feature-card bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Button Variants
            </h4>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl">
                Primary Button
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all">
                Secondary Button
              </button>
              <button className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl">
                Danger Button
              </button>
            </div>
          </div>

          {/* Spacing & Layout */}
          <div className="feature-card bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Layout System
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">•</span>
                <span>
                  <strong>Spacing:</strong> 4px base grid (8px, 12px, 16px,
                  24px)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">•</span>
                <span>
                  <strong>Headers:</strong> Fixed headers and bottom navigation
                  for mobile usability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">•</span>
                <span>
                  <strong>Iconography:</strong> Rounded, line-based style
                  (Lucide, Feather Icons)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">•</span>
                <span>
                  <strong>Touch Areas:</strong> Large, accessible touch targets
                  for all interactive elements
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider text-green-400 font-semibold mb-4">
              Design Decisions
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic UX Choices I Made
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl">
              Every design decision was intentional and backed by user research.
              Here are the key choices that shaped the final product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                decision: "Phone Number login vs. Email",
                choice: "Phone number login",
                reason: "Faster onboarding and OTP-based recovery.",
              },
              {
                decision: "Manual friend search vs. QR Scan",
                choice: "QR scan",
                reason:
                  "Simplifies friend addition without needing to remember usernames.",
              },
              {
                decision: "Chat screen layout",
                choice: "Bottom navigation",
                reason:
                  "Aligns with modern app expectations and reduces tap distance on mobile.",
              },
              {
                decision: "One-on-one chats vs Universal inbox",
                choice: "Separate user/group inbox",
                reason:
                  "Simplifies mental model for users with filtering added for flexibility.",
              },
              {
                decision: "Full screen alert for banned users",
                choice: "Full-screen modal",
                reason:
                  "Ensures banned users cannot mistakenly believe there's a bug or glitch.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="feature-card bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-green-400 font-bold text-sm uppercase tracking-wider mb-3">
                  {item.decision}
                </div>
                <div className="text-2xl font-bold mb-4">{item.choice}</div>
                <p className="text-gray-300 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="max-w-6xl mx-auto px-4 py-24 md:px-8">
        <div className="mb-16">
          <div className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-4">
            Design Research & Testing
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            What I learned through user research
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="feature-card bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border-2 border-green-200">
            <div className="text-6xl mb-6">💡</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Users prefer familiar UI over trendy designs
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Through user testing sessions with my Figma prototypes, I
              discovered users responded better to WhatsApp-style interfaces
              with clear navigation patterns. This insight shaped my final
              design direction toward familiarity rather than experimental UI.
            </p>
          </div>

          <div className="feature-card bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border-2 border-green-200">
            <div className="text-6xl mb-6">🛡️</div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Safety tools increase user trust
            </h4>
            <p className="text-gray-600 leading-relaxed">
              My research revealed that users feel more confident using a chat
              app when safety features are prominently accessible. I designed
              the "Report" and "Block" options to be intuitive and easily
              reachable within just 2 taps from any conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Feature List */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <div className="text-sm uppercase tracking-wider text-white/80 font-semibold mb-4">
              Complete Feature Set I Designed
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Every screen, every flow, every detail
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              I designed the complete user experience in Figma—from
              authentication flows to advanced messaging features, safety tools,
              and social interactions. Each feature was carefully crafted to
              serve real user needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Authentication",
                features: [
                  "Phone & Password Login",
                  "OTP Registration",
                  "Password Recovery",
                  "Remember Me",
                  "Password Strength Meter",
                ],
              },
              {
                category: "Chat Features",
                features: [
                  "Real-time Messaging",
                  "Typing Indicator",
                  "Read Receipts",
                  "Edit & Delete Messages",
                  "File Uploads",
                  "Voice & Video Calls",
                  "Search Chat History",
                ],
              },
              {
                category: "User Interaction",
                features: [
                  "View User Info",
                  "Block or Report User",
                  "QR Code Friend Adding",
                  "Mute Notifications",
                  "Friend Requests",
                  "Share Profile",
                ],
              },
              {
                category: "Group Chat",
                features: [
                  "Create Groups",
                  "Group Management",
                  "Group Notifications",
                  "Add/Remove Members",
                ],
              },
              {
                category: "User Profile",
                features: [
                  "Edit Profile",
                  "Change Password",
                  "Notification Settings",
                  "Delete Account",
                  "Privacy Settings",
                ],
              },
              {
                category: "Safety & Moderation",
                features: [
                  "Report User System",
                  "Automatic Warnings",
                  "Suspension Alerts",
                  "Ban Notifications",
                  "Appeal System",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="feature-card bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h4 className="text-2xl font-bold mb-4">{section.category}</h4>
                <ul className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-300 mt-1">✓</span>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="max-w-4xl mx-auto px-4 py-24 md:px-8 text-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          From Figma to Production
        </h3>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          I designed every pixel, every interaction, and every user flow in
          Figma—creating a comprehensive design system that enabled our
          impressive Flutter and Laravel team to build a reliable, secure, and
          user-friendly messaging platform. Through collaborative iteration and
          thoughtful design decisions, we delivered an app that truly serves its
          users.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="text-6xl">🎨</div>
          <div className="text-6xl">💬</div>
          <div className="text-6xl">🚀</div>
        </div>
        <p className="text-lg text-gray-500 italic">
          "Design is not just what it looks like and feels like. Design is how
          it works." — Steve Jobs
        </p>
      </section>
    </div>
  );
}
