"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Share2, ShoppingCart, MapPin } from "lucide-react";

interface Seller {
  name: string;
  location: string;
}

interface ProductPurchaseBoxProps {
  price: number;
  currency: string;
  originalPrice?: number;
  discountPercentage: number;
  seller: Seller;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const ProductPurchaseBox = ({
  price,
  currency,
  originalPrice,
  discountPercentage,
  seller,
}: ProductPurchaseBoxProps) => {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="mt-4">
        <CardContent className="p-4">
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-end gap-3" variants={itemVariants}>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(price)} {currency}
                </span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(originalPrice)} {currency}
                  </span>
                )}
              </div>
              {discountPercentage > 0 && (
                <Badge variant="destructive" className="font-bold">
                  {discountPercentage}%
                </Badge>
              )}
            </motion.div>

            {/* Seller */}
            <motion.div className="pt-3 border-t" variants={itemVariants}>
              <h3 className="text-sm font-semibold mb-2">فروشنده</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{seller.name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{seller.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div className="flex items-center gap-2" variants={itemVariants}>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </Button>
              <div className="w-12 text-center font-bold">{quantity}</div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </Button>
            </motion.div>

            {/* Actions */}
            <motion.div className="grid grid-cols-2 gap-3" variants={itemVariants}>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="gap-2 w-full">
                  <Heart className="w-4 h-4" />
                  علاقه‌مندی
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="gap-2 w-full">
                  <Share2 className="w-4 h-4" />
                  اشتراک‌گذاری
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} whileTap={{ scale: 0.98 }}>
              <Button className="w-full h-12 text-base gap-2" size="lg">
                <ShoppingCart className="w-5 h-5" />
                افزودن به سبد خرید
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

