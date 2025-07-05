'use client'
import React from 'react';
import { Clock, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BusinessHours: React.FC = () => {
  const { language } = useLanguage();
  
  const getCurrentTime = () => {
    return new Date();
  };

  const isBusinessOpen = () => {
    const now = getCurrentTime();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Open Monday-Friday 8:00-17:00, Saturday 8:00-15:00, Closed Sunday
    if (day === 0) return false; // Closed on Sunday
    if (day === 6) return hour >= 8 && hour < 15; // Saturday
    return hour >= 8 && hour < 17; // Monday-Friday
  };

  const getNextOpenTime = () => {
    const now = getCurrentTime();
    const day = now.getDay();
    const hour = now.getHours();
    
    if (day === 0) { // Sunday
      return language === 'id' ? 'Buka Senin jam 08:00' : 'Opens Monday at 08:00';
    } else if (day === 6 && hour >= 15) { // Saturday after 15:00
      return language === 'id' ? 'Buka Senin jam 08:00' : 'Opens Monday at 08:00';
    } else if (day >= 1 && day <= 5 && hour >= 17) { // Weekday after 17:00
      return language === 'id' ? 'Buka besok jam 08:00' : 'Opens tomorrow at 08:00';
    } else if (hour < 8) { // Before opening
      return language === 'id' ? 'Buka hari ini jam 08:00' : 'Opens today at 08:00';
    }
    
    return '';
  };

  const isOpen = isBusinessOpen();

  return (
    <div className="bg-white border border-wood-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <Clock className="w-5 h-5 text-wood-600" />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-wood-800">
              {language === 'id' ? 'Jam Operasional' : 'Business Hours'}
            </span>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
              isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`} />
              <span>{isOpen ? (language === 'id' ? 'Buka' : 'Open') : (language === 'id' ? 'Tutup' : 'Closed')}</span>
            </div>
          </div>
          <div className="text-sm text-wood-600 mt-1">
            {isOpen ? (
              language === 'id' ? 'Senin-Jumat: 08:00-17:00, Sabtu: 08:00-15:00' : 'Mon-Fri: 08:00-17:00, Sat: 08:00-15:00'
            ) : (
              getNextOpenTime()
            )}
          </div>
        </div>
        <button
          onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
          className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isOpen 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-wood-100 hover:bg-wood-200 text-wood-700'
          }`}
        >
          <Phone className="w-4 h-4" />
          <span>{language === 'id' ? 'Hubungi' : 'Contact'}</span>
        </button>
      </div>
    </div>
  );
};

export default BusinessHours;
