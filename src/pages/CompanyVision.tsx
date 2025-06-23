
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Target, Heart, Users, ArrowRight, Star, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function CompanyVision() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-legal-black to-legal-charcoal">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision for the Future of Legal Practice
          </h1>
          <p className="text-xl text-legal-light-grey mb-8 max-w-2xl mx-auto">
            We envision a world where legal professionals are empowered by intelligent technology to deliver exceptional outcomes while focusing on what matters most - serving their clients.
          </p>
          <Link to="/book-demo">
            <Button className="bg-legal-accent-brown hover:bg-legal-rich-brown text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
              Join Our Vision
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-legal-accent-brown/10 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-legal-accent-brown" />
                </div>
                <h2 className="text-2xl font-bold text-legal-black">Our Mission</h2>
              </div>
              <p className="text-legal-charcoal mb-4 leading-relaxed">
                To democratize access to advanced legal technology and empower legal professionals with AI-driven tools that enhance efficiency, accuracy, and client satisfaction.
              </p>
              <p className="text-legal-charcoal leading-relaxed">
                We believe that by removing technological barriers and simplifying complex processes, we can help legal professionals focus on providing expert counsel with unprecedented precision.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-legal-accent-brown/10 p-3 rounded-lg mr-4">
                  <Lightbulb className="h-6 w-6 text-legal-accent-brown" />
                </div>
                <h2 className="text-2xl font-bold text-legal-black">Our Vision</h2>
              </div>
              <p className="text-legal-charcoal mb-4 leading-relaxed">
                A future where AI seamlessly integrates with legal practice, making sophisticated legal analysis accessible to every practitioner, regardless of firm size or resources.
              </p>
              <p className="text-legal-charcoal leading-relaxed">
                We envision legal professionals equipped with intelligent tools that amplify their expertise and enable them to deliver exceptional value to their clients.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-legal-black mb-4">Our Core Values</h2>
              <p className="text-legal-charcoal max-w-2xl mx-auto">
                These principles guide everything we do and shape how we build technology for the legal profession.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-legal-accent-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Excellence</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  We strive for excellence in everything we do, ensuring the highest quality standards in legal technology and customer service.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-legal-accent-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Integrity</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  Trust and transparency are fundamental to our relationships with clients, partners, and team members in the legal profession.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-legal-accent-brown/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-legal-accent-brown" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Collaboration</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  We believe in the power of collaboration, working closely with legal professionals to understand and address their unique challenges.
                </p>
              </Card>
            </div>
          </div>

          {/* What We Believe */}
          <Card className="p-8 mb-16 bg-legal-cream">
            <h2 className="text-3xl font-bold text-legal-black text-center mb-8">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Technology Should Enhance, Not Replace</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  We believe technology should amplify human expertise, not replace it. Our AI tools are designed to enhance the capabilities of legal professionals, allowing them to focus on strategic thinking and client relationships.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-legal-black mb-3">Access to Justice Matters</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  By making advanced legal technology accessible to firms of all sizes, we're helping to democratize access to justice and ensure that quality legal representation isn't limited by technological barriers.
                </p>
              </div>
            </div>
          </Card>

          {/* Future Goals */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-legal-black mb-8">Looking Ahead</h2>
            <p className="text-xl text-legal-charcoal mb-12 max-w-4xl mx-auto leading-relaxed">
              Our vision extends beyond today's capabilities. We're building towards a future where AI seamlessly integrates with legal practice, making sophisticated legal analysis accessible to every practitioner.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-legal-accent-brown">2025</div>
                <div className="text-legal-charcoal font-medium">AI-Powered Legal Research Revolution</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-legal-accent-brown">2026</div>
                <div className="text-legal-charcoal font-medium">Global Legal Platform Integration</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-legal-accent-brown">2027</div>
                <div className="text-legal-charcoal font-medium">Next-Gen Predictive Analytics</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
