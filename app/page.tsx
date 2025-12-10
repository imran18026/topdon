import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CarDiagnosticSection from "@/components/sections/CarDiagnosticSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import CustomerReviewsSection from "@/components/sections/CustomerReviewsSection";
import BrandLogosSection from "@/components/sections/BrandLogosSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1F28]">
      <div className="max-w-[1440px] mx-auto bg-[#1A1F28]">
        <Header />
        <div className="pt-8 lg:pt-[140px]">
          <HeroSection />
        </div>
        <div className="pt-[30px] sm:pt-10 md:pt-[50px] lg:pt-[60px] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px]">
          <CarDiagnosticSection />
          <WhyChooseUsSection />
          <FeaturedProductsSection />
          <CustomerReviewsSection />
          <BrandLogosSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
