
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-legal-navy mb-4">
            Why choose 
            <br />
            Lawgichub?
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-legal-gold text-legal-gold" />
                ))}
              </div>
              <blockquote className="text-xl text-legal-navy leading-relaxed">
                "Lawgichub has transformed how our firm operates. We've reduced administrative overhead by 40% 
                and increased our billable hour efficiency dramatically. The AI-powered contract analysis alone 
                has saved us countless hours."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-legal-light-blue rounded-full"></div>
                <div>
                  <div className="font-semibold text-legal-navy">Sarah Mitchell</div>
                  <div className="text-sm text-legal-blue">Senior Partner, Mitchell & Associates</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-legal-light-blue border-legal-gold/20">
            <div className="space-y-6">
              <div className="text-lg font-semibold text-legal-navy">
                Transform your legal practice with:
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">40% reduction in administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">Automated document generation and review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">Real-time case and billing management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mt-2 mr-3"></div>
                  <span className="text-legal-blue">Enhanced client communication and satisfaction</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
