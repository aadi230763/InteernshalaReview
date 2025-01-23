import { Star } from "lucide-react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full animate-fade-up bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
      <CardContent className="pt-4 flex-grow">
        <div className="aspect-square relative mb-4 p-4 bg-white/5 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-300">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
        <p className="text-xl font-bold text-white">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20 transition-colors"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;