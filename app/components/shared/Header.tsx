"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";

const navItems = [
  { label: "理念", href: "#why" },
  { label: "サービス", href: "#services" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "お客様の声", href: "#testimonials" },
  { label: "会社情報", href: "#company" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-main font-display text-lg font-bold whitespace-nowrap tracking-wide"
        >
          sumire for plus
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground text-sm whitespace-nowrap tracking-wider hover:text-main"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-accent-dark whitespace-nowrap tracking-wider"
          >
            <Mail className="w-4 h-4" />
            お問い合わせ
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-foreground text-sm whitespace-nowrap tracking-wider hover:text-main"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full bg-accent text-white text-sm font-medium px-5 py-3 rounded-sm hover:bg-accent-dark mt-2 whitespace-nowrap tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="w-4 h-4" />
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
