"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star, MapPin, ArrowLeft, Eye } from "lucide-react";
import { topVendors } from "@/data/vendors";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
} as const;

const carouselVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 }
  }
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
            <CarouselContent>
              {topVendors.map((vendor) => (
                <CarouselItem key={vendor.id} className="basis-1/2 first:ml-4 last:ml-4 py-0.5">
                  <VendorCard vendor={vendor} />
                </CarouselItem>
              ))}
            </CarouselContent>
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
    products: any[];
  };
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer app-base-transform hover:ring-1 ring-primary group direction-rtl">
      <CardContent className="p-0">
        {/* Main Product Image */}
        <div className="relative h-24 overflow-hidden">
          <img
            src={
              vendor.products[0]?.images[0] ||
              "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
            }
            alt={vendor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Vendor Info Overlay */}
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex items-center gap-2 mb-1">
              <img
                src={vendor.avatar}
                alt={vendor.name}
                className="w-6 h-6 rounded-full object-cover border border-white"
              />
              <span className="text-white text-xs font-medium truncate">
                {vendor.name}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-white text-xs">{vendor.rating}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-primary font-medium">
              {vendor.specialty}
            </span>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground truncate">
              {vendor.location}
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-1">
            {vendor.products.slice(0, 3).map((product) => (
              <div key={product.id} className="relative">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-12 rounded object-cover"
                />
                {product.hasVideo && (
                  <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-black/70 rounded-sm flex items-center justify-center">
                    <Eye className="w-2 h-2 text-white" />
                  </div>
                )}
              </div>
            ))}
            {vendor.products.length > 3 && (
              <div className="w-full h-12 rounded bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground">
                  +{vendor.products.length - 3}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
