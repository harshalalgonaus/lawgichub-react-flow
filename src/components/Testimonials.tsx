
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lawgichub has transformed how our firm operates. We've reduced administrative overhead by 40% and increased our billable hour efficiency dramatically. The AI-powered contract analysis alone has saved us countless hours.",
      name: "Sarah Mitchell",
      position: "Senior Partner",
      company: "Mitchell & Associates",
      rating: 5,
    },
    {
      quote:
        "LawgicHub made our responses faster and easier by quickly finding important contract details and helping us write clear replies.",
      name: "James Rodriguez",
      position: "Managing Partner",
      company: "Rodriguez Law Group",
      rating: 5,
    },
    {
      quote:
        "Thanks to Lawgichub, organizing complex legal data and preparing accurate arguments is faster and easier- an everyday game-changer for me. The team is doing a wonderful job!",
      name: "Emily Chen",
      position: "Solo Practitioner",
      company: "Chen Legal Services",
      rating: 5,
    },
    {
      quote:
        "The billing and time tracking features have streamlined our operations significantly. We've seen a 25% increase in collected revenue since implementing Lawgichub's comprehensive platform.",
      name: "Michael Thompson",
      position: "Operations Director",
      company: "Thompson & Partners LLP",
      rating: 5,
    },
    {
      quote:
        "The real-time collaboration tools have revolutionized how our team works together. We can now handle complex cases with unprecedented efficiency and coordination.",
      name: "Lisa Wang",
      position: "Partner",
      company: "Wang & Associates",
      rating: 5,
    },
    {
      quote:
        "Client satisfaction has increased dramatically since we started using Lawgichub. The transparency and communication tools have strengthened our client relationships.",
      name: "David Brown",
      position: "Managing Director",
      company: "Brown Legal Firm",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-legal-navy mb-4">
            Why Choose <br className="sm:hidden" /> Lawgichub?
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-16">
          {/* Testimonials Block */}
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-legal-navy mb-4 sm:mb-6 text-center">
              Testimonial's
            </h2>
            
            <div className="relative w-full">
              <div className="overflow-hidden rounded-lg w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out w-full"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
                      <Card className="p-4 sm:p-6 bg-white border border-legal-light-grey/30 h-auto mx-1">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <blockquote className="text-sm sm:text-base lg:text-lg text-legal-navy leading-relaxed break-words">
                            {testimonial.quote}
                          </blockquote>
                          <div className="flex items-center space-x-2 sm:space-x-3 pt-2 sm:pt-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-legal-light-brown rounded-full flex-shrink-0"></div>
                            <div className="min-w-0 flex-1">
                              <div className="font-semibold text-legal-navy text-sm sm:text-base truncate">
                                {testimonial.name}
                              </div>
                              <div className="text-xs sm:text-sm text-legal-grey break-words">
                                {testimonial.position}, {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-legal-accent-brown"
                        : "bg-legal-light-grey"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Why Lawgichub Benefits */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-legal-light-brown border-legal-accent-brown/20 lg:sticky lg:top-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="text-base sm:text-lg font-semibold text-legal-navy">
                Lawgichub is an ecosystem which transforms your legal practice
                with:
              </div>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-legal-brown">
                    From drafting and docketing to analysis and insights, every
                    feature is built for real world legal needs.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-legal-brown">
                    It eliminates repetitive tasks, reduces manual errors, and
                    boosts productivity across the board.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-legal-brown">
                    AI works behind the scenes adapting to your case context,
                    tone, and legal requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-legal-brown">
                    Firms data stays secure, your workflow stays efficient, and
                    your team stays ahead.
                  </span>
                </li>
              </ul>
              <div className="text-base sm:text-lg font-semibold text-legal-navy">
                Because in law, every second counts and Lawgichub helps you make
                it matter.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
