
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/book-demo">
              <Button 
                size="lg" 
                className="bg-legal-accent-brown hover:bg-legal-rich-brown text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                Book Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Disclaimer */}
          <div className="mb-8 bg-legal-charcoal/30 border border-legal-accent-brown/20 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Smartphone className="h-5 w-5 text-legal-accent-cream" />
              <span className="text-legal-accent-cream font-medium">Mobile Users</span>
            </div>
            <p className="text-sm text-legal-light-grey">
              To experience the future of legal practice, Open the website as a desktop site in your mobile phones.
            </p>
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
