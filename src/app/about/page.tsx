
'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Heart, Users, Leaf } from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      titleId: 'Passion',
      description: 'Every piece is crafted with love and dedication to traditional Indonesian woodworking.',
      descriptionId: 'Setiap karya dibuat dengan cinta dan dedikasi terhadap kerajinan kayu tradisional Indonesia.',
    },
    {
      icon: Award,
      title: 'Quality',
      titleId: 'Kualitas',
      description: 'We use only the finest materials and time-tested techniques to ensure lasting beauty.',
      descriptionId: 'Kami hanya menggunakan bahan terbaik dan teknik yang telah teruji waktu untuk memastikan keindahan yang tahan lama.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      titleId: 'Keberlanjutan',
      description: 'Our commitment to eco-friendly practices protects the environment for future generations.',
      descriptionId: 'Komitmen kami terhadap praktik ramah lingkungan melindungi lingkungan untuk generasi mendatang.',
    },
    {
      icon: Users,
      title: 'Community',
      titleId: 'Komunitas',
      description: 'We support local artisans and contribute to the preservation of traditional crafts.',
      descriptionId: 'Kami mendukung pengrajin lokal dan berkontribusi pada pelestarian kerajinan tradisional.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-amber-800 to-amber-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">{t.about.title}</h1>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.about.story}</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Legowo was born in the heart of Yogyakarta, where traditional Indonesian craftsmanship meets modern design sensibilities. Our journey began with a simple belief: that handcrafted wooden products should not only be beautiful but also carry the soul of their creators.
                </p>
                <p>
                  Founded by a family of skilled artisans, we've been dedicated to preserving the ancient art of woodworking while adapting to contemporary needs. Each piece in our collection tells a story of patience, skill, and deep respect for the natural materials we work with.
                </p>
                <p>
                  Today, we're proud to share our heritage with families around the world, creating products that bring warmth, character, and timeless beauty to homes everywhere.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
                alt="Our workshop"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-6">{t.about.vision}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the world's most trusted source of handcrafted wooden products, preserving traditional Indonesian craftsmanship while creating sustainable livelihoods for local artisans.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-amber-800 mb-6">{t.about.mission}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To create beautiful, sustainable wooden products that enhance lives, support traditional craftsmanship, and contribute to environmental conservation through responsible sourcing and production.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Workshop</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
            ].map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`Workshop image ${index + 1}`}
                  className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
