"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

// Assuming these components are correctly styled (Shadcn UI or similar)
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronRight, Star } from "lucide-react";

const customers = [
  {
    name: "PAUL L",
    title: "Creative Director",
    company: "Company X",
    avatar: "PL",
    image: "/PAUL.png",
    text: `Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you've known 20 years.`,
    date: "4 days ago",
  },
  {
    name: "DAVID G",
    title: "Creative Director",
    company: "Company Y",
    avatar: "DG",
    image: "/DAVID.png",
    text: `Super fast support, clear communication, and extremely professional service. Highly recommended.`,
    date: "1 week ago",
  },
  {
    name: "LEE W",
    title: "Creative Director",
    company: "Company Z",
    avatar: "LW",
    image: "/LEE.png",
    text: `Brilliant team. Great delivery speed and very reliable support experience.`,
    date: "6 days ago",
  },
];

export default function CustomerReviewsSection() {
  const [active, setActive] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => setActive(emblaApi.selectedScrollSnap()));

    const stop = autoScroll();
    return stop;
  }, [emblaApi, autoScroll]);

  return (
    <section className="bg-[#1A1F28] py-5 sm:py-7 md:py-8 lg:py-32">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white italic leading-tight">
            THE LOVE FROM OUR<br />CUSTOMERS
          </h2>

          <Button
            variant="link"
            className="text-gray-300 hover:text-white p-0 text-xs sm:text-sm font-normal"
          >
            See All Reviews <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />
          </Button>
        </div>

        <div className="overflow-hidden mb-8 sm:mb-10 md:mb-12" ref={emblaRef}>
          <div className="flex">

            {customers.map((c, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <Card className="bg-[#34495e] border-none shadow-lg rounded-lg">
                  <CardContent className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">

                        <span className="text-white text-sm sm:text-base font-medium">Very Good</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <div className="flex items-center gap-1">
                           <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#00B67A] fill-[#00B67A]" />
                           <span className="text-gray-300 text-[9px] sm:text-xs tracking-wider font-medium">TRUSTPILOT</span>
                        </div>

                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-[10px] sm:text-xs font-medium">PILOT</span>
                        <span className="text-[10px] sm:text-xs">{c.date}</span>
                      </div>
                    </div>

                    <blockquote>
                      <p className="text-gray-100 text-sm sm:text-base md:text-lg leading-relaxed font-normal italic">
                        {`"${c.text}"`}
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>

              </div>
            ))}

          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {customers.map((customer, i) => (
            <div
              key={i}
              className="flex items-center gap-3 cursor-pointer transition-all duration-300"
              onClick={() => emblaApi?.scrollTo(i)}
            >
              <Avatar
                className={`h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 shrink-0 transition-all duration-300 ${
                  active === i
                    ? "ring-2 ring-cyan-400 opacity-100 scale-105"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                <AvatarImage src={customer.image} alt={customer.name} />
                <AvatarFallback className="bg-gray-600 text-white text-xs sm:text-sm">
                  {customer.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col pl-2">
                <p className={`text-sm lg:text-base font-semibold tracking-wide transition-colors ${
                  active === i ? "text-white" : "text-gray-400"
                }`}>
                  {customer.name}
                </p>
                <p className={`text-[10px] lg:text-xs transition-colors ${
                  active === i ? "text-gray-300" : "text-gray-500"
                }`}>
                  {customer.title} at
                </p>
                <p className={`text-[10px] lg:text-xs transition-colors ${
                  active === i ? "text-cyan-400" : "text-cyan-600"
                }`}>
                  {customer.company}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}