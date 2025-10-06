export interface ProductCategory {
  id: string;
  name: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "all",
    name: "همه"
  },
  {
    id: "handicrafts",
    name: "صنایع دستی"
  },
  {
    id: "pottery",
    name: "سفال و سرامیک"
  },
  {
    id: "textiles",
    name: "منسوجات و فرش"
  },
  {
    id: "jewelry",
    name: "جواهرات محلی"
  },
  {
    id: "wood-metal",
    name: "صنایع چوبی و فلزی"
  },
  {
    id: "visual-arts",
    name: "هنرهای تجسمی و بومی"
  },
  {
    id: "tourism",
    name: "خدمات گردشگری"
  },
  {
    id: "accommodation",
    name: "اقامتگاه‌های بوم‌گردی"
  },
  {
    id: "experiences",
    name: "تجربه‌های ویژه"
  }
];
