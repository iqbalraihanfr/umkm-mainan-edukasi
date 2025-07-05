
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import BackToTop from './BackToTop';
import BottomNavigation from './BottomNavigation';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-wood-50">
      <Header />
      <Breadcrumb />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <BottomNavigation />
    </div>
  );
};

export default Layout;
