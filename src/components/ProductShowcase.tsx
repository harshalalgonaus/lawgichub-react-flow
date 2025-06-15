import React, { useState } from 'react';
import { ChevronRight, FileText, Scale, TrendingUp } from 'lucide-react';
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
      metrics: {
        efficiency: '45%',
        timeReduction: '3.2h',
        satisfaction: '94%'
      }
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
      metrics: {
        efficiency: '60%',
        timeReduction: '4.5h',
        satisfaction: '96%'
      }
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
      metrics: {
        efficiency: '70%',
        timeReduction: '2.8h',
        satisfaction: '92%'
      }
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
      metrics: {
        efficiency: '70%',
        timeReduction: '2.8h',
        satisfaction: '92%'
      }
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
      metrics: {
        efficiency: '70%',
        timeReduction: '2.8h',
        satisfaction: '92%'
      }
    }
  ];

  const currentSolution = solutions[activeTab];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Driving measurable impact for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              legal professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your practice with AI-powered solutions designed specifically for modern legal workflows
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${solution.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              {solution.icon}
              <div className="text-left">
                <div className="font-semibold">{solution.title}</div>
                <div className="text-sm opacity-80">{solution.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Solution Details */}
          <div className="space-y-8">
            <div>
              <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${currentSolution.color} text-white mb-6`}>
                {currentSolution.icon}
                <span className="font-semibold text-lg">{currentSolution.title}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentSolution.subtitle}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our advanced AI technology transforms how legal professionals manage their daily workflows, 
                providing intelligent automation and insights that drive efficiency and accuracy.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
              {currentSolution.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-900 font-medium">{feature.name}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      feature.status === 'active' ? 'bg-green-500' :
                      feature.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${currentSolution.color} transition-all duration-700`}
                      style={{ width: `${feature.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contract Analysis Risk Alert (shown only for contract analysis tab) */}
            {activeTab === 1 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="text-red-600 text-sm font-medium">⚠ Risk Alert</div>
                </div>
                <p className="text-gray-700 mt-2 mb-3">
                  Clause 4.2 contains non-standard liability limitations that may expose client to unnecessary risk.
                </p>
                <div className="text-blue-600 text-sm hover:text-blue-700 cursor-pointer">
                  Suggested revision →
                </div>
              </div>
            )}
          </div>

          {/* Right Side - Metrics & Analytics */}
          
        </div>

        {/* Bottom Impact Section */}

      </div>
    </section>
  );
};
