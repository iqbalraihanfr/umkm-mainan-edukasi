"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "components/ui/card";

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question:
        language === "id"
          ? "Apakah mainan kayu aman untuk anak-anak?"
          : "Are wooden toys safe for children?",
      answer:
        language === "id"
          ? "Ya, semua mainan kami menggunakan bahan kayu berkualitas tinggi dan cat non-toxic yang aman untuk anak-anak. Setiap produk telah melalui uji keamanan."
          : "Yes, all our toys use high-quality wood materials and non-toxic paint that are safe for children. Every product has passed safety testing.",
    },
    {
      question:
        language === "id"
          ? "Berapa lama waktu pengiriman?"
          : "How long is the delivery time?",
      answer:
        language === "id"
          ? "Untuk wilayah Yogyakarta dan sekitarnya 1-2 hari kerja. Untuk wilayah lain di Indonesia 3-7 hari kerja tergantung lokasi."
          : "For Yogyakarta and surrounding areas 1-2 working days. For other areas in Indonesia 3-7 working days depending on location.",
    },
    {
      question:
        language === "id"
          ? "Apakah bisa custom design mainan?"
          : "Can you custom design toys?",
      answer:
        language === "id"
          ? "Ya, kami menerima pesanan custom design dengan minimum order tertentu. Silakan hubungi kami untuk diskusi lebih lanjut."
          : "Yes, we accept custom design orders with certain minimum orders. Please contact us for further discussion.",
    },
    {
      question:
        language === "id"
          ? "Bagaimana cara merawat mainan kayu?"
          : "How to care for wooden toys?",
      answer:
        language === "id"
          ? "Bersihkan dengan kain lembab, hindari air berlebihan, simpan di tempat kering. Bisa diberikan minyak kayu alami sesekali untuk menjaga kualitas."
          : "Clean with a damp cloth, avoid excessive water, store in a dry place. You can apply natural wood oil occasionally to maintain quality.",
    },
    {
      question:
        language === "id"
          ? "Apakah ada garansi untuk produk?"
          : "Is there a warranty for products?",
      answer:
        language === "id"
          ? "Kami memberikan garansi 6 bulan untuk kerusakan akibat cacat produksi. Garansi tidak berlaku untuk kerusakan akibat pemakaian normal."
          : "We provide a 6-month warranty for damage due to manufacturing defects. Warranty does not apply to damage due to normal use.",
    },
    {
      question:
        language === "id"
          ? "Apakah tersedia untuk ekspor?"
          : "Is it available for export?",
      answer:
        language === "id"
          ? "Ya, kami melayani ekspor ke berbagai negara. Silakan hubungi kami untuk informasi lebih lanjut mengenai pengiriman internasional."
          : "Yes, we serve exports to various countries. Please contact us for more information about international shipping.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-wood-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
            {language === "id"
              ? "Pertanyaan yang Sering Diajukan"
              : "Frequently Asked Questions"}
          </h2>
          <p className="text-xl text-wood-600 max-w-2xl mx-auto">
            {language === "id"
              ? "Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami"
              : "Find answers to common questions about our products and services"}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="border-wood-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left"
              >
                <CardContent className="p-6 hover:bg-wood-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-wood-800 text-lg pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-wood-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-wood-600 flex-shrink-0" />
                    )}
                  </div>
                </CardContent>
              </button>

              {openItems.includes(index) && (
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="border-t border-wood-200 pt-4">
                    <p className="text-wood-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
