"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Lens } from "@/components/ui/lens";

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

interface ProductMediaGalleryProps {
  title: string;
  images: string[];
  hasVideo?: boolean;
  videoCount?: number;
  discountPercentage?: number;
  videoSrc?: string; // optional explicit video URL
}

export const ProductMediaGallery = ({
  title,
  images,
  hasVideo,
  videoCount,
  discountPercentage,
  videoSrc,
}: ProductMediaGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const mediaItems: MediaItem[] = useMemo(() => {
    const imageMedia: MediaItem[] = (images || []).map((src) => ({
      type: "image",
      src,
    }));
    const resolvedVideoSrc = videoSrc || "/videos/sample.mp4";
    const videoMedia: MediaItem[] = hasVideo
      ? Array.from({ length: videoCount || 1 }).map(() => ({
          type: "video",
          src: resolvedVideoSrc,
          poster:
            imageMedia[0] &&
            (imageMedia[0] as { type: "image"; src: string }).src,
        }))
      : [];
    return [...videoMedia, ...imageMedia];
  }, [images, hasVideo, videoCount, videoSrc]);

  // sync selectedIndex with carousel selection
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Carousel className="w-full direction-ltr" setApi={(instance) => setApi(instance)}>
        <CarouselContent>
          {mediaItems.map((m, idx) => (
            <CarouselItem key={idx} className="basis-full">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted">
                {m.type === "video" ? (
                  <video
                    src={
                      (m as { type: "video"; src: string; poster?: string }).src
                    }
                    poster={
                      (m as { type: "video"; src: string; poster?: string })
                        .poster
                    }
                    className="size-full object-cover"
                    controls
                  />
                ) : (
                  <Lens>
                    <Image
                      src={m.src}
                      alt={title}
                      fill
                      className="object-cover size-full"
                      priority={idx === 0}
                    />
                  </Lens>
                )}
                {discountPercentage && discountPercentage > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute top-3 right-3 text-sm font-bold px-3 py-1"
                  >
                    {discountPercentage}% تخفیف
                  </Badge>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {mediaItems.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {mediaItems.map((m, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedIndex(idx);
                api?.scrollTo(idx);
              }}
              className={`relative h-16 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === idx ? "border-primary" : "border-transparent"
              }`}
            >
              {m.type === "video" ? (
                <div className="h-full w-full bg-black/70 flex items-center justify-center text-white text-xs">
                  ویدیو
                </div>
              ) : (
                <Image
                  src={m.src}
                  alt={`${title} - ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};
