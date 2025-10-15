import ContactPage from "@/components/Contact/FormAndFAQ";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Min Bhone Thant | Get in Touch for Projects",
  description:
    "Get in touch with Min Bhone Thant for web development and UI/UX design projects. Available for freelance work, collaborations, and full-time opportunities. Let's build something amazing together.",
  keywords: [
    "Contact Min Bhone Thant",
    "Hire Developer",
    "Hire UI/UX Designer",
    "Freelance Developer",
    "Web Development Inquiries",
    "Project Collaboration",
    "Get in Touch",
    "Contact Form",
    "Developer for Hire",
    "Designer for Hire",
    "Myanmar Developer Contact",
    "Full Stack Developer Contact",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  openGraph: {
    title: "Contact Min Bhone Thant - Let's Work Together",
    description:
      "Get in touch for web development and UI/UX design projects. Available for freelance work and collaborations. Let's build something amazing.",
    url: "https://minbhonethant.com/contact",
    siteName: "Min Bhone Thant Portfolio",
    images: [
      {
        url: "/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Min Bhone Thant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Min Bhone Thant - Let's Work Together",
    description:
      "Get in touch for web development and UI/UX design projects. Available for freelance work and collaborations.",
    images: ["/contact-og.jpg"],
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
    canonical: "https://minbhonethant.com/contact",
  },
  category: "Contact",
};

export default function page() {
  return <ContactPage />;
}
