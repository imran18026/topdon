"use client";

import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TbShoppingCart } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";
import { toggleWishlist } from "@/lib/redux/features/wishlistSlice";
import { toast } from "sonner";



interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image?: string;
  badge?: "SALE" | "NEW" | "SOLD OUT";
  category?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  badge,
  image,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  // Check if item is in wishlist
  const isWishlisted = useAppSelector((state) =>
    state.wishlist.items.some(item => item.id === id.toString())
  );

  const handleAddToCart = () => {
    if (badge === "SOLD OUT") return;

    dispatch(
      addToCart({
        id: id.toString(),
        name,
        price,
        image: image || "/placeholder.png",
      })
    );

    toast.success(`${name} added to cart!`, {
      description: `Price: £${price.toFixed(2)}`,
    });
  };

  const handleToggleWishlist = () => {
    dispatch(
      toggleWishlist({
        id: id.toString(),
        name,
        price,
        originalPrice,
        rating,
        badge,
        image: image || "/placeholder.png",
      })
    );

    if (isWishlisted) {
      toast.info(`${name} removed from wishlist`);
    } else {
      toast.success(`${name} added to wishlist!`);
    }
  };

  return (
    <Card className="group relative bg-[#e8eef5] border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 w-full mx-auto rounded-xl">
      {/* Image Container */}
      <div className="relative aspect-square bg-white overflow-hidden">
        {/* Product Image */}
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <ShoppingCart className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300" />
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="secondary"
          size="icon"
          onClick={handleToggleWishlist}
          className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 z-10 shadow-md h-7 w-7 sm:h-8 sm:w-8"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>

        {/* Badges */}
        {badge && (
          <div className="absolute top-2 right-2 sm:top-[13px] sm:right-3 z-10">
            <Image
              src={
                badge === "SALE"
                  ? "/sale.svg"
                  : badge === "NEW"
                  ? "/new.svg"
                  : "/sold.svg"
              }
              alt={badge}
              width={56}
              height={21}
              className="h-[18px] sm:h-[21px] w-auto"
            />
          </div>
        )}
      </div>

      {/* Product Info */}
      <CardContent className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-2.5 md:space-y-3 bg-white">
        {/* Rating */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
          <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Rating:</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-gray-700 font-medium text-sm sm:text-base md:text-lg line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
          {name}
        </h3>

        {/* Price */}
        <div className="space-y-0.5">
          <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-red-500">
              £{price.toFixed(2)}
            </span>
            {originalPrice && (
              <div className="flex flex-wrap items-baseline gap-1">
                <span className="text-xs sm:text-sm md:text-base text-gray-400 line-through">
                  £{originalPrice.toFixed(2)}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-500">Inc. VAT</span>
              </div>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-[#2c3e50] hover:bg-[#34495e] text-white text-xs sm:text-sm md:text-base font-medium transition-all duration-300 py-2.5 sm:py-3 md:py-3.5 h-auto flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg mt-2"
          disabled={badge === "SOLD OUT"}
        >
          <TbShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" />
          <span>{badge === "SOLD OUT" ? "Sold Out" : "Add to Cart"}</span>
        </Button>
      </CardContent>
    </Card>
  );
}
