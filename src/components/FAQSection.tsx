"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
} as const;

const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2
    }
  }
} as const;

export const FAQSection = () => {
  const faqs = [
    {
      question: "یوژی چگونه کار می‌کند؟",
      answer: "یوژی یک پلتفرم آنلاین است که تولیدکنندگان محلی و صنعتگران را مستقیماً به مصرف‌کنندگان متصل می‌کند. شما می‌توانید محصولات دست‌ساز و اصیل ایرانی را مرور کرده و به‌صورت مستقیم از تولیدکننده خریداری کنید."
    },
    {
      question: "آیا محصولات اصل هستند؟",
      answer: "بله، تمام محصولات یوژی توسط تولیدکنندگان محلی و هنرمندان اصیل ایرانی تولید می‌شوند. ما کیفیت و اصالت محصولات را تضمین می‌کنیم و هر محصول دارای گواهی اصالت است."
    },
    {
      question: "چگونه می‌توانم تولیدکننده شوم؟",
      answer: "برای ثبت‌نام به‌عنوان تولیدکننده، کافی است وارد بخش 'همکاری با ما' شوید و فرم درخواست را تکمیل کنید. تیم ما محصولات شما را بررسی کرده و در صورت تأیید، حساب کاربری شما فعال می‌شود."
    },
    {
      question: "هزینه ارسال چقدر است؟",
      answer: "هزینه ارسال بسته به وزن، ابعاد محصول و مقصد متفاوت است. هزینه دقیق ارسال در صفحه محصول و قبل از نهایی کردن خرید نمایش داده می‌شود. برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال رایگان است."
    },
    {
      question: "آیا امکان بازگشت کالا وجود دارد؟",
      answer: "بله، در صورتی که محصول دارای مشکل یا عیب باشد، می‌توانید تا ۷ روز پس از دریافت، کالا را مرجوع کنید. برای محصولات دست‌ساز که سفارشی تولید می‌شوند، امکان بازگشت وجود ندارد."
    },
    {
      question: "چه خدماتی به تولیدکنندگان ارائه می‌دهید؟",
      answer: "ما به تولیدکنندگان خدمات جامعی ارائه می‌دهیم شامل: تسهیلات مالی و وام، دوره‌های آموزشی، تامین مواد اولیه، بازاریابی و فروش آنلاین، و مشاوره کسب‌وکار."
    }
  ];

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-3">
            سوالات متداول
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            پاسخ سوالات رایج درباره یوژی و نحوه استفاده از خدمات
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={accordionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-4 bg-card app-base-transform hover:ring-1 ring-primary"
              >
                <AccordionTrigger className="text-right text-sm font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-xs text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

