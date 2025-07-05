import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, Info, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: language === "id" ? "Beranda" : "Home",
    },
    {
      path: "/products",
      icon: Package,
      label: language === "id" ? "Produk" : "Products",
    },
    {
      path: "/about",
      icon: Info,
      label: language === "id" ? "Tentang" : "About",
    },
    {
      path: "/contact",
      icon: Phone,
      label: language === "id" ? "Kontak" : "Contact",
    },
  ];

  const whatsappAction = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-wood-200 shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive
                  ? "text-wood-600 bg-wood-50"
                  : "text-wood-400 hover:text-wood-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* WhatsApp Button */}
        <button
          onClick={whatsappAction}
          className="flex flex-col items-center justify-center space-y-1 text-green-600 hover:text-green-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
