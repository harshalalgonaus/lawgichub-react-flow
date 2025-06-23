
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Target, Eye, Heart, Users, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CompanyVision() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white mb-6">
              <Eye className="w-6 h-6" />
              <span className="font-semibold text-lg">Company's Vision</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transforming Legal Practice Through Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We envision a future where legal professionals are empowered by intelligent technology to deliver exceptional outcomes while focusing on what matters most - serving their clients.
            </p>
            <Link to="/book-demo">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                Join Our Vision
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Our Mission */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-emerald-600" />
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced legal technology and empower legal professionals with AI-driven tools that enhance efficiency, accuracy, and client satisfaction.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that by removing technological barriers and simplifying complex processes, we can help legal professionals focus on what they do best - providing expert legal counsel and advocacy.
                </p>
              </div>
            </div>

            {/* Right Side - Vision Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                  <Eye className="w-32 h-32 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from product development to customer service, ensuring the highest quality standards.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Trust and transparency are fundamental to our relationships with clients, partners, and team members.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of collaboration, working closely with legal professionals to understand and address their unique challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Our vision extends beyond today's capabilities. We're building towards a future where AI seamlessly integrates with legal practice, making sophisticated legal analysis accessible to every practitioner, regardless of firm size or resources.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">2025</div>
                <div className="text-emerald-200">AI-Powered Legal Research Revolution</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2026</div>
                <div className="text-emerald-200">Global Legal Platform Integration</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2027</div>
                <div className="text-emerald-200">Next-Gen Predictive Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
