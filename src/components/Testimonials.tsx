
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-[#FFF3E0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
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
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl text-foreground leading-relaxed">
                "Lawgichub has transformed how our firm operates. We've reduced administrative overhead by 40% 
                and increased our billable hour efficiency dramatically. The AI-powered contract analysis alone 
                has saved us countless hours."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Senior Partner, Mitchell & Associates</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-white">
            <div className="space-y-6">
              <div className="text-lg font-semibold text-foreground">
                Transform your legal practice with:
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">40% reduction in administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">Automated document generation and review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">Real-time case and billing management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF6B6B] rounded-full mt-2 mr-3"></div>
                  <span className="text-muted-foreground">Enhanced client communication and satisfaction</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
