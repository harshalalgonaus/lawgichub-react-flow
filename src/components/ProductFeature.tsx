
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
    <section className="py-12 md:py-16 px-4 md:px-6 bg-legal-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-charcoal mb-4 md:mb-6">
            Experience the Future of 
            <span className="text-legal-accent-brown"> Legal Practice</span>
          </h2>
          <p className="text-lg md:text-xl text-legal-grey max-w-3xl mx-auto px-4">
            See how our AI-powered platform transforms complex legal workflows into streamlined, 
            efficient processes that save time and enhance accuracy.
          </p>
        </div>

        {/* Case Processing Section */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden mb-8">
          <div className="p-4 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-legal-charcoal mb-3 md:mb-4">
               Case Processing
              </h3>
              <p className="text-legal-grey text-base md:text-lg px-4">
                Automate document intake, sorting, and contextual linking to streamline case workflows and reduce manual effort at every stage.
              </p>
            </div>
            
            <Carousel className="w-full max-w-4xl lg:max-w-5xl mx-auto mb-6 md:mb-8">
              <CarouselContent>
                {featureImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3">
                          <p className="text-legal-charcoal font-semibold text-xs md:text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
        </Card>

        {/* Case Management Section */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden mb-8">
          <div className="p-4 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-legal-charcoal mb-3 md:mb-4">
                Case Management
              </h3>
              <p className="text-legal-grey text-base md:text-lg px-4">
                Easily manage multiple cases with intelligent docketing, smart timelines, and a structured file system all in one place.
              </p>
            </div>
            
            <Carousel className="w-full max-w-4xl lg:max-w-5xl mx-auto mb-6 md:mb-8">
              <CarouselContent>
                {featureImagescase_m.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3">
                          <p className="text-legal-charcoal font-semibold text-xs md:text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
        </Card>

        {/* Case Querying Section */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden mb-8">
          <div className="p-4 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-legal-charcoal mb-3 md:mb-4">
                Case Querying
              </h3>
              <p className="text-legal-grey text-base md:text-lg px-4">
                Use advanced AI-driven tools to ask in-depth legal questions and get precise, context-aware answers instantly tailored to your matter.
              </p>
            </div>
            
            <Carousel className="w-full max-w-4xl lg:max-w-5xl mx-auto mb-6 md:mb-8">
              <CarouselContent>
                {featureImagescase_q.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3">
                          <p className="text-legal-charcoal font-semibold text-xs md:text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
        </Card>

        {/* Litigation Drafting Section */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden mb-8">
          <div className="p-4 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-legal-charcoal mb-3 md:mb-4">
               Litigation Drafting
              </h3>
              <p className="text-legal-grey text-base md:text-lg px-4">
               Create professional, well-structured legal documents from scratch, tailored precisely to your case.
              </p>
            </div>
            
            <Carousel className="w-full max-w-4xl lg:max-w-5xl mx-auto mb-6 md:mb-8">
              <CarouselContent>
                {featureImagescase_sum.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3">
                          <p className="text-legal-charcoal font-semibold text-xs md:text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
        </Card>

        {/* Case Summarization Section */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <div className="p-4 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-legal-charcoal mb-3 md:mb-4">
               Case Summarization
              </h3>
              <p className="text-legal-grey text-base md:text-lg px-4">
                Extract key insights and arguments from lengthy documents in seconds with AI-powered legal summarization that saves valuable time.
              </p>
            </div>
            
            <Carousel className="w-full max-w-4xl lg:max-w-5xl mx-auto mb-6 md:mb-8">
              <CarouselContent>
                {featureImages_ld.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0"></div>
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3">
                          <p className="text-legal-charcoal font-semibold text-xs md:text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white border-legal-light-grey text-legal-charcoal hover:text-legal-accent-brown h-8 w-8 md:h-10 md:w-10" />
            </Carousel>
          </div>
        </Card>
      </div>
    </section>
  );
};
