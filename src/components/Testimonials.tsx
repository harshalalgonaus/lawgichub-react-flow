
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    }
  ];

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
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="space-y-6">
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-legal-gold text-legal-gold" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-legal-navy leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-legal-light-blue rounded-full"></div>
                        <div>
                          <div className="font-semibold text-legal-navy">{testimonial.name}</div>
                          <div className="text-sm text-legal-blue">{testimonial.position}, {testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          <Card className="p-8 bg-legal-light-blue border-legal-gold/20">
            <div className="space-y-6">
              <div className="text-lg font-semibold text-legal-navy">
                Transform your legal practice with:
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">40% reduction in administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">Automated document generation and review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">Real-time case and billing management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">Enhanced client communication and satisfaction</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
