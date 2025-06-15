
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-legal-black via-legal-charcoal to-legal-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming
            <br />
            <span className="text-legal-accent-cream">Legal Documents Into</span>
            <br />
            Structured Intelligence
          </h1>
          
          <p className="text-xl text-legal-light-grey mb-8 max-w-3xl mx-auto leading-relaxed">
            Lawgichub delivers AI-powered solutions built for legal professionals—enhancing case management, drafting, research, and legal query resolution with structure, precision, and clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-legal-accent-brown hover:bg-legal-rich-brown text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Book Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-legal-accent-brown text-legal-accent-brown hover:bg-legal-accent-brown hover:text-white px-8 py-4 text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button> */}
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <span className="text-sm text-legal-light-grey">Trusted by leading law firms:</span>
            <div className="text-sm font-medium text-legal-accent-cream">BigLaw Partners</div>
            <div className="text-sm font-medium text-legal-accent-cream">Corporate Legal Teams</div>
            <div className="text-sm font-medium text-legal-accent-cream">Boutique Firms</div>
            <div className="text-sm font-medium text-legal-accent-cream">Solo Practitioners</div>
          </div>
        </div>
      </div>
    </section>
  );
};
