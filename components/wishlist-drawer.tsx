'use client';

import { Heart, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { removeFromWishlist, clearWishlist } from '@/lib/redux/features/wishlistSlice';
import { addToCart } from '@/lib/redux/features/cartSlice';
import Image from 'next/image';
import { toast } from 'sonner';

export function WishlistDrawer() {
  const dispatch = useAppDispatch();
  const { items, totalItems } = useAppSelector((state) => state.wishlist);

  const handleMoveToCart = (item: typeof items[0]) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
    dispatch(removeFromWishlist(item.id));
    toast.success(`${item.name} moved to cart!`);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative hover:text-red-500 transition-colors p-2">
          <Heart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>My Wishlist ({totalItems} items)</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Your wishlist is empty</p>
                <p className="text-sm text-gray-400 mt-2">
                  Add items you love to your wishlist
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <div className="relative w-20 h-20 bg-gray-100 rounded">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                      {item.badge && (
                        <div className="absolute -top-1 -right-1 z-10">
                          <Image
                            src={
                              item.badge === "SALE"
                                ? "/sale.svg"
                                : item.badge === "NEW"
                                ? "/new.svg"
                                : "/sold.svg"
                            }
                            alt={item.badge}
                            width={40}
                            height={15}
                            className="h-[15px] w-auto"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-lg font-bold text-red-500">
                          £{item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            £{item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Button
                          size="sm"
                          onClick={() => handleMoveToCart(item)}
                          disabled={item.badge === "SOLD OUT"}
                          className="flex-1"
                        >
                          <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                          {item.badge === "SOLD OUT" ? "Sold Out" : "Add to Cart"}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => {
                            dispatch(removeFromWishlist(item.id));
                            toast.info(`${item.name} removed from wishlist`);
                          }}
                        >
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    dispatch(clearWishlist());
                    toast.info('Wishlist cleared');
                  }}
                >
                  Clear Wishlist
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
