import { Star } from "lucide-react";
import { Product } from "@/types/product";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square relative bg-white/5 rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg text-gray-300">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-white">${product.price}</p>
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">Description</h4>
              <p className="text-gray-400">{product.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-200">Category</h4>
              <p className="capitalize text-gray-400">{product.category}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;