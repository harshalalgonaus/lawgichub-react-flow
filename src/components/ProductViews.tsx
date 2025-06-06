
import { Card } from "@/components/ui/card";

export const ProductViews = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Case Dashboard View */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Track and respond to any 
                bill from across the business
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Centralized billing management that gives you complete visibility into all client matters, 
                expenses, and revenue streams in real-time.
              </p>
            </div>
            <Card className="p-6 bg-[#1976D2] text-white">
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
            <Card className="p-6 bg-[#E8F5E8] order-2 lg:order-1">
              <div className="space-y-4">
                <div className="text-sm font-medium text-[#2E7D32]">DOCUMENT REVIEW</div>
                <div className="bg-white p-4 rounded">
                  <div className="text-sm mb-2">Contract Analysis - ABC Corp Merger</div>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span>3 high-risk clauses identified</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span>7 items need review</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                A unified review pipeline that 
                runs autonomously via legal ops
              </h3>
              <p className="text-lg text-muted-foreground">
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
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Keep clients informed with 
                automated updates and insights
              </h3>
              <p className="text-lg text-muted-foreground">
                Transparent client communication with automated case updates, 
                milestone notifications, and secure document sharing.
              </p>
            </div>
            <Card className="p-6 bg-[#FF6B6B] text-white">
              <div className="space-y-4">
                <div className="text-sm font-medium">CLIENT PORTAL</div>
                <div className="space-y-2">
                  <div className="bg-white/20 p-3 rounded">
                    <div className="text-sm">Case Update: Motion Filed</div>
                    <div className="text-xs opacity-80">2 hours ago</div>
                  </div>
                  <div className="bg-white/20 p-3 rounded">
                    <div className="text-sm">New Document: Discovery Response</div>
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
