import Link from "next/link";

const navItems = [
  { label: "理念", href: "#why" },
  { label: "サービス", href: "#services" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "お客様の声", href: "#testimonials" },
  { label: "代表挨拶", href: "#representative" },
  { label: "会社情報", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-main py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Link
          href="/"
          className="text-white text-lg font-bold font-display tracking-wide"
        >
          sumire for plus株式会社
        </Link>
        <p className="text-white/80 text-sm mt-2">AIG損害保険正規代理店</p>
        <p className="text-white/80 text-xs mt-4">
          〒106-0041 東京都港区麻布台1-3-1 麻布台ヒルズ森JPタワー51階
        </p>
        <nav className="flex flex-wrap justify-center gap-4 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/70 text-xs hover:text-white whitespace-nowrap tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-white/50 text-xs mt-8">
          &copy; 2026 sumire for plus株式会社
        </p>
      </div>
    </footer>
  );
}
