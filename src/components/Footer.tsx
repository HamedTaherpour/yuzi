"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Top */}
        <div className="flex flex-col gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3 justify-center">
            <Image src="/img/logo.png" alt="یوژی" width={32} height={32} className="h-8 w-8" />
            <span className="text-lg font-bold">یوژی</span>
          </div>

          {/* Links and Contact */}
          <div className="grid grid-cols-2 gap-6 text-sm">
            {/* Quick Links */}
            <div className="space-y-3">
              <div className="font-semibold">دسترسی سریع</div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#categories" className="hover:text-foreground transition-colors">دسته‌بندی‌ها</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-foreground transition-colors">محصولات</a>
                </li>
                <li>
                  <a href="#vendors" className="hover:text-foreground transition-colors">تولیدکنندگان</a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-foreground transition-colors">بلاگ</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="font-semibold">ارتباط با ما</div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:support@yuzi.ir" className="hover:text-foreground transition-colors">support@yuzi.ir</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:02100000000" className="hover:text-foreground transition-colors">۰۲۱-۰۰۰۰۰۰۰۰</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>تهران، ایران</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          © ۱۴۰۳ یوژی — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};
