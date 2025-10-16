"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const PropertyManagementPortfolio = () => {
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

        .section-fade {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Cinematic Full Width */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 py-32 text-center">
          {/* Category Tag */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-gray-400 border border-gray-700 rounded-full">
              Enterprise Web Platform
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
            Property
            <br />
            Management
            <br />
            <span className="text-gray-600">System</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive real estate platform with advanced CRM, multi-tenant
            architecture, and intelligent lead tracking for modern property
            businesses
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-gray-700 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div
            ref={addToRefs}
            className="section-fade rounded-2xl overflow-hidden border border-gray-900"
          >
            <img
              src="/project/property/Thumbnail.png"
              alt="Property Management Platform"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Overview - Split Layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title */}
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sticky top-32"
              >
                Enterprise-grade
                <br />
                real estate
                <br />
                operations
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <h3 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-4">
                  Overview
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I built a complete property management platform that enables
                  real estate companies to manage properties, track leads,
                  organize teams, process transactions, and communicate
                  seamlessly—all with enterprise-grade security and multi-tenant
                  architecture.
                </p>
              </div>

              <div
                ref={addToRefs}
                className="section-fade grid grid-cols-2 gap-8"
              >
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Role
                  </h4>
                  <p className="text-gray-300">
                    Full Stack Developer & System Architect
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Duration
                  </h4>
                  <p className="text-gray-300">4 months</p>
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
                    Next.js, TypeScript, tRPC, Prisma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - Side by Side */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Challenge */}
            <div ref={addToRefs} className="section-fade">
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
                The Challenge
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Real estate companies struggle with fragmented systems,
                inefficient lead tracking, and poor team coordination.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Manual processes lead to missed opportunities, lost revenue, and
                operational inefficiencies. Companies need a unified platform
                that brings everything together.
              </p>
            </div>

            {/* Solution */}
            <div ref={addToRefs} className="section-fade">
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-6">
                The Solution
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                An all-in-one platform that unifies property management, CRM,
                team organization, and financial tracking.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Built with enterprise-grade architecture supporting multi-tenant
                operations, role-based security, and scalable infrastructure for
                growing businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div
            ref={addToRefs}
            className="section-fade grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            <div className="border-l-2 border-gray-800 pl-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">4</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                User Roles
              </div>
            </div>
            <div className="border-l-2 border-gray-800 pl-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Database Models
              </div>
            </div>
            <div className="border-l-2 border-gray-800 pl-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Core Modules
              </div>
            </div>
            <div className="border-l-2 border-gray-800 pl-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                Type Safe
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Property Management */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title (Sticky) */}
            <div className="md:col-span-5">
              <div
                ref={addToRefs}
                className="section-fade sticky top-32 space-y-6"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
                  01 — Property Catalog
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Smart Property
                  <br />
                  Management
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete lifecycle management for your real estate portfolio
                  with advanced filtering, bulk operations, and intelligent
                  assignment systems.
                </p>
              </div>
            </div>

            {/* Right - Content & Visuals */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-950  border-gray-800 flex items-center justify-center">
                  <Image
                    src={"/project/property/properties.png"}
                    alt="property dashboard"
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div ref={addToRefs} className="section-fade space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">
                  Key Features
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Advanced search with multi-criteria filtering
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Multiple image galleries & virtual tours
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Bulk import/export (CSV, JSON)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Real-time status tracking & updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: CRM System */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title (Sticky) */}
            <div className="md:col-span-5">
              <div
                ref={addToRefs}
                className="section-fade sticky top-32 space-y-6"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
                  02 — Lead Management
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Intelligent
                  <br />
                  CRM System
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Turn inquiries into revenue with powerful lead tracking,
                  conversion analytics, and automated workflows.
                </p>
              </div>
            </div>

            {/* Right - Content & Visuals */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-950  border-gray-800 flex items-center justify-center">
                  <Image
                    src={"/project/property/leadManagement.png"}
                    alt="property dashboard"
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div ref={addToRefs} className="section-fade space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">
                  CRM Capabilities
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    7-stage conversion pipeline
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Priority-based lead routing
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Performance analytics & insights
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Follow-up scheduling & reminders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Transactions */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title (Sticky) */}
            <div className="md:col-span-5">
              <div
                ref={addToRefs}
                className="section-fade sticky top-32 space-y-6"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
                  03 — Financial Tracking
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Transaction
                  <br />
                  Management
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete financial tracking for sales and rentals with
                  multi-currency support and contract management.
                </p>
              </div>
            </div>

            {/* Right - Content & Visuals */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-950  border-gray-800 flex items-center justify-center">
                  <Image
                    src={"/project/property/transactionManage.png"}
                    alt="property dashboard"
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div ref={addToRefs} className="section-fade space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">
                  Financial Features
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Multi-currency support (USD, EUR, GBP, AED)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Contract period tracking & alerts
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Document storage & management
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Real-time revenue analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4: Team Management */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title (Sticky) */}
            <div className="md:col-span-5">
              <div
                ref={addToRefs}
                className="section-fade sticky top-32 space-y-6"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
                  04 — Team Organization
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Geographic
                  <br />
                  Team Structure
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Organize your real estate team by geographic areas with
                  role-based permissions and assignment management.
                </p>
              </div>
            </div>

            {/* Right - Content & Visuals */}
            <div className="md:col-span-7 space-y-12">
              <div ref={addToRefs} className="section-fade">
                <div className="aspect-video bg-gradient-to-br  gap-3 flex flex-col">
                  <Image
                    src={"/project/property/employee.png"}
                    alt="property dashboard"
                    width={800}
                    height={800}
                  />
                  <Image
                    src={"/project/property/countrymanagment.png"}
                    alt="property dashboard"
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div ref={addToRefs} className="section-fade space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">
                  Team Features
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Country & area-based organization
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Employee area assignments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Role-based access control
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">→</span>
                    Performance tracking & metrics
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
            {/* Left - Title */}
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Technology
                <br />
                Stack
              </h2>
            </div>

            {/* Right - Tech Grid */}
            <div className="md:col-span-7">
              <div
                ref={addToRefs}
                className="section-fade grid md:grid-cols-2 gap-8"
              >
                {/* Frontend */}
                <div className="border border-gray-900 rounded-xl p-6 space-y-4">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Frontend
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Next.js 15.1</li>
                    <li>React 19</li>
                    <li>TypeScript 5</li>
                    <li>Tailwind CSS</li>
                    <li>shadcn/ui</li>
                    <li>GSAP</li>
                  </ul>
                </div>

                {/* Backend */}
                <div className="border border-gray-900 rounded-xl p-6 space-y-4">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Backend & Data
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>tRPC 10.45</li>
                    <li>Prisma 6.17</li>
                    <li>PostgreSQL</li>
                    <li>NextAuth 4.24</li>
                    <li>TanStack Query</li>
                    <li>Zod Validation</li>
                  </ul>
                </div>

                {/* Security */}
                <div className="border border-gray-900 rounded-xl p-6 space-y-4">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Security
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Multi-tenant architecture</li>
                    <li>Role-based access control</li>
                    <li>JWT authentication</li>
                    <li>bcrypt hashing</li>
                    <li>OAuth 2.0 (Google)</li>
                  </ul>
                </div>

                {/* Tools */}
                <div className="border border-gray-900 rounded-xl p-6 space-y-4">
                  <h4 className="text-xs font-medium tracking-widest uppercase text-gray-500">
                    Developer Tools
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>React Hook Form</li>
                    <li>ESLint</li>
                    <li>Vercel Deployment</li>
                    <li>Husky & Commitlint</li>
                    <li>Git & GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 md:py-32 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-12 gap-16 md:gap-24">
            {/* Left - Title */}
            <div className="md:col-span-5">
              <h2
                ref={addToRefs}
                className="section-fade text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Key
                <br />
                Achievements
              </h2>
            </div>

            {/* Right - List */}
            <div className="md:col-span-7">
              <div ref={addToRefs} className="section-fade space-y-8">
                <div className="border-l-2 border-gray-800 pl-6">
                  <p className="text-lg text-gray-300">
                    Built complete multi-tenant architecture supporting multiple
                    companies on a single platform
                  </p>
                </div>
                <div className="border-l-2 border-gray-800 pl-6">
                  <p className="text-lg text-gray-300">
                    Implemented 4-tier role-based access control (Superadmin,
                    Admin, Employee, Customer)
                  </p>
                </div>
                <div className="border-l-2 border-gray-800 pl-6">
                  <p className="text-lg text-gray-300">
                    Designed comprehensive CRM with 7-stage lead pipeline and
                    conversion tracking
                  </p>
                </div>
                <div className="border-l-2 border-gray-800 pl-6">
                  <p className="text-lg text-gray-300">
                    Created intelligent geographic team organization system with
                    area assignments
                  </p>
                </div>
                <div className="border-l-2 border-gray-800 pl-6">
                  <p className="text-lg text-gray-300">
                    Built robust transaction management with multi-currency
                    support and document storage
                  </p>
                </div>
                <div className="border-l-2 border-gray-800 pl-6">
                  <p className="text-lg text-gray-300">
                    Implemented real-time messaging and notification system for
                    team communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 md:py-48 border-t border-gray-900">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16">
          <div ref={addToRefs} className="section-fade max-w-4xl space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              A complete platform for modern real estate operations
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              This project showcases my ability to architect and build
              enterprise-grade applications with complex business logic, robust
              security, and exceptional user experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="https://github.com/Antaraes/property_mangement"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:bg-gray-900 transition-colors"
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

export default PropertyManagementPortfolio;
