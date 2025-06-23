
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Target, Eye, Heart, Users, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CompanyVision() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-legal-black via-legal-charcoal to-legal-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-legal-accent-brown text-white mb-6">
              <Eye className="w-6 h-6" />
              <span className="font-semibold text-lg">Company's Vision</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming
              <br />
              <span className="text-legal-accent-cream">Legal Practice</span>
              <br />
              Through Innovation
            </h1>
            <p className="text-xl text-legal-light-grey max-w-3xl mx-auto mb-8 leading-relaxed">
              We envision a future where legal professionals are empowered by intelligent technology to deliver exceptional outcomes while focusing on what matters most - serving their clients with precision and clarity.
            </p>
            <Link to="/book-demo">
              <Button className="bg-legal-accent-brown hover:bg-legal-rich-brown text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                Join Our Vision
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-16 px-6 bg-legal-cream">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Our Mission */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-legal-black mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-legal-accent-brown" />
                  Our Mission
                </h2>
                <p className="text-lg text-legal-charcoal mb-6 leading-relaxed">
                  To democratize access to advanced legal technology and empower legal professionals with AI-driven tools that enhance efficiency, accuracy, and client satisfaction through structured intelligence.
                </p>
                <p className="text-lg text-legal-charcoal leading-relaxed">
                  We believe that by removing technological barriers and simplifying complex processes, we can help legal professionals focus on what they do best - providing expert legal counsel and advocacy with unprecedented precision.
                </p>
              </div>
            </div>

            {/* Right Side - Vision Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-legal-light-brown to-legal-accent-brown rounded-full flex items-center justify-center shadow-2xl">
                  <Eye className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-legal-black text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-legal-light-grey/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-legal-accent-brown rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-4">Excellence</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  We strive for excellence in everything we do, from product development to customer service, ensuring the highest quality standards in legal technology.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-legal-light-grey/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-legal-rich-brown rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-4">Integrity</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  Trust and transparency are fundamental to our relationships with clients, partners, and team members in the legal profession.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-legal-light-grey/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-legal-brown rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-legal-black mb-4">Collaboration</h3>
                <p className="text-legal-charcoal leading-relaxed">
                  We believe in the power of collaboration, working closely with legal professionals to understand and address their unique challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="bg-gradient-to-r from-legal-charcoal to-legal-black rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Our vision extends beyond today's capabilities. We're building towards a future where AI seamlessly integrates with legal practice, making sophisticated legal analysis accessible to every practitioner, regardless of firm size or resources.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-legal-accent-brown/20 rounded-xl p-6 backdrop-blur-sm border border-legal-accent-brown/30">
                <div className="text-4xl font-bold mb-2 text-legal-accent-cream">2025</div>
                <div className="text-legal-light-grey">AI-Powered Legal Research Revolution</div>
              </div>
              <div className="bg-legal-accent-brown/20 rounded-xl p-6 backdrop-blur-sm border border-legal-accent-brown/30">
                <div className="text-4xl font-bold mb-2 text-legal-accent-cream">2026</div>
                <div className="text-legal-light-grey">Global Legal Platform Integration</div>
              </div>
              <div className="bg-legal-accent-brown/20 rounded-xl p-6 backdrop-blur-sm border border-legal-accent-brown/30">
                <div className="text-4xl font-bold mb-2 text-legal-accent-cream">2027</div>
                <div className="text-legal-light-grey">Next-Gen Predictive Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
