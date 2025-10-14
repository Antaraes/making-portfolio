import { Metadata } from "next";
import React from "react";
import ChatApplicationPage from "./ChatApplicationClient";

export const metadata: Metadata = {
  title: "Chat Application - UI/UX Design Case Study | Min Bhone Thant",
  description:
    "Explore my UI/UX design process for a feature-rich chat application. I designed every screen, component, and interaction in Figma—from wireframes to production-ready designs for iOS and Android.",
  keywords: [
    "UI/UX Design",
    "Figma Design",
    "Chat App Design",
    "Mobile App Design",
    "iOS Design",
    "Android Design",
    "Design System",
    "User Experience",
    "User Interface",
    "Product Design",
    "Min Bhone Thant",
    "Portfolio",
    "Case Study",
    "Real-time Chat",
    "Messaging App Design",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  openGraph: {
    title: "Chat Application - UI/UX Design Case Study",
    description:
      "Comprehensive UI/UX design case study for a real-time chat application. Designed in Figma from scratch to production.",
    url: "https://minbhonethant.com/work/chat-application",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/project/chat/showcase.png",
        width: 1200,
        height: 630,
        alt: "Chat Application Design Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat Application - UI/UX Design Case Study",
    description:
      "Explore my UI/UX design process for a feature-rich chat application designed in Figma.",
    images: ["/project/chat/showcase.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function page() {
  return <ChatApplicationPage />;
}
