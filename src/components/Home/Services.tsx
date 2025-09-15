import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const services = [
    {
      id: 1,
      title: "Website",
      color: "bg-orange-500",
      description:
        "Clear and engaging websites that actually do their job, whether it's starting fresh or giving an old one a makeover.",
      hasButton: true,
    },
    {
      id: 2,
      title: "Product",
      color: "bg-gray-800",
      description:
        "Scalable and intuitive interfaces for B2B and B2C SaaS products that truly work. From user flows to design systems.",
      hasButton: true,
    },
    {
      id: 3,
      title: "Mobile",
      color: "bg-gray-900",
      description:
        "Seamless and fluid mobile experiences designed to fit how people use apps in the real world and actually loved by users.",
      hasButton: true,
    },
  ];

  const capabilities = [
    "Build a lasting partnership for ongoing design needs",
    "Gain deeper insights into your users and refine your product",
    "Give your product a fresh and modern UI",
    "Turn your idea into a tangible, real-world product",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".capability-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".capabilities-section",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2
              ref={titleRef}
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Services
            </h2>
            <p
              ref={subtitleRef}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            >
              I provide three focused design services to keep things simple and
              effective. No headaches, just great design.
            </p>
          </div>
          <button className="hidden md:block px-6 py-3 border-b-2 border-orange-400 text-gray-900 font-medium hover:bg-orange-50 transition-colors duration-300">
            See my services
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Together Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-start capabilities-section">
          <div>
            <h3 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Together,
              <br />
              we can...
            </h3>
          </div>
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="capability-item flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// Service Card Component
const ServiceCard: React.FC<{ service: any; index: number }> = ({
  service,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="service-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-lg text-gray-400 font-medium">{index + 1}</span>
        <div className={`w-4 h-4 rounded-full ${service.color}`}></div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>
      {service.hasButton && (
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
          See projects
        </button>
      )}
    </div>
  );
};
