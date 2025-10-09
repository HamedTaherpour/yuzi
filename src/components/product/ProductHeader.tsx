"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ProductHeaderProps {
  title: string;
  rating?: number;
  reviewCount?: number;
}

export const ProductHeader = ({
  title,
  rating,
  reviewCount,
}: ProductHeaderProps) => {
  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      {rating && (
        <motion.div
          className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>
              {rating} ({reviewCount} نظر)
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

