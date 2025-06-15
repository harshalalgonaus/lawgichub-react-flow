
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LegalTemplates = () => {
  const templates = [
    {
      title: "Contract Templates",
      subtitle: "Employment & Service Agreements",
      color: "bg-legal-black text-white"
    },
    {
      title: "Litigation Forms",
      subtitle: "Court Filing & Discovery",
      color: "bg-legal-charcoal text-white"
    },
    {
      title: "Corporate Documents",
      subtitle: "Formation & Compliance",
      color: "bg-legal-grey text-white"
    },
    {
      title: "Real Estate",
      subtitle: "Purchase & Lease Agreements",
      color: "bg-legal-accent-brown text-white"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Legal Templates</h2>
        <p className="text-gray-600">Professional legal document templates for every need</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <Card key={index} className={`p-6 ${template.color} hover:scale-105 transition-transform`}>
            <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
            <p className="text-sm opacity-90 mb-4">{template.subtitle}</p>
            <Button variant="outline" className="w-full text-black">
              View Templates
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
