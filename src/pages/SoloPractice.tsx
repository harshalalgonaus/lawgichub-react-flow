
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { User, CheckCircle, Clock, DollarSign, FileText, Smartphone, ArrowRight, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SoloPractice() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white mb-6">
              <User className="w-6 h-6" />
              <span className="font-semibold text-lg">Solo Practice</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Perfect Legal Solution for Solo Practitioners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Run your solo practice efficiently with affordable, easy-to-use tools that handle everything from case management to client billing, all in one platform.
            </p>
            <Link to="/book-demo">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Start Your Free Trial
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
              Everything You Need to Run Your Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Designed specifically for solo practitioners who need powerful features without the complexity of enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Setup</h3>
              <p className="text-gray-600">Get up and running in minutes with intuitive setup wizards and pre-configured templates for common practice areas.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Solo-friendly pricing with no hidden fees. Pay only for what you use with transparent, scalable pricing plans.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Automation</h3>
              <p className="text-gray-600">Create professional legal documents with AI-powered templates and automated client data population.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Time Tracking & Billing</h3>
              <p className="text-gray-600">Effortless time tracking with automated billing and invoice generation to maximize your revenue.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Access</h3>
              <p className="text-gray-600">Manage your practice on-the-go with full mobile access to cases, documents, and client communications.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Management</h3>
              <p className="text-gray-600">Organized client database with communication history, document storage, and appointment scheduling.</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Perfect for Solo Practitioners</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Simple case management and task tracking",
                "Client portal for secure document sharing",
                "Automated deadline and appointment reminders",
                "Basic accounting and trust account management",
                "Email integration and client communication tools",
                "Document storage with version control",
                "Basic reporting and practice analytics",
                "24/7 customer support and training resources"
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
