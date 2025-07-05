import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import BottomNavigation from "@/components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kayu Ceria",
  description: "UMKM Mainan Edukasi Anak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-wood-50">
            <Header />
            <Breadcrumb />
            <main className="flex-1 pb-20 md:pb-0">{children}</main>
            <Footer />
            <BackToTop />
            <BottomNavigation />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
