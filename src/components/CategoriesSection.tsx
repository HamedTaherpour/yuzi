"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { categories, Category } from "@/data/categories";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const CategoriesSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-3 gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const IconComponent = category.icon;

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <Card className="cursor-pointer app-base-transform hover:ring-1 ring-primary">
          <CardContent className="py-2 px-2">
            <div className="flex flex-col items-center text-center space-y-2">
              {/* Icon */}
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${category.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <IconComponent className="w-4 h-4" />
              </motion.div>

              {/* Category Name */}
              <div>
                <h3 className="font-medium text-xs text-foreground leading-tight">
                  {category.name}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
