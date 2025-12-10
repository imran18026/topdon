'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/features/cartSlice';
import { toast } from 'sonner';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    brand?: string;
    model?: string;
  };
  className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Button onClick={handleAddToCart} className={className}>
      <ShoppingCart className="h-4 w-4 mr-2" />
      Add to Cart
    </Button>
  );
}
