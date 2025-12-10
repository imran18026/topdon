import { BsTools } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: FaHeadphones,
      number: "1",
      title: "Excellent customer service",
      description:
        "We genuinely believe the key to success is serving our customers. Being there for you before and after the sale. See our feedback to get a feel for how much we GENUINELY care about our customers.",
    },
    {
      icon: BsTools,
      number: "2",
      title: "Tools you can trust",
      description:
        "We know the diagnostics industry can be a minefield, terms such as EOBD2, OBDII, CANBUS, UDS and with so many scanners to choose from it can be difficult to decide what to buy. We'll talk you through the options and we'll never up sell. We'll advise what's appropriate for you.",
    },
    {
      icon: FaTruckFast,
      number: "3",
      title: "FREE next day delivery",
      description:
        "We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched via Royal Mail first class the next working day, providing you order before our cut off time of 12pm.",
    },
  ];

  return (
    <section className="bg-[#1A1F28] py-5 sm:py-7 md:py-8 lg:py-10">
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white italic text-center lg:text-start">
            WHY CHOOSE US?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl md:text-base lg:text-2xl font-bold text-white leading-tight pt-1">
                  {feature.title}
                </h3>
                <p className="text-gray-300 pt-4 leading-relaxed text-sm sm:text-base md:text-sm">
                {feature.description}
              </p>
                </div>
              </div>

            </div>
          ))}
        </div>
    </section>
  );
}
