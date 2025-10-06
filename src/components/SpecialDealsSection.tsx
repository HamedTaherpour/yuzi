"use client";

import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DiscountProductCard } from "@/components/DiscountProductCard";

export const SpecialDealsSection = () => {
  const discounted = products.filter((p) => p.originalPrice && p.originalPrice > p.price);

  if (discounted.length === 0) return null;

  return (
    <section className="container mx-auto px-0 py-8 bg-destructive">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold text-white">تخفیف‌های ویژه</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full direction-ltr"
      >
        <CarouselContent>
          {discounted.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-2/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 first:ml-4"
            >
              <DiscountProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Buttons - Inside carousel, positioned bottom-right visually */}
        <div className="flex gap-2 justify-end mt-4 px-4">
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


