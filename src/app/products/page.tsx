"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/types";
import ProductCard from "components/ProductCard";
import QuickViewModal from "components/QuickViewModal";
import BusinessHours from "components/BusinessHours";
import { ProductGridSkeleton } from "components/LoadingSkeleton";
import { Button } from "components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";
import { Input } from "components/ui/input";

const Products: React.FC = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Mock products data - replace with API call
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Puzzle Alfabet Kayu",
        nameEn: "Wooden Alphabet Puzzle",
        description:
          "Puzzle edukatif untuk belajar huruf dan melatih motorik halus",
        descriptionEn:
          "Educational puzzle for learning letters and training fine motor skills",
        price: 85000,
        images: ["/placeholder.svg"],
        category: "Puzzle",
        categoryEn: "Puzzle",
        ageRange: "3-6 tahun",
        materials: ["Kayu Jati", "Cat Non-Toxic"],
        dimensions: { length: 30, width: 20, height: 2 },
        weight: 0.5,
        inStock: true,
        featured: true,
        slug: "puzzle-alfabet-kayu",
      },
      {
        id: "2",
        name: "Balok Susun Warna-Warni",
        nameEn: "Colorful Stacking Blocks",
        description:
          "Set balok kayu warna-warni untuk mengembangkan kreativitas",
        descriptionEn: "Colorful wooden block set to develop creativity",
        price: 120000,
        images: ["/placeholder.svg"],
        category: "Balok",
        categoryEn: "Blocks",
        ageRange: "2-5 tahun",
        materials: ["Kayu Pinus", "Cat Water-based"],
        dimensions: { length: 25, width: 25, height: 15 },
        weight: 1.2,
        inStock: true,
        featured: true,
        slug: "balok-susun-warna-warni",
      },
      {
        id: "3",
        name: "Kereta Api Kayu",
        nameEn: "Wooden Train Set",
        description: "Set kereta api kayu dengan rel untuk bermain imajinatif",
        descriptionEn: "Wooden train set with tracks for imaginative play",
        price: 250000,
        images: ["/placeholder.svg"],
        category: "Kendaraan",
        categoryEn: "Vehicles",
        ageRange: "3-8 tahun",
        materials: ["Kayu Mahogany", "Finishing Natural"],
        dimensions: { length: 50, width: 30, height: 10 },
        weight: 2.0,
        inStock: true,
        featured: true,
        slug: "kereta-api-kayu",
      },
      {
        id: "4",
        name: "Rumah Boneka Kayu",
        nameEn: "Wooden Dollhouse",
        description:
          "Rumah boneka kayu dengan furniture lengkap untuk bermain peran",
        descriptionEn:
          "Wooden dollhouse with complete furniture for role playing",
        price: 350000,
        images: ["/placeholder.svg"],
        category: "Rumah Boneka",
        categoryEn: "Dollhouse",
        ageRange: "4-10 tahun",
        materials: ["Kayu Jati", "Cat Non-Toxic"],
        dimensions: { length: 40, width: 30, height: 35 },
        weight: 3.5,
        inStock: true,
        featured: false,
        slug: "rumah-boneka-kayu",
      },
      {
        id: "5",
        name: "Alat Musik Kayu Set",
        nameEn: "Wooden Musical Instruments Set",
        description: "Set alat musik kayu untuk mengembangkan bakat musik anak",
        descriptionEn:
          "Wooden musical instruments set to develop children's musical talent",
        price: 180000,
        images: ["/placeholder.svg"],
        category: "Musik",
        categoryEn: "Music",
        ageRange: "3-8 tahun",
        materials: ["Kayu Mahogany", "Finishing Natural"],
        dimensions: { length: 35, width: 25, height: 10 },
        weight: 1.8,
        inStock: false,
        featured: false,
        slug: "alat-musik-kayu-set",
      },
      {
        id: "6",
        name: "Puzzle Hewan Nusantara",
        nameEn: "Indonesian Animals Puzzle",
        description: "Puzzle kayu bergambar hewan-hewan khas Indonesia",
        descriptionEn: "Wooden puzzle featuring Indonesian native animals",
        price: 95000,
        images: ["/placeholder.svg"],
        category: "Puzzle",
        categoryEn: "Puzzle",
        ageRange: "4-8 tahun",
        materials: ["Kayu Pinus", "Cat Water-based"],
        dimensions: { length: 35, width: 25, height: 2 },
        weight: 0.7,
        inStock: true,
        featured: false,
        slug: "puzzle-hewan-nusantara",
      },
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter products based on search term and category
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.category === selectedCategory ||
          product.categoryEn === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-wood-50">
        <div className="bg-white border-b border-wood-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
              {t.products.title}
            </h1>
            <BusinessHours />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProductGridSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wood-50">
      {/* Header */}
      <div className="bg-white border-b border-wood-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-6">
            {t.products.title}
          </h1>

          {/* Business Hours */}
          <div className="mb-6">
            <BusinessHours />
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-wood-300"
              />
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-48 border-wood-300">
                <SelectValue placeholder={t.products.filters.category} />
              </SelectTrigger>
              <SelectContent className="bg-white border-wood-200">
                <SelectItem value="all">{t.products.filters.all}</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
              Tidak ada produk ditemukan
            </h3>
            <p className="text-wood-600">
              Coba ubah kata kunci pencarian atau filter yang dipilih
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-wood-600">
                Menampilkan {filteredProducts.length} dari {products.length}{" "}
                produk
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
};

export default Products;
