
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
      title: "Multiple Cases, One Dashboard",
      description: "Manage all your matters in one place with case docketing, smart tracking, and a structured file manager."
    },
    {
      icon: FileText,
      title: "Auto-Drafted Legal Docs",
      description: "Create fully formatted drafts from scratch using our agentic AI — no templates, just intelligent, case-specific writing."
    },
    {
      icon: Users,
      title: "AI-Powered Querying & Summarization",
      description: "Our advanced querying tools like Exhibit Agentic Analysis, Context Querying, and Vision Querying;deliver precise, actionable insights in seconds."
    },
    {
      icon: TrendingUp,
      title: "Multi-Source Input Handling",
      description: "Supports evolving case data from PDFs, handwritten notes, scanned forms, and ongoing conversations."
    }
  ];

  return (
    <section className="py-16 px-6 bg-legal-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-legal-black mb-4">
            Modern Legal Teams are Using Lawgichub Tools
          </h2>
          <p className="text-xl text-legal-charcoal max-w-3xl mx-auto">
            From case management to client relations, our comprehensive platform covers every aspect of modern legal practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in bg-white border-legal-light-grey/30 hover:border-legal-accent-brown/50 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-legal-rich-brown mb-4" />
              <h3 className="text-xl font-semibold text-legal-black mb-3">{feature.title}</h3>
              <p className="text-legal-grey">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
