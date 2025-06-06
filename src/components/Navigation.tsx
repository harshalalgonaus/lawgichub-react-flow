
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scale, ChevronDown, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: "Practice Areas",
      items: [
        "Corporate Law",
        "Litigation",
        "Real Estate",
        "Employment Law",
        "Intellectual Property",
        "Tax Law"
      ]
    },
    {
      title: "Solutions",
      items: [
        "Case Management",
        "Document Automation",
        "Time Tracking",
        "Client Portal",
        "Billing & Invoicing"
      ]
    },
    {
      title: "Resources",
      items: [
        "Legal Templates",
        "Knowledge Base",
        "Webinars",
        "White Papers",
        "Blog"
      ]
    },
    {
      title: "Pricing",
      items: []
    },
    {
      title: "Contact",
      items: []
    }
  ];

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className="fixed top-0 w-full bg-legal-black/95 backdrop-blur-sm border-b border-legal-light-grey/20 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-legal-accent-brown" />
            <span className="text-2xl font-bold text-white">Lawgichub</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.items.length > 0 ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-white hover:text-legal-accent-brown transition-colors duration-200 py-2"
                      onClick={() => handleDropdownToggle(item.title)}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.title && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-legal-light-grey py-2 animate-fade-in"
                        onMouseEnter={() => setActiveDropdown(item.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-legal-charcoal hover:bg-legal-cream hover:text-legal-brown transition-colors duration-200"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href="#"
                    className="text-white hover:text-legal-accent-brown transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-legal-accent-brown/10 hover:text-legal-accent-brown transition-all duration-200">
              Client Portal
            </Button>
            <Button className="bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold transition-all duration-200 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-legal-accent-brown transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-legal-light-grey/20 animate-fade-in">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.items.length > 0 ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-white hover:text-legal-accent-brown transition-colors duration-200 py-2"
                        onClick={() => handleDropdownToggle(item.title)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="mt-2 pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block text-legal-light-grey hover:text-legal-accent-brown transition-colors duration-200 py-1"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href="#"
                      className="block text-white hover:text-legal-accent-brown transition-colors duration-200 py-2"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-legal-light-grey/20">
                <Button variant="ghost" className="w-full text-white hover:bg-legal-accent-brown/10 hover:text-legal-accent-brown transition-all duration-200">
                  Client Portal
                </Button>
                <Button className="w-full bg-legal-accent-brown hover:bg-legal-brown text-white font-semibold transition-all duration-200">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
