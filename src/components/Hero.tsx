import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-kashmir.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kashmir artisans and traditional crafts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-6">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Supporting Local Artisans Since 2020</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Discover
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Authentic </span>
            J&K Crafts
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            One District One Product initiative brings you the finest handcrafted products 
            from Jammu & Kashmir. Support local artisans while owning unique treasures 
            from the valley.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-warm group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
              Meet Artisans
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Artisans</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <ShoppingBag className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">2000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">22</span>
              </div>
              <p className="text-sm text-muted-foreground">Districts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 bg-accent/20 rounded-full animate-float delay-1000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;