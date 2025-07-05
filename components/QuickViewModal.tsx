"use client";
import React from "react";
import { X, MessageCircle, Heart } from "lucide-react";
import { Product } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "components/ui/button";
import { Dialog, DialogContent } from "components/ui/dialog";

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
}) => {
  const { language } = useLanguage();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const productName = language === "id" ? product.name : product.nameEn;
  const productDescription =
    language === "id" ? product.description : product.descriptionEn;

  return (
    <Dialog open={product !== null} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 z-10 rounded-full h-8 w-8"
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-wood-50 rounded-lg overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={productName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Thumbnail images could go here */}
            </div>

            {/* Product Info */}
            <div className="flex flex-col space-y-6">
              <div>
                <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-wood-900 mb-2">
                  {productName}
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-wood-700">
                    {formatPrice(product.price)}
                  </span>
                  {product.inStock ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {language === "id" ? "Tersedia" : "In Stock"}
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {language === "id" ? "Stok Habis" : "Out of Stock"}
                    </span>
                  )}
                </div>
                <p className="text-wood-600 leading-relaxed">
                  {productDescription}
                </p>
              </div>

              <div className="border-t border-wood-200 pt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-wood-800 mb-2 uppercase text-xs tracking-wider">
                    {language === "id" ? "Bahan" : "Materials"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <span
                        key={index}
                        className="bg-wood-100 text-wood-800 px-2 py-1 rounded text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-wood-800 mb-1 uppercase text-xs tracking-wider">
                      {language === "id" ? "Dimensi" : "Dimensions"}
                    </h3>
                    <p className="text-wood-600">
                      {product.dimensions.length} x {product.dimensions.width} x{" "}
                      {product.dimensions.height} cm
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-wood-800 mb-1 uppercase text-xs tracking-wider">
                      {language === "id" ? "Usia" : "Age"}
                    </h3>
                    <p className="text-wood-600">{product.ageRange}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    const message = `Halo, saya tertarik dengan produk: ${productName}`;
                    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  disabled={!product.inStock}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {language === "id"
                    ? "Pesan via WhatsApp"
                    : "Order on WhatsApp"}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-4 border-wood-300"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
