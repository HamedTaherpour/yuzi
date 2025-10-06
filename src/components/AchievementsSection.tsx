"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
} as const;

export const AchievementsSection = () => {
  const achievements = [
    {
      emoji: "👥",
      number: "۱۲۰۰+",
      title: "تولیدکننده فعال",
      description: "در سراسر ایران"
    },
    {
      emoji: "📦",
      number: "۸۵۰۰+",
      title: "محصول متنوع",
      description: "در دسته‌های مختلف"
    },
    {
      emoji: "🏆",
      number: "۳۵۰۰+",
      title: "مشتری راضی",
      description: "از خرید محصولات"
    },
    {
      emoji: "📈",
      number: "۹۵٪",
      title: "رضایت کاربران",
      description: "از خدمات یوژی"
    }
  ];

  return (
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-3">
            دستاورد‌های یوژی
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            با افتخار در کنار تولیدکنندگان ایرانی، گام‌های بلندی برای رشد صنایع دستی برداشته‌ایم
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((achievement, index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center app-base-transform hover:ring-1 ring-primary">
                  <CardContent className="p-5">
                    {/* Emoji */}
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      {achievement.emoji}
                    </div>

                    {/* Number */}
                    <div className="text-3xl font-bold text-primary mb-1">
                      {achievement.number}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-sm text-foreground mb-1">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

