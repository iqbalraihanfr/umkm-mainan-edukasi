import type { Metadata } from "next";
import { Inter, Playfair_Display, Knewave } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "components/Header";
import Footer from "components/Footer";
import Breadcrumb from "components/Breadcrumb";
import BackToTop from "components/BackToTop";
import BottomNavigation from "components/BottomNavigation";

// const inter = Inter({ subsets: ["latin"] });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Perbaikan: Menggunakan variabel yang benar untuk Inter
});

// 2. Setup font Knewave untuk judul atau display
const knewave = Knewave({
  subsets: ["latin"],
  weight: "400", // Knewave hanya punya weight 400
  style: "normal",
  variable: "--font-knewave", // Buat variabel CSS untuk Knewave
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Mendefinisikan variabel CSS untuk Playfair Display
});

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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${knewave.variable}`}
    >
      <body className="font-display">
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
