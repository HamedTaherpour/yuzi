export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: string;
  images: string[];
  hasVideo: boolean;
  videoCount?: number;
  rating?: number;
  reviewCount?: number;
  seller: {
    name: string;
    location: string;
  };
  description: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    title: "فرش دست‌باف کاشان",
    price: 2500000,
    originalPrice: 3000000,
    currency: "تومان",
    category: "textiles",
    images: ["/img/category/textiles-carpets.png"],
    hasVideo: true,
    videoCount: 2,
    rating: 4.8,
    reviewCount: 23,
    seller: {
      name: "کارگاه فرش بافی کاشان",
      location: "کاشان، اصفهان"
    },
    description: "فرش دست‌باف اصیل کاشان با نقش‌های سنتی",
    tags: ["دست‌باف", "کاشان", "سنتی"],
    isNew: true
  },
  {
    id: "2",
    title: "سفال دست‌ساز لاله‌جین",
    price: 850000,
    currency: "تومان",
    category: "pottery",
    images: ["/img/category/pottery-ceramics.jpeg"],
    hasVideo: false,
    rating: 4.6,
    reviewCount: 15,
    seller: {
      name: "هنرمند سفال‌گر لاله‌جین",
      location: "لاله‌جین، همدان"
    },
    description: "سفال دست‌ساز با تکنیک‌های سنتی لاله‌جین",
    tags: ["دست‌ساز", "لاله‌جین", "سفال"]
  },
  {
    id: "3",
    title: "جواهرات محلی قشم",
    price: 1200000,
    currency: "تومان",
    category: "jewelry",
    images: ["/img/category/jewelry.jpeg"],
    hasVideo: true,
    videoCount: 1,
    rating: 4.9,
    reviewCount: 8,
    seller: {
      name: "گالری جواهرات قشم",
      location: "قشم، هرمزگان"
    },
    description: "جواهرات محلی با سنگ‌های طبیعی قشم",
    tags: ["جواهرات", "قشم", "طبیعی"],
    isFeatured: true
  },
  {
    id: "4",
    title: "صنایع چوبی ماسوله",
    price: 450000,
    currency: "تومان",
    category: "wood-metal",
    images: ["/img/category/wood-metal-crafts.png"],
    hasVideo: false,
    rating: 4.7,
    reviewCount: 12,
    seller: {
      name: "کارگاه چوب‌تراشی ماسوله",
      location: "ماسوله، گیلان"
    },
    description: "صنایع چوبی دست‌ساز با چوب جنگلی ماسوله",
    tags: ["چوب", "ماسوله", "دست‌ساز"]
  },
  {
    id: "5",
    title: "تور طبیعت‌گردی شمال",
    price: 650000,
    currency: "تومان",
    category: "tourism",
    images: ["/img/category/nature-tourism.jpeg"],
    hasVideo: true,
    videoCount: 3,
    rating: 4.8,
    reviewCount: 45,
    seller: {
      name: "آژانس طبیعت‌گردی شمال",
      location: "رشت، گیلان"
    },
    description: "تور 3 روزه طبیعت‌گردی جنگل‌های شمال",
    tags: ["تور", "طبیعت", "شمال"],
    isNew: true
  },
  {
    id: "6",
    title: "اقامتگاه بوم‌گردی یزد",
    price: 350000,
    currency: "تومان",
    category: "accommodation",
    images: ["/img/category/nature-tourism.jpeg"],
    hasVideo: false,
    rating: 4.5,
    reviewCount: 28,
    seller: {
      name: "اقامتگاه سنتی یزد",
      location: "یزد"
    },
    description: "اقامتگاه بوم‌گردی با معماری سنتی یزد",
    tags: ["اقامتگاه", "بوم‌گردی", "یزد"]
  },
  {
    id: "7",
    title: "کارگاه گلیم‌بافی",
    price: 180000,
    currency: "تومان",
    category: "experiences",
    images: ["/img/category/textiles-carpets.png"],
    hasVideo: true,
    videoCount: 1,
    rating: 4.9,
    reviewCount: 16,
    seller: {
      name: "مرکز آموزش صنایع دستی",
      location: "کرمان"
    },
    description: "کارگاه آموزش گلیم‌بافی سنتی",
    tags: ["کارگاه", "گلیم", "آموزش"]
  },
  {
    id: "8",
    title: "نقاشی مینیاتور اصفهان",
    price: 950000,
    currency: "تومان",
    category: "visual-arts",
    images: ["/img/category/handicrafts.jpeg"],
    hasVideo: false,
    rating: 4.8,
    reviewCount: 9,
    seller: {
      name: "گالری هنرهای سنتی",
      location: "اصفهان"
    },
    description: "نقاشی مینیاتور اصیل با تکنیک‌های سنتی",
    tags: ["مینیاتور", "اصفهان", "هنری"]
  },
  {
    id: "9",
    title: "صنایع دستی تبریز",
    price: 750000,
    currency: "تومان",
    category: "handicrafts",
    images: ["/img/category/handicrafts.jpeg"],
    hasVideo: true,
    videoCount: 2,
    rating: 4.6,
    reviewCount: 21,
    seller: {
      name: "بازار صنایع دستی تبریز",
      location: "تبریز، آذربایجان شرقی"
    },
    description: "مجموعه صنایع دستی اصیل تبریز",
    tags: ["صنایع دستی", "تبریز", "مجموعه"]
  },
  {
    id: "10",
    title: "تور آشپزی محلی گیلان",
    price: 280000,
    originalPrice: 350000,
    currency: "تومان",
    category: "experiences",
    images: ["/img/category/cooking-workshop.png"],
    hasVideo: true,
    videoCount: 1,
    rating: 4.7,
    reviewCount: 18,
    seller: {
      name: "مرکز تجربه‌های محلی گیلان",
      location: "رشت، گیلان"
    },
    description: "تور آشپزی و تجربه غذاهای محلی گیلان",
    tags: ["آشپزی", "گیلان", "محلی"],
    isFeatured: true
  },
  {
    id: "11",
    title: "صنایع دستی زنجان",
    price: 650000,
    originalPrice: 800000,
    currency: "تومان",
    category: "handicrafts",
    images: ["/img/category/handicrafts.jpeg"],
    hasVideo: false,
    rating: 4.5,
    reviewCount: 32,
    seller: {
      name: "کارگاه صنایع دستی زنجان",
      location: "زنجان"
    },
    description: "صنایع دستی اصیل زنجان با تکنیک‌های سنتی",
    tags: ["صنایع دستی", "زنجان", "سنتی"]
  },
  {
    id: "12",
    title: "تور کویر نوردی یزد",
    price: 450000,
    originalPrice: 600000,
    currency: "تومان",
    category: "tourism",
    images: ["/img/category/nature-tourism.jpeg"],
    hasVideo: true,
    videoCount: 2,
    rating: 4.8,
    reviewCount: 67,
    seller: {
      name: "آژانس کویر نوردی یزد",
      location: "یزد"
    },
    description: "تور 2 روزه کویر نوردی و اقامت در کاروانسرا",
    tags: ["کویر", "یزد", "تور"]
  },
  {
    id: "13",
    title: "ظروف مسی اصفهان",
    price: 320000,
    originalPrice: 400000,
    currency: "تومان",
    category: "handicrafts",
    images: ["/img/category/wood-metal-crafts.png"],
    hasVideo: true,
    videoCount: 1,
    rating: 4.6,
    reviewCount: 28,
    seller: {
      name: "کارگاه مسگری اصفهان",
      location: "اصفهان"
    },
    description: "ظروف مسی دست‌ساز با تکنیک‌های سنتی",
    tags: ["مس", "اصفهان", "دست‌ساز"]
  },
  {
    id: "14",
    title: "اقامتگاه بوم‌گردی شیراز",
    price: 280000,
    originalPrice: 350000,
    currency: "تومان",
    category: "accommodation",
    images: ["/img/category/nature-tourism.jpeg"],
    hasVideo: false,
    rating: 4.7,
    reviewCount: 45,
    seller: {
      name: "اقامتگاه سنتی شیراز",
      location: "شیراز، فارس"
    },
    description: "اقامتگاه بوم‌گردی با معماری سنتی شیراز",
    tags: ["اقامتگاه", "بوم‌گردی", "شیراز"]
  },
  {
    id: "15",
    title: "کارگاه خاتم‌کاری",
    price: 180000,
    originalPrice: 250000,
    currency: "تومان",
    category: "experiences",
    images: ["/img/category/khatamkari-workshop.png"],
    hasVideo: true,
    videoCount: 1,
    rating: 4.9,
    reviewCount: 23,
    seller: {
      name: "مرکز آموزش خاتم‌کاری",
      location: "اصفهان"
    },
    description: "کارگاه آموزش خاتم‌کاری سنتی",
    tags: ["خاتم", "آموزش", "اصفهان"]
  }
];
