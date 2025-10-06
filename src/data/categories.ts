import { 
  Palette,
  Utensils,
  ShoppingBag,
  Gem,
  Hammer,
  Camera,
  MapPin,
  Bed,
  Sparkles,
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: React.ElementType;
  color: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "handicrafts",
    name: "صنایع دستی",
    nameEn: "Handicrafts", 
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
    description: "صنایع دستی اصیل ایرانی"
  },
  {
    id: "pottery",
    name: "سفال و سرامیک",
    nameEn: "Pottery & Ceramics",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600", 
    description: "سفال‌های دست‌ساز و سرامیک‌های هنری"
  },
  {
    id: "textiles",
    name: "منسوجات و فرش",
    nameEn: "Textiles & Carpets",
    icon: ShoppingBag,
    color: "bg-red-100 text-red-600",
    description: "فرش‌های دست‌باف و منسوجات محلی"
  },
  {
    id: "jewelry",
    name: "جواهرات محلی",
    nameEn: "Jewelry",
    icon: Gem,
    color: "bg-yellow-100 text-yellow-600",
    description: "جواهرات و زیورآلات محلی"
  },
  {
    id: "wood-metal",
    name: "صنایع چوبی و فلزی",
    nameEn: "Wood & Metal Crafts",
    icon: Hammer,
    color: "bg-green-100 text-green-600",
    description: "صنایع چوبی و فلزی دست‌ساز"
  },
  {
    id: "visual-arts",
    name: "هنرهای تجسمی و بومی",
    nameEn: "Visual & Folk Arts",
    icon: Camera,
    color: "bg-indigo-100 text-indigo-600",
    description: "هنرهای تجسمی و بومی"
  },
  {
    id: "tourism",
    name: "خدمات گردشگری",
    nameEn: "Tourism Services",
    icon: MapPin,
    color: "bg-emerald-100 text-emerald-600",
    description: "خدمات گردشگری و تورها"
  },
  {
    id: "accommodation",
    name: "اقامتگاه‌های بوم‌گردی",
    nameEn: "Eco Accommodations",
    icon: Bed,
    color: "bg-cyan-100 text-cyan-600",
    description: "اقامتگاه‌های بوم‌گردی و محلی"
  },
  {
    id: "experiences",
    name: "تجربه‌های ویژه",
    nameEn: "Special Experiences",
    icon: Sparkles,
    color: "bg-pink-100 text-pink-600",
    description: "آشپزی محلی و کارگاه صنایع دستی"
  }
];