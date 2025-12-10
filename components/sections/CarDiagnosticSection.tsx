"use client";

import Image from 'next/image';
import { FaPoundSign } from "react-icons/fa";
import banner2 from "../../public/banner2.png"

export default function CarDiagnosticSection() {
  return (
    <section className="bg-[#1A1F28] py-5 sm:py-7 md:py-8 lg:py-10 xl:py-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mb-1 sm:mb-2">
            Car Diagnostic
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white">
            Tools and Scanners
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image src={banner2} alt="Car Diagnostic Tool" fill className="object-cover" />
          </div>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 text-gray-500">
              <FaPoundSign className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Save money and diagnose faults
            </h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              A car diagnostic scan from your local dealership could cost up to £100 + VAT. Why not buy a scanner and do it yourself? They are easy to use. The scanner will pay for itself. You can then present the findings to your local mechanic who won&apos;t have to run a diagnostics scan, thus saving time and money.
            </p>
          </div>
        </div>
    </section>
  );
}
