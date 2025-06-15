
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
    src: "case_management.jpeg",
    alt: "Legal Practice Management Dashboard",
    caption: "Case Management"
  },
  {
    src: "exhibit.jpeg",
    alt: "Legal Document Editor",
    caption: "Exhibit Analysis"
  }
];

const featureImagescase_m = [
  {
    src: "case_m1.jpeg",
    alt: "Legal Practice Management Dashboard",
    caption: "Case Manager"
  },
  {
    src: "case_m2.jpeg",
    alt: "Legal Document Editor",
    caption: "File Manager"
  }
];

const featureImagescase_q = [
  {
    src: "case_q1.jpeg",
    alt: "Legal Practice Management Dashboard",
    caption: "Exhibit Analysis"
  },
  {
    src: "case_q2.jpeg",
    alt: "Legal Document Editor",
    caption: "Extraction Querying"
  },
    {
    src: "case_q3.jpeg",
    alt: "Legal Document Editor",
    caption: "Vision Querying"
  },
    {
    src: "case_q4.jpeg",
    alt: "Legal Document Editor",
    caption: "Normal Querying"
  }
];

const featureImagescase_sum = [
  {
    src: "case_ld.jpeg",
    alt: "Legal Practice Management Dashboard",
    caption: "Litigation Drafting"
  }
];


const featureImages_ld = [
  {
    src: "case_sum.jpeg",
    alt: "Legal Document Editor",
    caption: "Case Summarization"
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
               Case Processing
              </h3>
              <p className="text-legal-grey text-lg">
                Automate document intake, sorting, and contextual linking to streamline case workflows and reduce manual effort at every stage.
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
                        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
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
            

          </div>
        </Card>

        
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-legal-charcoal mb-4">
                Case Management
              </h3>
              <p className="text-legal-grey text-lg">
                Easily manage multiple cases with intelligent docketing, smart timelines, and a structured file system all in one place.
              </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto mb-8">
              <CarouselContent>
                {featureImagescase_m.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
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
            

          </div>
        </Card>

        
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-legal-charcoal mb-4">
                Case Querying
              </h3>
              <p className="text-legal-grey text-lg">
                Use advanced AI-driven tools to ask in-depth legal questions and get precise, context-aware answers instantly tailored to your matter.
                </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto mb-8">
              <CarouselContent>
                {featureImagescase_q.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
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
            

          </div>
        </Card>

        
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-legal-charcoal mb-4">
               Litigation Drafting
              </h3>
              <p className="text-legal-grey text-lg">
               Create professional, well-structured legal documents from scratch, tailored precisely to your case.
  </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto mb-8">
              <CarouselContent>
                {featureImagescase_sum.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
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
            

          </div>
        </Card>

        
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-legal-charcoal mb-4">
               Case Summarization
              </h3>
              <p className="text-legal-grey text-lg">
                Extract key insights and arguments from lengthy documents in seconds with AI-powered legal summarization that saves valuable time.
                </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto mb-8">
              <CarouselContent>
                {featureImages_ld.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
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
            

          </div>
        </Card>
      </div>
    </section>
  );
};
