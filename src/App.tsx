
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookDemo from "./pages/BookDemo";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import CaseManagement from "./pages/CaseManagement";
import AiLitigationDrafting from "./pages/AiLitigationDrafting";
import SmartLegalQuerying from "./pages/SmartLegalQuerying";
import AiCaseCompanion from "./pages/AiCaseCompanion";
import LegalAnalysisResearch from "./pages/LegalAnalysisResearch";
import CompanyVision from "./pages/CompanyVision";
import LawFirms from "./pages/LawFirms";
import CorporateLegal from "./pages/CorporateLegal";
import SoloPractice from "./pages/SoloPractice";
import LegalConsulting from "./pages/LegalConsulting";
import NotFound from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";

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
          <Route path="/job-application" element={<JobApplication />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-management" element={<CaseManagement />} />
          <Route path="/ai-litigation-drafting" element={<AiLitigationDrafting />} />
          <Route path="/smart-legal-querying" element={<SmartLegalQuerying />} />
          <Route path="/ai-case-companion" element={<AiCaseCompanion />} />
          <Route path="/legal-analysis-research" element={<LegalAnalysisResearch />} />
          <Route path="/company-vision" element={<CompanyVision />} />
          <Route path="/law-firms" element={<LawFirms />} />
          <Route path="/corporate-legal" element={<CorporateLegal />} />
          <Route path="/solo-practice" element={<SoloPractice />} />
          <Route path="/legal-consulting" element={<LegalConsulting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
