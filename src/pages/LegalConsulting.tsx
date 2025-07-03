
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Lightbulb, CheckCircle, Users, BarChart3, FileSearch, Globe, ArrowRight, Target, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LegalConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-6">
              <Lightbulb className="w-6 h-6" />
              <span className="font-semibold text-lg">Legal Consulting</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Strategic Legal Consulting Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Deliver exceptional legal consulting services with advanced research tools, project management capabilities, and client collaboration features designed for consulting professionals.
            </p>
            <Link to="/book-demo">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Elevate Your Legal Consulting Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Tools and features specifically designed for legal consultants who need to deliver strategic advice, research, and project-based legal services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Legal Research</h3>
              <p className="text-gray-600">Access comprehensive legal databases and AI-powered research tools to deliver thorough analysis and strategic recommendations.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600">Manage consulting engagements with project timelines, deliverable tracking, and milestone management tools.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Collaboration</h3>
              <p className="text-gray-600">Facilitate seamless collaboration with clients through secure portals, document sharing, and real-time communication tools.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Analytics</h3>
              <p className="text-gray-600">Provide data-driven insights with advanced analytics, risk assessment tools, and predictive modeling capabilities.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Jurisdictional Support</h3>
              <p className="text-gray-600">Handle complex cross-border matters with tools supporting multiple legal systems and regulatory frameworks.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proposal Generation</h3>
              <p className="text-gray-600">Create professional proposals and engagement letters with customizable templates and automated pricing models.</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Consulting-Focused Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Customizable research and analysis templates",
                "Expert witness and consultant network integration",
                "Secure client data rooms and document sharing",
                "Time tracking and project-based billing",
                "White-label reporting and presentation tools",
                "Due diligence checklists and workflows",
                "Regulatory compliance tracking and alerts",
                "Professional development and knowledge management"
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
