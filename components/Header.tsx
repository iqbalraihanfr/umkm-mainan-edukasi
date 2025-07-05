"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";

const productCategories = [
  {
    name: "Educational Toys",
    path: "/products/educational-toys",
    nameId: "Mainan Edukatif",
  },
  {
    name: "Book Shelves",
    path: "/products/book-shelves",
    nameId: "Rak Buku",
  },
  {
    name: "Data Boards",
    path: "/products/data-boards",
    nameId: "Papan Data",
  },
  {
    name: "Tables & Chairs",
    path: "/products/tables-chairs",
    nameId: "Meja & Kursi",
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: "/about", label: t.navigation.about },
    { path: "/contact", label: t.navigation.contact },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-wood-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Home */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-wood-gradient rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-wood-800 font-bold text-2xl animate-bounce-gentle">
                🧸
              </span>
            </div>
            <div className="flex px-10 flex-col">
              <span className="font-playfair font-bold text-xl text-wood-800 group-hover:text-wood-600 transition-colors">
                Kayu Ceria
              </span>
              <span className="text-xs text-amber-500 font-medium">
                {language === "id"
                  ? "Mainan Kayu Edukatif"
                  : "Educational Wooden Toys"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 font-medium text-wood-800 hover:text-wood-600 transition-colors py-2 px-3 rounded-lg hover:bg-wood-50 group">
                  <span>{t.navigation.products}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:text-toy-yellow" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link href={category.path}>
                      {language === "id" ? category.nameId : category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-colors hover:text-wood-600 py-2 px-3 rounded-lg hover:bg-wood-50 ${
                  isActive(item.path)
                    ? "text-wood-700 bg-wood-100"
                    : "text-wood-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-1 bg-wood-100 rounded-xl p-1 shadow-inner">
              <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  language === "id"
                    ? "bg-white text-wood-800 shadow-md scale-105"
                    : "text-wood-600 hover:text-wood-800 hover:bg-wood-50"
                }`}
              >
                🇮🇩 ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  language === "en"
                    ? "bg-white text-wood-800 shadow-md scale-105"
                    : "text-wood-600 hover:text-wood-800 hover:bg-wood-50"
                }`}
              >
                🇺🇸 EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-wood-800 hover:bg-wood-100 transition-all duration-200 hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-wood-200 bg-wood-50 rounded-b-2xl mx-4 mb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {/* Mobile Products Categories */}
              <div className="px-4 py-2">
                <h3 className="font-playfair font-bold text-wood-800 mb-4 flex items-center">
                  <span className="mr-2">🎨</span>
                  {t.navigation.products}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {productCategories.map((category) => (
                    <Link
                      key={category.path}
                      href={category.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3 bg-white rounded-xl border border-wood-200 hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      <div className="text-center">
                        <span className="text-sm font-medium text-wood-800">
                          {language === "id" ? category.nameId : category.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 w-full bg-wood-gradient text-wood-800 text-center py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-wood-200"
                >
                  {language === "id"
                    ? "Lihat Semua Produk"
                    : "View All Products"}
                </Link>
              </div>

              {/* Mobile Other Navigation Items */}
              <div className="border-t border-wood-200 pt-3 mt-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left p-3 rounded-lg font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-white text-wood-700 shadow-md"
                        : "text-wood-800 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
