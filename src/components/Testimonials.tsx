
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lawgichub has transformed how our firm operates. We've reduced administrative overhead by 40% and increased our billable hour efficiency dramatically. The AI-powered contract analysis alone has saved us countless hours.",
      name: "Sarah Mitchell",
      position: "Senior Partner",
      company: "Mitchell & Associates",
      rating: 5
    },
    {
      quote: "The document automation feature is incredible. What used to take hours now takes minutes. Our clients are impressed with how quickly we can turn around legal documents without compromising quality.",
      name: "James Rodriguez",
      position: "Managing Partner",
      company: "Rodriguez Law Group",
      rating: 5
    },
    {
      quote: "As a solo practitioner, Lawgichub gives me the capabilities of a large firm. The case management system keeps everything organized, and the AI research tools help me provide better service to my clients.",
      name: "Emily Chen",
      position: "Solo Practitioner",
      company: "Chen Legal Services",
      rating: 5
    },
    {
      quote: "The billing and time tracking features have streamlined our operations significantly. We've seen a 25% increase in collected revenue since implementing Lawgichub's comprehensive platform.",
      name: "Michael Thompson",
      position: "Operations Director",
      company: "Thompson & Partners LLP",
      rating: 5
    },
    {
      quote: "The real-time collaboration tools have revolutionized how our team works together. We can now handle complex cases with unprecedented efficiency and coordination.",
      name: "Lisa Wang",
      position: "Partner",
      company: "Wang & Associates",
      rating: 5
    },
    {
      quote: "Client satisfaction has increased dramatically since we started using Lawgichub. The transparency and communication tools have strengthened our client relationships.",
      name: "David Brown",
      position: "Managing Director",
      company: "Brown Legal Firm",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-legal-navy mb-4">
            Why choose 
            <br />
            Lawgichub?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Auto-sliding testimonials section */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${testimonials.length * 100}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="p-6 bg-white border-legal-light-grey/30 h-full">
                      <div className="space-y-4">
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-legal-gold text-legal-gold" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-legal-navy leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-legal-light-brown rounded-full"></div>
                          <div>
                            <div className="font-semibold text-legal-navy">{testimonial.name}</div>
                            <div className="text-sm text-legal-grey">{testimonial.position}, {testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-legal-accent-brown' : 'bg-legal-light-grey'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Why choose Lawgichub section */}
          <Card className="p-8 bg-legal-light-brown border-legal-accent-brown/20 sticky top-8">
            <div className="space-y-6">
              <div className="text-lg font-semibold text-legal-navy">
                Transform your legal practice with:
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-brown">40% reduction in administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-brown">Automated document generation and review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-brown">Real-time case and billing management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-accent-brown rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-brown">Enhanced client communication and satisfaction</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
