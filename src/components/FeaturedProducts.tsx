import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pashminaImg from "@/assets/pashmina-shawl.jpg";
import carpetImg from "@/assets/kashmiri-carpet.jpg";
import walnutImg from "@/assets/walnut-wood.jpg";
import saffronImg from "@/assets/saffron.jpg";
import papierMacheImg from "@/assets/papier-mache.jpg";
import silkSareeImg from "@/assets/silk-saree.jpg";

const FeaturedProducts = () => {
  // Sample product data - in a real app, this would come from an API
  const featuredProducts = [
    {
      id: "1",
      name: "Handwoven Pashmina Shawl",
      price: 15000,
      originalPrice: 18000,
      rating: 4.8,
      reviews: 124,
      image: pashminaImg,
      district: "Srinagar",
      artisan: "Mohammad Ali",
      badge: "Bestseller"
    },
    {
      id: "2", 
      name: "Traditional Kashmiri Carpet",
      price: 45000,
      originalPrice: 52000,
      rating: 4.9,
      reviews: 89,
      image: carpetImg,
      district: "Budgam",
      artisan: "Fatima Sheikh",
      badge: "Premium"
    },
    {
      id: "3",
      name: "Walnut Wood Carving Set",
      price: 8500,
      rating: 4.7,
      reviews: 156,
      image: walnutImg,
      district: "Ganderbal",
      artisan: "Rajesh Kumar"
    },
    {
      id: "4",
      name: "Authentic Saffron (5g)",
      price: 1200,
      originalPrice: 1500,
      rating: 4.6,
      reviews: 203,
      image: saffronImg,
      district: "Pampore",
      artisan: "Gulam Hassan",
      badge: "Fresh"
    },
    {
      id: "5",
      name: "Papier Mache Decorative Box",
      price: 3500,
      rating: 4.5,
      reviews: 67,
      image: papierMacheImg,
      district: "Srinagar",
      artisan: "Nazir Ahmad"
    },
    {
      id: "6",
      name: "Kashmir Silk Embroidered Saree",
      price: 25000,
      originalPrice: 28000,
      rating: 4.8,
      reviews: 91,
      image: silkSareeImg,
      district: "Anantnag",
      artisan: "Meena Devi",
      badge: "Limited"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the finest handcrafted products from skilled artisans across 
            Jammu & Kashmir, each piece telling a story of tradition and excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;