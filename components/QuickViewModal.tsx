'use client'
import React from 'react';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const productName = language === 'id' ? product.name : product.nameEn;
  const productDescription = language === 'id' ? product.description : product.descriptionEn;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 z-10"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-wood-50 rounded-lg overflow-hidden">
                <img
                  src={product.images[0] || '/placeholder.svg'}
                  alt={productName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair font-bold text-2xl text-wood-900 mb-2">
                  {productName}
                </h2>
                <p className="text-wood-600 mb-4">{productDescription}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-wood-700">
                    {formatPrice(product.price)}
                  </span>
                  <span className="bg-wood-100 text-wood-700 px-3 py-1 rounded-full text-sm">
                    {product.ageRange}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-wood-800 mb-2">
                    {language === 'id' ? 'Bahan' : 'Materials'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <span
                        key={index}
                        className="bg-wood-200 text-wood-800 px-2 py-1 rounded text-sm"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-wood-800 mb-2">
                    {language === 'id' ? 'Dimensi' : 'Dimensions'}
                  </h3>
                  <p className="text-wood-600">
                    {product.dimensions.length} × {product.dimensions.width} × {product.dimensions.height} cm
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-wood-800 mb-2">
                    {language === 'id' ? 'Berat' : 'Weight'}
                  </h3>
                  <p className="text-wood-600">{product.weight} kg</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-wood-500 hover:bg-wood-600 text-white"
                  onClick={() => {
                    const message = `Halo, saya tertarik dengan produk ${productName}. Bisakah Anda memberikan informasi lebih lanjut?`;
                    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {language === 'id' ? 'Pesan Sekarang' : 'Order Now'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 border-wood-300"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {!product.inStock && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-700 text-sm font-medium">
                    {language === 'id' ? 'Stok sedang kosong' : 'Out of stock'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
