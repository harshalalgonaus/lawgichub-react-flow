
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingTiers = [
    {
      usage: "0 - 1,000",
      pricePerCase: "$5.00",
      description: "Perfect for small firms getting started"
    },
    {
      usage: "1,001 - 5,000",
      pricePerCase: "$4.00",
      description: "Great value for growing practices"
    },
    {
      usage: "5,001 - 15,000",
      pricePerCase: "$3.00",
      description: "Ideal for medium-sized firms"
    },
    {
      usage: "15,001+",
      pricePerCase: "$2.50",
      description: "Enterprise pricing for large firms"
    }
  ];

  const features = [
    "Case Management & Tracking",
    "Document Automation",
    "Legal Research Tools",
    "Time Tracking & Billing",
    "Client Portal Access",
    "Analytics & Reporting",
    "24/7 Customer Support",
    "Data Security & Compliance",
    "Integration with Legal Databases",
    "Mobile App Access"
  ];

  return (
    <div className="min-h-screen bg-legal-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-legal-black mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-legal-grey max-w-3xl mx-auto mb-8">
            Pay only for what you use with our flexible pay-as-you-go model. 
            The more you use, the less you pay per case.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-legal-black mb-4">
              Pay-As-You-Go Pricing
            </h2>
            <p className="text-lg text-legal-grey">
              Firm-level pricing with automatic volume discounts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${index === 2 ? 'border-legal-accent-brown border-2' : ''}`}>
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-legal-accent-brown text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-semibold text-legal-black">
                    {tier.usage} Cases/Month
                  </CardTitle>
                  <CardDescription className="text-sm text-legal-grey">
                    {tier.description}
                  </CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold text-legal-accent-brown">
                      {tier.pricePerCase}
                    </span>
                    <span className="text-legal-grey ml-1">per case</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-legal-black mb-6 text-center">
              How Volume Pricing Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-accent-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-legal-black mb-2">Track Usage</h4>
                <p className="text-legal-grey">
                  We monitor your firm's total monthly case activity across all users
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-accent-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-legal-black mb-2">Apply Best Rate</h4>
                <p className="text-legal-grey">
                  Automatically apply the lowest rate based on your usage tier
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-legal-accent-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-legal-black mb-2">Monthly Billing</h4>
                <p className="text-legal-grey">
                  Receive one consolidated bill for your entire firm each month
                </p>
              </div>
            </div>
          </div>

          {/* Features Included */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-legal-black mb-6 text-center">
              Everything Included in Every Plan
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-legal-accent-brown flex-shrink-0" />
                  <span className="text-legal-grey">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-legal-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            Start with our pay-as-you-go model today. No setup fees, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button className="bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold px-8 py-3">
                Book a Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-legal-black px-8 py-3">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
