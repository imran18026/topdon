"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SlArrowRightCircle } from "react-icons/sl";
import { HiMenu, HiX } from "react-icons/hi";
import { ChevronRight } from "lucide-react";
import { CartDrawer } from "@/components/cart-drawer";
import { WishlistDrawer } from "@/components/wishlist-drawer";
import { navigationData, MegaMenuItem } from "@/lib/navigation-data";

export default function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown-wrapper')) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <header className="bg-[#1A1F28] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] py-2 sm:py-3 md:py-2">

        <div className="lg:hidden">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-red-500 transition-colors p-1.5 sm:p-2 -ml-1.5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <HiMenu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>

            <Link href="/" className="flex items-center flex-1 justify-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={33}
                className="object-contain sm:w-[120px] sm:h-[40px]"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="text-white hover:text-red-500 transition-colors p-1"
                aria-label="Toggle search"
              >
                <BiSearch className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </button>
              <WishlistDrawer />
              <CartDrawer />
              <Link href="/account" className="text-white hover:text-red-500 transition-colors p-1">
                <SlArrowRightCircle className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          {isMobileSearchOpen && (
            <div className="mt-3 sm:mt-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search here..."
                  className="w-full bg-[#0f1419] border-gray-700 text-white placeholder:text-gray-400 pr-10"
                />
                <BiSearch
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-4 mb-2">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>

            <div className="flex-1 min-w-[200px] max-w-xl">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search here..."
                  className="w-full bg-[#0f1419] border-gray-700 text-white placeholder:text-gray-400"
                />
                <BiSearch
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <MdOutlinePhoneIphone className="h-6 w-6 text-red-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-gray-400 text-xs">Call us free</span>
                <span className="font-semibold text-sm text-gray-200">+186.36.166</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/account"
                className="flex items-center hover:text-red-500 transition-colors text-xs gap-1"
              >
                <SlArrowRightCircle className="h-5 w-5" />
                <span>Account</span>
              </Link>
              <WishlistDrawer />
              <CartDrawer />
            </div>
          </div>
        </div>

        <nav className="hidden lg:block border-t border-gray-800 py-2 relative">
          <ul className="flex items-center gap-8 text-sm justify-center">
            <li>
              <Link
                href="/obdeleven"
                className="flex items-center gap-1 text-white hover:text-red-500 transition-colors"
              >
                OBDeleven
              </Link>
            </li>
            {navigationData.map((item) => (
              <li
                key={item.label}
                className="relative nav-dropdown-wrapper"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                  <BiChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-100">
                    <div className="bg-[#1A1F28] shadow-2xl rounded-lg overflow-hidden border border-gray-700">
                      <MegaMenuContent item={item} closeDropdown={closeDropdown} />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-gray-800 py-3 sm:py-4 mt-2">
            <ul className="flex flex-col gap-3 sm:gap-4 text-sm">
              <li>
                <Link
                  href="/obdeleven"
                  className="flex items-center gap-1 text-white hover:text-red-500 transition-colors py-1.5 sm:py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  OBDeleven
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-1.5 sm:py-2 w-full justify-between"
                >
                  Scanner Types
                  <BiChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-1.5 sm:py-2 w-full justify-between"
                >
                  Car Makes
                  <BiChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-1.5 sm:py-2 w-full justify-between text-left"
                >
                  Service Reset Tools
                  <BiChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors py-1.5 sm:py-2 w-full justify-between text-left"
                >
                  Other Tools & Accessories
                  <BiChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                </button>
              </li>

              <li className="border-t border-gray-800 pt-3 sm:pt-4 mt-2">
                <Link
                  href="/account"
                  className="flex items-center gap-2 text-white hover:text-red-500 transition-colors py-1.5 sm:py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SlArrowRightCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Account</span>
                </Link>
              </li>
              <li className="lg:hidden">
                <div className="flex items-center gap-2 text-white py-1.5 sm:py-2">
                  <MdOutlinePhoneIphone className="h-5 w-5 sm:h-6 sm:w-6" />
                  <div className="flex flex-col">
                    <span className="text-gray-200 text-[10px] sm:text-xs">Call us free</span>
                    <span className="font-semibold text-gray-200 text-xs sm:text-sm ">+1 86.36.166</span>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

function MegaMenuContent({ item, closeDropdown }: { item: MegaMenuItem; closeDropdown: () => void }) {
  if (item.layout === 'grid') {
    return (
      <div className="p-8 w-full min-w-[900px] max-w-6xl">
        <div className="grid grid-cols-3 gap-6">
          {item.items?.map((subItem) => (
            <Link
              key={subItem.label}
              href={subItem.href || '#'}
              onClick={closeDropdown}
              className="flex items-center gap-4 p-4 hover:bg-[#0f1419] rounded-md transition-colors group"
            >
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                {subItem.icon ? (
                  <Image
                    src={subItem.icon}
                    alt={subItem.label}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <ChevronRight size={20} className="text-white/60" />
                )}
              </div>
              <span className="text-base group-hover:text-white/90 font-medium">{subItem.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  } else if (item.layout === 'columns') {
    const columnCount = item.columnCount || 3;
    const itemsPerColumn = Math.ceil((item.items?.length || 0) / columnCount);

    return (
      <div className="p-8 w-full min-w-[1000px] max-w-7xl">
        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <div key={colIndex} className="space-y-3">
              {item.items
                ?.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
                .map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href || '#'}
                    onClick={closeDropdown}
                    className="flex items-start gap-3 p-3 hover:bg-[#0f1419] rounded-md transition-colors group"
                  >
                    <ChevronRight size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-base group-hover:text-white/90">{subItem.label}</span>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-6 w-full min-w-[500px] max-w-2xl">
        <div className="space-y-2">
          {item.items?.map((subItem) => (
            <Link
              key={subItem.label}
              href={subItem.href || '#'}
              onClick={closeDropdown}
              className="flex items-start gap-3 p-4 hover:bg-[#0f1419] rounded-md transition-colors group"
            >
              <ChevronRight size={18} className="text-white/60 mt-0.5 flex-shrink-0" />
              <span className="text-base group-hover:text-white/90 font-medium">{subItem.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
