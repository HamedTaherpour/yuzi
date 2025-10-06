"use client";

import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Calendar, User2 } from "lucide-react";
import Image from "next/image";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;

const carouselVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 },
  },
} as const;

export const BlogSection = () => {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-6 px-4"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-3">
            وبلاگ یوژی
          </h2>
          <p className="text-muted-foreground text-sm">
            داستان‌ها و تجربیات از دنیای صنایع دستی ایران
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={carouselVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full direction-ltr"
          >
            <CarouselContent className="py-0.5">
              {posts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="basis-[70%] first:ml-4"
                >
                  <Card className="overflow-hidden h-full app-base-transform hover:ring-1 ring-primary">
                    <CardContent className="p-2">
                      {/* Image */}
                      <div className="relative w-full h-40">
                        <Image
                          src={post.cover}
                          alt={post.title}
                          fill
                          className="object-cover rounded-md"
                          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="mt-4">
                        {/* Title */}
                        <h3 className="font-bold text-base mb-2 text-foreground text-right">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-muted-foreground text-right leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Date */}
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                          </div>
                          {/* Author */}
                          {post.author?.name && (
                            <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                              <span>{post.author.name}</span>
                              <User2 className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
