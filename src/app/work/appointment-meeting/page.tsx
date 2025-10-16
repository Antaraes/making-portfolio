import { Metadata } from "next";
import React from "react";
import AppointmentMeeting from "./AppointmentClient";

export const metadata: Metadata = {
  title:
    "Meeting Appointment System - Full Stack Development Case Study | Min Bhone Thant",
  description:
    "Collaborative appointment scheduling platform built with Next.js 13, Node.js, TypeScript, and PostgreSQL. Team project emphasizing functionality, code reusability, and teamwork. January - March 2024.",
  keywords: [
    "Meeting Appointment System",
    "Full Stack Development",
    "Next.js 13",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Team Collaboration",
    "Appointment Scheduling",
    "TypeORM",
    "Sequelize",
    "Vercel Deployment",
    "Render Deployment",
    "Dependency Injection",
    "Code Reusability",
    "Min Bhone Thant",
    "Portfolio",
    "Case Study",
    "Web Development",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  publisher: "Min Bhone Thant",
  openGraph: {
    title: "Meeting Appointment System - Full Stack Development Case Study",
    description:
      "Collaborative appointment scheduling platform built with Next.js 13, Node.js, TypeScript, and PostgreSQL. Team project focused on functionality and code excellence.",
    url: "https://minbhonethant.com/work/appointment-meeting",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/images/appointment/meetingappoinment.png",
        width: 1200,
        height: 630,
        alt: "Meeting Appointment System Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeting Appointment System - Full Stack Development Case Study",
    description:
      "Collaborative full-stack appointment scheduling platform built with modern web technologies and team collaboration.",
    images: ["/images/appointment/meetingappoinment.png"],
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
    canonical: "https://minbhonethant.com/work/appointment-meeting",
  },
  category: "Portfolio",
};

export default function page() {
  return <AppointmentMeeting />;
}
