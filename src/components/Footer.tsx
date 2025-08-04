import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J&K</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">ODOP J&K</h3>
                <p className="text-xs text-secondary-foreground/70">One District One Product</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70 mb-4">
              Empowering local artisans and preserving the rich cultural heritage 
              of Jammu & Kashmir through authentic handcrafted products.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">About ODOP</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">All Products</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Featured Artisans</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">District Gallery</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Wholesale</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Shipping Info</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Return Policy</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Size Guide</a>
              <a href="#" className="block text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Track Order</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-secondary-foreground/70">
                  ODOP J&K Office<br />
                  Srinagar, J&K 190001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-secondary-foreground/70">+91 1942 XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-secondary-foreground/70">info@odopjk.gov.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/70">
              © 2024 ODOP J&K. All rights reserved. | Government of Jammu & Kashmir
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;