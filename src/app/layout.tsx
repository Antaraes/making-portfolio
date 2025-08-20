import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { MainLayout } from "@/components/main-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Min Bhone Thant | Full Stack Web Developer Portfolio",
  description:
    "Explore the portfolio of Min Bhone Thant – a Full Stack Developer skilled in React, Next.js, Node.js, and AWS. View projects, skills, and contact info.",
  keywords: [
    "Min Bhone Thant",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Developer Portfolio",
  ],
  authors: [{ name: "Min Bhone Thant" }],
  creator: "Min Bhone Thant",
  openGraph: {
    title: "Min Bhone Thant | Full Stack Developer",
    description:
      "Welcome to the portfolio of Min Bhone Thant. Discover web development projects, tech skills, and contact information.",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "Min Bhone Thant Portfolio",
    type: "website",
    images: [
      {
        url: "/logo.png", // Recommended Open Graph image (1200x630)
        width: 1200,
        height: 630,
        alt: "Min Bhone Thant Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Min Bhone Thant | Full Stack Developer",
    description: "Full Stack Developer Portfolio – React, Next.js, Node.js, AWS, and more.",
    images: ["/logo.png"],
    creator: "@yourhandle", // optional Twitter handle
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://your-domain.com"), // Replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
