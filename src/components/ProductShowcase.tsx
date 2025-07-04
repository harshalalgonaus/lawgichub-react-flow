
import React, { useState } from 'react';
import { ChevronRight, FileText, Scale, TrendingUp, Clock, Shield, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { BookOpenCheck } from 'lucide-react'
import { Gavel } from 'lucide-react'

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'case-management',
      title: 'Case Management',
      subtitle: 'Streamline your legal workflow',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      features: [
        { name: 'Client Intake Form', status: 'active', progress: 100 },
        { name: 'Document Review', status: 'in-progress', progress: 65 },
        { name: 'Court Filing', status: 'pending', progress: 0 },
        { name: 'Client Communication', status: 'active', progress: 100 }
      ],
      rightContent: {
        title: "Comprehensive Case Organization",
        description: "Manage every aspect of your legal cases from a single, intuitive platform. Our case management system helps you stay organized, meet deadlines, and provide exceptional client service.",
        highlights: [
          "Case docketing with auto-data extraction",
          "Centralized case view with timeline tracking",
          "File manager with original, processed & drafted files",
          "Multi-source updates for evolving case inputs"
        ]
      },
      image: 'case_manage.png'
    },
    {
      id: 'litigation-drafting',
      title: 'AI Litigation Drafting',
      subtitle: 'Intelligent document processing',
      icon: <Scale className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      features: [
        { name: 'Risk Assessment', status: 'active', progress: 100 },
        { name: 'Clause Detection', status: 'active', progress: 100 },
        { name: 'Compliance Check', status: 'in-progress', progress: 80 },
        { name: 'Version Comparison', status: 'pending', progress: 0 }
      ],
      rightContent: {
        title: "AI-Powered Legal Drafting",
        description: "Leverage artificial intelligence to create precise, compliant legal documents faster than ever. Our AI understands legal language and helps you draft with confidence.",
        highlights: [
        "Create first drafts based on case-specific context",
        "Adaptive section editing and regeneration",
        "No template restrictions true agentic writing",
        "Editable Word document output, properly formatted"

        ]
      },
      image: 'legal_draft.png'
    },
    {
      id: 'research-querying',
      title: 'Smart Legal Querying',
      subtitle: 'Analyze, Query, and See: Smarter Case Insights',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      features: [
        { name: 'Time Tracking', status: 'active', progress: 100 },
        { name: 'Auto Categorization', status: 'active', progress: 100 },
        { name: 'Invoice Generation', status: 'active', progress: 100 },
        { name: 'Payment Processing', status: 'in-progress', progress: 75 }
      ],
      rightContent: {
        title: "Intelligent Legal Research",
        description: "Transform how you conduct legal research with smart querying capabilities. Find relevant cases, statutes, and legal precedents in seconds, not hours.",
        highlights: [
        "Context Querying for deep semantic answers",
        "Vision Querying to extract data from visuals/tables",
        "Exhibit Agentic Analysis for pinpoint document review",
        "Track relationships and timelines across cases"

        ]
      },
      image: 'legal_research.png'
       },
    {
      id: 'case-companion',
      title: 'AI Case Companion',
      subtitle: 'AI-Powered Case Clarity: What, Where & Next',
      icon: <Gavel className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      features: [
        { name: 'Time Tracking', status: 'active', progress: 100 },
        { name: 'Auto Categorization', status: 'active', progress: 100 },
        { name: 'Invoice Generation', status: 'active', progress: 100 },
        { name: 'Payment Processing', status: 'in-progress', progress: 75 }
      ],
      rightContent: {
        title: "Your Intelligent Legal Assistant",
        description: "Get instant insights and guidance on your cases. Our AI companion provides context-aware suggestions and helps you stay on top of every detail.",
        highlights: [
        "Agentic Drafting tailored to case context, tone, and structure",
        "Auto-summarization of long legal texts, filings, and evidence",
        "Smart suggestions based on case facts, jurisdiction, and past rulings",
        "Adaptive Section Management to restructure content without losing flow"

        ]
      },
      image: 'case_companion.png'
      },
    {
      id: 'legal-research',
      title: 'Legal Analysis and Research',
      subtitle: 'Legal Research',
      icon: <BookOpenCheck className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      features: [
        { name: 'Time Tracking', status: 'active', progress: 100 },
        { name: 'Auto Categorization', status: 'active', progress: 100 },
        { name: 'Invoice Generation', status: 'active', progress: 100 },
        { name: 'Payment Processing', status: 'in-progress', progress: 75 }
      ],
      rightContent: {
        title: "Advanced Legal Analysis",
        description: "Conduct thorough legal analysis with advanced tools and comprehensive databases. Access years of legal precedents and scholarly articles in one platform.",
        highlights: [
        "Identify legal patterns, contradictions, and inconsistencies across multiple documents",
        "Extract, evaluate, and prioritize arguments based on legal weight and context",
        "Construct clear, chronological case timelines for better understanding",
        "Assess case risks and predict outcomes with data-driven analysis"

        ]
      },
      image: 'legal_analysis.png'
      }
  ];

  const currentSolution = solutions[activeTab];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Driving measurable impact for{' '}
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              legal professionals
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your practice with AI-powered solutions designed specifically for modern legal workflows
          </p>
        </div>

        {/* Solution Tabs - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 md:space-x-3 px-3 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base ${
                activeTab === index
                  ? `bg-gradient-to-r ${solution.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="w-4 h-4 md:w-6 md:h-6">
                {solution.icon}
              </div>
              <div className="text-left">
                <div className="font-semibold text-xs md:text-sm lg:text-base">{solution.title}</div>
                <div className="text-xs opacity-80 hidden md:block">{solution.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area - Mobile Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Solution Details */}
          <div className="flex-1 space-y-4">
            <div>
              <div className={`inline-flex items-center space-x-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r ${currentSolution.color} text-white mb-6`}>
                <div className="w-5 h-5 md:w-6 md:h-6">
                  {currentSolution.icon}
                </div>
                <span className="font-semibold text-sm md:text-lg">{currentSolution.title}</span>
              </div>
              
              {/* Solution Information */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      {currentSolution.rightContent.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {currentSolution.rightContent.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Key Benefits
                    </h4>
                    <div className="space-y-3">
                      {currentSolution.rightContent.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm md:text-base">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-gradient-to-r ${currentSolution.color} rounded-xl p-4 md:p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-1">Ready to get started?</h4>
                        <p className="text-xs md:text-sm opacity-90">Explore this feature and see how it can transform your practice</p>
                      </div>
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Additional Info Cards */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-center">
                      <Clock className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-2 text-gray-600" />
                      <div className="text-xs md:text-sm font-medium text-gray-900">Quick Setup</div>
                      <div className="text-xs text-gray-600">5 minutes</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 md:p-4 text-center">
                      <Shield className="w-6 md:w-8 h-6 md:h-8 mx-auto mb-2 text-gray-600" />
                      <div className="text-xs md:text-sm font-medium text-gray-900">Secure</div>
                      <div className="text-xs text-gray-600">Bank-level</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Solution Image - Mobile Responsive */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-2xl lg:max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={currentSolution.image} 
                  alt={`${currentSolution.title} illustration`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
