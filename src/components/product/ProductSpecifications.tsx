"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ProductSpecificationsProps {
  isNew?: boolean;
  isFeatured?: boolean;
  hasVideo?: boolean;
  videoCount?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export const ProductSpecifications = ({
  isNew,
  isFeatured,
  hasVideo,
  videoCount,
}: ProductSpecificationsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-4">
          <motion.h3
            className="text-base font-semibold mb-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            مشخصات
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 gap-3 text-xs"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isNew && (
              <motion.div
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <Check className="w-4 h-4 text-green-500" />
                <span>محصول جدید</span>
              </motion.div>
            )}
            {isFeatured && (
              <motion.div
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <Check className="w-4 h-4 text-green-500" />
                <span>محصول ویژه</span>
              </motion.div>
            )}
            {hasVideo && (
              <motion.div
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <Check className="w-4 h-4 text-green-500" />
                <span>دارای {videoCount || 1} ویدیو</span>
              </motion.div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

