
'use client';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Heart, Users, Leaf, Handshake } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truculenta, Fredoka } from 'next/font/google';

const poppins = Truculenta({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});


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
  const stats = [
    {
      icon: Handshake,
      value: '10+',
      label: 'Mitra UMKM',
    },
    {
      icon: Heart,
      value: '50+',
      label: 'Jenis Produk',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Tenaga Kerja',
    },
  ];
  const imageUrls = [
    'https://www.plantoys.com/cdn/shop/files/5468_-_Main_-_sq.jpg?v=1736326555&width=720',
    'https://www.plantoys.com/cdn/shop/files/5513_-_Main_-_sq.jpg?v=1736325206&width=720',
    'https://www.plantoys.com/cdn/shop/files/3601_-_Main_-_sq.jpg?v=1740988991&width=720',
    'https://www.plantoys.com/cdn/shop/files/5264_-_Main_-_sq.jpg?v=1737537624&width=720',
    'https://www.plantoys.com/cdn/shop/files/4646_-_Main_-_sq.jpg?v=1737706381&width=720',

  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageUrls.length);
    }, 3000); // ganti setiap 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white-50">
      <Navbar />
      {/* Hero section */}
      <section className="relative h-[470px] bg-gradient-to-r from-blue-500 via-purple-400 to-green-400 text-white overflow-hidden">
        {/* Efek Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-300 opacity-30 blur-3xl rounded-full"></div>

        {/* Konten Tengah Hero */}
        <div className="flex flex-col items-center justify-center h-full z-10 relative text-center px-4">
          <button className="bg-white text-purple-700 text-sm font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition mb-4">
            Our Journey
          </button>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            UMKM {' '}
            <span className="text-yellow-400">Legowo</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Transforming education through innovative toys while empowering Indonesian
            communities to thrive in the global marketplace.
          </p>
        </div>
      </section>

      {/* Statistik di bawah tapi tidak menambah tinggi hero */}
      <section>
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 translate-y-4/2 z-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-lg w-56 p-4 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className={`${fredoka.className} text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent`}>{stat.value}</div>
                <div className={`${fredoka.className} text-gray-600 text-sm font-medium`}>
                  {stat.label}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* OUR STORY Section (Setelah Statistik) */}
      <section className="relative w-full overflow-hidden mt-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Kiri: Teks */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-20 z-10">
            <h2 className={`${poppins.className} text-5xl font-bold text-[#5D2C16] mb-6`}>CERITA KAMI</h2>
            <p className={`${fredoka.className} text-[#5D2C16] text-lg mb-4 leading-relaxed max-w-xl`}>
              Misi kami adalah menumbuhkan imajinasi dan rasa ingin tahu anak-anak sejak usia dini melalui mainan edukatif yang ramah anak, mulai dari bayi hingga anak usia sekolah.
              Kami juga menghadirkan produk dekorasi rumah yang estetik dan bernilai seni, buatan tangan pengrajin lokal, sebagai bentuk kontribusi dalam melestarikan budaya Indonesia.
            </p>

            <p className={`${fredoka.className}  text-[#5D2C16] text-lg font-semibold`}>
              Mainan Edukatif & Dekorasi Bermakna, untuk Masa Depan Cerah Anak Indonesia.<sup>®</sup>
            </p>
          </div>

          {/* Kanan: Gambar berubah setiap 4 detik */}
          <div className="relative w-full h-[500px] hidden md:flex items-center justify-center overflow-hidden">
            <div className="w-[60%] h-[60%] rounded-lg overflow-hidden ">
              <img
                key={currentImage}
                src={imageUrls[currentImage]}
                alt="Our Story"
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>
      {/* We Believe In Section */}

      <section className=" bg-white py-0"> <div className="max-w-6xl mx-auto px-4 text-center"> <h2 className={`${poppins.className} text-3xl md:text-4xl font-bold text-blue-800 mb-12`}>WE BELIEVE IN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/s31.png"
              alt="Open-Ended Play"
              className="h-28 w-auto mb-6"
            />
            <p className={`${poppins.className} text-blue-800 font-semibold text-lg`}>Open-Ended Play</p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/s32.png"
              alt="Screen-Free Time"
              className="h-28 w-auto mb-6"
            />
            <p className={`${poppins.className} text-blue-800 font-semibold text-lg`}>Screen-Free Time</p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/images/s33.png"
              alt="Sustainably Made Toys"
              className="h-28 w-auto mb-6"
            />
            <p className={`${poppins.className} text-blue-800 font-semibold text-lg`}>Sustainably Made Toys</p>
          </div>
        </div>
      </div></section>

      {/* About Us Short Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-8">
            {/* Left Icon */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/rocket.png"
                alt="Rocket Icon"
                className="h-28 w-auto"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className={`${poppins.className} text-2xl font-bold text-center text-[#1E3476] mb-4`}>Tentang Kami</h2>
              <p className={`${fredoka.className} text-gray-800 text-lg leading-relaxed text-center`}>
                Dari mainan kayu klasik hingga set bermain peran yang realistis, produk Legowo menginspirasi imajinasi dan kreativitas anak melalui permainan tanpa layar dan terbuka. Kami menciptakan mainan berkualitas tinggi dengan penuh ketelitian agar dapat diwariskan dari generasi ke generasi. Saat anak bermain dengan Legowo, segalanya menjadi mungkin!
              </p>
            </div>

            {/* Right Icon */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/astronot.png"
                alt="Astronaut Icon"
                className="h-28 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Vision & Mission */}
        <section className="py-16 px-6 md:px-24 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c2957] mb-14">
            VISI & MISI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#f9f9fb] p-6 rounded-2xl shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/s33.png"
                  alt="Sustainably Made Toys"
                  className="h-28 w-auto mb-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1c2957] mb-2">It’s Imaginative</h3>
              <p className="text-[#3e3e3e] text-base">
                Melestarikan keahlian tradisional pengrajin Indonesia.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f9f9fb] p-6 rounded-2xl shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/s33.png"
                  alt="Sustainably Made Toys"
                  className="h-28 w-auto mb-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1c2957] mb-2">It’s Kid-Powered</h3>
              <p className="text-[#3e3e3e] text-base">
                Memberdayakan pengrajin lokal melalui ekonomi berkelanjutan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f9f9fb] p-6 rounded-2xl shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/s33.png"
                  alt="Sustainably Made Toys"
                  className="h-28 w-auto mb-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1c2957] mb-2">It’s Skill Building</h3>
              <p className="text-[#3e3e3e] text-base">
                Mengangkat kualitas produk lokal ke pasar internasional.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f9f9fb] p-6 rounded-2xl shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/s33.png"
                  alt="Sustainably Made Toys"
                  className="h-28 w-auto mb-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1c2957] mb-2">It’s Fun!</h3>
              <p className="text-[#3e3e3e] text-base">
                Menghasilkan produk kayu yang estetik dan ramah lingkungan.
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
      <Footer />
    </div>
  );
};

export default AboutPage;
