'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/lib/redux/hooks';

export function CartButton() {
  const { totalQuantity } = useAppSelector((state) => state.cart);

  return (
    <Button variant="outline" className="relative">
      <ShoppingCart className="h-5 w-5" />
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      )}
    </Button>
  );
}
