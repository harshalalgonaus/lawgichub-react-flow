
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building, CheckCircle, Shield, FileText, Users, Briefcase, ArrowRight, Globe, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CorporateLegal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6">
              <Building className="w-6 h-6" />
              <span className="font-semibold text-lg">Corporate Legal</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Enterprise Legal Operations Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empower your in-house legal team with advanced contract management, compliance tracking, and legal operations tools designed for enterprise environments.
            </p>
            <Link to="/book-demo">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Request Enterprise Demo
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
              Built for Corporate Legal Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Streamline legal operations across your organization with tools designed for enterprise-scale legal departments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contract Lifecycle Management</h3>
              <p className="text-gray-600">Manage contracts from creation to renewal with automated workflows, approval processes, and compliance tracking.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Management</h3>
              <p className="text-gray-600">Stay ahead of regulatory requirements with automated compliance monitoring, risk assessment, and reporting tools.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Department Collaboration</h3>
              <p className="text-gray-600">Connect legal teams with business units through integrated workflows and centralized communication tools.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Legal Operations</h3>
              <p className="text-gray-600">Manage legal matters across multiple jurisdictions with localized compliance and reporting capabilities.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
              <p className="text-gray-600">Identify, assess, and mitigate legal risks with AI-powered risk analysis and predictive insights.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Spend Management</h3>
              <p className="text-gray-600">Track and optimize legal spend with vendor management, budget controls, and detailed cost analytics.</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enterprise Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Enterprise-grade security and compliance",
                "API integrations with business systems",
                "Custom workflows and approval processes",
                "Advanced analytics and reporting dashboards",
                "Vendor and outside counsel management",
                "Legal request intake and triage",
                "Document version control and audit trails",
                "Single sign-on (SSO) and user management"
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
