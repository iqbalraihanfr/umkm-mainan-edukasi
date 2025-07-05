import { Product } from "@/types";

export const products: Product[] = [
  // Educational Toys
  {
    id: "ET001",
    name: "Puzzle Alfabet Kayu",
    nameEn: "Wooden Alphabet Puzzle",
    description:
      "Puzzle edukatif untuk belajar huruf dan melatih motorik halus. Terbuat dari kayu pinus dengan cat non-toxic.",
    descriptionEn:
      "Educational puzzle for learning letters and fine motor skills. Made from pine wood with non-toxic paint.",
    price: 85000,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Educational Toys",
    categoryEn: "Educational Toys",
    ageRange: "3-6 tahun",
    materials: ["Kayu Pinus", "Cat Non-Toxic"],
    dimensions: { length: 30, width: 20, height: 2 },
    weight: 0.5,
    inStock: true,
    featured: true,
    slug: "puzzle-alfabet-kayu",
  },
  {
    id: "ET002",
    name: "Balok Susun Warna-Warni",
    nameEn: "Colorful Stacking Blocks",
    description:
      "Set 50 balok kayu warna-warni untuk mengembangkan kreativitas dan imajinasi anak dalam berbagai bentuk.",
    descriptionEn:
      "Set of 50 colorful wooden blocks to develop creativity and imagination in various shapes.",
    price: 120000,
    images: ["/placeholder.svg"],
    category: "Educational Toys",
    categoryEn: "Educational Toys",
    ageRange: "2-5 tahun",
    materials: ["Kayu Mahoni", "Cat Water-based"],
    dimensions: { length: 25, width: 25, height: 15 },
    weight: 1.2,
    inStock: true,
    featured: false,
    slug: "balok-susun-warna-warni",
  },

  // Book Shelves
  {
    id: "BS001",
    name: "Rak Buku Dinding Hewan",
    nameEn: "Animal Wall Book Shelf",
    description:
      "Rak buku dinding berbentuk jerapah yang lucu untuk menyimpan koleksi buku cerita anak.",
    descriptionEn:
      "A cute giraffe-shaped wall bookshelf to store children's storybook collections.",
    price: 350000,
    images: ["/placeholder.svg"],
    category: "Book Shelves",
    categoryEn: "Book Shelves",
    ageRange: "Semua Usia",
    materials: ["Kayu Jati Belanda", "Finishing Natural Oil"],
    dimensions: { length: 60, width: 15, height: 120 },
    weight: 5,
    inStock: true,
    featured: true,
    slug: "rak-buku-dinding-hewan",
  },
  {
    id: "BS002",
    name: "Rak Buku Berputar",
    nameEn: "Revolving Book Shelf",
    description:
      "Rak buku 3 tingkat yang bisa berputar 360 derajat, hemat tempat dan menampung banyak buku.",
    descriptionEn:
      "A 3-tier bookshelf that can rotate 360 degrees, saving space and holding many books.",
    price: 750000,
    images: ["/placeholder.svg"],
    category: "Book Shelves",
    categoryEn: "Book Shelves",
    ageRange: "Semua Usia",
    materials: ["Plywood", "Laminasi HPL"],
    dimensions: { length: 50, width: 50, height: 100 },
    weight: 10,
    inStock: false,
    featured: false,
    slug: "rak-buku-berputar",
  },

  // Data Boards
  {
    id: "DB001",
    name: "Papan Tulis Dua Sisi",
    nameEn: "Double-Sided Easel Board",
    description:
      "Papan tulis berdiri dengan dua sisi: blackboard untuk kapur dan whiteboard untuk spidol, plus rol kertas.",
    descriptionEn:
      "Standing easel with two sides: a blackboard for chalk and a whiteboard for markers, plus a paper roll.",
    price: 450000,
    images: ["/placeholder.svg"],
    category: "Data Boards",
    categoryEn: "Data Boards",
    ageRange: "4+ tahun",
    materials: ["Kayu Pinus", "Panel MDF"],
    dimensions: { length: 55, width: 45, height: 110 },
    weight: 6,
    inStock: true,
    featured: false,
    slug: "papan-tulis-dua-sisi",
  },

  // Tables & Chairs
  {
    id: "TC001",
    name: "Set Meja Kursi Belajar Anak",
    nameEn: "Kids Study Table and Chair Set",
    description:
      "Set meja dan kursi yang didesain ergonomis untuk postur anak saat belajar atau bermain.",
    descriptionEn:
      "An ergonomically designed table and chair set for a child's posture during study or play.",
    price: 650000,
    images: ["/placeholder.svg"],
    category: "Tables & Chairs",
    categoryEn: "Tables & Chairs",
    ageRange: "3-8 tahun",
    materials: ["Kayu Karet", "Finishing Duco"],
    dimensions: { length: 70, width: 50, height: 55 },
    weight: 8,
    inStock: true,
    featured: false,
    slug: "set-meja-kursi-belajar-anak",
  },
];
