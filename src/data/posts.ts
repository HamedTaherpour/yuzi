export interface Post {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export const posts: Post[] = [
  {
    id: "post_01",
    title: "سفرنامه کاشان و دیدار با هنرمندان",
    excerpt: "روایتی از کوچه‌پس‌کوچه‌های کاشان و دیدار با صنعتگران اصیل این شهر تاریخی؛ از کارگاه‌های پر از شور گرفته تا نمایشگاه‌های کوچک محلی که روح هنر ایرانی در آن جریان دارد.",
    cover: "/img/category/nature-tourism.jpeg",
    date: "1403/07/15",
    author: { name: "تحریریه یوژی" }
  },
  {
    id: "post_02",
    title: "داستان یک کارگاه گلیم‌بافی",
    excerpt: "از نخ تا نقش، سفری به دل یک کارگاه سنتی گلیم‌بافی در اصفهان؛ روند آماده‌سازی نخ‌ها، انتخاب نقش‌ها و روایت‌هایی از استادکاران با تجربه.",
    cover: "/img/category/textiles-carpets.png",
    date: "1403/07/10",
    author: { name: "شقایق نیازی" }
  },
  {
    id: "post_03",
    title: "هنر سفالگری در لالیجان",
    excerpt: "آشنایی با هنر کهن سفالگری و دیدار با استادکاران این هنر باستانی؛ از شکل‌گیری گل تا پخت نهایی و لعاب‌کاری‌های چشم‌نواز.",
    cover: "/img/category/pottery-ceramics.jpeg",
    date: "1403/07/05",
    author: { name: "مهدی اصفهانی" }
  },
  {
    id: "post_04",
    title: "صنایع دستی چرمی تبریز",
    excerpt: "بررسی فرآیند تولید محصولات چرمی دست‌ساز و کیف‌های سنتی تبریز؛ انتخاب چرم باکیفیت، برش دقیق و دوخت استادانه در کارگاه‌های محلی.",
    cover: "/img/category/handicrafts.jpeg",
    date: "1403/06/28",
    author: { name: "تحریریه یوژی" }
  },
  {
    id: "post_05",
    title: "محصولات آرایشی طبیعی و گیاهی",
    excerpt: "معرفی تولیدکنندگان محصولات آرایشی و بهداشتی طبیعی از گیاهان بومی ایران؛ فرمولاسیون‌های سنتی که با استانداردهای روز ترکیب شده‌اند.",
    cover: "/img/category/jewelry.jpeg",
    date: "1403/06/20",
    author: { name: "نغمه علوی" }
  }
];

