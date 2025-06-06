
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Turn legal team 
          <br />
          back office to revenue engine
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of legal professionals who have transformed their practice with Lawgichub
        </p>
        <Button 
          size="lg" 
          className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
