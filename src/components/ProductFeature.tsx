
import { Card } from "@/components/ui/card";

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
            
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=3882&q=80"
                alt="Legal Practice Management Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-legal-charcoal/20 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
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
