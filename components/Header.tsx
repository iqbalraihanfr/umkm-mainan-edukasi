import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: t.navigation.home },
    { path: "/products", label: t.navigation.products },
    { path: "/about", label: t.navigation.about },
    { path: "/contact", label: t.navigation.contact },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-wood-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-wood-gradient rounded-lg flex items-center justify-center">
              <span className="text-wood-800 font-bold text-xl">🧸</span>
            </div>
            <span className="font-playfair font-bold text-xl text-wood-800">
              Kayu Ceria
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-wood-600 ${
                  isActive(item.path)
                    ? "text-wood-700 border-b-2 border-wood-500"
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
            <div className="flex items-center space-x-1 bg-wood-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "id"
                    ? "bg-white text-wood-800 shadow-sm"
                    : "text-wood-600 hover:text-wood-800"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-white text-wood-800 shadow-sm"
                    : "text-wood-600 hover:text-wood-800"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-wood-800 hover:bg-wood-100 transition-colors"
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
          <div className="md:hidden py-4 border-t border-wood-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-wood-100 text-wood-700"
                      : "text-wood-800 hover:bg-wood-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
