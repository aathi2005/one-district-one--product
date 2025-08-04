import { Button } from "@/components/ui/button";
import { ShoppingBag, User, Menu, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">J&K</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">ODOP J&K</h1>
              <p className="text-xs text-muted-foreground">One District One Product</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Districts</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Artisans</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-gradient-hero hover:opacity-90">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Products</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Districts</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Artisans</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">About</a>
              <div className="flex items-center space-x-3 pt-3">
                <Button variant="outline" size="sm">Sign In</Button>
                <Button size="sm" className="bg-gradient-hero">Register</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;