"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.4
    }
  }
} as const;

export const ProducersServicesSection = () => {
  const services = [
    {
      emoji: "💰",
      title: "تسهیلات مالی",
      description: "ارائه وام و اعتبار برای توسعه کسب‌وکار تولیدکنندگان",
    },
    {
      emoji: "🎓",
      title: "آموزش و توانمندسازی",
      description: "برگزاری دوره‌ها و کلاس‌های آموزشی تخصصی",
    },
    {
      emoji: "📦",
      title: "تامین مواد اولیه",
      description: "تهیه و تامین مواد اولیه با کیفیت و قیمت مناسب",
    },
    {
      emoji: "🛍️",
      title: "بازاریابی و فروش",
      description: "فروش و بازاریابی محصولات در بستر آنلاین و آفلاین",
    },
  ];

  return (
    <section className="py-8 bg-background">
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
            حمایت از تولیدکنندگان
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl mx-auto">
            ما در کنار تولیدکنندگان و صنعتگران هستیم و با ارائه خدمات جامع، مسیر
            موفقیت را برای آن‌ها هموار می‌کنیم.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="app-base-transform hover:ring-1 ring-primary">
                  <CardContent className="p-4">
                    {/* Title and Emoji Row */}
                    <div className="flex items-center gap-3 mb-1.5">
                      {/* Title on Left */}
                      <h3 className="flex-1 text-right font-semibold text-sm text-foreground">
                        {service.title}
                      </h3>

                      {/* Emoji on Right */}
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                        {service.emoji}
                      </div>
                    </div>

                    {/* Description Below */}
                    <p className="text-xs text-muted-foreground leading-relaxed text-right">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Button className="w-full mt-4" variant="outline">همین حالا شروع کنید</Button>
        </motion.div>
      </div>
    </section>
  );
};
