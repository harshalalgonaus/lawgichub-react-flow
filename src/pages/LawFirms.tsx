
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Scale, CheckCircle, Users, FileText, Clock, Shield, ArrowRight, Building2, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LawFirms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
              <Building2 className="w-6 h-6" />
              <span className="font-semibold text-lg">Law Firms</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Complete Legal Operations for Law Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your law firm's operations with comprehensive case management, document automation, and AI-powered legal research tools designed for multi-attorney practices.
            </p>
            <Link to="/book-demo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Started Today
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
              Why Law Firms Choose Lawgichub AI
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Built specifically for law firms handling multiple cases, clients, and attorneys with enterprise-grade security and collaboration tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Attorney Collaboration</h3>
              <p className="text-gray-600">Enable seamless collaboration between attorneys, paralegals, and support staff with role-based access control and real-time updates.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Case Management</h3>
              <p className="text-gray-600">Manage hundreds of cases simultaneously with automated workflows, deadline tracking, and client communication tools.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Intelligence</h3>
              <p className="text-gray-600">Track firm performance, billing efficiency, and case outcomes with detailed analytics and reporting dashboards.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Automation</h3>
              <p className="text-gray-600">Generate contracts, pleadings, and legal documents with AI-powered templates and automated data population.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time & Billing Integration</h3>
              <p className="text-gray-600">Automated time tracking, expense management, and billing integration to maximize revenue and reduce administrative overhead.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level encryption, audit trails, and compliance with legal industry standards to protect sensitive client information.</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features for Law Firms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Multi-location office management",
                "Client portal with secure document sharing",
                "Conflict checking and matter management",
                "Trust accounting and IOLTA compliance",
                "Custom workflows for different practice areas",
                "Integration with court filing systems",
                "Advanced reporting and analytics",
                "Mobile access for attorneys on-the-go"
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
