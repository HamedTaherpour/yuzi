"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductMediaGallery } from "@/components/ProductMediaGallery";
import { ProductHeader } from "@/components/product/ProductHeader";
import { ProductPurchaseBox } from "@/components/product/ProductPurchaseBox";
import { ProductDescription } from "@/components/product/ProductDescription";
import { ProductSpecifications } from "@/components/product/ProductSpecifications";
import { ProductReviews } from "@/components/product/ProductReviews";
import { RelatedProductsCarousel } from "@/components/product/RelatedProductsCarousel";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);

  // Decide video url for product 3 demo
  const videoSrc = product?.id === "3" ? "/video/jewelry.mp4" : undefined;

  // Early return after hooks are declared to satisfy hooks rules
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Main Layout */}
        <div className="container mx-auto px-4 py-6 space-y-6">
          <div>
            {/* Media Gallery */}
            <ProductMediaGallery
              title={product.title}
              images={product.images}
              hasVideo={product.hasVideo}
              videoCount={product.videoCount}
              discountPercentage={discountPercentage}
              videoSrc={videoSrc}
            />

            {/* Product Header */}
            <ProductHeader
              title={product.title}
              rating={product.rating}
              reviewCount={product.reviewCount}
            />

            {/* Purchase Box */}
            <ProductPurchaseBox
              price={product.price}
              currency={product.currency}
              originalPrice={product.originalPrice}
              discountPercentage={discountPercentage}
              seller={product.seller}
            />

            {/* Details - Stacked Sections */}
            <div className="mt-6 space-y-4">
              {/* Description */}
              <ProductDescription
                description={product.description}
                tags={product.tags}
              />

              {/* Specifications */}
              <ProductSpecifications
                isNew={product.isNew}
                isFeatured={product.isFeatured}
                hasVideo={product.hasVideo}
                videoCount={product.videoCount}
              />

              {/* Reviews */}
              <ProductReviews
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProductsCarousel products={relatedProducts} />
      </main>

      <Footer />
    </div>
  );
}

