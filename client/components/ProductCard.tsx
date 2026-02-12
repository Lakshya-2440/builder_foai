import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  image,
  name,
  description,
  price,
  rating = 5,
  reviews = 120,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group">
      {/* Product Image */}
      <div className="relative h-64 bg-secondary overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          New
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-primary mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-accent text-accent"
                size={16}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-primary mb-4">{price}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-primary text-white py-2.5 rounded-lg hover:bg-primary/90 transition font-semibold text-sm">
            View Details
          </button>
          <button className="flex-1 border-2 border-accent text-accent py-2.5 rounded-lg hover:bg-accent hover:text-white transition font-semibold flex items-center justify-center gap-2 text-sm">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
