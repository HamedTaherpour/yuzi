"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  images: string[];
}

interface RelatedProductsCarouselProps {
  products: Product[];
}

export const RelatedProductsCarousel = ({
  products,
}: RelatedProductsCarouselProps) => {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);

  if (products.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="container mx-auto px-4 pb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-lg font-bold mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        محصولات مشابه
      </motion.h2>
      <Carousel className="direction-ltr" opts={{ align: "start" }}>
        <CarouselContent>
          {products.map((p, index) => (
            <CarouselItem key={p.id} className="basis-2/3 pr-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem] mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm font-bold text-primary">
                        {formatPrice(p.price)} {p.currency}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <motion.div
          className="flex gap-2 justify-end mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 size-8">
            <ArrowRight className="h-3 w-3" />
          </CarouselPrevious>
          <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 size-8">
            <ArrowLeft className="h-3 w-3" />
          </CarouselNext>
        </motion.div>
      </Carousel>
    </motion.div>
  );
};

