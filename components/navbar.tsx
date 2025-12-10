'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationData, MegaMenuItem } from '@/lib/navigation-data';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
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
    <nav className="bg-[#2c3e50] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigationData.map((item) => (
              <div key={item.label} className="relative nav-dropdown-wrapper">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="px-4 py-2 text-sm font-medium hover:bg-[#34495e] rounded-md transition-colors"
                >
                  {item.label}
                </button>

                {activeDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 z-100">
                    <div className="bg-[#2c3e50] shadow-2xl rounded-lg overflow-hidden border border-white/10">
                      <MegaMenuContent item={item} closeDropdown={closeDropdown} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-[#34495e] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2c3e50] border-t border-[#34495e] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navigationData.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-[#34495e] rounded-md transition-colors"
                >
                  {item.label}
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      activeMobileDropdown === item.label ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {activeMobileDropdown === item.label && (
                  <div className="mt-2 pl-4">
                    <MobileMenuContent item={item} setMobileMenuOpen={setMobileMenuOpen} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function MegaMenuContent({ item, closeDropdown }: { item: MegaMenuItem; closeDropdown: () => void }) {
  if (item.layout === 'grid') {
    return (
      <div className="p-6 w-full max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {item.items?.map((subItem) => (
            <Link
              key={subItem.label}
              href={subItem.href || '#'}
              onClick={closeDropdown}
              className="flex items-center gap-3 p-3 hover:bg-[#34495e] rounded-md transition-colors group"
            >
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center flex-shrink-0">
                {subItem.icon ? (
                  <Image
                    src={subItem.icon}
                    alt={subItem.label}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <ChevronRight size={16} className="text-white/60" />
                )}
              </div>
              <span className="text-sm group-hover:text-white/90">{subItem.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  } else if (item.layout === 'columns') {
    const columnCount = item.columnCount || 3;
    const itemsPerColumn = Math.ceil((item.items?.length || 0) / columnCount);

    return (
      <div className="p-6 w-full max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <div key={colIndex} className="space-y-2">
              {item.items
                ?.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
                .map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href || '#'}
                    onClick={closeDropdown}
                    className="flex items-start gap-2 p-2 hover:bg-[#34495e] rounded-md transition-colors group"
                  >
                    <ChevronRight size={16} className="text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-sm group-hover:text-white/90">{subItem.label}</span>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-4 w-full max-w-md">
        <div className="space-y-1">
          {item.items?.map((subItem) => (
            <Link
              key={subItem.label}
              href={subItem.href || '#'}
              onClick={closeDropdown}
              className="flex items-start gap-2 p-3 hover:bg-[#34495e] rounded-md transition-colors group"
            >
              <ChevronRight size={16} className="text-white/60 mt-0.5 flex-shrink-0" />
              <span className="text-sm group-hover:text-white/90">{subItem.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

function MobileMenuContent({
  item,
  setMobileMenuOpen
}: {
  item: MegaMenuItem;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <div className="space-y-1 pb-2">
      {item.items?.map((subItem) => (
        <Link
          key={subItem.label}
          href={subItem.href || '#'}
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-start gap-2 p-2 hover:bg-[#34495e] rounded-md transition-colors text-sm text-white/80 hover:text-white"
        >
          <ChevronRight size={14} className="mt-0.5 flex-shrink-0" />
          <span>{subItem.label}</span>
        </Link>
      ))}
    </div>
  );
}
