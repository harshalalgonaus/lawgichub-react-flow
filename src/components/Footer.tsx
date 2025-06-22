
import { Scale, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-legal-black text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
                          <img
              src="/lawgichub_icon1.png"
              alt="Lawgichub Logo"
              className="h-10 w-15"
            />
              <span className="text-2xl font-bold">Lawgichub AI</span>
            </div>
            <p className="text-legal-light-grey mb-6">
              The complete legal operations platform built for modern law firms.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-legal-light-grey hover:text-legal-accent-brown cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-legal-light-grey hover:text-legal-accent-brown cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-legal-light-grey hover:text-legal-accent-brown cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-legal-accent-brown">Product</h4>
            <ul className="space-y-2 text-legal-light-grey">
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Case Management</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Document Automation</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Time Tracking</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Client Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-legal-accent-brown">Solutions</h4>
            <ul className="space-y-2 text-legal-light-grey">
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Law Firms</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Corporate Legal</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Solo Practice</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Legal Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-legal-accent-brown">Company</h4>
            <ul className="space-y-2 text-legal-light-grey">
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">About</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-legal-accent-brown transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-legal-accent-brown/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-legal-light-grey text-sm">
              © 2025 Lawgichub AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-legal-light-grey hover:text-legal-accent-brown text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-legal-light-grey hover:text-legal-accent-brown text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-legal-light-grey hover:text-legal-accent-brown text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
