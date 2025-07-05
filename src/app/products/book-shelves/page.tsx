"use client";

import React, { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "components/ProductCard";
import QuickViewModal from "components/QuickViewModal";
import { Product } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

const BookShelvesPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { language } = useLanguage();

  const categoryProducts = products.filter((p) =>
    language === "id"
      ? p.category === "Book Shelves"
      : p.categoryEn === "Book Shelves"
  );

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold font-playfair mb-6">
        {language === "id" ? "Rak Buku" : "Book Shelves"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={handleQuickView}
          />
        ))}
      </div>
      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default BookShelvesPage;
