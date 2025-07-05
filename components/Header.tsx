'use client'
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const productCategories = [
    {
      id: "mainan-edukatif",
      path: "/categories/mainan-edukatif",
      name: language === "id" ? "Mainan Edukatif" : "Educational Toys",
      nameEn: "Educational Toys",
      icon: "🧩",
      description:
        language === "id"
          ? "Puzzle, balok susun, dan permainan pembelajaran"
          : "Puzzles, building blocks, and learning games",
      color: "bg-toy-yellow",
    },
    {
      id: "rak-buku",
      path: "/categories/rak-buku",
      name: language === "id" ? "Rak Buku" : "Book Shelves",
      nameEn: "Book Shelves",
      icon: "📚",
      description:
        language === "id"
          ? "Rak buku kayu untuk koleksi cerita anak-anak"
          : "Wooden book shelves for children story collections",
      color: "bg-toy-blue",
    },
    {
      id: "meja-kursi",
      path: "/categories/meja-kursi",
      name: language === "id" ? "Meja & Kursi" : "Table & Chairs",
      nameEn: "Table & Chairs",
      icon: "🪑",
      description:
        language === "id"
          ? "Set meja kursi belajar ukuran anak-anak"
          : "Study table and chair sets in children sizes",
      color: "bg-toy-green",
    },
    {
      id: "papan-data",
      path: "/categories/papan-data",
      name: language === "id" ? "Papan Data" : "Learning Boards",
      nameEn: "Learning Boards",
      icon: "📊",
      description:
        language === "id"
          ? "Papan tulis, papan magnetik, dan media pembelajaran"
          : "Writing boards, magnetic boards, and learning media",
      color: "bg-toy-red",
    },
  ];

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
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl text-wood-800 group-hover:text-wood-600 transition-colors">
                Kayu Ceria
              </span>
              <span className="text-xs text-wood-500 font-medium">
                {language === "id"
                  ? "Mainan Kayu Edukatif"
                  : "Educational Wooden Toys"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 font-medium text-wood-800 hover:text-wood-600 transition-colors py-2 px-3 rounded-lg hover:bg-wood-50 group">
                <span>{t.navigation.products}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  } group-hover:text-toy-yellow`}
                />
                <span className="text-lg ml-1">🎨</span>
              </button>

              {/* Mega Menu */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-wood-200 p-6 mt-2 animate-fade-in">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="text-center mb-4">
                      <h3 className="font-playfair font-bold text-lg text-wood-800 mb-2">
                        {language === "id"
                          ? "🌟 Kategori Produk Kami"
                          : "🌟 Our Product Categories"}
                      </h3>
                      <div className="flex justify-center space-x-1">
                        <span className="w-2 h-2 bg-toy-yellow rounded-full animate-bounce"></span>
                        <span
                          className="w-2 h-2 bg-toy-red rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-toy-blue rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                      </div>
                    </div>

                    {productCategories.map((category, index) => (
                      <Link
                        key={category.id}
                        href={category.path}
                        className="group p-4 rounded-xl border border-wood-100 hover:border-wood-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-2xl group-hover:animate-bounce-gentle shadow-md`}
                          >
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-wood-800 group-hover:text-wood-600 transition-colors mb-1">
                              {category.name}
                            </h4>
                            <p className="text-sm text-wood-600 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}

                    <Link
                      href="/products"
                      className="mt-2 bg-wood-gradient text-wood-800 text-center py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-wood-200"
                    >
                      {language === "id"
                        ? "🎪 Lihat Semua Produk"
                        : "🎪 View All Products"}
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
                      key={category.id}
                      href={category.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3 bg-white rounded-xl border border-wood-200 hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      <div className="text-center">
                        <div
                          className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center text-lg mx-auto mb-2`}
                        >
                          {category.icon}
                        </div>
                        <span className="text-sm font-medium text-wood-800">
                          {category.name}
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
