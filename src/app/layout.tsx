import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Egyptian Stock Market Research Tool | أداة بحث سوق الأوراق المالية المصرية",
  description: "Academic research platform for Egyptian stock market data collection and analysis. منصة بحث أكاديمي لجمع وتحليل بيانات سوق الأوراق المالية المصرية.",
  keywords: ["Egypt", "Stock Market", "EGX", "Research", "Finance", "مصر", "بورصة", "بحث", "تمويل"],
  authors: [{ name: "Research Team" }],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} antialiased bg-background text-foreground font-[family-name:var(--font-arabic)]`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
