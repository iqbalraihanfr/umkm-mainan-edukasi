import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-wood-800 text-wood-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-wood-gradient rounded-lg flex items-center justify-center">
                <span className="text-wood-800 font-bold">🧸</span>
              </div>
              <span className="font-playfair font-bold text-xl">
                Kayu Ceria
              </span>
            </div>
            <p className="text-wood-300 mb-4 max-w-md">
              {language === "id"
                ? "Mainan kayu edukatif handmade untuk mengembangkan kreativitas dan kecerdasan anak-anak Indonesia."
                : "Handmade educational wooden toys to develop creativity and intelligence of Indonesian children."}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-wood-300 hover:text-wood-100 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-wood-300 hover:text-wood-100 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.281L3.938 16.94l.002-.002-.002.002c-.781-.781-1.281-1.859-1.281-3.052 0-2.341 1.893-4.233 4.233-4.233 2.341 0 4.233 1.893 4.233 4.233 0 2.341-1.893 4.233-4.233 4.233l-.441-.135zM16.924 16.988c-1.297 0-2.448-.49-3.323-1.281l-1.188 1.233.002-.002-.002.002c-.781-.781-1.281-1.859-1.281-3.052 0-2.341 1.893-4.233 4.233-4.233 2.341 0 4.233 1.893 4.233 4.233 0 2.341-1.893 4.233-4.233 4.233l-.441-.135z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">
              {language === "id" ? "Menu Cepat" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-wood-300 hover:text-wood-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-wood-300 hover:text-wood-100 transition-colors"
                >
                  {t.navigation.products}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-wood-300 hover:text-wood-100 transition-colors"
                >
                  {t.navigation.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-wood-300 hover:text-wood-100 transition-colors"
                >
                  {t.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">
              {language === "id" ? "Kontak" : "Contact"}
            </h3>
            <div className="space-y-2 text-wood-300">
              <p>WhatsApp: +62 812-3456-7890</p>
              <p>Email: info@kayuceria.com</p>
              <p>
                {language === "id"
                  ? "Jl. Kerajinan No. 123, Yogyakarta"
                  : "123 Craft Street, Yogyakarta"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-700 mt-8 pt-8 text-center">
          <p className="text-wood-400">
            © 2024 Kayu Ceria.{" "}
            {language === "id"
              ? "Seluruh hak cipta dilindungi."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
