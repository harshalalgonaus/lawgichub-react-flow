
import { Shield, Clock, FileText, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Automated compliance tracking and reporting to ensure your firm meets all regulatory requirements."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Intelligent time tracking that automatically categorizes billable and non-billable hours."
    },
    {
      icon: FileText,
      title: "Document Automation",
      description: "Generate legal documents with AI-powered templates and clause libraries."
    },
    {
      icon: Users,
      title: "Client Portal",
      description: "Secure client communication and case updates through dedicated portals."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Real-time dashboards and reports to optimize firm performance and profitability."
    }
  ];

  return (
    <section className="py-16 px-6 bg-legal-light-blue">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-legal-navy mb-4">
            Modern Legal Teams are Using Lawgichub Tools
          </h2>
          <p className="text-xl text-legal-blue max-w-3xl mx-auto">
            From case management to client relations, our comprehensive platform covers every aspect of modern legal practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in bg-white border-legal-gold/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-legal-blue mb-4" />
              <h3 className="text-xl font-semibold text-legal-navy mb-3">{feature.title}</h3>
              <p className="text-legal-gray">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
