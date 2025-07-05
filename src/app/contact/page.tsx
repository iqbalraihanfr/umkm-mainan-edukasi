
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to WhatsApp
    const message = `Halo, saya ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: language === 'id' ? 'Telepon/WhatsApp' : 'Phone/WhatsApp',
      value: '+62 812-3456-7890',
      action: () => window.open('https://wa.me/6281234567890', '_blank')
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'info@kayuceria.com',
      action: () => window.open('mailto:info@kayuceria.com', '_blank')
    },
    {
      icon: '📍',
      title: language === 'id' ? 'Alamat' : 'Address',
      value: language === 'id' 
        ? 'Jl. Kerajinan No. 123, Bantul, Yogyakarta 55184'
        : '123 Craft Street, Bantul, Yogyakarta 55184',
      action: () => window.open('https://maps.google.com', '_blank')
    },
    {
      icon: '🕒',
      title: language === 'id' ? 'Jam Operasional' : 'Operating Hours',
      value: language === 'id' 
        ? 'Senin - Jumat: 08.00 - 17.00 WIB'
        : 'Monday - Friday: 08.00 - 17.00 WIB',
      action: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-wood-50">
      {/* Header */}
      <section className="bg-wood-gradient py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-wood-900 mb-6">
              {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </h1>
            <p className="text-xl text-wood-700 max-w-2xl mx-auto">
              {language === 'id'
                ? 'Kami siap membantu Anda! Jangan ragu untuk menghubungi kami kapan saja.'
                : 'We\'re here to help! Don\'t hesitate to contact us anytime.'
              }
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-wood-200">
            <CardContent className="p-8">
              <h2 className="font-playfair font-bold text-2xl text-wood-900 mb-6">
                {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-wood-700 font-medium mb-2">
                    {language === 'id' ? 'Nama Lengkap' : 'Full Name'}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-wood-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-wood-700 font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-wood-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-wood-700 font-medium mb-2">
                    {language === 'id' ? 'Subjek' : 'Subject'}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-wood-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-wood-700 font-medium mb-2">
                    {language === 'id' ? 'Pesan' : 'Message'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border border-wood-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-wood-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-wood-500 hover:bg-wood-600 text-white"
                >
                  {language === 'id' ? 'Kirim Pesan' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair font-bold text-2xl text-wood-900 mb-6">
                {language === 'id' ? 'Informasi Kontak' : 'Contact Information'}
              </h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className={`border-wood-200 ${info.action ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                    onClick={info.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-wood-800 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-wood-600">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-wood-200">
              <CardContent className="p-0">
                <div className="h-64 bg-wood-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-wood-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="font-medium">
                      {language === 'id' ? 'Peta Lokasi Kami' : 'Our Location Map'}
                    </p>
                    <p className="text-sm">
                      {language === 'id' ? 'Klik untuk buka di Google Maps' : 'Click to open in Google Maps'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick WhatsApp */}
            <Card className="border-wood-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-playfair font-semibold text-xl text-wood-800 mb-2">
                  {language === 'id' ? 'Chat Langsung via WhatsApp' : 'Chat Directly via WhatsApp'}
                </h3>
                <p className="text-wood-600 mb-4">
                  {language === 'id' 
                    ? 'Dapatkan respon cepat untuk pertanyaan atau pesanan Anda'
                    : 'Get quick response for your questions or orders'
                  }
                </p>
                <Button
                  onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {language === 'id' ? 'Chat Sekarang' : 'Chat Now'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
