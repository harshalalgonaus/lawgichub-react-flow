
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, CheckCircle, Clock, Shield, ArrowRight, Star, Folder, Database, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CaseManagement() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
              <FileText className="w-6 h-6" />
              <span className="font-semibold text-lg">Case Management</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Streamline Your Legal Workflow
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Manage every aspect of your legal cases from a single, intuitive platform. Our case management system helps you stay organized, meet deadlines, and provide exceptional client service.
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

      {/* Multiple Case Handling Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              MULTIPLE CASE HANDLING AT ONE PLACE
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive case management with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Case Docketing */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CASE DOCKETING</h3>
              <p className="text-gray-600 leading-relaxed">
                Case Initiation or Enrollment in our system with specified and extracted data with the help of Document Ingestion Pipeline which has Advanced Translation Capabilities with Multilingual Extraction.
              </p>
            </div>

            {/* Case Manager */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CASE MANAGER</h3>
              <p className="text-gray-600 leading-relaxed">
                After the case is Docketed and saved in the Firm's Database, the user can track the cases from the case manager.
              </p>
            </div>

            {/* File Manager */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Folder className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FILE MANAGER</h3>
              <p className="text-gray-600 leading-relaxed">
                File Classification with three types of different files Original Case Files, Processed Files with Case Information, Drafted Files or Files that need to be submitted in court or shown to client.
              </p>
            </div>

            {/* Multi Source Extraction */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MULTI SOURCE EXTRACTION</h3>
              <p className="text-gray-600 leading-relaxed">
                Extract more Information or contexts into the case if there is new information or file received in the same case to include the new information or to Draft next steps in the proceedings of the case.
              </p>
            </div>
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
                  Comprehensive Case Organization
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Transform how you manage legal cases with intelligent automation and seamless organization tools.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Features
                </h3>
                <div className="space-y-4">
                  {[
                    "Case docketing with auto-data extraction",
                    "Centralized case view with timeline tracking",
                    "File manager with original, processed & drafted files",
                    "Multi-source updates for evolving case inputs"
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
                    src="/case_manage.png" 
                    alt="Case Management illustration"
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
