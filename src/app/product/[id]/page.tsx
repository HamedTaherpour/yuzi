"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Star,
  MapPin,
  Heart,
  Share2,
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <p className="text-center">محصول یافت نشد</p>
        </main>
        <Footer />
      </div>
    );
  }

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Product Images */}
        <div className="container mx-auto px-4 py-6">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted">
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
            {discountPercentage > 0 && (
              <Badge
                variant="destructive"
                className="absolute top-3 right-3 text-sm font-bold px-3 py-1"
              >
                {discountPercentage}% تخفیف
              </Badge>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative h-16 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} - ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="container mx-auto px-4 py-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              {/* Title & Category */}
              <div>
                <h1 className="text-xl font-bold mb-2">{product.title}</h1>
                {product.rating && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>
                        {product.rating} ({product.reviewCount} نظر)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(product.price)} {product.currency}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)} {product.currency}
                    </span>
                  )}
                </div>
              </div>

              {/* Seller Info */}
              <div className="pt-3 border-t">
                <h3 className="text-sm font-semibold mb-2">فروشنده</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{product.seller.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{product.seller.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="pt-3 border-t">
                <h3 className="text-sm font-semibold mb-2">توضیحات</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="pt-3 border-t">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="pt-3 border-t">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {product.isNew && (
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>محصول جدید</span>
                    </div>
                  )}
                  {product.isFeatured && (
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>محصول ویژه</span>
                    </div>
                  )}
                  {product.hasVideo && (
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>
                        دارای {product.videoCount || 1} ویدیو
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="container mx-auto px-4 pb-6">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2">
              <Heart className="w-4 h-4" />
              علاقه‌مندی
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              اشتراک‌گذاری
            </Button>
          </div>

          <Button className="w-full mt-3 h-12 text-base gap-2" size="lg">
            <ShoppingCart className="w-5 h-5" />
            افزودن به سبد خرید
          </Button>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="container mx-auto px-4 pb-8">
            <h2 className="text-lg font-bold mb-4">محصولات مشابه</h2>
            <Carousel className="direction-ltr" opts={{ align: "start" }}>
              <CarouselContent>
                {relatedProducts.map((p) => (
                  <CarouselItem key={p.id} className="basis-2/3 pr-4">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-2 justify-end mt-4">
                <CarouselPrevious className="relative left-0 top-0 translate-x-0 translate-y-0 size-8">
                  <ArrowRight className="h-3 w-3" />
                </CarouselPrevious>
                <CarouselNext className="relative right-0 top-0 translate-x-0 translate-y-0 size-8">
                  <ArrowLeft className="h-3 w-3" />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

