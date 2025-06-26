
'use client';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-amber-900 font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Legowo</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-amber-200 hover:text-white transition-colors duration-200">{t.nav.home}</Link></li>
              <li><Link to="/products" className="text-amber-200 hover:text-white transition-colors duration-200">{t.nav.products}</Link></li>
              <li><Link to="/about" className="text-amber-200 hover:text-white transition-colors duration-200">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="text-amber-200 hover:text-white transition-colors duration-200">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footer.categories}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">{t.categories.homeDecor}</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">{t.categories.educationalToys}</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors duration-200">{t.categories.furniture}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-200" />
                <span className="text-amber-100 text-sm">Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-200" />
                <span className="text-amber-100 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-200" />
                <span className="text-amber-100 text-sm">hello@legowo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200 text-sm">
            © 2024 Legowo. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
