import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    district: string;
    artisan: string;
    badge?: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
            {product.badge}
          </div>
        )}
        
        {/* Like Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background ${
            isLiked ? 'text-red-500' : 'text-muted-foreground'
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Add to Cart */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="w-full bg-primary/90 hover:bg-primary backdrop-blur-sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* District Tag */}
        <div className="text-xs text-accent font-medium mb-2">{product.district}</div>
        
        {/* Product Name */}
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Artisan */}
        <p className="text-sm text-muted-foreground mb-3">by {product.artisan}</p>
        
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-foreground">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm font-medium text-green-600">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;