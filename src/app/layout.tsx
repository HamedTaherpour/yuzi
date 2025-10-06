import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ChatAssistant } from "@/components/ChatAssistant";


// Vazir Font Configuration
const vazirFont = localFont({
  src: [
    {
      path: "../../public/fonts/Vazir-Thin-FD.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Light-FD.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazir-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});


export const metadata: Metadata = {
  title: "یوژی | بازارچه تولیدکنندگان و مصرف‌کنندگان",
  description: "اتصال مستقیم تولیدکننده و مصرف‌کننده با کیفیت و قیمت منصفانه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.variable} ${vazirFont.className} antialiased relative`}
      >
        <div id="app-container" className="relative min-h-screen w-full max-w-md mx-auto bg-background border-x">
          {children}
          <ChatAssistant />
        </div>
      </body>
    </html>
  );
}
