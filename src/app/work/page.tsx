import PortfolioShowcase from "@/components/Work/ProjectShowcaseFilter";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects - Min Bhone Thant | UI/UX Design & Development",
  description:
    "Explore my portfolio of UI/UX design and full-stack development projects. Case studies featuring mobile apps, web applications, inventory systems, chat applications, and more. Designed in Figma and built with modern technologies.",
  keywords: [
    "Portfolio",
    "Projects",
    "UI/UX Design Projects",
    "Web Development Projects",
    "Mobile App Design",
    "Case Studies",
    "Design Portfolio",
    "Developer Portfolio",
    "React Projects",
    "Next.js Projects",
    "Figma Projects",
    "Min Bhone Thant",
    "Inventory Management",
    "Chat Application",
    "Mobile Design",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  openGraph: {
    title: "Portfolio & Projects - Min Bhone Thant",
    description:
      "Explore my portfolio of UI/UX design and development projects. Case studies featuring mobile apps, web applications, and design systems.",
    url: "https://minbhonethant.com/work",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/project/work-og.jpg",
        width: 1200,
        height: 630,
        alt: "Min Bhone Thant Portfolio Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Projects - Min Bhone Thant",
    description:
      "UI/UX design and development projects. Case studies and design systems.",
    images: ["/project/work-og.jpg"],
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
    canonical: "https://minbhonethant.com/work",
  },
  category: "Portfolio",
};

export default function page() {
  return <PortfolioShowcase />;
}
