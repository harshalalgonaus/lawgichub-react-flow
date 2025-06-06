
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-legal-navy to-legal-blue text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transform your legal practice
          <br />
          <span className="text-legal-gold">into a revenue engine</span>
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of legal professionals who have revolutionized their practice with Lawgichub's intelligent solutions
        </p>
        <Button 
          size="lg" 
          className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
