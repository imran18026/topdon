"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar, FaCheckCircle, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  jobTitle: string;
  companyName: string;
  imageSrc: string;
  rating: number;
  ratingText: string;
  verified: boolean;
  source: string;
  date: string;
  review: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "PAUL L",
      jobTitle: "Creative Director at",
      companyName: "CompanyName",
      imageSrc: "/PAUL.png",
      rating: 5,
      ratingText: "Very Good",
      verified: true,
      source: "PILOT",
      date: "4 days ago",
      review:
        "Awesome service, next day delivery, friendly staff that know their stuff. Reassured support is always available should it be needed. It was like dealing with someone you've known 20 years.",
    },
    {
      id: 2,
      name: "DAVID G",
      jobTitle: "Creative Director at",
      companyName: "CompanyName",
      imageSrc: "/DAVID.png",
      rating: 5,
      ratingText: "Excellent",
      verified: true,
      source: "TRUSTPILOT",
      date: "1 week ago",
      review:
        "Outstanding product quality and customer service. The team went above and beyond to ensure I got exactly what I needed. Highly recommended!",
    },
    {
      id: 3,
      name: "LEE W",
      jobTitle: "Creative Director at",
      companyName: "CompanyName",
      imageSrc: "/LEE.png",
      rating: 5,
      ratingText: "Perfect",
      verified: true,
      source: "GOOGLE",
      date: "2 weeks ago",
      review:
        "Best diagnostic tool I've purchased. Clear instructions, great support team, and the product exceeded my expectations. Worth every penny!",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="bg-[#2A3441] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white italic leading-tight">
            THE LOVE FROM OUR
            <br />
            CUSTOMERS
          </h2>
          <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm md:text-base">
            See All Reviews
            <FaChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Review Card */}
        <div className="bg-[#1F2937] rounded-lg p-8 md:p-10 mb-8">
          {/* Rating Header */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-lg font-semibold">
                {currentTestimonial.ratingText}
              </span>
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>
            {currentTestimonial.verified && (
              <FaCheckCircle className="w-5 h-5 text-orange-500" />
            )}
            <span className="text-gray-500 text-sm font-semibold">
              {currentTestimonial.source}
            </span>
            <span className="text-gray-500 text-sm ml-auto">
              {currentTestimonial.date}
            </span>
          </div>

          {/* Review Text */}
          <blockquote className="text-white text-lg md:text-xl italic leading-relaxed">
            &ldquo;{currentTestimonial.review}&rdquo;
          </blockquote>
        </div>

        {/* Avatar Navigation */}
        <div className="flex gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`flex items-center gap-4 transition-all ${
                index === activeTestimonial ? "opacity-100" : "opacity-40"
              } hover:opacity-100`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {testimonial.jobTitle}
                  <br />
                  <span className="text-cyan-400 font-semibold">
                    {testimonial.companyName}
                  </span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
