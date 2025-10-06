"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, MapPin, ArrowLeft, Eye, ArrowRight } from "lucide-react";
import { topVendors } from "@/data/vendors";
import type { Product } from "@/data/products";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

const carouselVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 },
  },
} as const;

export const VendorsSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-0">
        {/* Section Header */}
        <motion.div
          className="mb-6 px-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">
                تولیدکنندگان برتر
              </h2>
              <p className="text-sm text-muted-foreground">
                بهترین هنرمندان و صنعتگران ایرانی
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              مشاهده همه
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Vendors Carousel */}
        <motion.div
          variants={carouselVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full direction-ltr"
          >
            <CarouselContent className="py-0.5">
              {topVendors.map((vendor) => (
                <CarouselItem
                  key={vendor.id}
                  className="basis-[70%] first:ml-4 last:ml-4"
                >
                  <VendorCard vendor={vendor} />
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
        </motion.div>
      </div>
    </section>
  );
};

interface VendorCardProps {
  vendor: {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviewCount: number;
    avatar: string;
    specialty: string;
    description: string;
    products: Product[];
  };
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer app-base-transform hover:ring-1 ring-primary group direction-rtl">
      <CardContent className="p-3">
        {/* Header: Big Avatar + Vendor Info */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={vendor.avatar}
            alt={vendor.name}
            className="w-14 h-14 rounded-full object-cover border border-border"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="text-sm font-semibold truncate">
                {vendor.name}
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">
                  {vendor.rating}
                </span>
              </div>
            </div>
            <div className="text-xs text-primary mb-1 truncate">
              {vendor.specialty}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground truncate">
                {vendor.location}
              </span>
            </div>
          </div>
        </div>

        {/* Product Preview Grid */}
        <div className="grid grid-cols-3 gap-1.5">
          {vendor.products.slice(0, 3).map((product) => (
            <div key={product.id} className="relative">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-16 rounded object-cover"
              />
              {product.hasVideo && (
                <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-black/70 rounded-sm flex items-center justify-center">
                  <Eye className="w-2.5 h-2.5 text-white" />
                </div>
              )}
            </div>
          ))}
          {vendor.products.length > 3 && (
            <div className="w-full h-16 rounded bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">
                +{vendor.products.length - 3}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
