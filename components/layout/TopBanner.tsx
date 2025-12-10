"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function TopBanner() {
  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-[#0f1419] ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[120px] py-2">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-0">
            {menuItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  onClick={() => setActiveLink(item.name)}
                  className={`text-sm transition-colors px-0 ${
                    activeLink === item.name
                      ? "text-red-500 font-medium"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
                {index < menuItems.length - 1 && (
                  <span className="mx-3 text-gray-200">|</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4 ml-auto w-full md:w-auto justify-between">
            <div className="flex items-center gap-2">
              <HiOutlineMail className="h-4 w-4 text-gray-200 hover:text-red-500" />
              <span className="text-sm text-gray-200 hover:text-red-500">
                contact@abc.com
              </span>
            </div>

            <span className="text-gray-200 hidden md:inline">|</span>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-gray-200 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
