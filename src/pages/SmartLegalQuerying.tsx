
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TrendingUp, CheckCircle, Clock, Shield, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SmartLegalQuerying() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white mb-6">
              <TrendingUp className="w-6 h-6" />
              <span className="font-semibold text-lg">Smart Legal Querying</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Analyze, Query, and See: Smarter Case Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform how you conduct legal research with smart querying capabilities. Find relevant cases, statutes, and legal precedents in seconds, not hours.
            </p>
            <Link to="/book-demo">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Start Querying Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Intelligent Legal Research
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Unlock powerful insights with advanced querying that understands legal context and delivers precise results.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {[
                    "Context Querying for deep semantic answers",
                    "Vision Querying to extract data from visuals/tables",
                    "Exhibit Agentic Analysis for pinpoint document review",
                    "Track relationships and timelines across cases"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <div className="text-sm font-medium text-gray-900">Quick Setup</div>
                  <div className="text-xs text-gray-600">5 minutes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <div className="text-sm font-medium text-gray-900">Secure</div>
                  <div className="text-xs text-gray-600">Bank-level</div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-3xl">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="/legal_research.png" 
                    alt="Smart Legal Querying illustration"
                    className="w-full h-[550px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
