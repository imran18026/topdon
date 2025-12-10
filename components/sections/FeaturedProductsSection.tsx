"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["All", "Special", "Popular", "New/Used", "Certified"];

  const [visibleItems, setVisibleItems] = useState(() => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  });

  const products = [
    {
      id: 1,
      name: "VDubDiag for VW Audi Skoda Seat",
      price: 79.99,
      originalPrice: 89.99,
      rating: 5,
      badge: "SALE" as const,
      image: "/product1.png",
    },
    {
      id: 2,
      name: "ANCEL VD700 FOR AUDI, SEAT, SKODA, VOLKSWAGEN...",
      price: 89.99,
      originalPrice: 129.99,
      rating: 5,
      badge: "NEW" as const,
      image: "/product2.png",
    },
    {
      id: 3,
      name: "OBDeleven Pro Pack (NextGen) Bluetooth Scanner...",
      price: 114.99,
      originalPrice: 119.99,
      rating: 5,
      badge: "SOLD OUT" as const,
      image: "/product3.png",
    },
    {
      id: 4,
      name: "iCarsoft CR MAX – 2024 Full System All Makes...",
      price: 349.99,
      originalPrice: 429.99,
      rating: 5,
      image: "/product4.png",
    },
  ];

  useEffect(() => {
    const getVisibleItems = () => {
      if (typeof window === 'undefined') return 4;
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    };

    const handleResize = () => {
      setVisibleItems(getVisibleItems());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const visibleProducts = [];
  for (let i = 0; i < visibleItems; i++) {
    const index = (currentIndex + i) % products.length;
    visibleProducts.push(products[index]);
  }

  return (
    <section className="bg-[#1A1F28] py-5 sm:py-7 md:py-8 lg:py-10">
        <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white italic mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center lg:text-start">
            FEATURED PRODUCTS
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto scrollbar-hide">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
                <TabsList className="bg-transparent gap-0.5 sm:gap-1 flex-nowrap w-full sm:w-auto justify-start">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=inactive]:text-gray-300 data-[state=inactive]:bg-transparent px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <Button
                variant="link"
                className="hidden md:flex text-gray-400 text-xs md:text-sm font-medium items-center gap-1 hover:text-white whitespace-nowrap"
              >
                See All Products <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 self-end sm:self-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrev}
                className="bg-[#1a2942] hover:bg-[#243554] rounded-full text-white h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                aria-label="Previous products"
              >
                <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="bg-[#1a2942] hover:bg-[#243554] rounded-full text-white h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                aria-label="Next products"
              >
                <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 transition-all duration-300">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
    </section>
  );
}
