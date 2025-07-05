'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Feature {
  title: string;
  description: string;
}

const Index: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Terima kasih telah berlangganan!");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-wood-gradient py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wood-100/90 to-cream-100/90"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-wood-900 mb-6 leading-tight">
                {t.home.hero.title}
              </h1>
              <p className="text-xl text-wood-700 mb-8 leading-relaxed">
                {t.home.hero.subtitle}
              </p>
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-wood-500 hover:bg-wood-600 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {t.home.hero.cta}
                </Button>
              </Link>
            </div>

            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Wooden toys"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-toy-yellow rounded-full flex items-center justify-center animate-bounce-gentle">
                  <span className="text-2xl">🎨</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-toy-red rounded-full flex items-center justify-center animate-bounce-gentle"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-xl">🚂</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
              {t.home.features.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.features.items.map((feature: Feature, index: number) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-wood-200"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-wood-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">
                      {index === 0 && "🌱"}
                      {index === 1 && "✋"}
                      {index === 2 && "🧠"}
                      {index === 3 && "🛡️"}
                    </span>
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-wood-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
              {t.home.testimonials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ibu Sarah",
                text: "Mainan kayu dari Kayu Ceria sangat berkualitas dan aman untuk anak saya. Dia sangat suka bermain puzzle alfabetnya!",
                rating: 5,
              },
              {
                name: "Pak Budi",
                text: "Produk handmade yang luar biasa! Anak-anak jadi lebih kreatif sejak bermain dengan balok susun ini.",
                rating: 5,
              },
              {
                name: "Ibu Maya",
                text: "Pelayanan sangat ramah dan pengiriman cepat. Kereta api kayunya menjadi mainan favorit anak saya.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-wood-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-toy-yellow text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-wood-700 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="font-semibold text-wood-800">
                    - {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-wood-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
            {t.home.newsletter.title}
          </h2>
          <p className="text-xl text-wood-600 max-w-2xl mx-auto mb-8">
            {t.home.newsletter.subtitle}
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder={t.home.newsletter.placeholder}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="flex-grow mb-2 sm:mb-0 sm:mr-2"
              required
            />
            <Button type="submit" className="bg-wood-500 hover:bg-wood-600">
              {t.home.newsletter.subscribe}
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Index;
