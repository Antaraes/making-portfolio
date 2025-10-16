"use client";
import React, { useState, useMemo } from "react";
import {
  Filter,
  ExternalLink,
  Github,
  Smartphone,
  Monitor,
  Tablet,
  Palette,
  Code,
  Database,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Types
interface Project {
  id: string;
  title: string;
  slug?: string;
  description: string;
  category: "mobile" | "website" | "desktop" | "ui-ux" | "product";
  skills: string[];
  image: string;
  color: string;
  links?: {
    live?: string;
    github?: string;
    design?: string;
  };
}

// Sample data
const SAMPLE_PROJECTS: Project[] = [
  {
    id: "1",
    slug: "chat-application",
    title: "Chat Application",
    description: "Talk with strangers until the chat resets",
    category: "ui-ux",
    skills: ["Figma", "UI/UX", "Laravel", "Flutter"],
    image: "/project/chat/showcase.png",
    color: "from-green-400 to-blue-500",
    links: {
      live: "https://zesty-app.com",
      github: "https://github.com/username/zesty",
    },
  },
  {
    id: "2",
    slug: "inventory-application",
    title: "Inventory App",
    description: "Warehouse inventory management and order tracking",
    category: "ui-ux",
    skills: ["Figma", "UI/UX", "Laravel", "Flutter"],
    image: "/project/inventory/cover.png",
    color: "from-pink-300 to-orange-300",
    links: {
      live: "https://poesial.com",
      github: "https://github.com/username/poesial",
    },
  },
  {
    id: "9",
    slug: "property-management",
    title: "Property Management System",
    description:
      "Enterprise real estate platform with CRM, lead tracking, and multi-tenant architecture",
    category: "website",
    skills: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL"],
    image: "/project/property/Thumbnail.png",
    color: "from-emerald-400 to-teal-500",
    links: {
      github: "https://github.com/username/property-management",
    },
  },
  {
    id: "10",
    slug: "good-writes-ai",
    title: "Good Writes AI",
    description:
      "AI-powered academic research platform with intelligent document analysis and collaboration",
    category: "product",
    skills: ["Next.js", "NestJS", "Python", "MongoDB", "AWS"],
    image: "/project/research-paper/research-paper.png",
    color: "from-purple-500 to-indigo-600",
    links: {
      github: "https://github.com/username/good-writes-ai",
    },
  },
  {
    id: "11",
    slug: "appointment-meeting",
    title: "Meeting Appointment System",
    description:
      "Collaborative appointment scheduling platform with team-based functionality and smart scheduling",
    category: "website",
    skills: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "TypeORM"],
    image: "/images/appointment/meetingappoinment.png",
    color: "from-slate-600 to-slate-800",
    links: {
      github: "https://github.com/Antaraes/meeting_appointment_ui",
    },
  },
  {
    id: "3",
    title: "Task Manager Pro",
    description: "Advanced project management with team collaboration",
    category: "desktop",
    skills: ["Electron", "React", "SQLite", "Node.js"],
    image: "/api/placeholder/600/400",
    color: "from-blue-400 to-purple-600",
    links: {
      github: "https://github.com/username/task-manager",
    },
  },
  {
    id: "4",
    title: "Banking Dashboard",
    description: "Modern UI/UX design for financial applications",
    category: "ui-ux",
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
    image: "/api/placeholder/600/400",
    color: "from-gray-100 to-gray-300",
    links: {
      design: "https://figma.com/banking-dashboard",
    },
  },
  {
    id: "5",
    title: "AI Content Generator",
    description: "Full-stack application for AI-powered content creation",
    category: "product",
    skills: ["React", "NestJS", "OpenAI API", "PostgreSQL"],
    image: "/api/placeholder/500/400",
    color: "from-purple-400 to-pink-400",
    links: {
      live: "https://ai-content-gen.com",
      github: "https://github.com/username/ai-generator",
    },
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition",
    category: "mobile",
    skills: ["Flutter", "Firebase", "Health APIs", "Chart.js"],
    image: "/api/placeholder/400/600",
    color: "from-red-400 to-yellow-400",
    links: {
      live: "https://fitness-tracker.app",
    },
  },
  {
    id: "7",
    title: "E-commerce Platform",
    description: "Scalable online store with advanced features",
    category: "website",
    skills: ["Next.js", "Shopify API", "TypeScript", "GraphQL"],
    image: "/api/placeholder/600/400",
    color: "from-indigo-400 to-cyan-400",
    links: {
      live: "https://ecommerce-platform.com",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    id: "8",
    title: "Code Editor",
    description: "Lightweight desktop code editor with syntax highlighting",
    category: "desktop",
    skills: ["Tauri", "Rust", "React", "Monaco Editor"],
    image: "/api/placeholder/600/400",
    color: "from-gray-800 to-gray-600",
    links: {
      github: "https://github.com/username/code-editor",
    },
  },
];

const CATEGORIES = [
  { id: "all", label: "All", count: SAMPLE_PROJECTS.length },
  {
    id: "website",
    label: "Website",
    count: SAMPLE_PROJECTS.filter((p) => p.category === "website").length,
  },
  {
    id: "mobile",
    label: "Mobile",
    count: SAMPLE_PROJECTS.filter((p) => p.category === "mobile").length,
  },
  {
    id: "desktop",
    label: "Desktop",
    count: SAMPLE_PROJECTS.filter((p) => p.category === "desktop").length,
  },
  {
    id: "ui-ux",
    label: "UI/UX",
    count: SAMPLE_PROJECTS.filter((p) => p.category === "ui-ux").length,
  },
  {
    id: "product",
    label: "Product",
    count: SAMPLE_PROJECTS.filter((p) => p.category === "product").length,
  },
];

const ALL_SKILLS = Array.from(
  new Set(SAMPLE_PROJECTS.flatMap((p) => p.skills))
).sort();

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "mobile":
      return <Smartphone className="w-4 h-4" />;
    case "website":
      return <Monitor className="w-4 h-4" />;
    case "desktop":
      return <Tablet className="w-4 h-4" />;
    case "ui-ux":
      return <Palette className="w-4 h-4" />;
    case "product":
      return <Code className="w-4 h-4" />;
    default:
      return <Database className="w-4 h-4" />;
  }
};

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const route = useRouter();

  const filteredProjects = useMemo(() => {
    return SAMPLE_PROJECTS.filter((project) => {
      const categoryMatch =
        activeCategory === "all" || project.category === activeCategory;
      const skillsMatch =
        selectedSkills.length === 0 ||
        selectedSkills.some((skill) => project.skills.includes(skill));
      return categoryMatch && skillsMatch;
    });
  }, [activeCategory, selectedSkills]);

  const toggleSkillFilter = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSelectedSkills([]);
    setActiveCategory("all");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Work
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing modern web development, mobile
            apps, and creative solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gray-900 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {getCategoryIcon(category.id)}
              {category.label}
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? "bg-white/20 text-white"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filter by Skills
            {selectedSkills.length > 0 && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {selectedSkills.length}
              </span>
            )}
          </button>
        </div>

        {/* Skills Filter */}
        {showFilters && (
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Filter by Skills
              </h3>
              {selectedSkills.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_SKILLS.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkillFilter(skill)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSkills.includes(skill)
                      ? "bg-blue-100 text-blue-800 border border-blue-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => route.push(`/work/${project.slug}`)}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div
                className={`relative h-64 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center overflow-hidden`}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="relative z-10 text-center"></div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more projects.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
