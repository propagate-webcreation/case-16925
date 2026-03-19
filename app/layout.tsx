import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sumire for plus株式会社 | AIG損害保険正規代理店",
  description:
    "sumire for plus株式会社は、AIG損害保険の正規代理店として、法人向け損害保険を中心にお客様の事業リスクに最適な保険プランをご提案いたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${notoSansJP.variable} ${notoSerifJP.variable} antialiased font-body text-foreground overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <Script
          src="https://site-annotator.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
