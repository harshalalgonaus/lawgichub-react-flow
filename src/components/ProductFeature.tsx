
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featureImages = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=3882&q=80",
    alt: "Legal Practice Management Dashboard",
    caption: "Comprehensive Case Management Interface"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4076&q=80",
    alt: "Legal Document Editor",
    caption: "AI-Powered Document Creation"
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3543&q=80",
    alt: "Legal Analytics Dashboard",
    caption: "Advanced Analytics & Reporting"
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    alt: "Client Communication Portal",
    caption: "Streamlined Client Communications"
  }
];

export const ProductFeature = () => {
  return (
    <section className="py-16 px-6 bg-legal-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-legal-charcoal mb-6">
            Experience the Future of 
            <span className="text-legal-accent-brown"> Legal Practice</span>
          </h2>
          <p className="text-xl text-legal-grey max-w-3xl mx-auto">
            See how our AI-powered platform transforms complex legal workflows into streamlined, 
            efficient processes that save time and enhance accuracy.
          </p>
        </div>

        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-legal-charcoal mb-4">
                Intelligent Case Management Dashboard
              </h3>
              <p className="text-legal-grey text-lg">
                Comprehensive overview of all your cases, deadlines, and client communications in one unified interface
              </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto mb-8">
              <CarouselContent>
                {featureImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-legal-charcoal/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-legal-charcoal font-semibold text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown" />
              <CarouselNext className="right-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown" />
            </Carousel>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-accent-brown mb-2">95%</div>
                <div className="text-legal-grey">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-accent-brown mb-2">60%</div>
                <div className="text-legal-grey">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-accent-brown mb-2">24/7</div>
                <div className="text-legal-grey">AI Support</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
