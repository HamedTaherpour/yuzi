"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, Search, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandEmpty,
} from "@/components/ui/command";
import { products } from "@/data/products";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary state for demo
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("yuzi_recent_searches");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setRecentSearches(parsed.slice(0, 3));
      }
    } catch {}
  }, []);

  const latestProducts = useMemo(() => products.slice(-3).reverse(), []);

  const persistRecent = (items: string[]) => {
    setRecentSearches(items.slice(0, 3));
    try {
      localStorage.setItem("yuzi_recent_searches", JSON.stringify(items.slice(0, 3)));
    } catch {}
  };

  const addRecent = (term: string) => {
    if (!term) return;
    const next = [term, ...recentSearches.filter((t) => t !== term)];
    persistRecent(next);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Right side - Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="py-4">
                <div className="text-lg font-semibold mb-4">منو</div>
                {/* Menu content will be added later */}
                <div className="text-sm text-muted-foreground">
                  محتوای منو در مرحله بعد اضافه خواهد شد
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Center - Search */}
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="button"
                role="search"
                placeholder="جستجو در محصولات..."
                className="pr-10 pl-4 text-sm text-left cursor-text"
                onClick={() => setIsSearchOpen(true)}
              />
            </div>
          </div>

          {/* Left side - User Profile/Login */}
          <div className="shrink-0">
            {isLoggedIn ? (
              <Button variant="ghost" size="icon" className="relative">
                <User className="h-5 w-5" />
                <span className="sr-only">پروفایل کاربر</span>
              </Button>
            ) : (
              <Button variant="outline" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                ورود
              </Button>
            )}
          </div>
        </div>
      </div>
    {/* Command Search Dialog */}
    <CommandDialog className="w-96" open={isSearchOpen} onOpenChange={(o) => { setIsSearchOpen(o); if (!o) setQuery(""); }}>
      <CommandInput
        placeholder="جستجو..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>نتیجه‌ای یافت نشد</CommandEmpty>

        {query.length === 0 && (
          <>
            <CommandGroup heading="آخرین جستجوها">
              {recentSearches.slice(0, 3).map((term) => (
                <CommandItem
                  key={term}
                  value={term}
                  onSelect={(val) => {
                    addRecent(val);
                    setQuery(val);
                  }}
                >
                  {term}
                </CommandItem>
              ))}
              {recentSearches.length === 0 && (
                <div className="px-2 py-2 text-xs text-muted-foreground">موردی ثبت نشده است</div>
              )}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="محصولات جدید">
              {latestProducts.map((p) => (
                <CommandItem
                  key={p.id}
                  value={p.title}
                  onSelect={(val) => {
                    addRecent(val);
                    setIsSearchOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="relative h-8 w-8 overflow-hidden rounded-sm">
                      <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{p.title}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{new Intl.NumberFormat("fa-IR").format(p.price)} {p.currency}</div>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}

        {query.length > 0 && (
          <CommandGroup heading="نتایج">
            {products
              .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
              .slice(0, 10)
              .map((p) => (
                <CommandItem
                  key={p.id}
                  value={p.title}
                  onSelect={(val) => {
                    addRecent(val);
                    setIsSearchOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="relative h-8 w-8 overflow-hidden rounded-sm">
                      <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{p.title}</div>
                      <div className="text-[10px] text-muted-foreground truncate">{new Intl.NumberFormat("fa-IR").format(p.price)} {p.currency}</div>
                    </div>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
    </header>
  );
};
