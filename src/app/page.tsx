"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarouselSection } from "@/components/HeroCarouselSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { VendorsSection } from "@/components/VendorsSection";
import { AboutSection } from "@/components/AboutSection";
import { ProducersServicesSection } from "@/components/ProducersServicesSection";
import { BlogSection } from "@/components/BlogSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { FAQSection } from "@/components/FAQSection";
import { SpecialDealsSection } from "@/components/SpecialDealsSection";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Carousel Section */}
        <div className="container mx-auto px-4 py-6">
          <HeroCarouselSection />
        </div>

        {/* Welcome Text Section */}
        <div className="container mx-auto px-4 py-4">
          <div className="text-center space-y-3">
            {/* Logo and Title */}
            <div className="flex items-center justify-center gap-3">
              <Image 
                src="/img/logo.png" 
                alt="یوژی" 
                width={80}
                height={50}
                className="h-10 md:h-12 w-auto"
                priority
              />
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                به یوژی خوش آمدید
              </h1>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              اتصال مستقیم تولیدکننده و مصرف‌کننده با کیفیت و قیمت منصفانه
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <CategoriesSection />

        {/* Products Section */}
        <ProductsSection />

        {/* About Section */}
        <AboutSection />

        {/* Vendors Section */}
        <VendorsSection />
        
        {/* Special Deals Section */}
        <SpecialDealsSection />

        {/* Producers Services Section */}
        <ProducersServicesSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Achievements Section */}
        <AchievementsSection />

        {/* FAQ Section */}
        <FAQSection />

      </main>

      <Footer />
    </div>
  );
}
