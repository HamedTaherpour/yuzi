"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import Image from "next/image";
import { Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "./ui/card";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  productIds?: string[];
};

export const ChatAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const q = trimmed.toLowerCase();
      const matched = products
        .filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        )
        .slice(0, 3);

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          matched.length > 0
            ? "این محصولات رو پیدا کردم که ممکنه دنبالشون باشی:"
            : "چطور می‌تونم کمکت کنم؟ می‌تونم محصولات مناسب پیشنهاد بدم یا سوالاتت رو جواب بدم.",
        productIds: matched.length > 0 ? matched.map((p) => p.id) : undefined,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const quickActions = [
    { label: "محصولات جدید", icon: "✨" },
    { label: "پیشنهاد ویژه", icon: "🎁" },
    { label: "پرفروش‌ترین‌ها", icon: "🔥" },
  ];

  return (
    <>
      {/* Floating Button - Logo Character */}
      <div className="fixed bottom-4 right-[60%] z-50">
        <Button
          size="icon"
          className="relative rounded-full h-14 w-14 bg-primary border-2 p-2"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/img/logo.png"
            alt="دستیار یوژی"
            width={40}
            height={40}
            className="w-full h-full object-contain animate-bounce"
          />
        </Button>
      </div>

      {/* Chat Dialog - Ultra Modern */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 w-full max-w-[95vw] sm:max-w-md overflow-hidden rounded-3xl border-0 shadow-2xl bg-muted">
          {/* Header with Gradient */}
          <div className="relative px-6 py-4 bg-primary">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1.5">
                  <Image
                    src="/img/logo.png"
                    alt="یوژی"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div>
                <h3 className="font-bold text-base text-white">
                  دستیار هوشمند یوژی
                </h3>
                <p className="text-xs text-white">همیشه آنلاین</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[55vh] overflow-y-auto px-4 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center p-3">
                  <Image
                    src="/img/logo.png"
                    alt="یوژی"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    سلام! چطور می‌تونم کمکت کنم؟
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    از محصولات بپرس یا پیشنهاد بگیر
                  </p>
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id}>
                {m.role === "user" ? (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-primary text-white px-4 py-3 rounded-2xl rounded-br-md">
                      <p className="text-sm">{m.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2 justify-end">
                    <div className="space-y-2">
                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-md">
                        <p className="text-sm">{m.content}</p>
                      </div>

                       {/* Product Cards */}
                       {m.productIds && (
                         <div className="flex gap-2 overflow-x-auto pb-2 justify-end">
                           {m.productIds.map((id) => {
                             const p = products.find((x) => x.id === id);
                             if (!p) return null;
                             const discount = p.originalPrice
                               ? Math.round(
                                   ((p.originalPrice - p.price) /
                                     p.originalPrice) *
                                     100
                                 )
                               : 0;
                             return (
                               <Link key={id} href={`/product/${id}`}>
                                 <Card className="flex-shrink-0 w-32 cursor-pointer">
                                 <div className="relative h-24 w-full overflow-hidden">
                                   <Image
                                     src={p.images[0]}
                                     alt={p.title}
                                     fill
                                     className="object-cover"
                                   />
                                   {discount > 0 && (
                                     <Badge
                                       variant="destructive"
                                       className="absolute top-1 right-1 text-[9px] px-1 py-0"
                                     >
                                       {discount}%
                                     </Badge>
                                   )}
                                 </div>
                                 <div className="p-2">
                                   <p className="text-[10px] leading-tight line-clamp-2 mb-1.5 min-h-[2rem]">
                                     {p.title}
                                   </p>
                                   <div className="flex flex-col gap-0.5">
                                     <p className="text-[10px] font-bold text-primary">
                                       {new Intl.NumberFormat("fa-IR").format(
                                         p.price
                                       )}{" "}
                                       {p.currency}
                                     </p>
                                     {p.originalPrice && (
                                       <p className="text-[9px] text-muted-foreground line-through">
                                         {new Intl.NumberFormat("fa-IR").format(
                                           p.originalPrice
                                         )}{" "}
                                         {p.currency}
                                       </p>
                                     )}
                                   </div>
                                 </div>
                                 </Card>
                               </Link>
                             );
                           })}
                         </div>
                       )}
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 p-1.5">
                      <Image
                        src="/img/logo.png"
                        alt="یوژی"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-end">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-md">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"></span>
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 p-1.5">
                  <Image
                    src="/img/logo.png"
                    alt="یوژی"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 0 && (
            <div className="px-4 pb-3">
              <p className="text-xs text-muted-foreground mb-2">پیشنهادات:</p>
              <div className="flex gap-2 flex-wrap">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => setInput(action.label)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-muted to-muted/50 hover:from-primary/10 hover:to-primary/5 transition-all text-xs border shadow-sm"
                  >
                    <span>{action.icon}</span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area - Modern */}
          <div className="p-4 border-t bg-background/80 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                placeholder="پیام خود را بنویسید..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-full border-2 focus-visible:ring-primary"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                size="icon"
                className="rounded-full h-10 w-10 bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
