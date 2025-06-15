
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Features } from "@/components/Features";
import { LegalTemplates } from "@/components/LegalTemplates";
import { ProductViews } from "@/components/ProductViews";
import { ProductFeature } from "@/components/ProductFeature";
import { Testimonials } from "@/components/Testimonials";
import { Statistics } from "@/components/Statistics";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <Features />
      <LegalTemplates />
      <ProductViews />
      <ProductFeature />
      <Testimonials />
      <Statistics />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
