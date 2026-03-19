import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden mt-16"
    >
      <Image
        src="/images/hero.webp"
        alt="企業の安心を支えるプロフェッショナルなビジネス環境"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-main/80" />
      <div className="relative z-10 text-center px-4">
        <p className="text-white/90 text-sm md:text-base tracking-widest mb-4">
          AIG損害保険正規代理店
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-bold font-display mb-4 tracking-wide">
          企業の安心を、ともに
        </h1>
        <p className="text-white text-lg md:text-xl font-display mb-2 tracking-wide">
          sumire for plus株式会社
        </p>
        <p className="text-white/80 text-sm md:text-base mb-8">
          法人向け損害保険のご相談はお任せください
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-white text-base font-medium px-8 py-4 rounded-sm hover:bg-accent-dark tracking-wider"
        >
          <Mail className="w-5 h-5" />
          無料相談のお問い合わせ
        </Link>
      </div>
    </section>
  );
}
