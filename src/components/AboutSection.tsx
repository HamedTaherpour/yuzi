"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
} as const;

const missionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.3
    }
  }
} as const;

export const AboutSection = () => {
  const features = [
    {
      emoji: "🎨",
      title: "صنایع دستی اصیل",
      description: "محصولات دست‌ساز با کیفیت بالا از سراسر ایران"
    },
    {
      emoji: "👥",
      title: "تولیدکنندگان محلی",
      description: "حمایت مستقیم از هنرمندان و صنعتگران ایرانی"
    },
    {
      emoji: "🗺️",
      title: "گردشگری بومی",
      description: "تجربه‌های منحصر به فرد محلی و فرهنگی"
    },
    {
      emoji: "⭐",
      title: "کیفیت تضمینی",
      description: "محصولات با کیفیت و اصالت تضمین شده"
    }
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <motion.div 
          className="text-center mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-3">
            درباره یوژی
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl mx-auto">
            یوژی پل ارتباطی بین تولیدکنندگان اصیل ایرانی و مصرف‌کنندگان است. 
            ما به دنبال حفظ و ترویج صنایع دستی و فرهنگ بومی ایران هستیم.
          </p>
        </motion.div>

        {/* Features List - Vertical with Icon on Right */}
        <motion.div 
          className="grid grid-cols-2 gap-2 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="app-base-transform hover:ring-1 ring-primary">
                  <CardContent className="p-4">
                    {/* Title and Emoji Row */}
                    <div className="flex items-center gap-3 mb-1.5">
                      {/* Title on Left */}
                      <h3 className="flex-1 text-right font-semibold text-sm text-foreground">
                        {feature.title}
                      </h3>

                      {/* Emoji on Right */}
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                        {feature.emoji}
                      </div>
                    </div>

                    {/* Description Below */}
                    <p className="text-xs text-muted-foreground leading-relaxed text-right">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={missionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-5 text-center">
              <h3 className="font-bold text-lg mb-3 text-primary">
                ماموریت ما
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                یوژی به دنبال احیای صنایع دستی ایرانی و ایجاد فرصت‌های اقتصادی 
                برای تولیدکنندگان محلی است. ما معتقدیم که هر محصول داستانی دارد 
                و هر خرید حمایتی از فرهنگ و هنر ایرانی محسوب می‌شود.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

