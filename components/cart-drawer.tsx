'use client';

import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '@/lib/redux/features/cartSlice';
import Image from 'next/image';

export function CartDrawer() {
  const dispatch = useAppDispatch();
  const { items, totalQuantity, totalAmount } = useAppSelector((state) => state.cart);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative hover:text-red-500 transition-colors p-2">
          <ShoppingCart className="h-5 w-5" />
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({totalQuantity} items)</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
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
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.brand && (
                        <p className="text-sm text-gray-500">{item.brand}</p>
                      )}
                      <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          className="h-8 w-8 ml-auto"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
