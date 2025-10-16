import { Metadata } from "next";
import React from "react";
import PropertyManagementPortfolio from "./PropertyManagementClient";

export const metadata: Metadata = {
  title:
    "Property Management System - Full Stack Development Case Study | Min Bhone Thant",
  description:
    "Explore my full stack development process for an enterprise-grade property management platform. Built with Next.js 15, TypeScript, tRPC, Prisma, and PostgreSQL featuring advanced CRM, multi-role access control, and intelligent lead tracking.",
  keywords: [
    "Full Stack Development",
    "Property Management System",
    "Real Estate Platform",
    "Next.js 15",
    "TypeScript",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "CRM System",
    "Multi-tenant Architecture",
    "Enterprise Web Application",
    "Lead Management",
    "Transaction Management",
    "Team Organization",
    "Min Bhone Thant",
    "Portfolio",
    "Case Study",
    "Web Development",
    "React Developer",
    "Backend Development",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  publisher: "Min Bhone Thant",
  openGraph: {
    title: "Property Management System - Full Stack Development Case Study",
    description:
      "Complete full stack case study for an enterprise-grade property management platform with advanced CRM, multi-tenant architecture, and intelligent lead tracking.",
    url: "https://minbhonethant.com/work/property-management",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/images/property_mangement.png",
        width: 1200,
        height: 630,
        alt: "Property Management Platform Dashboard - Enterprise Real Estate Management System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management System - Full Stack Development Case Study",
    description:
      "Enterprise-grade property management platform built with Next.js 15, TypeScript, tRPC, Prisma. Features advanced CRM, multi-tenant architecture, and role-based access control.",
    images: ["/images/property_mangement.png"],
    creator: "@minbhonethant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://minbhonethant.com/work/property-management",
  },
  category: "Portfolio",
};

export default function page() {
  return <PropertyManagementPortfolio />;
}
