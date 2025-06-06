
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-legal-navy via-legal-blue to-legal-navy">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform your
            <br />
            <span className="text-legal-gold">legal practice with</span>
            <br />
            intelligent solutions
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Lawgichub is the comprehensive legal operations platform designed by legal professionals 
            for legal professionals. Streamline case management, automate document workflows, 
            and maximize your firm's efficiency with AI-powered tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-legal-navy px-8 py-4 text-lg transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <span className="text-sm text-gray-300">Trusted by leading law firms:</span>
            <div className="text-sm font-medium text-legal-gold">BigLaw Partners</div>
            <div className="text-sm font-medium text-legal-gold">Corporate Legal Teams</div>
            <div className="text-sm font-medium text-legal-gold">Boutique Firms</div>
            <div className="text-sm font-medium text-legal-gold">Solo Practitioners</div>
          </div>
        </div>
      </div>
    </section>
  );
};
