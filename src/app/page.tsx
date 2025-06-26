"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
// import { products } from '@/data/products';
import { ArrowRight, Leaf, Award, Heart, Users } from "lucide-react";
import Link from "next/link";
// import ProductCard from '@/components/ProductCard';
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LoadingSkeleton from "@/components/LoadingSkeleton";
// import QuickViewModal from '@/components/QuickViewModal';

const Index = () => {
  const { t } = useLanguage();
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(true);
  // const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  // const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  // const handleQuickView = (product: any) => {
  //   setQuickViewProduct(product);
  //   setIsQuickViewOpen(true);
  // };

  // const featuredProducts = products.slice(0, 3);
  const categories = [
    {
      id: "home-decor",
      name: t.categories.homeDecor,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      count: "15+ Products",
    },
    {
      id: "educational-toys",
      name: t.categories.educationalToys,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
      count: "12+ Products",
    },
    {
      id: "furniture",
      name: t.categories.furniture,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      count: "8+ Products",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      titleId: "Ramah Lingkungan",
      desc: "Sustainable materials",
      descId: "Bahan berkelanjutan",
    },
    {
      icon: Award,
      title: "Quality Crafted",
      titleId: "Kualitas Terjamin",
      desc: "Handmade excellence",
      descId: "Keunggulan buatan tangan",
    },
    {
      icon: Heart,
      title: "Made with Love",
      titleId: "Dibuat dengan Cinta",
      desc: "Passion in every piece",
      descId: "Passion di setiap karya",
    },
    {
      icon: Users,
      title: "Family Business",
      titleId: "Bisnis Keluarga",
      desc: "Traditional heritage",
      descId: "Warisan tradisional",
    },
  ];

  if (isLoading) {
    return (
      <div className="w-full">
        {/* Hero Skeleton */}
        <div className="min-h-screen bg-gray-200 animate-pulse"></div>

        {/* Featured Products Skeleton */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <LoadingSkeleton key={i} type="card" />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-wood-50 to-craft-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop')`,
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="font-inter text-lg md:text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-300 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <href
            to="/products"
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-wood-600 hover:bg-wood-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in animation-delay-600 shadow-lg hover:shadow-xl"
          >
            {t.hero.cta}
            <ArrowRight
              className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
              size={20}
            />
          </href>
        </div>
      </section>

      {/* Featured Products */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            id="featured"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              animatedElements.has('featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.home.featured}</h2>
            <div className="w-24 h-1 bg-wood-600 mx-auto"></div>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
              animatedElements.has('featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <ProductCard product={product} onQuickView={() => handleQuickView(product)} />
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Categories */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div
            id="categories"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              animatedElements.has("categories")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.home.categories}
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${
              animatedElements.has("categories")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {categories.map((category, index) => (
              <href
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${category.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </href>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              id="story"
              data-animate
              className={`transition-all duration-1000 ${
                animatedElements.has("story")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.home.story}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {t.home.storyText}
              </p>
              <href
                to="/about"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </href>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${
                animatedElements.has("story")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Values */}
      <section className="py-16 md:py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            id="values"
            data-animate
            className={`text-center mb-12 transition-all duration-1000 ${
              animatedElements.has("values")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.home.values}
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${
              animatedElements.has("values")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-amber-100 text-sm md:text-base">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.home.newsletter}
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            {t.home.newsletterText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Quick View Modal */}
      {/*
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
      */}
    </div>
  );
};

export default Index;
