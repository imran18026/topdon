"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PiClockClockwiseBold } from "react-icons/pi";
import hero1 from "../../public/banner1.png";
import heroBackground from "../../public/hero-image.jpg";

const slides = [
  {
    title: "TOPDON PHOENIX ELITE",
    description:
      "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don't need the online programming capabilities, you may want to consider the",
    linkText: "PHOENIX LITE 2",
    descriptionEnd: "which offers excellent value for money.",
    image: hero1,
  },
  {
    title: "TOPDON PHOENIX ELITE",
    description:
      "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don't need the online programming capabilities, you may want to consider the",
    linkText: "PHOENIX LITE 2",
    descriptionEnd: "which offers excellent value for money.",
    image: hero1,
  },
  {
    title: "TOPDON PHOENIX ELITE",
    description:
      "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don't need the online programming capabilities, you may want to consider the",
    linkText: "PHOENIX LITE 2",
    descriptionEnd: "which offers excellent value for money.",
    image: hero1,
  },
];

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [api, isPaused]);

  return (
    <section
      className="bg-[#1A1F28] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBackground}
          alt="Hero Background"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e14]/95 via-[#0f1520]/90 to-[#0f1520]/80" />
      </div>

      <div className="hidden lg:block relative z-10 py-2 px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-10 text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-1.5 md:gap-2">
              <FaTruck className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
              <span className="text-white text-xs md:text-sm">Free Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-white text-xs md:text-sm">iCarsoft UK Authorised Dealer</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-yellow-400 text-xs md:text-sm">★★★★★</span>
              <span className="text-white text-xs md:text-sm">Rated Excellent</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <PiClockClockwiseBold className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
              <span className="text-white text-xs md:text-sm">Buy Now, Pay Later</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 md:gap-2">
              <IoCheckmarkCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-500" />
              <span className="text-white text-xs md:text-sm">Found it Cheaper?</span>
            </div>
          </div>
      </div>

      <div className="relative z-10 flex items-center">
        <div className="hidden md:flex w-12 md:w-16 lg:w-20 flex-shrink-0 items-center justify-center">
          <button
            onClick={() => api?.scrollPrev()}
            className="h-8 w-8 md:h-10 md:w-10 bg-transparent hover:bg-white/10 border border-gray-600/50 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-5 md:h-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="flex-1">
          <Carousel className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-10" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="py-4 sm:py-6 md:py-12 lg:py-16 xl:py-20 px-2 sm:px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-10 lg:gap-16 items-center min-h-[200px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[400px]">
                      <div className="space-y-2 sm:space-y-3 md:space-y-5 lg:space-y-6 z-10 text-left">
                        <h1 className="text-[10px] sm:text-base md:text-2xl lg:text-4xl xl:text-[42px] font-bold leading-tight tracking-tight text-white uppercase">
                          {slide.title}
                        </h1>

                        <p className="text-gray-300 text-[8px] sm:text-xs md:text-base lg:text-base leading-relaxed">
                          {slide.description}{" "}
                          <span className="underline underline-offset-2 cursor-pointer hover:text-white font-medium">
                            {slide.linkText}
                          </span>{" "}
                          {slide.descriptionEnd}
                        </p>

                        <div className="pt-1 sm:pt-2 lg:pt-4">
                          <Button
                            size="lg"
                            className="bg-[#dc3545] hover:bg-[#c82333] text-white px-2 py-1 sm:px-4 sm:py-2 md:px-8 md:py-4 lg:px-10 lg:py-5 text-[8px] sm:text-xs md:text-sm lg:text-base font-bold rounded-sm sm:rounded-md transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
                          >
                            LEARN MORE
                          </Button>
                        </div>
                      </div>

                      <div className="relative z-10 flex justify-end">
                        <div className="relative w-full max-w-[140px] sm:max-w-[240px] md:max-w-[420px] lg:max-w-[500px] xl:max-w-[540px]">
                          <Image
                            src={slide.image}
                            alt="TOPDON Device"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:flex w-12 md:w-16 lg:w-20 flex-shrink-0 items-center justify-center">
          <button
            onClick={() => api?.scrollNext()}
            className="h-8 w-8 md:h-10 md:w-10 bg-transparent hover:bg-white/10 border border-gray-600/50 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-5 md:h-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative z-10 pb-3 sm:pb-5 md:pb-6 flex items-center justify-center gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#dc3545] scale-110"
                : "bg-gray-500/60 hover:bg-gray-500/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}