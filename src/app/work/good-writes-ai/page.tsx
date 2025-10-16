import { Metadata } from "next";
import React from "react";
import GoodWritesAI from "./GoodWritesClient";

export const metadata: Metadata = {
  title:
    "Good Writes AI - AI-Powered Research Platform Case Study | Min Bhone Thant",
  description:
    "Explore my full stack development process for Good Writes AI, an AI-powered academic research platform. Built with Next.js, NestJS, Python LLM APIs, MongoDB, and AWS. Features intelligent document analysis, library management, and collaborative note-taking.",
  keywords: [
    "AI Research Platform",
    "Good Writes AI",
    "Full Stack Development",
    "AI Integration",
    "Next.js",
    "NestJS",
    "Python",
    "LLM APIs",
    "OpenAI",
    "MongoDB",
    "AWS S3",
    "AWS Amplify",
    "Docker",
    "Academic Research Tool",
    "Document Analysis",
    "Machine Learning",
    "Natural Language Processing",
    "Min Bhone Thant",
    "Portfolio",
    "Case Study",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  publisher: "Min Bhone Thant",
  openGraph: {
    title: "Good Writes AI - AI-Powered Research Platform Case Study",
    description:
      "AI-powered academic research platform with intelligent document analysis, library management, and collaborative features. Built with Next.js, NestJS, Python LLM APIs, and AWS.",
    url: "https://minbhonethant.com/work/good-writes-ai",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/project/research-paper/research-paper.png",
        width: 1200,
        height: 630,
        alt: "Good Writes AI - AI-Powered Research Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Writes AI - AI-Powered Research Platform Case Study",
    description:
      "AI-powered research platform streamlining academic research with intelligent document analysis and collaboration tools.",
    images: ["/project/research-paper/research-paper.png"],
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
    canonical: "https://minbhonethant.com/work/good-writes-ai",
  },
  category: "Portfolio",
};

export default function page() {
  return <GoodWritesAI />;
}
