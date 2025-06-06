
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LegalTemplates = () => {
  const templates = [
    {
      title: "Contract Templates",
      subtitle: "Employment & Service Agreements",
      color: "bg-gray-900 text-white"
    },
    {
      title: "Litigation Forms",
      subtitle: "Court Filing & Discovery",
      color: "bg-gray-800 text-white"
    },
    {
      title: "Corporate Documents",
      subtitle: "Formation & Compliance",
      color: "bg-gray-700 text-white"
    },
    {
      title: "Real Estate",
      subtitle: "Purchase & Lease Agreements",
      color: "bg-gray-600 text-white"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Complete legal workspace
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {templates.map((template, index) => (
            <Card 
              key={index} 
              className={`${template.color} p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
              <p className="text-sm opacity-80">{template.subtitle}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white transition-all duration-300 transform hover:scale-105">
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};
