
import { Card } from "@/components/ui/card";

export const ProductShowcase = () => {
  return (
    <section className="py-16 px-6 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {/* Left Panel - Case Management */}
          <Card className="p-6 bg-[#E3F2FD] border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="space-y-4">
              <div className="text-sm font-medium text-[#1976D2] mb-4">CASE MANAGEMENT</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 px-3 bg-white rounded-md">
                  <span className="text-sm">Client Intake Form</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between py-2 px-3 bg-white rounded-md">
                  <span className="text-sm">Document Review</span>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between py-2 px-3 bg-white rounded-md">
                  <span className="text-sm">Court Filing</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between py-2 px-3 bg-white rounded-md">
                  <span className="text-sm">Client Communication</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Middle Panel - Contract Analysis */}
          <Card className="p-6 bg-white border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="space-y-4">
              <div className="text-sm font-medium text-[#1976D2] mb-4">AI CONTRACT ANALYSIS</div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-xs text-red-600 mb-2">⚠ Risk Alert</div>
                <p className="text-sm text-gray-700 mb-3">
                  Clause 4.2 contains non-standard liability limitations that may expose client to unnecessary risk.
                </p>
                <div className="text-xs text-blue-600">Suggested revision →</div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-gray-500">Analysis Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1976D2] h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right Panel - Billing & Time */}
          <Card className="p-6 bg-[#E8F5E8] border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="space-y-4">
              <div className="text-sm font-medium text-[#2E7D32] mb-4">SMART BILLING</div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Time Tracked Today</span>
                    <span className="font-bold text-[#2E7D32]">7.5h</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Billable Hours</span>
                    <span className="font-bold text-[#2E7D32]">6.8h</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Revenue Generated</span>
                    <span className="font-bold text-[#2E7D32]">$3,400</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
