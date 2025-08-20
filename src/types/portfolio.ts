// types/portfolio.ts
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "mobile" | "web" | "branding";
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
