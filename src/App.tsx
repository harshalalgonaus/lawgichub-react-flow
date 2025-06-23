
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookDemo from "./pages/BookDemo";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import CaseManagement from "./pages/CaseManagement";
import AiLitigationDrafting from "./pages/AiLitigationDrafting";
import SmartLegalQuerying from "./pages/SmartLegalQuerying";
import AiCaseCompanion from "./pages/AiCaseCompanion";
import LegalAnalysisResearch from "./pages/LegalAnalysisResearch";
import CompanyVision from "./pages/CompanyVision";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/case-management" element={<CaseManagement />} />
          <Route path="/ai-litigation-drafting" element={<AiLitigationDrafting />} />
          <Route path="/smart-legal-querying" element={<SmartLegalQuerying />} />
          <Route path="/ai-case-companion" element={<AiCaseCompanion />} />
          <Route path="/legal-analysis-research" element={<LegalAnalysisResearch />} />
          <Route path="/company-vision" element={<CompanyVision />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
