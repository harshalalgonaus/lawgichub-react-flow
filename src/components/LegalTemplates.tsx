
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LegalTemplates = () => {
  const templates = [
    {
      title: "Contract Templates",
      subtitle: "Employment & Service Agreements",
      color: "bg-legal-navy text-white"
    },
    {
      title: "Litigation Forms",
      subtitle: "Court Filing & Discovery",
      color: "bg-legal-blue text-white"
    },
    {
      title: "Corporate Documents",
      subtitle: "Formation & Compliance",
      color: "bg-legal-gray text-white"
    },
    {
      title: "Real Estate",
      subtitle: "Purchase & Lease Agreements",
      color: "bg-legal-gold text-legal-navy"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-legal-navy mb-4">
            Complete legal workspace
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {templates.map((template, index) => (
            <Card 
              key={index} 
              className={`${template.color} p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-none`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
              <p className="text-sm opacity-80">{template.subtitle}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold transition-all duration-300 transform hover:scale-105">
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};
