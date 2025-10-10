import React from "react";
import AboutHero from "@/components/About/AboutHero";
import IntroSection from "@/components/About/IntroSection";
import SkillsSection from "@/components/About/SkillsSection";
import ExperienceTimeline from "@/components/About/ExperienceTimeline";
import Footer from "@/components/Footer";

const skillsData = {
  frontend: [
    {
      title: "HTML",
      icon: "logos:html-5",
    },
    {
      title: "CSS",
      icon: "vscode-icons:file-type-css",
    },
    {
      title: "SCSS",
      icon: "vscode-icons:file-type-scss",
    },
    {
      title: "JavaScript",
      icon: "devicon:javascript",
    },
    {
      title: "Tailwind CSS",
      icon: "vscode-icons:file-type-tailwind",
    },
    {
      title: "Bootstrap",
      icon: "devicon:bootstrap",
    },
    {
      title: "React",
      icon: "devicon:react",
    },
    {
      title: "Next Js",
      icon: "cib:next-js",
    },
    {
      title: "React Native",
      icon: "tabler:brand-react-native",
    },
    {
      title: "Three js",
      icon: "devicon:threejs",
    },
    {
      title: "Flutter",
      icon: "logos:flutter",
    },
  ],
  backend: [
    {
      title: "Python",
      icon: "logos:python",
    },
    {
      title: "Django",
      icon: "vscode-icons:file-type-django",
    },
    {
      title: "Odoo",
      icon: "",
    },
    {
      title: "Flask",
      icon: "cib:flask",
    },
    {
      title: "C #",
      icon: "devicon:csharp",
    },
    {
      title: "MySQL",
      icon: "logos:mysql",
    },
    {
      title: "Sequelize",
      icon: "logos:sequelize",
    },
    {
      title: "Redis",
      icon: "logos:redis",
    },
    {
      title: "Docker",
      icon: "logos:docker-icon",
    },
    {
      title: "PostgreSQL",
      icon: "logos:postgresql",
    },
    {
      title: "Nest js",
      icon: "logos:nestjs",
    },
    {
      title: "MongoDB",
      icon: "devicon:mongodb",
    },
    {
      title: "Rest API",
      icon: "dashicons:rest-api",
    },
    {
      title: "Fast API",
      icon: "devicon:fastapi",
    },
    {
      title: "Graphql",
      icon: "fontisto:graphql",
    },
  ],
  SocialDesign: [
    {
      title: "Adobe PhotoShop",
      icon: "skill-icons:photoshop",
    },
    {
      title: "Adobe Premiere Pro",
      icon: "simple-icons:adobepremierepro",
    },
    {
      title: "Figma",
      icon: "devicon:figma",
    },
    {
      title: "Fl Studio",
      icon: "arcticons:fl-studio-mobile",
    },
    {
      title: "Ableton Live",
      icon: "simple-icons:abletonlive",
    },
    {
      title: "Communication",
      icon: "fluent:people-community-20-filled",
    },
  ],
  Hobbies: [
    {
      title: "Reading",
      icon: "flat-color-icons:reading",
    },
    {
      title: "Guitar",
      icon: "wpf:guitar",
    },
    {
      title: "BasketBall",
      icon: "noto:basketball",
    },
    {
      title: "Table Tennis",
      icon: "fa-solid:table-tennis",
    },
    {
      title: "Chess",
      icon: "fluent:chess-20-regular",
    },
    {
      title: "Ground Tennis",
      icon: "emojione-monotone:tennis",
    },
    {
      title: "Creating Music",
      icon: "entypo:music",
    },
  ],
};

const experienceData = [
  {
    title: "SOFTWARE ENGINEER",
    job: "ACE DATA SYSTEMS | FULL TIME",
    location: "Yangon, Myanmar",
    description:
      "Secured a position at Ace Data System, showcasing proficiency in testing projects during the selection process. Expertise in React Native, React, Node, and Next.js, contributing to advanced software solutions. Received comprehensive training in software development methodologies. Developed strong teamwork and project management skills in an enterprise banking environment.",
    icon: "ph:code-bold",
    date: "Oct 2023 - Mar 2024",
  },
  {
    title: "FULL STACK DEVELOPER",
    job: "NATIONAL CYBER CITY | FREELANCE",
    location: "Pyin Oo Lwin, Myanmar",
    description:
      "Mastered Next.js, TypeScript, Python, and Django at websites. Led a ticketing system project with image processing for local bank payment gateway, and data export features. Learning Rust to develop a small e-commerce platform. Planning to develop a Point of Sale system with PyQt and design a custom operating system. Developed E-commerce Websites and Internet of Things Product Selling Website.",
    icon: "carbon:software-resource-cluster",
    date: "Aug 2023 - Jul 2024",
  },
  {
    title: "FRONTEND DEVELOPER",
    job: "TEE HTWIN ENTERPRISE | VOLUNTEER",
    location: "Yangon, Myanmar",
    description:
      "Contributed to the Aligate Project (QR code attendance system) and Burm in Bloom (Myanmar Art Culture). Excelled in teamwork on the Aligate Project. Worked on the Atxapt project, integrating machine learning for a better user experience. Gained hands-on experience in testing methods to ensure frontend project quality. Developed skills in deploying and managing frontend applications on AWS cloud infrastructure.",
    icon: "heroicons:code-bracket-square",
    date: "Dec 2021 - May 2024",
  },
  {
    title: "IT SUPPORT",
    job: "KAUNG SAN GROUP | PART-TIME",
    location: "Sagaing, Myanmar",
    description:
      "Managed a convenience store, ensuring smooth daily operations, handling computer systems and providing technical support. Gained essential skills in troubleshooting hardware and software issues, installing and maintaining computer systems and CCTV, and ensuring POS systems work efficiently. Provided customer service alongside IT support, ensuring customer satisfaction and smooth business operations. Install authorized software to laptops and desktops. Responsible for managing backups and data including collaboration, time management, attention to detail, software and system expertise, creative and analytical thinking, and problem-solving.",
    icon: "mdi:tools",
    date: "Oct 2020 - Nov 2021",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="relative bg-white text-white min-h-screen">
        <AboutHero />
        <IntroSection />
        <SkillsSection skillsData={skillsData} />
        <ExperienceTimeline experienceData={experienceData} />
      </main>
    </>
  );
}
