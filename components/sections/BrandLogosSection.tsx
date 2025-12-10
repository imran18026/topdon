import Image from "next/image";

export default function BrandLogosSection() {
  const brands = [
    { name: "Volkswagen", logo: "/vw-logo.png" },
    { name: "Audi", logo: "/audi-logo.png" },
    { name: "BMW", logo: "/bmw-logo.png" },
    { name: "Jaguar", logo: "/jaguar-logo.png" },
    { name: "SEAT", logo: "/seat-logo.png" },
    { name: "Skoda", logo: "/skoda-logo.png" },
    { name: "Land Rover", logo: "/range-rover-logo.png" },
  ];

  return (
    <section className="bg-[#1A1F28] py-4 sm:py-8 md:py-10 lg:py-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 border-y border-gray-800">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between w-full">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Brand Logo */}
              <div className="relative flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={70}
                  height={70}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[70px] xl:h-[70px] object-contain opacity-70 sm:opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
