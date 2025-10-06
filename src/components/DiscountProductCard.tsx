"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/data/products";

interface DiscountProductCardProps {
  product: Product;
}

export const DiscountProductCard = ({ product }: DiscountProductCardProps) => {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white direction-rtl">
        <CardContent className="p-2">
        {/* Image Section - Top */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover rounded-md"
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute top-1 right-1 text-[10px] font-bold px-1 py-0"
            >
              {discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Content Section - Bottom */}
        <div className="mt-3">
          <h3 className="font-medium text-sm leading-tight line-clamp-2 min-h-[2rem] mb-1">
            {product.title}
          </h3>

          {product.rating && (
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-1">
              <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
              <span>
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-primary font-bold text-xs">
                {formatPrice(product.price)} {product.currency}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)} {product.currency}
                </span>
              )}
            </div>
          </div>
        </div>
        </CardContent>
      </Card>
    </Link>
  );
};


