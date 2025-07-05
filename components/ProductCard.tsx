import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { language, t } = useLanguage();

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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-wood-200">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={productName}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-toy-yellow text-white px-2 py-1 rounded-full text-xs font-medium">
            {language === "id" ? "Unggulan" : "Featured"}
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {language === "id" ? "Habis" : "Out of Stock"}
          </div>
        )}

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          {onQuickView && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onQuickView(product)}
              className="bg-white hover:bg-wood-50 text-wood-800"
            >
              {t.products.quickView}
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-playfair font-semibold text-lg text-wood-800 mb-2 line-clamp-2">
          {productName}
        </h3>

        <p className="text-wood-600 text-sm mb-3 line-clamp-2">
          {productDescription}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-wood-700 text-lg">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-wood-500 bg-wood-100 px-2 py-1 rounded">
            {product.ageRange}
          </span>
        </div>

        <div className="flex gap-2">
          <Link to={`/products/${product.slug}`} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-wood-300 text-wood-700 hover:bg-wood-50"
            >
              {t.common.viewDetails}
            </Button>
          </Link>

          <Button
            size="sm"
            className="bg-wood-500 hover:bg-wood-600 text-white"
            onClick={() => {
              const message = `Halo, saya tertarik dengan produk ${productName}. Bisakah Anda memberikan informasi lebih lanjut?`;
              const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            WA
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
