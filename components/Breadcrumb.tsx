'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const { language } = useLanguage();

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: language === "id" ? "Beranda" : "Home", path: "/" },
  ];

  pathSegments.forEach((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    let label = segment;

    // Customize labels based on segment
    switch (segment) {
      case "products":
        label = language === "id" ? "Produk" : "Products";
        break;
      case "about":
        label = language === "id" ? "Tentang Kami" : "About Us";
        break;
      case "contact":
        label = language === "id" ? "Kontak" : "Contact";
        break;
      default:
        label = segment.charAt(0).toUpperCase() + segment.slice(1);
    }

    breadcrumbItems.push({ label, path });
  });

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className="bg-wood-50 border-b border-wood-200 py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-wood-400 mx-2" />
              )}
              {index === 0 && <Home className="w-4 h-4 mr-2" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-wood-800 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.path}
                  className="text-wood-600 hover:text-wood-800 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
