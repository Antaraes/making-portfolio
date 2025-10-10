import React from "react";
import ServicesHero from "@/components/Services/ServicesHero";
import ServiceSections from "@/components/Services/ServiceSections";
import CTASection from "@/components/Services/CTASection";

// Organized services data based on CV - Fable & Co. style
const serviceSections = [
  {
    category: "Web Development",
    title: "Frontend Development",
    description:
      "Crafting pixel-perfect, responsive user interfaces that engage and delight. Specializing in modern JavaScript frameworks and cutting-edge web technologies to create seamless digital experiences.",
    subServices: [
      {
        title: "React & Next.js",
        description:
          "Building high-performance web applications with React ecosystem, server-side rendering, and static site generation.",
      },
      {
        title: "TypeScript Development",
        description:
          "Type-safe applications with enhanced code quality, better developer experience, and fewer runtime errors.",
      },
      {
        title: "Modern CSS",
        description:
          "Responsive designs using Tailwind CSS, Bootstrap, and SCSS with mobile-first approach and design systems.",
      },
      {
        title: "Interactive UI",
        description:
          "Creating immersive experiences with Three.js, animations, and micro-interactions that bring designs to life.",
      },
      {
        title: "Angular & Vue",
        description:
          "Enterprise-grade applications with Angular and lightweight Vue.js solutions for diverse project requirements.",
      },
      {
        title: "Performance Optimization",
        description:
          "Optimizing load times, code splitting, lazy loading, and implementing best practices for lightning-fast websites.",
      },
    ],
  },
  {
    category: "Backend & APIs",
    title: "Backend Development",
    description:
      "Architecting robust, scalable server-side applications and RESTful APIs. Expert in multiple backend frameworks, databases, and cloud technologies to power your applications.",
    subServices: [
      {
        title: "Python & Django",
        description:
          "Full-featured web applications with Django framework, ORM, authentication, and admin interface.",
      },
      {
        title: "Node.js & Express",
        description:
          "High-performance JavaScript backend services with Express, real-time features, and microservices architecture.",
      },
      {
        title: "Database Design",
        description:
          "PostgreSQL, MongoDB, MySQL, and Redis implementation with optimized queries and data modeling.",
      },
      {
        title: "API Development",
        description:
          "RESTful APIs, GraphQL endpoints, and API documentation with security best practices and versioning.",
      },
      {
        title: "Flask & FastAPI",
        description:
          "Lightweight Python frameworks for rapid API development, microservices, and data-driven applications.",
      },
      {
        title: "C#.NET Development",
        description:
          "Enterprise applications with .NET framework, ASP.NET Core, and MSSQL Server integration.",
      },
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    title: "Mobile Development",
    description:
      "Creating native-quality mobile applications for iOS and Android. Cross-platform solutions that maximize code reuse while delivering exceptional user experiences.",
    subServices: [
      {
        title: "React Native",
        description:
          "Cross-platform mobile apps with native performance, sharing code between iOS and Android platforms.",
      },
      {
        title: "Flutter Development",
        description:
          "Beautiful, natively compiled applications with Google's UI toolkit and fast development cycles.",
      },
      {
        title: "Mobile UI/UX",
        description:
          "Intuitive mobile interfaces following platform guidelines, gesture controls, and responsive layouts.",
      },
    ],
  },
  {
    category: "Infrastructure",
    title: "Cloud & DevOps",
    description:
      "Deploying, scaling, and maintaining applications in the cloud. Implementing CI/CD pipelines, containerization, and infrastructure as code for reliable, automated deployments.",
    subServices: [
      {
        title: "AWS Services",
        description:
          "EC2, S3, Lambda, RDS, and other AWS services for scalable cloud infrastructure and serverless applications.",
      },
      {
        title: "Docker & Kubernetes",
        description:
          "Containerization and orchestration for consistent environments, scaling, and deployment management.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated testing, building, and deployment workflows with GitHub Actions, GitLab CI, or Jenkins.",
      },
      {
        title: "System Administration",
        description:
          "Linux server management, VMware virtualization, network configuration, and security hardening.",
      },
    ],
  },
  {
    category: "Design & Media",
    title: "UI/UX Design",
    description:
      "Designing beautiful, functional user interfaces that solve real problems. From wireframes to high-fidelity prototypes, creating designs that users love and businesses need.",
    subServices: [
      {
        title: "Figma Design",
        description:
          "Interactive prototypes, design systems, component libraries, and collaborative design workflows.",
      },
      {
        title: "Visual Design",
        description:
          "Adobe Photoshop and Premiere Pro for graphics, image editing, video editing, and multimedia content.",
      },
      {
        title: "Design Systems",
        description:
          "Consistent UI components, style guides, and design tokens for scalable, maintainable interfaces.",
      },
    ],
  },
  {
    category: "Specialized Solutions",
    title: "E-commerce & IoT",
    description:
      "Building complete digital commerce platforms and Internet of Things solutions. From shopping carts to smart devices, delivering end-to-end technical solutions.",
    subServices: [
      {
        title: "E-commerce Platforms",
        description:
          "Full-featured online stores with product catalogs, shopping carts, checkout flows, and order management.",
      },
      {
        title: "Payment Integration",
        description:
          "Secure payment gateways, local banking integration (Wave Pay, KPay), and transaction processing.",
      },
      {
        title: "IoT Development",
        description:
          "Smart device applications, hardware integration, sensor data processing, and real-time monitoring.",
      },
      {
        title: "Data Analysis",
        description:
          "PowerBI dashboards, data visualization, analytics implementation, and actionable insights.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-white min-h-screen">
      <ServicesHero />
      <ServiceSections sections={serviceSections} />
      <CTASection />
    </main>
  );
}
