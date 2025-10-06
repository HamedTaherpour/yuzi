import { Product } from "./products";

export interface Vendor {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  avatar: string;
  specialty: string;
  description: string;
  products: Product[];
}

export const topVendors: Vendor[] = [
  {
    id: "1",
    name: "کارگاه فرش بافی کاشان",
    location: "کاشان، اصفهان",
    rating: 4.9,
    reviewCount: 156,
    avatar: "/img/vendor-avatars/traditional-crafts.png",
    specialty: "فرش‌های دست‌باف",
    description: "بیش از 50 سال تجربه در بافت فرش‌های اصیل کاشان",
    products: [
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
      }
    ]
  },
  {
    id: "2",
    name: "هنرمند سفال‌گر لاله‌جین",
    location: "لاله‌جین، همدان",
    rating: 4.8,
    reviewCount: 89,
    avatar: "/img/vendor-avatars/pottery-workshop.png",
    specialty: "سفال و سرامیک",
    description: "هنرمند برجسته در زمینه سفال‌گری سنتی لاله‌جین",
    products: [
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
      }
    ]
  },
  {
    id: "3",
    name: "گالری جواهرات قشم",
    location: "قشم، هرمزگان",
    rating: 4.9,
    reviewCount: 67,
    avatar: "/img/vendor-avatars/traditional-crafts.png",
    specialty: "جواهرات محلی",
    description: "طراح و تولیدکننده جواهرات با سنگ‌های طبیعی قشم",
    products: [
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
      }
    ]
  },
  {
    id: "4",
    name: "کارگاه چوب‌تراشی ماسوله",
    location: "ماسوله، گیلان",
    rating: 4.7,
    reviewCount: 43,
    avatar: "/img/vendor-avatars/metalwork-shop.png",
    specialty: "صنایع چوبی",
    description: "استادکار در زمینه صنایع چوبی و منبت‌کاری",
    products: [
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
      }
    ]
  },
  {
    id: "5",
    name: "آژانس طبیعت‌گردی شمال",
    location: "رشت، گیلان",
    rating: 4.8,
    reviewCount: 124,
    avatar: "/img/category/nature-tourism.jpeg",
    specialty: "خدمات گردشگری",
    description: "مشاور و راهنمای تورهای طبیعت‌گردی شمال ایران",
    products: [
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
      }
    ]
  },
  {
    id: "6",
    name: "گالری هنرهای سنتی",
    location: "اصفهان",
    rating: 4.9,
    reviewCount: 89,
    avatar: "/img/vendor-avatars/traditional-crafts.png",
    specialty: "هنرهای تجسمی",
    description: "مجموعه‌ای از بهترین آثار هنری و مینیاتورهای اصفهان",
    products: [
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
      }
    ]
  },
  {
    id: "7",
    name: "بازار صنایع دستی تبریز",
    location: "تبریز، آذربایجان شرقی",
    rating: 4.7,
    reviewCount: 203,
    avatar: "/img/vendor-avatars/traditional-crafts.png",
    specialty: "صنایع دستی",
    description: "مرکز تولید و فروش صنایع دستی اصیل تبریز",
    products: [
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
      }
    ]
  },
  {
    id: "8",
    name: "مرکز تجربه‌های محلی گیلان",
    location: "رشت، گیلان",
    rating: 4.8,
    reviewCount: 145,
    avatar: "/img/category/cooking-workshop.png",
    specialty: "تجربه‌های محلی",
    description: "برگزاری تورهای آشپزی و کارگاه‌های صنایع دستی محلی",
    products: [
      {
        id: "10",
        title: "تور آشپزی محلی گیلان",
        price: 280000,
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
      }
    ]
  },
  {
    id: "9",
    name: "اقامتگاه سنتی یزد",
    location: "یزد",
    rating: 4.6,
    reviewCount: 78,
    avatar: "/img/category/nature-tourism.jpeg",
    specialty: "اقامتگاه بوم‌گردی",
    description: "اقامتگاه سنتی با معماری اصیل یزدی",
    products: [
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
      }
    ]
  },
  {
    id: "10",
    name: "مرکز آموزش صنایع دستی",
    location: "کرمان",
    rating: 4.9,
    reviewCount: 92,
    avatar: "/img/vendor-avatars/traditional-crafts.png",
    specialty: "کارگاه‌های آموزشی",
    description: "آموزش صنایع دستی سنتی و برگزاری کارگاه‌های آموزشی",
    products: [
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
      }
    ]
  }
];
