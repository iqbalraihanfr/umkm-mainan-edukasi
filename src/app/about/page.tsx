
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { language, t } = useLanguage();

  const values = [
    {
      title: language === 'id' ? 'Ramah Lingkungan' : 'Eco-Friendly',
      description: language === 'id' 
        ? 'Menggunakan bahan kayu berkualitas tinggi yang aman dan ramah lingkungan'
        : 'Using high-quality wood materials that are safe and environmentally friendly',
      icon: '🌱'
    },
    {
      title: language === 'id' ? 'Handmade' : 'Handcrafted',
      description: language === 'id'
        ? 'Setiap produk dibuat dengan tangan oleh pengrajin berpengalaman'
        : 'Every product is handcrafted by experienced artisans',
      icon: '✋'
    },
    {
      title: language === 'id' ? 'Edukatif' : 'Educational',
      description: language === 'id'
        ? 'Dirancang untuk mengembangkan kreativitas dan kecerdasan anak'
        : 'Designed to develop children\'s creativity and intelligence',
      icon: '🧠'
    },
    {
      title: language === 'id' ? 'Aman' : 'Safe',
      description: language === 'id'
        ? 'Menggunakan cat non-toxic dan finishing yang aman untuk anak-anak'
        : 'Using non-toxic paint and child-safe finishing',
      icon: '🛡️'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: language === 'id' ? 'Awal Mula' : 'The Beginning',
      description: language === 'id'
        ? 'Pak Budi memulai usaha kecil membuat mainan kayu untuk cucunya'
        : 'Mr. Budi started a small business making wooden toys for his grandchildren'
    },
    {
      year: '2019',
      title: language === 'id' ? 'Berkembang' : 'Growing',
      description: language === 'id'
        ? 'Mulai menerima pesanan dari tetangga dan teman-teman'
        : 'Started receiving orders from neighbors and friends'
    },
    {
      year: '2021',
      title: language === 'id' ? 'Online' : 'Going Online',
      description: language === 'id'
        ? 'Meluncurkan toko online dan media sosial'
        : 'Launched online store and social media presence'
    },
    {
      year: '2024',
      title: language === 'id' ? 'Ekspansi' : 'Expansion',
      description: language === 'id'
        ? 'Mengembangkan produk baru dan jangkauan ke seluruh Indonesia'
        : 'Developing new products and expanding reach across Indonesia'
    }
  ];

  return (
    <div className="min-h-screen bg-wood-50">
      {/* Hero Section */}
      <section className="bg-wood-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-wood-900 mb-6">
              {language === 'id' ? 'Tentang Kayu Ceria' : 'About Kayu Ceria'}
            </h1>
            <p className="text-xl text-wood-700 max-w-3xl mx-auto">
              {language === 'id'
                ? 'Kami adalah UMKM keluarga yang berdedikasi menciptakan mainan kayu edukatif berkualitas tinggi untuk anak-anak Indonesia.'
                : 'We are a family UMKM dedicated to creating high-quality educational wooden toys for Indonesian children.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-3xl text-wood-900 mb-6">
                {language === 'id' ? 'Cerita Kami' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-wood-700">
                <p>
                  {language === 'id'
                    ? 'Kayu Ceria dimulai dari kecintaan seorang kakek terhadap cucunya. Pak Budi, seorang pengrajin kayu berpengalaman, mulai membuat mainan sederhana untuk menghibur cucu-cucunya di rumah.'
                    : 'Kayu Ceria started from a grandfather\'s love for his grandchildren. Mr. Budi, an experienced wood craftsman, began making simple toys to entertain his grandchildren at home.'
                  }
                </p>
                <p>
                  {language === 'id'
                    ? 'Melihat antusiasme anak-anak dan permintaan dari para orang tua di sekitar, kami memutuskan untuk mengembangkan usaha ini menjadi UMKM yang melayani kebutuhan mainan edukatif di seluruh Indonesia.'
                    : 'Seeing the children\'s enthusiasm and requests from parents around, we decided to develop this business into a UMKM serving educational toy needs throughout Indonesia.'
                  }
                </p>
                <p>
                  {language === 'id'
                    ? 'Setiap mainan yang kami buat mengandung nilai-nilai pembelajaran, kreativitas, dan keamanan yang tinggi. Kami bangga menjadi bagian dari perjalanan tumbuh kembang anak-anak Indonesia.'
                    : 'Every toy we make contains high learning values, creativity, and safety. We are proud to be part of the growth and development journey of Indonesian children.'
                  }
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Our workshop"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-wood-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
              {language === 'id' ? 'Nilai-Nilai Kami' : 'Our Values'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-wood-200">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-wood-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
              {language === 'id' ? 'Perjalanan Kami' : 'Our Journey'}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-6">
                  <span className="inline-block bg-wood-500 text-white px-3 py-1 rounded-full font-bold">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 border-l-2 border-wood-200 pl-6 pb-8">
                  <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-wood-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-wood-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-wood-900 mb-4">
              {language === 'id' ? 'Tim Kami' : 'Our Team'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-wood-200">
              <CardContent className="p-6">
                <img
                  src="/placeholder.svg"
                  alt="Pak Budi"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                  Pak Budi
                </h3>
                <p className="text-wood-600 mb-2">
                  {language === 'id' ? 'Pendiri & Master Craftsman' : 'Founder & Master Craftsman'}
                </p>
                <p className="text-sm text-wood-500">
                  {language === 'id' ? '25+ tahun pengalaman' : '25+ years experience'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-wood-200">
              <CardContent className="p-6">
                <img
                  src="/placeholder.svg"
                  alt="Bu Sari"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                  Bu Sari
                </h3>
                <p className="text-wood-600 mb-2">
                  {language === 'id' ? 'Desainer & Quality Control' : 'Designer & Quality Control'}
                </p>
                <p className="text-sm text-wood-500">
                  {language === 'id' ? 'Ahli desain mainan anak' : 'Children\'s toy design expert'}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-wood-200">
              <CardContent className="p-6">
                <img
                  src="/placeholder.svg"
                  alt="Andi"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                  Andi
                </h3>
                <p className="text-wood-600 mb-2">
                  {language === 'id' ? 'Digital Marketing' : 'Digital Marketing'}
                </p>
                <p className="text-sm text-wood-500">
                  {language === 'id' ? 'Mengelola media sosial & online' : 'Managing social media & online'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
