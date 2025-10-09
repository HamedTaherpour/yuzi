"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";

interface ProductReviewsProps {
  rating?: number;
  reviewCount?: number;
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const ProductReviews = ({ rating, reviewCount }: ProductReviewsProps) => {
  // Sample reviews with more details
  const reviews = [
    {
      id: "r1",
      name: "محمد احمدی",
      avatar: "",
      date: "۲ روز پیش",
      rating: 5,
      verified: true,
      text: "واقعاً محصول فوق‌العاده‌ای است! کیفیت ساخت عالی و دقت کار بسیار بالا. قیمتش هم با توجه به کیفیتش خیلی مناسب بود. حتماً دوباره از این فروشنده خرید می‌کنم.",
      helpful: 12,
      comments: 3,
    },
    {
      id: "r2",
      name: "سارا محمدی",
      avatar: "",
      date: "۱ هفته پیش",
      rating: 4,
      verified: true,
      text: "طراحی زیبا و منحصر به فرد. رنگ‌بندی عالی و جنس خوب. فقط بسته‌بندی می‌توانست بهتر باشد ولی در کل راضی هستم.",
      helpful: 8,
      comments: 1,
    },
    {
      id: "r3",
      name: "علی رضایی",
      avatar: "",
      date: "۲ هفته پیش",
      rating: 5,
      verified: false,
      text: "عالی بود. دقیقا مثل تصویر. ارسال هم سریع انجام شد.",
      helpful: 5,
      comments: 0,
    },
  ];

  // Calculate rating distribution
  const ratingDistribution = [
    { stars: 5, count: 45, percentage: 75 },
    { stars: 4, count: 10, percentage: 16.7 },
    { stars: 3, count: 3, percentage: 5 },
    { stars: 2, count: 1, percentage: 1.7 },
    { stars: 1, count: 1, percentage: 1.7 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Header with gradient background */}
          <div className="bg-background p-6">
            <motion.div
              className="flex items-center justify-between mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                نظرات کاربران
              </h3>
              <Badge variant="outline" className="font-bold bg-white">
                {reviewCount} نظر
              </Badge>
            </motion.div>

            {/* Rating Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Overall Rating */}
              <motion.div
                className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl border"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="text-6xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  {rating?.toFixed(1)}
                </motion.div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          i < Math.floor(rating || 0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  از {reviewCount} نظر
                </p>
              </motion.div>

              {/* Rating Bars */}
              <motion.div
                className="flex flex-col justify-center space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm font-medium">{item.stars}</span>
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-l from-yellow-400 to-yellow-500 origin-right"
                        style={{ width: `${item.percentage}%` }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-12 text-left">
                      {item.count}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Reviews List */}
          <motion.div
            className="p-6 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="text-sm font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* Review Content */}
                  <div className="flex-1 space-y-2">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm">{review.name}</h4>
                          {review.verified && (
                            <Badge
                              variant="secondary"
                              className="h-5 text-[10px] bg-green-500/10 text-green-600 border-green-500/20"
                            >
                              خریدار
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-2">
                      <motion.button
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                        whileTap={{ scale: 0.95 }}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>مفید بود ({review.helpful})</span>
                      </motion.button>
                      {review.comments > 0 && (
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{review.comments} پاسخ</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="p-4 bg-muted/30 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              بزودی امکان ثبت نظر اضافه می‌شود 💬
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

