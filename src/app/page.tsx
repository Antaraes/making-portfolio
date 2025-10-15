import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import { TestimonialSection } from "@/components/Home/Testimonial";
import VideoSection from "@/components/Home/VideoSection";
import { TestimonialItem } from "@/types/portfolio";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Min Bhone Thant - Full Stack Developer & UI/UX Designer | Portfolio",
  description:
    "Full Stack Developer and UI/UX Designer specializing in React, Next.js, Node.js, Python, Django, and Figma. Creating beautiful, functional web and mobile applications. View my portfolio of projects and case studies.",
  keywords: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Python Developer",
    "Django Developer",
    "Figma Designer",
    "Mobile App Designer",
    "Portfolio",
    "Min Bhone Thant",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Myanmar Developer",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  publisher: "Min Bhone Thant",
  openGraph: {
    title: "Min Bhone Thant - Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer and UI/UX Designer creating beautiful, functional web and mobile applications. Specialized in React, Next.js, Python, Django, and Figma.",
    url: "https://minbhonethant.com",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Min Bhone Thant - Full Stack Developer & UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Min Bhone Thant - Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer and UI/UX Designer creating beautiful, functional applications.",
    images: ["/og-image.jpg"],
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
    canonical: "https://minbhonethant.com",
  },
  category: "Portfolio",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoSection />
    </div>
  );
}
