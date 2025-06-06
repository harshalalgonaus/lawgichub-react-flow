
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Turn legal team
            <br />
            <span className="text-primary">back office to revenue</span>
            <br />
            engine
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Lawgichub is the only legal operations platform built by and for legal teams. 
            Our AI-powered tools help law firms streamline workflows, manage cases efficiently, 
            and turn administrative overhead into profit-generating activities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg transition-all duration-300 hover:bg-accent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-sm text-muted-foreground">Trusted by leading law firms:</span>
            <div className="text-sm font-medium text-muted-foreground">BigLaw Partners</div>
            <div className="text-sm font-medium text-muted-foreground">Corporate Legal</div>
            <div className="text-sm font-medium text-muted-foreground">boutique firms</div>
            <div className="text-sm font-medium text-muted-foreground">Legal Consultants</div>
          </div>
        </div>
      </div>
    </section>
  );
};
