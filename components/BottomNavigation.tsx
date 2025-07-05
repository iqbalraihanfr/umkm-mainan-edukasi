"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  Info,
  Phone,
  MessageCircle,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const productCategories = [
  {
    name: "Educational Toys",
    path: "/products/educational-toys",
    nameId: "Mainan Edukatif",
    icon: "🧩",
  },
  {
    name: "Book Shelves",
    path: "/products/book-shelves",
    nameId: "Rak Buku",
    icon: "📚",
  },
  {
    name: "Data Boards",
    path: "/products/data-boards",
    nameId: "Papan Data",
    icon: "📊",
  },
  {
    name: "Tables & Chairs",
    path: "/products/tables-chairs",
    nameId: "Meja & Kursi",
    icon: "🪑",
  },
];

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [showProductCategories, setShowProductCategories] = useState(false);

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: language === "id" ? "Beranda" : "Home",
      emoji: "🏠",
    },
    {
      path: "#", // Path is now a placeholder
      icon: Package,
      label: language === "id" ? "Produk" : "Products",
      emoji: "🎨",
      hasSubmenu: true,
    },
    {
      path: "/about",
      icon: Info,
      label: language === "id" ? "Tentang" : "About",
      emoji: "👨‍👩‍👧‍👦",
    },
    {
      path: "/contact",
      icon: Phone,
      label: language === "id" ? "Kontak" : "Contact",
      emoji: "📞",
    },
  ];

  const whatsappAction = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowProductCategories(!showProductCategories);
  };

  return (
    <>
      {/* Product Categories Popup */}
      {showProductCategories && (
        <div className="md:hidden fixed bottom-20 left-4 right-4 z-40 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-wood-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-playfair font-bold text-wood-800 flex items-center">
                <span className="mr-2">🎨</span>
                {language === "id" ? "Kategori Produk" : "Product Categories"}
              </h3>
              <button
                onClick={() => setShowProductCategories(false)}
                className="p-2 rounded-full hover:bg-wood-100 transition-colors"
              >
                <ChevronUp className="w-4 h-4 text-wood-600" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {productCategories.map((category) => (
                <Link
                  key={category.path}
                  href={category.path}
                  onClick={() => setShowProductCategories(false)}
                  className="p-3 bg-wood-50 rounded-xl border border-wood-200 hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-2">
                      {category.icon}
                    </div>
                    <span className="text-sm font-medium text-wood-800 leading-tight">
                      {language === "id" ? category.nameId : category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-wood-200 shadow-2xl">
        <div className="grid grid-cols-5 h-18">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return item.hasSubmenu ? (
              <button
                key={item.path}
                onClick={handleProductClick}
                className={`flex flex-col items-center justify-center space-y-1 py-2 transition-all duration-200 ${
                  isActive || showProductCategories
                    ? "text-wood-600 bg-wood-50 scale-105"
                    : "text-wood-400 hover:text-wood-600 hover:bg-wood-25"
                }`}
              >
                <div className="relative">
                  <div className="text-2xl animate-bounce-gentle">
                    {item.emoji}
                  </div>
                  {showProductCategories && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-toy-yellow rounded-full animate-pulse"></div>
                  )}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center justify-center space-y-1 py-2 transition-all duration-200 ${
                  isActive
                    ? "text-wood-600 bg-wood-50 scale-105"
                    : "text-wood-400 hover:text-wood-600 hover:bg-wood-25"
                }`}
              >
                <div
                  className={`text-2xl ${
                    isActive ? "animate-bounce-gentle" : ""
                  }`}
                >
                  {item.emoji}
                </div>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}

          {/* WhatsApp Button */}
          <button
            onClick={whatsappAction}
            className="flex flex-col items-center justify-center space-y-1 py-2 text-green-600 hover:text-green-700 transition-all duration-200 hover:bg-green-50 hover:scale-105"
          >
            <div className="text-2xl animate-bounce-gentle">💬</div>
            <span className="text-xs font-medium">WhatsApp</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
