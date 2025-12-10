import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerBg from "../../public/footer-bg.png";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src={footerBg}
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={38}
                className="object-contain sm:w-[130px] sm:h-[42px] md:w-[140px] md:h-[45px]"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              When you need the best auto parts for your ride, turn to Autovio. Limited time offer for only new customer also get free shipping on orders.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-bold text-sm sm:text-base uppercase">OUR COMPANY</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Delivery",
                "Legal Notice",
                "Secure payment",
                "Contact us",
                "About us",
                "Stores",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-bold text-sm sm:text-base uppercase">OUR SERVICES</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Car Diagnostic Tools",
                "Hand-held Scanners",
                "Universal Car Diagnostic",
                "Audi Diagnostic",
                "ABS Brake Bleeding",
                "Adaptive Front Lighting System",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white font-bold text-sm sm:text-base uppercase">CONTACT US</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-red-500 font-semibold">Address : </span>
                <span className="text-gray-400">
                  126 Horton Grange Road, Bradford, West Yorkshire, BD7 2DW
                </span>
              </div>
              <div>
                <span className="text-red-500 font-semibold">Phone : </span>
                <a
                  href="tel:+441863616"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 86.36.166
                </a>
              </div>
              <div>
                <span className="text-red-500 font-semibold">Fax : </span>
                <span className="text-gray-400">12345</span>
              </div>
              <div>
                <span className="text-red-500 font-semibold">Mail : </span>
                <a
                  href="mailto:contact@abc.co.uk"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@abc.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 relative z-10 mt-8 sm:mt-10 md:mt-12">
        <div className="py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              Copyright © 2024 <span className="text-red-500">abc</span> - All Rights Reserved.
            </p>

            <div className="flex items-center gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative w-10 h-7 sm:w-12 sm:h-8">
                  <Image
                    src={`/card-${num}.png`}
                    alt={`Payment card ${num}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
