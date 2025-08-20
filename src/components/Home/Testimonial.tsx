"use client";

import { TestimonialItem } from "@/types/portfolio";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface TestimonialSectionProps {
  testimonial: TestimonialItem;
}

export class TestimonialRenderer {
  constructor(private testimonial: TestimonialItem) {}

  render() {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <blockquote className="text-xl leading-relaxed mb-8">
                &quot;{this.testimonial.content}&quot;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={this.testimonial.avatar}
                    alt={this.testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{this.testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {this.testimonial.role}, {this.testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonial }) => {
  const renderer = new TestimonialRenderer(testimonial);
  return renderer.render();
};
