import React from "react";
import { Metadata } from "next";
import ShippingPortfolio from "./InventoryApp";

export const metadata: Metadata = {
  title: "Inventory Management System - UI/UX Design Case Study | Min Bhone Thant",
  description:
    "Explore my complete UI/UX design process for a modern inventory management mobile application. Designed in Figma from wireframes to high-fidelity prototypes with comprehensive design system for iOS and Android platforms.",
  keywords: [
    "Inventory Management Design",
    "UI/UX Design",
    "Figma Design",
    "Mobile App Design",
    "Warehouse Management App",
    "Logistics App Design",
    "iOS App Design",
    "Android App Design",
    "Design System",
    "User Experience Design",
    "Product Design",
    "Min Bhone Thant",
    "Portfolio",
    "Case Study",
    "Shipping Tracking",
    "Supply Chain Management",
    "Dashboard Design",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  publisher: "Min Bhone Thant",
  openGraph: {
    title: "Inventory Management System - UI/UX Design Case Study",
    description:
      "Complete UI/UX design case study for a modern inventory management system. Designed in Figma with 50+ screens, comprehensive design system, and seamless user flows.",
    url: "https://minbhonethant.com/work/inventory-application",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/project/inventory/screenboard.jpg",
        width: 1200,
        height: 630,
        alt: "Inventory Management App Design Showcase - Complete Screen Flow",
      },
      {
        url: "/project/inventory/Home apge.png",
        width: 800,
        height: 600,
        alt: "Inventory Dashboard Home Screen Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventory Management System - UI/UX Design Case Study",
    description:
      "Complete UI/UX design for a modern inventory management system. 50+ screens designed in Figma with comprehensive design system.",
    images: ["/project/inventory/screenboard.jpg"],
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
    canonical: "https://minbhonethant.com/work/inventory-application",
  },
  category: "Portfolio",
};

export default function page() {
  return <ShippingPortfolio />;
}
