
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Lawgichub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">Products</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">Solutions</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">Resources</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">Pricing</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors duration-200">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hover:bg-accent transition-all duration-200">
              Sign In
            </Button>
            <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white transition-all duration-200 transform hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
