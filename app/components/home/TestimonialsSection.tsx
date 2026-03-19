import { User } from "lucide-react";

const testimonials = [
  {
    industry: "製造業",
    role: "代表取締役",
    text: "保険の見直しで年間コストを抑えつつ、補償範囲を広げていただきました。丁寧なヒアリングで当社のリスクを的確に把握してくださり、信頼しています。",
  },
  {
    industry: "IT企業",
    role: "総務部長",
    text: "賠償責任保険の必要性を分かりやすく説明していただき、安心して加入できました。事故対応時のサポートも迅速で助かっています。",
  },
  {
    industry: "建設会社",
    role: "経営者",
    text: "従業員の労災上乗せ保険を導入し、採用面でもプラスになっています。細やかなフォローに感謝しています。",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-base">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-[32px] font-bold text-main text-center font-display mb-12 tracking-wide">
          お客様の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-main/10 text-main rounded-full flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {item.industry}
                  </p>
                  <p className="text-foreground/70 text-xs">{item.role}</p>
                </div>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
