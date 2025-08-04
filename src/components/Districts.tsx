import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Package } from "lucide-react";

const Districts = () => {
  const districts = [
    {
      name: "Srinagar",
      speciality: "Pashmina & Carpets",
      artisans: 145,
      products: 420,
      image: "/placeholder-srinagar.jpg",
      description: "Famous for exquisite pashmina shawls and hand-knotted carpets"
    },
    {
      name: "Budgam", 
      speciality: "Walnut Wood Craft",
      artisans: 89,
      products: 230,
      image: "/placeholder-budgam.jpg",
      description: "Renowned for intricate walnut wood carvings and furniture"
    },
    {
      name: "Pampore",
      speciality: "Saffron",
      artisans: 67,
      products: 45,
      image: "/placeholder-pampore.jpg",
      description: "The saffron capital producing the world's finest quality saffron"
    },
    {
      name: "Anantnag",
      speciality: "Silk Products",
      artisans: 92,
      products: 310,
      image: "/placeholder-anantnag.jpg",
      description: "Specialists in silk weaving and embroidered textiles"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore by
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Districts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each district in Jammu & Kashmir has its unique craft specialty. 
            Discover the rich heritage and skilled craftsmanship from across the region.
          </p>
        </div>

        {/* Districts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {districts.map((district, index) => (
            <Card 
              key={district.name} 
              className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                
                {/* District Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{district.name}</h3>
                  <p className="text-sm text-primary font-medium">{district.speciality}</p>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {district.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{district.artisans}</div>
                      <div className="text-xs text-muted-foreground">Artisans</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-accent" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{district.products}</div>
                      <div className="text-xs text-muted-foreground">Products</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">View Interactive District Map</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Districts;