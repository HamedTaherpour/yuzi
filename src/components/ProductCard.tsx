"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Heart,
  ShoppingCart,
  Share2,
  Star,
  MapPin,
  MoreVertical,
} from "lucide-react";
import { Product } from "@/data/products";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [likeCount] = useState(() => Math.floor(Math.random() * 50) + 10);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <Card className="overflow-hidden border-0 p-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
          <CardContent className="p-0">
            <div className="flex p-2.5 gap-4">
              {/* Image Section - Right */}
              <div className="relative size-36 flex-shrink-0 overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="144px"
                  onError={(e) => {
                    // Fallback image
                    (e.target as HTMLImageElement).src =
                      "/img/products/placeholder.png";
                  }}
                />

                {/* Discount Badge */}
                {discountPercentage > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute top-1 right-1 text-xs font-bold px-1 py-0"
                  >
                    {discountPercentage}%
                  </Badge>
                )}
              </div>

              {/* Content Section - Left */}
              <div className="flex-1 flex flex-col relative">
                {/* Title and Meta (Location + Rating) */}
                <div className="mb-2">
                  <h3 className="font-medium text-sm text-foreground leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem] flex items-start">
                    {product.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2 mt-auto">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{product.seller.location}</span>
                  </div>
                  {product.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>
                  )}
                </div>

                {/* Price + Likes (likes on the left of price in RTL) */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-primary text-sm">
                      {formatPrice(product.price)} {product.currency}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)} {product.currency}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Heart className="w-3 h-3 text-muted-foreground" />
                    <span>{likeCount}</span>
                  </div>
                </div>

                {/* More Options */}
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white/80 hover:bg-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="h-3 w-3 text-gray-600" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[400px]">
                    <SheetTitle className="sr-only">{product.title}</SheetTitle>
                    <div className="py-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                          <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">
                            {product.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-bold text-primary text-lg">
                              {formatPrice(product.price)} {product.currency}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {formatPrice(product.originalPrice)}{" "}
                                {product.currency}
                              </span>
                            )}
                          </div>
                          {product.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm text-muted-foreground">
                                {product.rating} ({product.reviewCount} نظر)
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="h-12 gap-2">
                          <Heart className="h-4 w-4" />
                          لایک
                        </Button>
                        <Button variant="outline" className="h-12 gap-2">
                          <Share2 className="h-4 w-4" />
                          اشتراک‌گذاری
                        </Button>
                        <Button className="h-12 gap-2 col-span-2">
                          <ShoppingCart className="h-4 w-4" />
                          افزودن به سبد خرید
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
