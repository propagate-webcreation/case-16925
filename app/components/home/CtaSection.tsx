import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <Image
        src="/images/cta-bg.webp"
        alt="ビジネスの信頼を象徴するオフィス風景"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-main/85" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-xl md:text-2xl font-bold text-white font-display mb-4 tracking-wide">
          まずはお気軽にご相談ください
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8">
          御社に最適な保険プランをご提案いたします
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-white text-base font-medium px-8 py-4 rounded-sm hover:bg-accent-dark tracking-wider"
        >
          <Mail className="w-5 h-5" />
          お問い合わせはこちら
        </Link>
      </div>
    </section>
  );
}
