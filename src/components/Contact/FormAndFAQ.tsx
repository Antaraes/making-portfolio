"use client";
import React, { useState } from "react";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string[];
  budget: string;
  message: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "1",
    question: "I want to work with you, how do we get started?",
    answer:
      "That's awesome! To start a new project just fill in the contact form and let me know what you want to get done. After I get your email, we'll book a Zoom call to discuss how I can help you.",
  },
  {
    id: "2",
    question: "How much does a project usually cost?",
    answer:
      "The cost of a project depends on the scope and timeline. I usually ask the client's budget to better accommodate what can be done. If you are not sure about your budget fill in the contact form with your project details.",
  },
  {
    id: "3",
    question: "How long will it take to complete my project?",
    answer:
      "That depends on the type of project. For a small 10 page website it takes around 3 months to get done. Each project is different and I work with a custom solution for each client, so timelines can vary.",
  },
  {
    id: "4",
    question: "What's your specialty?",
    answer:
      "I provide a range of services for digital projects. My services consist of UI/UX for websites, mobile apps, and SaaS dashboards. I don't do development or marketing. Check my services page to see more.",
  },
  {
    id: "5",
    question: "Do you work hourly?",
    answer:
      "I don't work hourly unless it's a fixed amount of time and with a maximum of a 1-month timeline. For example, if you have an existing design that needs small updates.",
  },
  {
    id: "6",
    question: "How do you keep track of a project?",
    answer:
      "After we start working on a project we will have daily check-ins over Slack and weekly calls over Zoom to track the project progress. I also use Trello to track all tasks and milestones throughout the project.",
  },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Medium", url: "https://medium.com", icon: ExternalLink },
  { name: "Dribbble", url: "https://dribbble.com", icon: ExternalLink },
  { name: "Read.cv", url: "https://read.cv", icon: ExternalLink },
  { name: "Behance", url: "https://behance.com", icon: ExternalLink },
  { name: "Contra", url: "https://contra.com", icon: ExternalLink },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: [],
    budget: "",
    message: "",
  });

  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter((t) => t !== type)
        : [...prev.projectType, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    alert("Thank you! I'll get back to you in 24 hours of a business day.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: [],
      budget: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Let's talk!
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description & Social */}
            <div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tell me about your project and goals by filling the form or
                <br />
                send an email to{" "}
                <a
                  href="mailto:hey@victorberbel.work"
                  className="text-gray-900 underline"
                >
                  hey@victorberbel.work
                </a>
              </p>

              <div className="mb-8">
                <p className="text-gray-700 mb-4">You can also find me at:</p>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors text-sm"
                      >
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    What's your name?
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    What's your email?
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  What's your company?
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  What do you want to get done?
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Website", "Product", "Mobile"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleProjectTypeChange(type)}
                      className={`px-4 py-2 text-sm transition-colors ${
                        formData.projectType.includes(type)
                          ? "bg-gray-900 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Tell me about your project and budget
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:ring-0 focus:outline-none resize-none transition-colors"
                  placeholder="Describe your project, timeline, and budget..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 px-6 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                I'll get back to you in 24 hours of a business day
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* FAQ Section */}
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Frequently asked questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={faq.id}
                className={`border-b border-gray-200 pb-6 ${
                  index < FAQ_DATA.length - 2 ? "mb-6" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left flex items-start justify-between gap-4 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {openFAQ === faq.id && (
                  <div className="mt-4 pr-8">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
