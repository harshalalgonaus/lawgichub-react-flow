
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, TrendingUp, DollarSign, Shield, Settings, Percent, ArrowUpDown, Play, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const howItWorksFeatures = [
    {
      icon: Shield,
      title: "Transparent Pricing with No Hidden Costs",
      description: "We believe in complete pricing transparency, so you can budget confidently without worrying about surprise fees or complicated charges."
    },
    {
      icon: Headphones,
      title: "Dedicated Support and Regular Plan Reviews",
      description: "Our team is committed to regularly reviewing your plan with you, ensuring your investment continues to deliver optimal value as your practice evolves."
    },
    {
      icon: Settings,
      title: "Customised Billing",
      description: "Tailored to your firm's size, caseload, and evolving practice needs — no one-size-fits-all plans."
    }
  ];

  const coreFeatures = [
    "Flexible Plans for Every Practice Size",
    "Scalable Pricing as You Grow",
    "Transparent and Fair Billing",
    "Usage-Based Cost Adjustments",
    "No Hidden Fees or Surprises",
    "Customizable Add-Ons and Features",
    "Discounts for Long-Term Commitments",
    "Easy Plan Upgrades and Downgrades",
    "Free Trial and Demo Options",
    "Dedicated Billing Support"
  ];

  const faqs = [
    {
      question: "Is a free trial available before committing to a plan?",
      answer: "Absolutely, a free trial is available so you can explore all features risk-free."
    },
    {
      question: "Are there any hidden charges in the subscription?",
      answer: "No, our pricing is transparent with no hidden or surprise fees."
    },
    {
      question: "Do you provide customized plans for large enterprises?",
      answer: "We do offer tailored pricing solutions for enterprise-level needs."
    }
  ];

  return (
    <div className="min-h-screen bg-legal-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-legal-black mb-6">
            Invest in Efficiency & See the Difference
          </h1>
          <p className="text-xl text-legal-grey max-w-3xl mx-auto mb-8">
            From solo lawyers to large firms, get pricing perfectly tailored to your legal needs.
          </p>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-legal-black mb-4">
              How Pricing Works?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {howItWorksFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-legal-accent-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">{feature.title}</h3>
                <p className="text-legal-grey leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-legal-black mb-4">
              Core Features of Our Pricing Model
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-legal-cream/50 transition-colors">
                <Check className="h-5 w-5 text-legal-accent-brown flex-shrink-0" />
                <span className="text-legal-black font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-legal-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-legal-black mb-3">{faq.question}</h3>
                <p className="text-legal-grey leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-legal-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Future of Legal Practice?
          </h2>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            Get started with LawgicHub today — explore our plans, take a free trial, and discover how we can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button className="bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold px-8 py-3">
                Start Free Trial
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
