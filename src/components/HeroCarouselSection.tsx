"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";

// Sample data for hero carousel
const heroSlides = [
  {
    id: "slide_01",
    title: "هدایای ویژه",
    subtitle: "گزیده‌ای از هدایای دست‌ساز",
    description: "برای مناسبت‌های خاص و عزیزانتان",
		image: "/img/category/handicrafts.jpeg",
    ctaText: "مشاهده هدایا",
    ctaLink: "/collections/special-gifts",
  },
  {
    id: "slide_02",
    title: "خانه و دکور",
    subtitle: "آثار هنری برای زیبایی",
    description: "فضای خانه خود را با آثار هنری زیبا تزئین کنید",
		image: "/img/category/pottery-ceramics.jpeg",
    ctaText: "مشاهده دکور",
    ctaLink: "/collections/home-decor",
  },
  {
    id: "slide_03",
    title: "اکسسوری روزمره",
    subtitle: "همراه‌های کاربردی و زیبا",
    description: "کیف‌ها و اکسسوری‌های با کیفیت برای زندگی روزمره",
		image: "/img/category/jewelry.jpeg",
    ctaText: "مشاهده اکسسوری",
    ctaLink: "/collections/daily-accessories",
  },
];

export const HeroCarouselSection = () => {
  return (
    <section className="relative w-full">
      <Carousel
        className="w-full direction-ltr"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pr-0">
              <Card className="relative w-full h-48 md:h-56 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
                    priority={index === 0}
                  />
                  {/* Overlay - Bottom to Top Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-end">
                  <div className="container mx-auto px-4 pb-4 flex justify-end">
                    <motion.div
                      className="max-w-sm text-white space-y-2 text-end"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.h1
                        className="text-xl md:text-2xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-sm md:text-base text-accent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Button size="sm" className="mt-2">
                          {slide.ctaText}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons - Inside carousel but positioned outside */}
        <div className="flex gap-2 justify-end mt-4">
          <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 size-8">
            <ArrowRight className="h-3 w-3" />
          </CarouselPrevious>
          <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 size-8">
            <ArrowLeft className="h-3 w-3" />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
};
