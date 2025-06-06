
import { Card } from "@/components/ui/card";

export const ProductViews = () => {
  return (
    <section className="py-16 px-6 bg-legal-light-blue">
      <div className="container mx-auto max-w-6xl">
        {/* Case Dashboard View */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-legal-navy mb-4">
                Track and respond to any 
                bill from across the business
              </h3>
              <p className="text-lg text-legal-blue mb-6">
                Centralized billing management that gives you complete visibility into all client matters, 
                expenses, and revenue streams in real-time.
              </p>
            </div>
            <Card className="p-6 bg-legal-blue text-white border-none">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Active Cases</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/20 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Smith vs. Johnson</span>
                      <span className="text-sm">$45,000</span>
                    </div>
                  </div>
                  <div className="bg-white/20 p-3 rounded">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Corporate Merger - ABC Corp</span>
                      <span className="text-sm">$125,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Document Review Interface */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-6 bg-white border-legal-gold/20 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="text-sm font-medium text-legal-blue">DOCUMENT REVIEW</div>
                <div className="bg-legal-light-blue p-4 rounded">
                  <div className="text-sm mb-2 text-legal-navy font-medium">Contract Analysis - ABC Corp Merger</div>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-legal-gray">3 high-risk clauses identified</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-2"></div>
                      <span className="text-legal-gray">7 items need review</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-legal-navy mb-4">
                A unified review pipeline that 
                runs autonomously via legal ops
              </h3>
              <p className="text-lg text-legal-blue">
                AI-powered document review that identifies risks, suggests improvements, 
                and ensures compliance across all your legal documents.
              </p>
            </div>
          </div>
        </div>

        {/* Client Communication */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-legal-navy mb-4">
                Keep clients informed with 
                automated updates and insights
              </h3>
              <p className="text-lg text-legal-blue">
                Transparent client communication with automated case updates, 
                milestone notifications, and secure document sharing.
              </p>
            </div>
            <Card className="p-6 bg-legal-gold text-legal-navy border-none">
              <div className="space-y-4">
                <div className="text-sm font-medium">CLIENT PORTAL</div>
                <div className="space-y-2">
                  <div className="bg-legal-navy/10 p-3 rounded">
                    <div className="text-sm font-medium">Case Update: Motion Filed</div>
                    <div className="text-xs opacity-80">2 hours ago</div>
                  </div>
                  <div className="bg-legal-navy/10 p-3 rounded">
                    <div className="text-sm font-medium">New Document: Discovery Response</div>
                    <div className="text-xs opacity-80">1 day ago</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
