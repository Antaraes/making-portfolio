import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import { TestimonialSection } from "@/components/Home/Testimonial";
import VideoSection from "@/components/Home/VideoSection";
import { TestimonialItem } from "@/types/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoSection />
    </div>
  );
}
